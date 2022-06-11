<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
use Bitrix\Main\Entity;
use Bitrix\Main\Loader;

CModule::IncludeModule("utopia.core");

$core = new Utopia\Core\CCore();

$this->IncludeComponentTemplate();