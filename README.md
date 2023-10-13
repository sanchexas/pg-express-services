- ### [Задание](#Задание)
- ### [Реализация](#Реализация)
- ### [Инструкция по запуску](#Инструкция-по-запуску)

### [Видео-демка]()

### Задание

Нужно реализовать 2 сервиса. Один сервис пользователей, другой сервис истории действий с
пользователями. В сервисе пользователей должно быть 3 endpoint:

1 Создание пользователя
2 Изменение пользователя
3 Получение списка пользователей

В сервис “истории действий с пользователями” нужно отправлять события создания пользователя и изменения.
Общение сервисов может происходить любым способом. Сервис “истории действий с пользователями” должен иметь ручку, которая отдаст историю действий с фильтрами по id пользователя и постраничной навигацией.
Фреймворк так же может быть любой.
Один из сервисов должен быть на JS, для второго можно использовать TS.
СУБД - postgresql.

## Реализация
На реализацию было потрачено 1.5 дня (или дней?)

.env файлы специально НЕ были помещены в .gitignore, так как проект является тестовым заданием от компании. В реальных проектах так делать не стоит.
### Структура проекта:
- api сервис пользователей (TS)
- api сервис истории действий пользователей (JS)
- база данных PostgreSQL
![img](https://github.com/sanchexas/pg-express-services/blob/master/APIS_STRUCTURE.PNG)
### Диаграмма базы данных
![img](https://github.com/sanchexas/pg-express-services/blob/master/DB_DIAGRAM.PNG)

## Инструкция по запуску

1 Клонировать проект
`git clone https://github.com/sanchexas/pg-express-services.git`

2 Открыть терминал в главной папке и прописать команды для установки npm пакетов:
`cd user-api-service`
`npm i`
`cd..`
`cd user-history-api-service`
`npm i`
