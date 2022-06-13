<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');
$GLOBALS['APPLICATION']->RestartBuffer();

$APPLICATION->IncludeComponent(
    "utopia:list",
    "",
    array(
        "IBLOCK_ID" => '5',
        "USER_ID" => 2, // временная заглушка, так как в демо режиме работаем из под одного пользователя
        "MENU_CACHE_TYPE" => "N",
        "MENU_CACHE_TIME" => "3600",
        "MENU_CACHE_USE_GROUPS" => "Y",

    ),
    false
);