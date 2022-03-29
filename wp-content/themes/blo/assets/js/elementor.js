(function ($, elementor) {
    "use strict";

    var Blo = {

        init: function () {

            var widgets = {
                'blo-case-sdudy.default': Blo.Case_Studies,
            };
            $.each(widgets, function (widget, callback) {
                elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
            });

        },


        Case_Studies: function ($scope) {

            var $container = $scope.find('.active-project-slider');

            if ($container.length > 0) {

                $container.owlCarousel({
                    margin: 0,
                    loop: false,
                    nav: false,
                    //autoplay: true,
                    autoplayTimeout: 9000,
                    //mouseDrag: false,
                    responsive: {
                        0: {
                            items: 1
                        },
                    }
                });


            }

            if ($container.length > 0) {
                //Owl-Carousel Translate Function
                var heroSlider = $(".active-project-slider");
                heroSlider.on('translate.owl.carousel', function () {
                    var layer = $("[data-animation]");
                    layer.each(function () {
                        var animation_name = $(this).data('animation');
                        $(this).removeClass('animated ' + animation_name).css('opacity', '1');
                    });
                });
                //Owl-Carousel Delay Function
                $("[data-delay]").each(function () {
                    var animation_delay = $(this).data('delay');
                    $(this).css('animation-delay', animation_delay);
                });
                //Owl-Carousel Duration Function
                $("[data-duration]").each(function () {
                    var animation_duration = $(this).data('duration');
                    $(this).css('animation-duration', animation_duration);
                });
                //Owl-Carousel Translated Function
                heroSlider.on('translated.owl.carousel', function () {
                    var layer = heroSlider.find('.owl-item.active').find("[data-animation]");
                    layer.each(function () {
                        var animation_name = $(this).data('animation');
                        $(this).addClass('animated ' + animation_name).css('opacity', '1');
                    });
                });
            }

        },

    };
    $(window).on('elementor/frontend/init', Blo.init);
}(jQuery, window.elementorFrontend));

jQuery(window).load(function () {
    jQuery(".blo-preloder").fadeOut('slow');
});