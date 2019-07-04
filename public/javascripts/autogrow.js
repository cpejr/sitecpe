(function($) {
    $.fn.autogrow = function() {
        return this.each(function() {
            var textarea = this;
            $.fn.autogrow.resize(textarea);
            $(textarea).focus(function() {
                textarea.interval = setInterval(function() {
                    $.fn.autogrow.resize(textarea);
                }, 50);
            }).blur(function() {
                clearInterval(textarea.interval);
            });
        });
    };
    $.fn.autogrow.resize = function(textarea) {
        var lineHeight = parseInt($(textarea).css('line-height'), 11);
        var lines = textarea.value.split('\n');
        var columns = textarea.cols * 2.7;
        var lineCount = 0;
        $.each(lines, function() {
            lineCount += Math.ceil(this.length / columns) || 1;
        });
        var height = lineHeight * (lineCount + 1);
        $(textarea).css('height', height);
    };
})(jQuery);

$('#test').autogrow();