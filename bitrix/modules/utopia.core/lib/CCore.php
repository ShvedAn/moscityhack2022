<?php
namespace Utopia\Core;

use Bitrix\Main;
use \Bitrix\Main\Loader;


Loader::includeModule("Module");


/**
 * класс
 */
class CCore
{

    public function __construct() {
      Loader::includeModule('main');
      Loader::includeModule('iblock');
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
        if($user_id == false){
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
        $arUserFields['UF_ROLES'] = $arUser['UF_ROLES']; // false - основной, 5 - сотрудник

        return $arUserFields;

    }


    public function GetListInfo()
    {
        $filter = array("IBLOCK_ID"=>5, "ACTIVE"=>"Y", "PROPERTY_USER_STAFF"=> '**');

        $res = \CIBlockElement::GetList(
            [],
            $filter,
            false,
            ["nPageSize"=>1],
            [
                "ID",
                "NAME",
            ]
        );

        while($ob = $res->GetNextElement()) {
            $result[] = $ob->GetFields();
        }

        return $result;

    }
}