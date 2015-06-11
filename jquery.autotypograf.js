(function($) {

$.fn.autotypograf = function(prefs) {
    var typograf = new Typograf(prefs);
    typograf.disable('common/space/trimRight');

    $.each(this, function() {
        var $elem = $(this),
            lastVal = $elem.val();

        $elem
            .on('input', function(e) {
                var val = $elem.val();
                if(val !== lastVal) {
                    var pos = getCaretPosition(this);
                    lastVal = typograf.execute(val);
                    $elem.val(lastVal);
                    setCaretPosition(this, pos === val.length ? lastVal.length : pos);
                }

            })
            .val(typograf.execute(lastVal));
    });

    function getCaretPosition(elem) {
        return elem.selectionStart || 0;
    }

    function setCaretPosition(elem, pos) {
        elem.setSelectionRange && elem.setSelectionRange(pos, pos);
    }
};

})(jQuery);
