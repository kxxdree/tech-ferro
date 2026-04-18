fetch("/components/header/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
    
    const activePage = document.getElementById("header-placeholder").dataset.activePage;
    
    document.querySelectorAll('.header__menu-item a').forEach(link => {
      const href = link.getAttribute('href');
      const linkPage = href.replace('.html', '').replace('/', '');
      
      const menuItem = link.closest('.header__menu-item');
      menuItem.classList.remove('active-link');
      
      if (linkPage === activePage || (activePage === 'index' && href === '/')) {
        menuItem.classList.add('active-link');
      }
    });
  });