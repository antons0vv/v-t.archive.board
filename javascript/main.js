import scanData from './scandata.js'
$(document).ready(function () {

    $(window).scrollTop($(window).height() / 2);
    $(window).scrollLeft($(window).width() / 2);

    $(".scan").each(function () {
        let rAngle = (Math.random() * 20) - 10;
        $(this).css("rotate", rAngle + "deg");
    });

    $(".scan").each(function () {
        let rAnglePopup = (Math.random() * 20) - 10;
        $(".scanPopup").css("rotate", rAnglePopup + "deg");
    });

    // About popup

    $(".scan").draggable({ stack: ".scan" });

    $("#aboutBtn").click(function () {
        $(".About").removeClass("popupOff").addClass("popupOn");
    });

    $(".close").click(function () {
        $(".popup").removeClass("popupOn").addClass("popupOff");
    });


    //Ovals animation

    $("#aboutBtn").mouseover(function () {
        $(".path_2").css("opacity", "1").animate({
            'stroke-dashoffset': 0
        }, 400, 'easeInOutCubic');

    }).mouseleave(function () {
        $(".path_2").css({
            "stroke-dashoffset": "340", "opacity": "0"
        });
    });

    $("#vtBtn").mouseover(function () {
        $(".path_1").css("opacity", "1").animate({
            'stroke-dashoffset': 0
        }, 400, 'easeInOutCubic');

    }).mouseleave(function () {
        $(".path_1").css({
            "stroke-dashoffset": "340", "opacity": "0"
        });
    });

    // Description Popup

    $(".scan").click(function () {
        let imageId = $(this).attr('id');
        let imageData = scanData[imageId];
        $(".scanName").html(imageData.name);
        $(".scanDate").html(imageData.date);
        $(".scanDesc").html(imageData.description);
        $(".scanPopup").attr("src", imageData.src);

        if ($("#" + imageId).width() < $("#" + imageId).height()) {
            $(".scanPopup").css({ "rotate": "0" + "deg", "object-fit": "contain", "width": "100%", "height": "100%" });
        } else if (imageId == "basquiat") {
            $(".scanPopup").css({ "rotate": "0" + "deg", "object-fit": "contain", "width": "100%", "height": "100%" });
        }
        else if (imageId == "sticker2") {
            $(".scanPopup").css({ "rotate": "0" + "deg", "object-fit": "contain", "width": "90%", "height": "90%" });
        }
        else if (imageId == "nice2") {
            $(".scanPopup").css({ "rotate": "0" + "deg", "object-fit": "contain", "width": "100%", "height": "100%" });
        }
        else if (imageId == "matches") {
            $(".scanPopup").css({ "rotate": "0" + "deg", "object-fit": "contain", "width": "100%", "height": "100%" });
        }
        else if (imageId == "kino") {
            $(".scanPopup").css({ "rotate": "0" + "deg", "object-fit": "contain", "width": "100%", "height": "100%" });
        }
        else if (imageId == "peace") {
            $(".scanPopup").css({ "rotate": "0" + "deg", "object-fit": "contain", "width": "80%", "height": "80%" });
        }
        else {
            $(".scanPopup").css({ "rotate": "-90" + "deg", "object-fit": "contain", "width": "120%", "height": "120%" });
        };

        $(".desScan").removeClass("popupOff").addClass("popupOn");

    });

});
