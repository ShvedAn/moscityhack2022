<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
use Bitrix\Main\Entity;
use Bitrix\Main\Loader;
use Bitrix\Main\Application,
    Bitrix\Main\Context,
    Bitrix\Main\Request,
    Bitrix\Main\Server;

CModule::IncludeModule("utopia.core");
CModule::IncludeModule("main");

$core = new Utopia\Core\CCore();
//$core = new Utopia\Core\CParser();
//

// Методами CMF получаем безопасные данные из $_REQUEST
$request = Context::getCurrent()->getRequest();

var_dump($request->get("SUBJECT"));





// Отладка фильтрации элементов
if($request->get("SUBJECT")){
    $param['SUBJECT'] = $request->get("SUBJECT");
}

$arResult['JSON'] = $core->GetElementsTest($arParams['IBLOCK_ID'],$param);

var_dump(json_decode($arResult['JSON']));


//$arResult['JSON'] = $core->GetElements($arParams['IBLOCK_ID']);

$this->IncludeComponentTemplate();