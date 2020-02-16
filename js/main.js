// AOS //
AOS.init();

// jQuery //
$(function() {

    /* modal for project item */
    // モーダル開く //
    $(".project-click-modal").on("click", function() {
        const projectTarget = "#" + $(this).attr('data-target');
        $(projectTarget).fadeIn();
    });
    // モーダル閉じる //
    $("#close-project-modal, .project-modal").on("click", function() {
        $(".project-modal").fadeOut();
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