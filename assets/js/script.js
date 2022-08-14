$(document).ready(function () {

    $('.box').on('click', function() {
        /**
         * When we click on an element that has
         * a 'box' class, this event will be executed.
         */
        var classNames = $(this).attr('class').split(' ');
        var boxClass = classNames[0];
        var className = classNames[1];
        if($(this).css("background-color") == "rgb(255, 0, 0)") {
            // If this object is already red, turn it black.
            $('.' + className).css("background-color", "#000");
        } else {
            // Else, turn all elements with a box class black
            // and then change the color of all elements
            // with the same class name as the clicked element
            // to red.
            $('.' + boxClass).css("background-color", "#000");
            $('.' + className).css("background-color", "red");
            
        }
    });

    /**
     * The 'this' keyword enables the user to click each p individually. 
     * Without 'this' both p elements disappear simultaneously. */
    $('p').click(function () {
        $(this).slideToggle('slow');
    })

    /**
     * Hover effect:
     * When mouse hovers over (mouseenter) the button, it changes color to blue.
     * When mouse leaves (mouseleave) the button, it changes to red. 
     * 'this' works in the same way as with the p elements from before. 
     */
    $('button').mouseenter(function () {
        $(this).removeClass('make-red').addClass('make-blue');
    });
    $('button').mouseleave(function () {
        $(this).removeClass('make-blue').addClass('make-red');
    });
});