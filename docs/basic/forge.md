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


## Запускается ванильный майнкрафт вместо Forge (такая проблема может встретиться на Forge версии 1.7.10)

Если forge вообще не запускается, а просто запускается ванильный майнкрафт, то есть следующее решение:
1. (Опционально) Выполните удаление `ВСЕХ` библиотек из папки `libraries` (`Launcher\gameFiles\libraries`)
2. Перейдите в `%appdata%/.minecraft/libraries` и удалите оттуда все библиотеки, оставив папку пустой
3. Откройте ЛЮБОЙ лаунчер и выберите проблемную версию Minecraft Forge
4. Дождитесь полного запуска
5. Закройте игру, перейдите в тот же самый путь (`%appdata%/.minecraft/libraries`) и скопируйте все библиотеки в `Launcher\gameFiles\libraries`
6. Закиньте в `%appdata%/.minecraft/libraries` [парсер библиотек](https://github.com/kostya-main/parser-libraries/releases) и запустите его
7. Откройте профиль клиента, который находится в LaunchServer (`profiles/ИМЯПРОФИЛЯ.json`), найдите блок `libraries` и удалите оттуда все элементы, в которых содержится `"type": "library"`, элементы других типов (в которых не содержится данная строка) необходимо оставить.
8. (Опционально) Обратите внимание на библиотеки, в которых содержится строка `"type": "native"`. Проверьте в этих библиотеках путь `path` к данным библиотекам, если путь не совпадает, то пропишите корректный путь к библиотекам, а также вам нужно (перейти на данный веб-сайт)["https://emn178.github.io/online-tools/sha1_checksum.html"], загрузить туда проблемный файл (`в котором был неверно указан путь`), получить новую хэш-сумму и заменить ее в данных библиотеках. (Если такая проблема встречается у вас на версии 1.7.10, то пропускайте данный пункт, в 99% случаев Minecraft запустится успешно)
9. Откройте `libraries.json`, который был сгенерирован в папке `%appdata%/.minecraft/libraries`, сверьтесь с файлом клиента в LaunchServer (`Launcher/profiles/ВАШПРОФИЛЬ.json`), удалите все дубликаты библиотек в `libraries.json` (дубликаты - это те библиотеки, у которых совпадает `path` и `sha1`, у таких библиотек в `libraries.json` прописан `"type": "library"`, а в профиле клиента `"type": "native"`), также, если вы запускали Minecraft через различные сторонние лаунчеры, отличные от официального лаунчера (например: TLauncher), то удалите все библиотеки стороннего лаунчера (Пример: `org/tlauncher/tlskincape_1.7.10/1.4/tlskincape_1.7.10-1.4.jar`). После этого скопируйте из `libraries.json` все оставшиеся библиотеки и перенесите их в блок `libraries` в профиле вашего клиента (`profiles/ИМЯПРОФИЛЯ.json`).
10. Выполните команду `syncall`. Теперь вы можете запустить клиент Minecraft и проверить работу Forge. 

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

## Как установить моды после установки Minecraft Forge?

Для того, чтобы установить моды необходимо:
1. Перейти по пути: `ВАШЛАУНЧЕР/gameFiles/clients/ИМЯКЛИЕНТА/`
2. Создать рядом с `minecraft.jar` папку `mods`
3. Загрузить в эту папку необходимые модификации.
4. Выполнить команду `syncall` в вашей консоли лаунчера.
5. Установка завершена!
