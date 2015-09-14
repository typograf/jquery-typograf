function autotypograf(elem, prefs) {
    prefs = prefs || {};
    prefs.live = true;

    var lastVal = $elem.val(),
        typograf = new Typograf(prefs);

    elem.addEventListener('input', function(e) {
        var val = $elem.val();
        if(val !== lastVal) {
            var pos = getCaretPosition(elem);
            lastVal = typograf.execute(val);
            elem.value = lastVal;
            setCaretPosition(elem, pos === val.length ? lastVal.length : pos);
        }

        elem.value = typograf.execute(lastVal);
    }, false);

    function getCaretPosition(elem) {
        return elem.selectionStart || 0;
    }

    function setCaretPosition(elem, pos) {
        elem.setSelectionRange && elem.setSelectionRange(pos, pos);
    }
}
