const ui = {
    $catalogList: null,
    $catalogModeBtn: null
}

export default function initCatalog() {
    ui.$catalogList = $('.card-list')
    ui.$catalogModeBtn = $('.catalog-mode-btn')

    initCatalogModeBtn()
}

function initCatalogModeBtn() {
    ui.$catalogModeBtn.click(function(e) {
        e.preventDefault()

        ui.$catalogModeBtn.attr('data-is-active', '0')
        $(this).attr('data-is-active', '1')

        ui.$catalogList.attr('data-mode', $(this).attr('data-mode'))
    })
}