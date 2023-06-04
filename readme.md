# Как затестить без бэкенда:

Установить json-server
```shell
npm install -g json-server
```

Перейти в каталог с проектом и ввести следующую команду. Порт можно указать другой, тогда в html-файлах тоже надо его изменить.
```shell
json-server -p 4000 fake/catalog.json
```

# Npm
#### Установить зависимости
```shell
npm run i
```

#### Development
```shell
npm run dev
```

#### Production
```shell
npm run prod
```

You'll find production files in ``prod/`` folder.