$(document).ready(function () {
    var currentTestStep, nextTestStep, previousTestStep;
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next-step").click(function () {

        currentTestStep = $(this).parent();
        nextTestStep = $(this).parent().next();

        $("#progressbar li").eq($("fieldset").index(nextTestStep)).addClass("active");

        nextTestStep.show();
        currentTestStep.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;

                currentTestStep.css({
                    'display': 'none',
                    'position': 'relative'
                });
                nextTestStep.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous-step").click(function () {

        currentTestStep = $(this).parent();
        previousTestStep = $(this).parent().prev();

        $("#progressbar li").eq($("fieldset").index(currentTestStep)).removeClass("active");

        previousTestStep.show();

        currentTestStep.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;

                currentTestStep.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previousTestStep.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(currentStep) {
        var percent = parseFloat(100 / steps) * current;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    })
});

