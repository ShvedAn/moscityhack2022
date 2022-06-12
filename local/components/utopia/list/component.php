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

// Методами CMF получаем безопасные данные из $_REQUEST
$request = Context::getCurrent()->getRequest();

// Первая итерация функицонала фильтров мероприятий. Пока не понятна какая в итоге потребуется логика.
// Реализовано минимально работающее решение
if($request->get("SUBJECT")){
    $param['SUBJECT'] = $request->get("SUBJECT");
}
if($request->get("SKIL")){
    $param['SKIL'] = $request->get("SKIL");
}
if($request->get("AGE")){
    $param['AGE'] = $request->get("AGE");
}
if($request->get("REGION")){
    $param['REGION'] = $request->get("REGION");
}


$arResult['JSON'] = $core->GetElements($arParams['IBLOCK_ID'],$param);

$this->IncludeComponentTemplate();