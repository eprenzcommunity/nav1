document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item.has-megamenu');
    const megamenuContainer = document.querySelector('.megamenu-container');
    const megamenus = document.querySelectorAll('.megamenu');
    const header = document.querySelector('.site-header');

    let activeMenu = null;

    // Megamenu switch logic
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const menuType = item.getAttribute('data-menu');

            // Show container
            megamenuContainer.classList.add('active');

            // Hide all menus first, then show the current one
            megamenus.forEach(menu => menu.classList.remove('active'));
            const targetMenu = document.getElementById(`megamenu-${menuType}`);
            if (targetMenu) {
                targetMenu.classList.add('active');
            }

            activeMenu = menuType;
        });
    });

    // Close on mouse leave header
    header.addEventListener('mouseleave', () => {
        megamenuContainer.classList.remove('active');
        activeMenu = null;
    });

    // Sub-service hover logic
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const parentList = item.closest('.service-list');
            const category = parentList.getAttribute('data-category');

            // Update active state in list
            parentList.querySelectorAll('.service-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Update Preview
            const imgPath = item.getAttribute('data-image');
            const title = item.querySelector('h4').textContent;
            const desc = item.getAttribute('data-desc');

            const previewImg = document.getElementById(`preview-img-${category}`);
            const previewTitle = document.getElementById(`preview-title-${category}`);
            const previewDesc = document.getElementById(`preview-desc-${category}`);

            if (previewImg) {
                // Add a small fade effect on image change
                previewImg.style.opacity = '0';
                setTimeout(() => {
                    previewImg.src = imgPath;
                    previewImg.style.opacity = '1';
                }, 150);
            }
            if (previewTitle) previewTitle.textContent = title;
            if (previewDesc) previewDesc.textContent = desc;
        });
    });
});
