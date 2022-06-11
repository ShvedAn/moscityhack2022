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

}