Типографирование на лету
===

Позволяет типографировать текст при вводе в текстовое поле.

## Использование с jQuery
```html
<script src="../typograf/dist/typograf.js"></script>
<script src="./jquery.autotypograf.js"></script>
...
<input type="text" val=""/>
<script>
    $('input').autotypograf({lang: 'ru'});
</script>
```

## Использование без jQuery
```html
<script src="../typograf/dist/typograf.js"></script>
<script src="./autotypograf.vanilla.js"></script>
...
<input type="text" val="" id="text" />
<script>
    autotypograf(document.getElementById('text'), {lang: 'ru'});
</script>
```

## [Пример](https://typograf.github.io/jquery-typograf/example.html)

## [Лицензия](./LICENSE)
MIT License
