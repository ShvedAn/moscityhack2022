<?php

namespace Utopia\Core;

use Bitrix\Main;
use \Bitrix\Main\Loader;


Loader::includeModule("Module");


/**
 * Основной класс с фуникциями API
 */
class CCore
{

    public function __construct()
    {
        Loader::includeModule('main');
        Loader::includeModule('iblock');
    }

    /**
     * @param $param
     * @return false|string
     * @todo метод работает через GET запрос - нужно переделать на POST. Избежать мутации.
     * Подписка и отписка пользователя на мероприятие.
     */
    function UserSubscription($param)
    {
        // Сейчас в демо режиме используется только один пользователь. Передаем его ID в явном виде.
        // для проверки получаем текущее значение волонтеров на мероприятии
        $volonters = \CIBlockElement::GetProperty(
            5,  ///@todo избавиться от прямого указания Иформационного блока.
            $param['event'],
            ["sort" => "asc"],
            ["CODE" => "VOLONTER"]);
        while ($ob = $volonters->GetNext()) {
            $vol_id[] = $ob['VALUE'];
        }

        // исключаем возможность повтоной подписки пользователя на мероприятие.
        if (in_array($param['userid'], $vol_id)) {
            // Если пришла компанда отписаться
            if ($param['unsubscribe'] == 'y') {
                unset($vol_id[array_search($param['userid'], $vol_id)]);
            }
        } // Если валонтер не был ранее записан на акцию - добавляем
        else {
            array_push($vol_id, (int)$param['userid']);
        }

        \CIBlockElement::SetPropertyValuesEx(
            $param['event'],
            5,
            ['VOLONTER' => $vol_id]);

        return json_encode($vol_id);
    }

    /**
     * Общий метода получения списка элементов по параметрам
     * @param $IBLOCK_ID
     * @param $params
     * @return false|string
     */
    function GetElements($IBLOCK_ID, $params = false)
    {
        $arSelect = [
            "ID",
            "IBLOCK_ID",
            "NAME",
            "DATE_ACTIVE_FROM",
            "DETAIL_PICTURE",
            "PROPERTY_*"];
        $arFilter = [
            "IBLOCK_ID" => IntVal($IBLOCK_ID),
            "ACTIVE" => "Y",
            'PROPERTY_VOLONTER' => $params['USER_ID'], ///@todo заметь на метод получения текущено ID (после хакатона)
            'PROPERTY_ADMIN' => $params['ORG_ID'] ///@todo заметь на метод получения текущено ID (после хакатона)
        ];
        // Временный фильтр - пока не понятно какие будут итоговые требования.
        // Фильтр по тематике мероприятия
        if ($params['SUBJECT']) {
            foreach ($params['SUBJECT'] as $subj) {
                $arFilter['=PROPERTY_SUBJECT_VALUE'][] = \CIBlockPropertyEnum::GetList(
                    [],
                    ["IBLOCK_ID" => $IBLOCK_ID,
                        "XML_ID" => $subj])->GetNext()["VALUE"];
            }
        }
        // Фильтр по навыкам
        if ($params['SKIL']) {
            foreach ($params['SKIL'] as $skil) {
                $arFilter['=PROPERTY_SKIL_VALUE'][] = \CIBlockPropertyEnum::GetList(
                    [],
                    ["IBLOCK_ID" => $IBLOCK_ID,
                        "XML_ID" => $skil])->GetNext()["VALUE"];
            }
        }
        // Фильтр по возрастным группам
        if ($params['AGE']) {
            foreach ($params['AGE'] as $age) {
                $arFilter['=PROPERTY_AGE_VALUE'][] = \CIBlockPropertyEnum::GetList(
                    [],
                    ["IBLOCK_ID" => $IBLOCK_ID,
                        "XML_ID" => $age])->GetNext()["VALUE"];
            }
        }
        // Фильтр по районам города
        if ($params['REGION']) {
            foreach ($params['REGION'] as $region) {
                $arFilter['=PROPERTY_REGION_VALUE'][] = \CIBlockPropertyEnum::GetList(
                    [],
                    ["IBLOCK_ID" => $IBLOCK_ID,
                        "XML_ID" => $region])->GetNext()["VALUE"];
            }
        }
        // Фильтр по типу мероприятия Офлайн/Онлайн
        if ($params['FORMAT']) {
            foreach ($params['FORMAT'] as $region) {
                $arFilter['=PROPERTY_FORMAT_VALUE'][] = \CIBlockPropertyEnum::GetList(
                    [],
                    ["IBLOCK_ID" => $IBLOCK_ID,
                        "XML_ID" => $region])->GetNext()["VALUE"];
            }
        }

        $res = \CIBlockElement::GetList([],
            $arFilter,
            false,
            ["nPageSize" => 50],
            $arSelect
        );
        while ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();
            $result[$arFields['ID']]['Fields'] = $arFields;
            // Формируем детальную ссылку на изображение
            $result[$arFields['ID']]['Fields']["DETAIL_PICTURE"] = \CFile::GetFileArray($arFields["DETAIL_PICTURE"])['SRC'];
            $arProps = $ob->GetProperties();
            $result[$arFields['ID']]['Props'] = $arProps;
        }

