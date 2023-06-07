const ui = {
    $catalogSectionsBtn: $('.catalog-sections-btn'),
    $catalogSectionsList: $('.catalog-sections-list')
}

export default function initCatalog() {
    initCatalogSections()
}

function initCatalogSections() {
    ui.$catalogSectionsBtn.click(function(e) {
        e.preventDefault()
        e.stopPropagation()

        let isActive = ui.$catalogSectionsList.attr('data-is-active')
        isActive = (isActive === '1' ? '0' : '1')

        ui.$catalogSectionsList.attr('data-is-active', isActive)
    })

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.catalog-sections-list').is('.catalog-sections-list') &&
            !$(event.target).closest('.catalog-sections-btn').is('.catalog-sections-btn')) {
            ui.$catalogSectionsList.attr('data-is-active', '0')
        }
    });
}