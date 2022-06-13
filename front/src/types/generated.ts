export interface Events {
    Fields: Fields;
    Props:  Props;
}

export interface Fields {
    ID:                      string;
    "~ID":                   string;
    IBLOCK_ID:               string;
    "~IBLOCK_ID":            string;
    NAME:                    string;
    "~NAME":                 string;
    DATE_ACTIVE_FROM:        null;
    "~DATE_ACTIVE_FROM":     null;
    DETAIL_PICTURE:          null | string;
    "~DETAIL_PICTURE":       null | string;
    IBLOCK_ELEMENT_ID:       string;
    "~IBLOCK_ELEMENT_ID":    string;
    PROPERTY_9:              null;
    "~PROPERTY_9":           null;
    PROPERTY_10:             any[];
    "~PROPERTY_10":          any[];
    PROPERTY_11:             string;
    "~PROPERTY_11":          string;
    PROPERTY_12:             string;
    "~PROPERTY_12":          string;
    PROPERTY_13:             string;
    "~PROPERTY_13":          string;
    PROPERTY_14:             null;
    "~PROPERTY_14":          null;
    PROPERTY_15:             null | string;
    "~PROPERTY_15":          null | string;
    PROPERTY_16:             string;
    "~PROPERTY_16":          string;
    PROPERTY_19:             string;
    "~PROPERTY_19":          string;
    PROPERTY_20:             string[];
    "~PROPERTY_20":          string[];
    PROPERTY_21:             string;
    "~PROPERTY_21":          string;
    PROPERTY_22:             null | string;
    "~PROPERTY_22":          null | string;
    PROPERTY_23:             null | string;
    "~PROPERTY_23":          null | string;
    PROPERTY_24:             any[] | { [key: string]: PROPERTY24_Value };
    "~PROPERTY_24":          any[] | { [key: string]: PROPERTY24_Value };
    PROPERTY_25:             null | string;
    "~PROPERTY_25":          null | string;
    PROPERTY_26:             null | string;
    "~PROPERTY_26":          null | string;
    PROPERTY_27:             string[];
    "~PROPERTY_27":          number[];
    DESCRIPTION_10:          any[];
    "~DESCRIPTION_10":       any[];
    PROPERTY_VALUE_ID_10:    any[];
    "~PROPERTY_VALUE_ID_10": any[];
    DESCRIPTION_20:          Array<null | string>;
    "~DESCRIPTION_20":       Array<null | string>;
    PROPERTY_VALUE_ID_20:    string[];
    "~PROPERTY_VALUE_ID_20": string[];
    DESCRIPTION_24:          null[];
    "~DESCRIPTION_24":       null[];
    PROPERTY_VALUE_ID_24:    string[];
    "~PROPERTY_VALUE_ID_24": string[];
    DESCRIPTION_27:          string[];
    "~DESCRIPTION_27":       string[];
    PROPERTY_VALUE_ID_27:    string[];
    "~PROPERTY_VALUE_ID_27": string[];
}

export enum PROPERTY24_Value {
    ВождениеАвтомобиля = "Вождение автомобиля",
    ОбщениеСДетьми = "Общение с детьми",
    ПодъемГрузов = "Подъем грузов",
    УходЗаБольными = "Уход за больными",
}

export interface Props {
    STEP:       Admin;
    MORE_PHOTO: Admin;
    ADMIN:      Admin;
    ORG:        Admin;
    MAP:        Admin;
    POLL:       Admin;
    TIME:       Admin;
    DATE_START: Admin;
    DATE_END:   Admin;
    TAGS:       Tags;
    LINK:       Admin;
    ADRESS:     Admin;
    SUBJECT:    Admin;
    SKIL:       Skil;
    AGE:        Admin;
    REGION:     Admin;
    VOLONTER:   Volonter;
}

export interface Admin {
    ID:                 string;
    TIMESTAMP_X:        Date;
    IBLOCK_ID:          string;
    NAME:               Name;
    ACTIVE:             Active;
    SORT:               string;
    CODE:               Code;
    DEFAULT_VALUE:      null | string;
    PROPERTY_TYPE:      Type;
    ROW_COUNT:          string;
    COL_COUNT:          string;
    LIST_TYPE:          Type;
    MULTIPLE:           Active;
    XML_ID:             null;
    FILE_TYPE:          string;
    MULTIPLE_CNT:       string;
    TMP_ID:             null;
    LINK_IBLOCK_ID:     string;
    WITH_DESCRIPTION:   Active;
    SEARCHABLE:         Active;
    FILTRABLE:          Active;
    IS_REQUIRED:        Active;
    VERSION:            string;
    USER_TYPE:          UserType | null;
    USER_TYPE_SETTINGS: any[] | null;
    HINT:               string;
    VALUE:              string[] | boolean | null | string;
    DESCRIPTION:        Array<null | string> | boolean | null | string;
    "~VALUE":           Array<number | string> | boolean | null | string;
    "~DESCRIPTION"?:    Array<null | string> | boolean | null | string;
    VALUE_ENUM_ID?:     number[] | null | string;
    VALUE_ENUM?:        PROPERTY24_Value[] | null | string;
    VALUE_XML_ID?:      string[] | string;
    VALUE_SORT?:        string[] | null | string;
}

export enum Active {
    N = "N",
    Y = "Y",
}

export enum Code {
    Admin = "ADMIN",
    Adress = "ADRESS",
    Age = "AGE",
    DateEnd = "DATE_END",
    DateStart = "DATE_START",
    Link = "LINK",
    Map = "MAP",
    MorePhoto = "MORE_PHOTO",
    Org = "ORG",
    Poll = "POLL",
    Region = "REGION",
    Skil = "SKIL",
    Step = "STEP",
    Subject = "SUBJECT",
    Tags = "TAGS",
    Time = "TIME",
    Volonter = "VOLONTER",
}

