document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item.has-megamenu');
    const megamenuContainer = document.querySelector('.megamenu-container');
    const megamenus = document.querySelectorAll('.megamenu');
    const header = document.querySelector('.site-header');

    // Handle Main Menu Hover
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const menuType = item.getAttribute('data-menu');
            megamenuContainer.classList.add('active');

            megamenus.forEach(menu => menu.classList.remove('active'));
            const targetMenu = document.getElementById(`megamenu-${menuType}`);
            if (targetMenu) targetMenu.classList.add('active');
        });
    });

    // Close on Mouse Leave Header
    header.addEventListener('mouseleave', () => {
        megamenuContainer.classList.remove('active');
    });

    // Handle Service Item Hover (Preview Logic)
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const parentMegamenu = item.closest('.megamenu');
            const menuId = parentMegamenu.id.replace('megamenu-', '');

            // Highlight active item in this specific megamenu
            parentMegamenu.querySelectorAll('.service-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Update Preview Elements
            const imgPath = item.getAttribute('data-image');
            const title = item.querySelector('h4').textContent;
            const desc = item.getAttribute('data-desc');

            const previewImg = document.getElementById(`preview-img-${menuId}`);
            const previewTitle = document.getElementById(`preview-title-${menuId}`);
            const previewDesc = document.getElementById(`preview-desc-${menuId}`);

            if (previewImg) {
                previewImg.style.opacity = '0';
                setTimeout(() => {
                    previewImg.src = imgPath;
                    previewImg.style.opacity = '1';
                }, 100);
            }
            if (previewTitle) previewTitle.textContent = title;
            if (previewDesc) previewDesc.textContent = desc;
        });
    });
});
