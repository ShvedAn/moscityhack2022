<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
use Bitrix\Main\Entity;
use Bitrix\Main\Loader;

CModule::IncludeModule("utopia.core");

$core = new Utopia\Core\CCore();
//$core = new Utopia\Core\CParser();
//

//var_dump($arParams);


$arResult['JSON'] = $core->GetElements($arParams['IBLOCK_ID']);

$this->IncludeComponentTemplate();