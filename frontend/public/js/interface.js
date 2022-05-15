/* Constants */
// Page Types
const PAGES = ['home', 'top', 'people', 'lend', 'mint'];

/* Saved Values on Frontend */
let current_page = 0;
let try_page = -1;

/*
 * Onclick functions
 */
function movePageOnClick(targetIdx) {
    if (targetIdx == current_page) return;
    /*
    if (account == '' && targetIdx != START_PAGE) {
        try_page = targetIdx;
        targetIdx = WALLET_PAGE;
    }

    updatePageOnClick(targetIdx);
    */
    $('#page-' + PAGES[current_page]).hide();
    $('#page-' + PAGES[targetIdx]).fadeIn(500);

    $('.menu-' + PAGES[current_page]).removeClass('uk-active');
    $('.menu-' + PAGES[targetIdx]).addClass('uk-active');

    current_page = targetIdx;
    $("html, body").animate({ scrollTop: 0 }, "fast");
}