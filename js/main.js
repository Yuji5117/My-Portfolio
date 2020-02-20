// AOS //
AOS.init();

// jQuery //
$(function() {

    // nav //
    // menu listsの開閉。 //
    $('#menu-toggle').on('click', function() {
        $('.menu-bar ul').toggleClass('menu-lists-active');
        $('body').toggleClass('fixed');
    });

    // menuのlistをクリックするとmenu-listsが閉じる。 //
    $(".toggle-closer").on('click', function() {
        $(".menu-bar ul").removeClass('menu-lists-active');
        $('body').toggleClass('fixed');
    });
    // nav //
 

    /* modal for project item */
    // モーダル開く //
    $(".project-click-modal").on("click", function() {
        const projectTarget = "#" + $(this).attr('data-target');
        $(projectTarget).fadeIn();
        $('body').toggleClass('fixed');
    });
    // モーダル閉じる //
    $("#close-project-modal, .project-modal").on("click", function() {
        $(".project-modal").fadeOut();
        $('body').toggleClass('fixed');
    });
    // モーダルの白い部分をクリックしても閉じないよう。 //
    $('.project-modal-content').on('click', event => {
        event.stopPropagation();
    });

    // select pic for project //
    $(".select-pic1").on("click", function() {
        $("#pj-main-img").attr('src', $(this).attr('src'));
    });
    // select pic for project //
    $(".select-pic2").on("click", function() {
        $("#pj-main-img2").attr('src', $(this).attr('src'));
    });
    /* modal for project item */

});
// jQuery //