        return json_encode($result);
    }


    /**
     * Общий метода получения списка элементов по параметрам
     * @param $IBLOCK_ID
     * @param $params
     * @return false|string
     */
    function GetElementsTest($IBLOCK_ID, $params = false)
    {
        $arSelect = [
            "ID",
            "IBLOCK_ID",
            "NAME",
            "DATE_ACTIVE_FROM",
            "DETAIL_PICTURE",
            "PROPERTY_*"
        ];
        $arFilter = [
            "IBLOCK_ID" => IntVal($IBLOCK_ID),
            "ACTIVE" => "Y",
        ];
        if ($params['SUBJECT']) {
            $arFilter['=PROPERTY_SUBJECT_VALUE'] = \CIBlockPropertyEnum::GetList(array(),
                ["IBLOCK_ID" => $IBLOCK_ID, "XML_ID" => $params['SUBJECT']])->GetNext()["VALUE"];
        }

        $res = \CIBlockElement::GetList(
            [],
            $arFilter,
            false,
            ["nPageSize" => 50],
            $arSelect
        );
        while ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();
            $result[$arFields['ID']]['Fields'] = $arFields;
            // Формируем детальную ссылку на изображение
            $result[$arFields['ID']]['Fields']["DETAIL_PICTURE"] = \CFile::GetFileArray($arFields["DETAIL_PICTURE"])['SRC'];
            $arProps = $ob->GetProperties();
            $result[$arFields['ID']]['Props'] = $arProps;
        }

        return json_encode($result);
    }


    /**
     * Общая функция обертка сохранения элементов в Инфоблоки.
     * Про повышении нагрузки может быть заменен на ORM методы быстрой работы с таблицами.
     * @param $IBLOCK_ID
     * @param $param
     * @return void
     */
    function SaveElement($IBLOCK_ID, $param)
    {
        $el = new \CIBlockElement;
        //Получение символьного кода путём транслитерации наименования элемента
        $arTranslitParams = array("replace_space" => "-", "replace_other" => "-");
        $CODE = \Cutil::translit(strtolower($param['NAME']), "ru", $arTranslitParams);

        $arLoadProductArray = [
            'MODIFIED_BY' => 1, // элемент изменен текущим пользователем
            'IBLOCK_SECTION_ID' => false, // элемент лежит в корне раздела
            'IBLOCK_ID' => $IBLOCK_ID,
            'CODE' => $CODE,
            'PROPERTY_VALUES' => $param['PROP'],
            'NAME' => $param['NAME'],
            'ACTIVE' => 'Y',
            'PREVIEW_TEXT' => 'текст для списка элементов',
            'DETAIL_TEXT' => ' ',
        ];

        if ($PRODUCT_ID = $el->Add($arLoadProductArray)) {
            echo 'New ID: ' . $PRODUCT_ID;
        } else {
            echo 'Error: ' . $el->LAST_ERROR;
        }
    }


    /**
     * (Работает)
     * Получить текущего пользователя
     *
     * @return array - массив с данными пользователя (без доп свойств)
     */
    public function getCurrentUser()
    {
        global $USER;
        $rsUser = \CUser::GetByID($USER->GetID());
        $arUser = $rsUser->Fetch();

        return $arUser;
    }

    /**
     * (Работает)
     * Получить дополнительне свойства пользователя по id
     *
     * @param int $user_id - id пользователя. Если оставить пустым - возьмет ID текущего пользователя
     * @return array
     */
    public function getUserCustomPros($user_id = false)
    {
        // Если не передавать ID пользователя - получим ID текущего пользователя.
        if ($user_id == false) {
            $user_id = $this->getCurrentUser()['ID'];
        }

        $by = "ID";
        $order = "desc";
        $rsUser = \CUser::GetList(
            $by,
            $order,
            ["ID" => $user_id],
            ["SELECT" => ["UF_USER_TYPE", 'UF_ROLES']]
        );

        $arUser = $rsUser->Fetch();
        $arUserFields['UF_USER_TYPE'] = $arUser['UF_USER_TYPE'];
        $arUserFields['UF_ROLES'] = $arUser['UF_ROLES'];

        return $arUserFields;

    }


    public function GetListInfo()
    {
        $filter = [
            "IBLOCK_ID" => 5,
            "ACTIVE" => "Y",
            "PROPERTY_USER_STAFF" => '**'
        ];

        $res = \CIBlockElement::GetList(
            [],
            $filter,
            false,
            ["nPageSize" => 1],
            [
                "ID",
                "NAME",
            ]
        );

        while ($ob = $res->GetNextElement()) {
            $result[] = $ob->GetFields();
        }

        return $result;
    }
}