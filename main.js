(function () {
  const pages = ["index.html", "kfmc.html", "smartcat.html", "family.html", "projects.html"];

  const dict = {
    en: {
      // Existing English translations... (جميع الترجمات الإنجليزية كما هي)
    },
    ar: {
      // Existing Arabic translations... (جميع الترجمات العربية كما هي)
    }
  };

  function getCurrentPage() {
    try {
      const path = window.location.pathname;
      const fileName = path.split('/').pop() || 'index.html';
      return fileName.toLowerCase();
    } catch (error) {
      console.error('Error getting current page:', error);
      return 'index.html';
    }
  }

  function setActiveNav() {
    try {
      const currentPage = getCurrentPage();
      const navLinks = document.querySelectorAll('[data-nav]');
      
      navLinks.forEach(link => {
        if (!link) return;
        
        const linkHref = link.getAttribute('href') || '';
        const linkPage = linkHref.split('/').pop().toLowerCase();
        
        const isActive = linkPage === currentPage || 
                        (current
