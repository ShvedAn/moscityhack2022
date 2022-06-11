<?php
global $MESS;
$PathInstall = str_replace('\\', '/', __FILE__);
$PathInstall = substr($PathInstall, 0, strlen($PathInstall) - strlen('/index.php'));
IncludeModuleLangFile($PathInstall . '/install.php');

include($PathInstall . '/version.php');

if (class_exists('utopia_core')) {
    return;
}

/**
 * Class
 */
Class utopia_core extends CModule {

    var $MODULE_ID = 'utopia.core';

    public function __construct() {
        $arModuleVersion = array();

        $path = str_replace('\\', '/', __FILE__);
        $path = substr($path, 0, strlen($path) - strlen('/index.php'));
        include($path . '/version.php');

        if (is_array($arModuleVersion) && array_key_exists('VERSION', $arModuleVersion)) {
            $this->MODULE_VERSION = $arModuleVersion['VERSION'];
            $this->MODULE_VERSION_DATE = $arModuleVersion['VERSION_DATE'];
        }

        $this->PARTNER_NAME = GetMessage('UTOPIA_CORE_PARTNER_NAME');
        $this->PARTNER_URI = GetMessage('UTOPIA_CORE_PARTNER_URL');
        $this->MODULE_NAME = GetMessage('UTOPIA_CORE_INSTALL_NAME');
        $this->MODULE_DESCRIPTION = GetMessage('UTOPIA_CORE_INSTALL_DESCRIPTION');
    }

    /**
     * Установка модуля
     */
    public function DoInstall() {
        global $APPLICATION;

        if( !$this->InstallDB() || !$this->InstallEvents() || !$this->InstallFiles() ) {
            return;
        }
        RegisterModule( $this->MODULE_ID );

    }

    /**
     * Удаление модуля
     */
    public function DoUninstall() {
        if( !$this->UnInstallDB() || !$this->UnInstallEvents() || !$this->UnInstallFiles() ) {
            return;
        }

        UnRegisterModule( $this->MODULE_ID );
    }

    /**
     * Установка событий
     *
     * @return bool
     */
    public function InstallEvents() {
        //RegisterModuleDependences();
        return true;
    }

    /**
     * Удаление событий
     *
     * @return bool
     */
    public function UnInstallEvents() {
        //UnRegisterModuleDependences();
        return true;
    }

    /**
     * Установка файлов модуля.
     *
     * @return bool
     */
    public function InstallFiles() {

        return true;
    }

    /**
     * Удаление файлов модуля.
     *
     * @return bool
     */
    public function UnInstallFiles() {
        return true;
    }

    /**
     * Установка таблиц связанных с модулем в базу.
     *
     * @return bool
     */
    public function InstallDB() {
//        RegisterModule("iblock");

        return true;
    }

    /**
     * Удаление таблиц связанных с модулем из базы.
     *
     * @return bool
     */
    public function UnInstallDB() {
        return true;
    }


}
