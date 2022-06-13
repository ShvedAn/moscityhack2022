<?php if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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

// Проверка параметров подписки
if($request->get("event")){
    $param['event'] = $request->get("event");
}
if($request->get("unsubscribe")){
    $param['unsubscribe'] = $request->get("unsubscribe");
}
if($request->get("userid")){
    $param['userid'] = $request->get("userid");
}

$arResult['JSON'] = $core->UserSubscription($param);

$this->IncludeComponentTemplate();