(function ($, Drupal) {
  Drupal.behaviors.pb_main_menu = {
    attach: function attach(context) {
      const main_menu_links = once('main-menu', '.menu--main ul.menu > li.menu-item--expanded', context);

      main_menu_links.forEach((element) => {
        element.addEventListener("click", (event) => {
          event.target.parentNode.classList.toggle('is-open');
          event.preventDefault();
        });
      });
    },
  };
})(jQuery, Drupal);
