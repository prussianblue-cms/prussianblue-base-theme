(function (Drupal) {
  Drupal.behaviors.pb_main_menu = {
    attach: function attach(context) {
      const main_menu_links = once('main-menu', '.menu--main ul.menu > li.menu-item--expanded', context);

      main_menu_links.forEach((element) => {
        let elementTimer;

        element.setAttribute('aria-expanded', false);

        element.addEventListener("click", (event) => {
          element.classList.toggle('is-open');

          if (event.target.parentNode.classList.contains('is-open')) {
            element.setAttribute('aria-expanded', true);
          }
          else {
            element.setAttribute('aria-expanded', false);
          }

          event.preventDefault();
        });

        element.addEventListener('mouseover', (event) => {
          element.classList.add('is-open');
          clearTimeout(elementTimer);
        });

        element.addEventListener('mouseout', (event) => {
          elementTimer = setTimeout((event) => {
            document.querySelector('.menu-item--expanded.is-open').classList.remove('is-open');
          }, 500);
        });
      });
    },
  };
})(Drupal);
