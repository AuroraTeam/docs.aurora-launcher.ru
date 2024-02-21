# Установка Forge

::: warning Важно:
Данная статья описывает способ ручной установки Forge. В любых этапах могут присутствовать различные расхождения данных.  
Мы постараемся затронуть все возможные варианты ошибок и не бойтесь отходить от данной статьи.
:::

Все модификации клиента будут проходить после скачивание `vanilla` версии игры.

## Скачивание Forge 

Скачиваем инсталлятор `forge` с [официального сайта](https://files.minecraftforge.net/net/minecraftforge/forge/). Создаём временную папку в любом месте с любым названием. В корень папку кладём инсталлятор и файл с названием `launcher_profiles.json` в котором находится такие строчки
```json
{
  "selectedProfile": "(Default)",
  "profiles": {
    "(Default)": {
      "name": "(Default)"
    }
  },
  "clientToken": ""
}
```
И запускаем инсталлятор `forge` с указанием установки клиента в эту временную папку. Ждём удачной "Установки" forge.  

Копируем содержимое папки `libraries` в `gameFiles\libraries` нашего LaunchServer. Нам так же нужно узнать относительный путь и хеш каждой либы для этого можно воспользоваться [parser-libraries](https://github.com/kostya-main/parser-libraries/releases). Просто положите его в папку `libraries` и он сделает файл `libraries.json` данные которого просто вставить в одноимённую переменную настройках профиля.

## Профиль на версию <1.12.X

Теперь внимательно смотрим файл по пути `versions\Версия Игры-forge-Версия Forge\Версия Игры-forge-Версия Forge.json` и изменяем наш профиль по такой схеме:
- `mainClass` - записывается в одноимённую переменную профиля
- `minecraftArguments` - записываем в `clientArgs` профиля только 2 последних аргумента запуска. Пример:
```json
"clientArgs": [
  "--tweakClass", 
  "net.minecraftforge.fml.common.launcher.FMLTweaker", 
  "--versionType", 
  "Forge"
],
```

## Профиль на версию >1.16.X

Теперь внимательно смотрим файл по пути `versions\Версия Игры-forge-Версия Forge\Версия Игры-forge-Версия Forge.json` и изменяем наш профиль по такой схеме:
- `mainClass` - записывается в одноимённую переменную профиля
- `game` - записывается в `clientArgs` профиля
- `jvm` - записывается в `jvmArgs` профиля но ищем заполнитель `${version_name}` и пишем название файла minecraft (это мы и записываем если не переименовали). В версии >1.13.X не водится данная настройка.

## Решение ошибок при запуске игры

Ошибка вида `Caused by: java.lang.NoSuchMethodError: com.google.common.collect.XXXX.XXXXX` скорее всего у вас копии либы `guava` удалите те версии которые были добавлены инсталлятором forge  

Ошибка вида `Caused by: java.lang.IllegalArgumentException 
at org.objectweb.asm.ClassVisitor.<init>(ClassVisitor.java:X)  
at org.objectweb.asm.ClassVisitor.<init>(ClassVisitor.java:X)`  
скоре всего нужно удалить старые версии семейство библиотек `asm` 