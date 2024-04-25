$(document).ready(function () {
    $(".navbar-nav").on("click", "a", function () {
        $(".navbar-nav a.active").removeClass("active");
          $(this).addClass("active");
    });
});

$(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 20) {
            $(".navbar-collapse").collapse("hide");
        }
    });
});