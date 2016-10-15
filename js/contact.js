function ContactForm() {
	$("textarea").blur(function () {
        $("#hire textarea").each(function () {
            var $this = $(this);
            if (this.value != "") {
                $this.addClass("focused");
                $("textarea + label + span").css({"opacity": 1});
                return;
            }
            $this.removeClass("focused");
            $("textarea + label + span").css({"opacity": 0});
        });
     });

    $("#hire .field:first-child input").blur(function () {
        $("#hire .field:first-child input").each(function () {
            var $this = $(this);
            if (this.value != "") {
                $this.addClass("focused");
                $(".field:first-child input + label + span").css({"opacity": 1});
                return;
            }
            $this.removeClass("focused");
            $(".field:first-child input + label + span").css({"opacity": 0});
        });
    });

    $("#hire .field:nth-child(2) input").blur(function () {
        $("#hire .field:nth-child(2) input").each(function () {
            var $this = $(this);
            if (this.value != "") {
                $this.addClass("focused");
                $(".field:nth-child(2) input + label + span").css({"opacity": 1});
                return;
            }
            $this.removeClass("focused");
            $(".field:nth-child(2) input + label + span").css({"opacity": 0});
        });
    });

    $(".envelope-container").on("touchstart", function() {
        var $this = $(this);
        $this.hasClass("hover") ? $this.removeClass("hover") : $this.addClass("hover");
    });
}