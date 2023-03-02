(function (Drupal) {
  Drupal.behaviors.pb_main_menu = {
    attach: function attach(context) {
      this.submenuBehavior(context);
      this.mobileMenuBehavior(context);
    },

    submenuBehavior(context) {
      const main_menu_links = once('main-menu', '.menu--main ul.menu > li.menu-item--expanded', context);

      main_menu_links.forEach((element) => {
        let elementTimer;

        element.setAttribute('aria-expanded', false);

        element.addEventListener("click", (event) => {
          element.classList.toggle('js-open');

          if (event.target.parentNode.classList.contains('js-open')) {
            element.setAttribute('aria-expanded', true);
          }
          else {
            element.setAttribute('aria-expanded', false);
          }

          event.preventDefault();
        });

        element.addEventListener('mouseover', (event) => {
          element.classList.add('js-open');
          clearTimeout(elementTimer);
        });

        element.addEventListener('mouseout', (event) => {
          elementTimer = setTimeout((event) => {
            document.querySelector('.menu-item--expanded.js-open').classList.remove('js-open');
          }, 500);
        });
      });
    },

    mobileMenuBehavior(context) {
      const page_header = once('mobile-menu', '.page-header', context);
      const toggler = once('mobile-menu', '.page-header__navigation-toggler', context);

      if(toggler.length && page_header.length) {
        toggler[0].addEventListener('click', (event) => {
          page_header[0].classList.toggle('js-mobile-menu-open');
        });
      }
      else {
        console.error('WARNING: The navigation toggler or navigation panel were not found. The mobile menu will not work until this is fixed');
      }
    }
  };
})(Drupal);
