
$(document).ready(function () {
    $(".scan").each(function () {
        let rAngle = (Math.random() * 20) - 10;
        $(".scan").css("rotate", rAngle + "deg");
    });

    $(".scan").each(function () {
        let rAnglePopup = (Math.random() * 10) - 5;
        $(".scanPopup").css("rotate", rAnglePopup + "deg");
    });

    // About popup

    $(".scan").draggable({ stack: ".scan" });

    $("#aboutBtn").click(function () {
        $(".About").fadeIn(90)
        $(".About").removeClass("popupOff").addClass("popupOn");
    });

    $(".close").click(function () {
        $(".popup").fadeOut(90)
        $(".popup").removeClass("popupOn").addClass("popupOff");
    });


    // Description scan popup


    let textPopup
    const post_easter = {
        name: "Пасхальная открытка",
        date: "20 июля 2020/ Санкт-Петербург",
        img: 1,
        sound: "On",
    }


    $(".scan").click(function () {


        textPopup = $(this).attr('id');

        console.log({ name } = post_easter)

        $(".scanName").html(textPopup[name]);
        $(".scanDate").html(textPopup.date);

        $(".desScan").fadeIn(90);
        $(".desScan").removeClass("popupOff").addClass("popupOn");
    });

    //Oval animation

    $("#aboutBtn").hover(function () {
        $(".path")
    })
    // Load scan popup

    $(".plusBtn").click(function () {

        $(".addScan").fadeIn(90);
        $(".desScan").removeClass("popupOff").addClass("popupOn");

    });

});