export enum Type {
    E = "E",
    F = "F",
    L = "L",
    N = "N",
    S = "S",
}

export enum Name {
    URLИсточника = "URL источника",
    Адрес = "Адрес",
    Возрост = "Возрост",
    Волонтеры = "Волонтеры",
    ДатаОкончания = "Дата окончания",
    ДатаПроведения = "Дата проведения",
    Местоположение = "Местоположение",
    Навыки = "Навыки",
    Организатор = "Организатор",
    Организация = "Организация",
    ПривязкаГолосования = "Привязка голосования",
    Продолжительность = "Продолжительность",
    Регион = "Регион",
    Теги = "Теги",
    Тематика = "Тематика",
    ФотоДополнительные = "Фото дополнительные",
    ЭтапМероприятия = "Этап мероприятия",
}

export enum UserType {
    DateTime = "DateTime",
    MapYandex = "map_yandex",
    UserID = "UserID",
}

export interface Skil {
    ID:                 string;
    TIMESTAMP_X:        Date;
    IBLOCK_ID:          string;
    NAME:               Name;
    ACTIVE:             Active;
    SORT:               string;
    CODE:               Code;
    DEFAULT_VALUE:      null | string;
    PROPERTY_TYPE:      Type;
    ROW_COUNT:          string;
    COL_COUNT:          string;
    LIST_TYPE:          Type;
    MULTIPLE:           Active;
    XML_ID:             null;
    FILE_TYPE:          string;
    MULTIPLE_CNT:       string;
    TMP_ID:             null;
    LINK_IBLOCK_ID:     string;
    WITH_DESCRIPTION:   Active;
    SEARCHABLE:         Active;
    FILTRABLE:          Active;
    IS_REQUIRED:        Active;
    VERSION:            string;
    USER_TYPE:          UserType | null;
    USER_TYPE_SETTINGS: any[] | null;
    HINT:               string;
    VALUE:              string[] | boolean | null | string;
    DESCRIPTION:        Array<null | string> | boolean | null | string;
    VALUE_ENUM_ID?:     number[] | boolean | null | string;
    "~VALUE":           Array<number | string> | boolean | null | string;
    VALUE_XML_ID?:      string[] | boolean | string;
    VALUE_ENUM?:        PROPERTY24_Value[] | boolean | null | string;
    "~DESCRIPTION"?:    Array<null | string> | boolean | null | string;
    VALUE_SORT?:        string[] | null | string;
}

export interface Tags {
    ID:                 string;
    TIMESTAMP_X:        Date;
    IBLOCK_ID:          string;
    NAME:               Name;
    ACTIVE:             Active;
    SORT:               string;
    CODE:               Code;
    DEFAULT_VALUE:      null | string;
    PROPERTY_TYPE:      Type;
    ROW_COUNT:          string;
    COL_COUNT:          string;
    LIST_TYPE:          Type;
    MULTIPLE:           Active;
    XML_ID:             null;
    FILE_TYPE:          string;
    MULTIPLE_CNT:       string;
    TMP_ID:             null;
    LINK_IBLOCK_ID:     string;
    WITH_DESCRIPTION:   Active;
    SEARCHABLE:         Active;
    FILTRABLE:          Active;
    IS_REQUIRED:        Active;
    VERSION:            string;
    USER_TYPE:          UserType | null;
    USER_TYPE_SETTINGS: any[] | null;
    HINT:               string;
    VALUE:              string[] | boolean | null | string;
    DESCRIPTION:        Array<null | string> | boolean | null | string;
    "~VALUE":           Array<number | string> | boolean | null | string;
    "~DESCRIPTION"?:    Array<null | string> | boolean | null | string;
    VALUE_ENUM_ID?:     number[] | null | string;
    VALUE_ENUM?:        PROPERTY24_Value[] | null | string;
    VALUE_XML_ID?:      string[] | string;
    VALUE_SORT?:        string[] | null | string;
}

export interface Volonter {
    ID:                 string;
    TIMESTAMP_X:        Date;
    IBLOCK_ID:          string;
    NAME:               Name;
    ACTIVE:             Active;
    SORT:               string;
    CODE:               Code;
    DEFAULT_VALUE:      null | string;
    PROPERTY_TYPE:      Type;
    ROW_COUNT:          string;
    COL_COUNT:          string;
    LIST_TYPE:          Type;
    MULTIPLE:           Active;
    XML_ID:             null;
    FILE_TYPE:          string;
    MULTIPLE_CNT:       string;
    TMP_ID:             null;
    LINK_IBLOCK_ID:     string;
    WITH_DESCRIPTION:   Active;
    SEARCHABLE:         Active;
    FILTRABLE:          Active;
    IS_REQUIRED:        Active;
    VERSION:            string;
    USER_TYPE:          UserType | null;
    USER_TYPE_SETTINGS: any[] | null;
    HINT:               string;
    VALUE:              string[] | boolean | null | string;
    DESCRIPTION:        Array<null | string> | boolean | null | string;
    "~VALUE":           Array<number | string> | boolean | null | string;
    "~DESCRIPTION"?:    Array<null | string> | boolean | null | string;
    VALUE_ENUM_ID?:     number[] | null | string;
    VALUE_ENUM?:        PROPERTY24_Value[] | null | string;
    VALUE_XML_ID?:      string[] | string;
    VALUE_SORT?:        string[] | null | string;
}
