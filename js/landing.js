jQuery(document).ready(function() {
    Zero.initialize();
});

var Zero = {

    initialize: function() {
        Zero.matchBrowserHeight();
        Zero.expandMobileMenu();
        Zero.revealNav();
        Zero.checkOpenStatus();
        Zero.slickSlider();
        Zero.modalPop();
    },

    matchBrowserHeight: function() {
        wh = $(window).height();
        $('#bg-intro').height(wh);
    },

    expandMobileMenu: function() {
        var $menu = $('.menu-board');
        $menu.click(function() {
            var $menu = $(this);
            $menu.css("height", "100%");
        });
    },

    revealNav: function () {
        var $topNav = $('#topNav');
        introHeight = ($("#bg-intro").height() - 50);

        $(window).scroll(function() {
            if($(this).scrollTop() > introHeight) {
                $topNav.removeClass("hidden");
            } else {
                $topNav.addClass("hidden");
            }
        }),

        $topNav.click(function() {
            $topNav.addClass("getouttamyface");
        });
    },

    modalPop: function () {
        var $modalTrigger = $(".md-trigger"),
            $modal = $("#modal-1"),
            $closeModal = $(".md-close");

        // Show me that Modal bro ... go away too, pls
        $modalTrigger.click(function() {
            $modal.addClass("md-show");
            $closeModal.click(function() {
                $modal.removeClass("md-show");
            })
        }),

        // Escape key for modal
        $(document).on('keyup', function(e) {
            if (e.keyCode === 27 && $modal.hasClass("md-show")) {
                $modal.removeClass("md-show");
            };
        });
    },

    checkOpenStatus: function () {
        var dateNow = new Date(),
            day = dateNow.getUTCDay(),
            currentTime = dateNow.getUTCHours(),
            zStartTime = 8,
            zEndTime = 17,
            sunday = 7,
            inBusiness = false,
            openStatusHTML = '<p class="status-message">We\'re open. Who\'s hungry?</p>',
            closedStatusHTML = '<p class="status-message">We\'re closed. See you tomorrow</p>';



        function openNow(currentTime) {
            // Checking if it's Sunday
            if (day != sunday) {
                // If it's between 8UTC - 19UTC then we're open
                if (currentTime > zStartTime && currentTime < zEndTime) {
                    inBusiness = true;
                }
            } else {
                // Sunday Hours between 10 and 16h00
                if (currentTime > 10 && currentTime < 15) {
                    inBusiness = true;
                }
            }
        return inBusiness;
        }

        if(!openNow(currentTime)) {
            $("business-status").addClass("not-open");
            $('.status-container').append(closedStatusHTML);
        } else {
            $("#business-status").addClass("open-now");
            $('.status-container').append(openStatusHTML);
        }
    },

    slickSlider: function() {
        $('.center').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
};
