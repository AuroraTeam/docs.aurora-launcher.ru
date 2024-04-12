# Установка Forge

::: warning Важно:
Данная статья описывает способ ручной установки Forge. В любых этапах могут присутствовать различные расхождения данных.  
Мы постараемся затронуть все возможные варианты ошибок и не бойтесь отходить от данной статьи.
:::

Все модификации клиента будут проходить после скачивание `vanilla` версии игры.

## Скачивание Forge

Скачиваем инсталлятор `forge` с [официального сайта](https://files.minecraftforge.net/net/minecraftforge/forge/). Создаём временную папку в любом месте с любым названием. В корень папки кладём инсталлятор и файл с названием `launcher_profiles.json` в котором находится такие строчки

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

Копируем содержимое папки `libraries` в `gameFiles\libraries` нашего LaunchServer. Вам также нужно прописать в профиле клиента те библиотеки которые вы добавили. Для этого скачиваем [parser-libraries](https://github.com/kostya-main/parser-libraries/releases) и кладём во временной папке директории `libraries` и запускаем. После работы parser-libraries появился файл `libraries.json` его содержимое нужно скопировать в настройку профиля `libraries`.

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

Ошибка вида `Caused by: java.lang.NoSuchMethodError: com.google.common.collect.XXXX.XXXXX` скорее всего у вас копии библиотеки `guava` удалите те версии которые были добавлены инсталлятором forge

Ошибка вида `Caused by: java.lang.IllegalArgumentException 
at org.objectweb.asm.ClassVisitor.<init>(ClassVisitor.java:X)  
at org.objectweb.asm.ClassVisitor.<init>(ClassVisitor.java:X)`  
скоре всего нужно удалить старые версии семейство библиотек `asm`

Ошибка вида `java.lang.IllegalStateException: Duplicate key "Пути к библиотеке"`  
вы добавили два раза одну и тоже библиотеку в список. Удалите оду из записей в профиле.

Ошибка вида `java.lang.module.ResolutionException: Modules ForgeAutoRenamingTool and org.objectweb.asm.commons export package org.objectweb.asm.commons to module X `  
удалите библиотеку `ForgeAutoRenamingTool`

Ошибка вида `java.lang.module.ResolutionException: Module org.apache.commons.collections4 reads another module named org.apache.commons.collections4`  
удалить библиотеку `collections4`

Ошибка вида `java.lang.module.ResolutionException: Module minecraft contains package класс из маинкрафт, module client exports package класс из маинкрафт to minecraft`  
или `java.lang.module.ResolutionException: Modules client and minecraft export package класс из маинкрафт to module forge`  
прописать библиотекам из папки `net/minecraft/client` дополнительный параметр `"ignoreClassPath": true`

## Как закидывать моды после установки?

Для установки модов перейдите по пути:
`ВАШЛАУНЧЕР/gameFiles/clients/ИМЯКЛИЕНТА/` и создайте рядом с `minecraft.jar` папку `mods` после чего, загрузите в нее необходимые модификации. Выполните команду `syncall` в вашей консоли лаунчера.