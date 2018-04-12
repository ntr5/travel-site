import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent = $(".site-header__menu-content");
        this.events();

    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        console.log(this);
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }

}

export default MobileMenu;

// steps
/*
#.
#.
#. reveals navigation links for small screens
  a. create a shortcut to the div that is currently hidden
  b. add/toggle a new class onto the div element
*/
