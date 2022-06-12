# moscityhack2022
сервис для волонтеров реализованный в рамках хакатона



# API методы

Реализованы API методы (эти методы используются на frontend):
1. Получение списка мероприятий - используется для карты и для превью вижетов списка мероприятий
http://2.59.42.236/api/events/list/
Метод возвращает json. Можно увидеть прямым обращением через браузер.

2. Заявка на участие
http://2.59.42.236/api/events/subscription/?event=22&userid=120&unsubscribe=y
- event - id мероприятия. Обязательный параметр
- userid - id пользователя отправляющего запрос. В рамках MVP работает только с одним пользователем для демонстрации. Так фуникционал авторизации и регисрации пользователей в рамках хакатона приняли решение пропустить.
- unsubscribe - не обязательный параметр. При передаче этого параметра со значением "y" - пользователь будет отписан с мероприятия.


3. Фильтрация мероприятий
http://2.59.42.236/api/events/list/?SUBJECT[]=subject_6 - фильтрация по одной тематике
http://2.59.42.236/api/events/list/?SUBJECT[]=subject_6&SUBJECT[]=subject_5 - фильтрация по нескольким тематикам

В данный момент доступны типы мероприятий:
subject_1 - Найти пропавших
subject_2 - Позаботиться о природе
subject_3 - Помощь животны
subject_4 - Помочь больным
subject_5 - Работа в поликлиниках
subject_6 - Сделать город чище
subject_7 - Популяризация спорта
subject_8 - Внимание детям
subject_9 - Помощь пенсионерам
subject_10 - Помощь на культурных проектах

Новые параметры может завести контент менеджер через административную часть.


http://2.59.42.236/api/events/list/?SKIL[]=skil_1 - фильтр по одному навыку
http://2.59.42.236/api/events/list/?SKIL[]=skil_1&SKILS[]=skil_2 - фильтрация по нескольким навыкам

В данный момент доступны типы навыков:
skil_1 - Подъем грузов
skil_2 - Вождение автомобиля
skil_3 - Общение с детьми 
skil_4 - Уход за больными

Новые параметры может завести контент менеджер через административную часть.


http://2.59.42.236/api/events/list/?AGE[]=age_1 - фильтр по одному возрастному диапазону
http://2.59.42.236/api/events/list/?AGE[]=age_1&AGE[]=age_2 - фильтрация по нескольким возростным диапазонам

В данный момент доступны типы навыков:
age_1 - 18 и меньше
age_2 - от 18 до 45
age_3 - 45+

Новые параметры может завести контент менеджер через административную часть.


http://2.59.42.236/api/events/list/?REGION[]=region_1 - фильтр по одному району города
http://2.59.42.236/api/events/list/?REGION[]=region_1&REGION[]=region_2 - фильтрация по нескольким районам города

В данный момент доступны типы навыков:
region_1 - ЦАО
region_2 - ЮВАО
region_3 - САО

Новые параметры может завести контент менеджер через административную часть.
