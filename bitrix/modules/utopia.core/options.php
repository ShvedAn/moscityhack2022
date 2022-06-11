<?php
IncludeModuleLangFile($_SERVER['DOCUMENT_ROOT'].BX_ROOT.'/modules/main/options.php');
IncludeModuleLangFile(__FILE__);

CModule::IncludeModule('iblock');
$aTabs = array(
    array('DIV' => 'edit',
        'TAB' => GetMessage('MAIN_TAB_SET'),
        'ICON' => 'shopolia_images_settings',
        'TITLE' => GetMessage('MAIN_TAB_TITLE_SET')
    )
);

$tabControl = new CAdminTabControl('tabControl', $aTabs);


$tabControl->Begin();

// Заготовка для управляемых настроек модуля из админ панели администратора.