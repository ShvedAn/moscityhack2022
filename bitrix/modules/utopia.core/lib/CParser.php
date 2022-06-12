<?php

namespace Utopia\Core;

use Bitrix\Main;
use \Bitrix\Main\Loader;


Loader::includeModule("Module");


/**
 * Прототипы методов получения данных из внешних источников
 * В рамках хакатана использовались для наполнения MVP реальной инфорамцией
 */
class CParser
{

    public function __construct()
    {
        Loader::includeModule('main');
        Loader::includeModule('iblock');
        $this->core = new CCore();
    }

    /**
     *
     * Получить Список мероприятий со страницы https://mosvolonter.ru/events
     *
     * @return array - массив со всеми мероприятиями.
     */
    function GetEventListMosvolonter()
    {
        $pege = file_get_contents('https://mosvolonter.ru/events');
        // нужные данные есть в json. убираем лишнее топорно, но быстро.
        $json = explode('eventsList:', $pege);
        $json = explode('let mapDefaults', $json[1]);
        $json = substr(trim($json[0]), 0, -1);

        return (array)json_decode($json);
    }


    /**
     * Вспомогательная функция разового сохранения меероприятий https://mosvolonter.ru/events в MVP.
     * Использвалась разово для первичного наполнения
     * @return void
     */
    function SaveEventListMosvolonter()
    {
        $date = $this->GetEventListMosvolonter();

        foreach ($date as $month) {
            $month = (array)$month;
            // Цикл по мероприятиям
            foreach ($month as $event) {
                $event = (array)$event[0];
                // форматирование данных для сохранения
                $param['PROP'] = [
                    'TAGS' => $event["eventTags"],
                    'DATE_START' => $this->FormatDate($event["dateStart"]),
                    'DATE_END' => $this->FormatDate($event["dateEnd"]),
                    'LINK' => $event["url"],
                    'ORG' => 34,
                    'TIME' => 4, // в источнике не указана продолжительность мероприятия, заполняем по умолчанию
                ];
                $param['NAME'] = $event['title'];

                $this->FormatDate($event["dateEnd"]);

                // сохранение и обновление элементов.
                $this->core->SaveElement(5, $param); ///@todo избавиться от магических переменных.

                //die();

            }
        }
    }


    /**
     * Вспомогательная фуникция приведения даты к формату для сохранению в базу для использования в фильтре
     * @param $date
     * @return mixed
     */
    function FormatDate($date)
    {
        $res = explode('-', $date);
        $result = $res[2] . '.' . $res[1] . '.' . $res[0] . ' 00:00:01';     // формат "30.09.2021 16:06:36"

        return $result;
    }
}