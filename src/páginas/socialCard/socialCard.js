const cards = document.querySelectorAll('.jsCard');
const menu = document.querySelector('.jsMenu');
const sectionToggleClass = 'jsSectionToggle';
const menuToggles = menu.querySelectorAll(`.${sectionToggleClass}`);

menu.addEventListener('click', (e) => {
    if (e.target.classList.contains(sectionToggleClass)) {
        const menuItem = e.target.closest('.menuItem');
        activateCard(menuItem);
        markAsActiveMenuItem(e.target);
    }
});

function activateCard(el) {
    const socialnetwork = el.dataset.socialNetwork;

    cards.forEach((card) => {
        card.classList.remove('isActive');

        if (card.classList.contains(`card${socialnetwork}`)) {
            card.classList.add('isActive');
        }
    });
}

function markAsActiveMenuItem(el) {
    menuToggles.forEach((item) => {
        item.classList.remove('isBtnActive');
    });

    el.classList.add('isBtnActive');
}
