!function(){var n={686:function(n,e,t){"use strict";var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,'/* Reset and base styles  */\n* {\n  padding: 0px;\n  margin: 0px;\n  border: none;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n:focus,\n:active {\n  /*outline: none;*/\n}\n\na:focus,\na:active {\n  /* outline: none;*/\n}\n\n/* Links */\na, a:link, a:visited {\n  /* color: inherit; */\n  text-decoration: none;\n  /* display: inline-block; */\n}\n\na:hover {\n  /* color: inherit; */\n  text-decoration: none;\n}\n\n/* Common */\naside, nav, footer, header, section, main {\n  display: block;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\nul, ul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nimg, svg {\n  max-width: 100%;\n  height: auto;\n}\n\naddress {\n  font-style: normal;\n}\n\n/* Form */\ninput, textarea, button, select {\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  background-color: transparent;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton, input[type=submit] {\n  display: inline-block;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: transparent;\n  background: none;\n  cursor: pointer;\n}\n\ninput:focus, input:active,\nbutton:focus, button:active {\n  outline: none;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\nlabel {\n  cursor: pointer;\n}\n\nlegend {\n  display: block;\n}\n\n/* Reset and base styles  */\n* {\n  padding: 0px;\n  margin: 0px;\n  border: none;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n:focus,\n:active {\n  /*outline: none;*/\n}\n\na:focus,\na:active {\n  /* outline: none;*/\n}\n\n/* Links */\na, a:link, a:visited {\n  /* color: inherit; */\n  text-decoration: none;\n  /* display: inline-block; */\n}\n\na:hover {\n  /* color: inherit; */\n  text-decoration: none;\n}\n\n/* Common */\naside, nav, footer, header, section, main {\n  display: block;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\nul, ul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nimg, svg {\n  max-width: 100%;\n  height: auto;\n}\n\naddress {\n  font-style: normal;\n}\n\n/* Form */\ninput, textarea, button, select {\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  background-color: transparent;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton, input[type=submit] {\n  display: inline-block;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: transparent;\n  background: none;\n  cursor: pointer;\n}\n\ninput:focus, input:active,\nbutton:focus, button:active {\n  outline: none;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\nlabel {\n  cursor: pointer;\n}\n\nlegend {\n  display: block;\n}\n\n.header {\n  background-color: #fff;\n  width: 100%;\n}\n\n.header-inner {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.header-logo {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: 2rem;\n}\n@media (min-width: 768px) {\n  .header-logo {\n    -webkit-box-pack: start;\n    -webkit-justify-content: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n    margin-bottom: 0;\n  }\n}\n\n.header-callback {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  gap: 0.2rem;\n  margin-bottom: 2rem;\n}\n@media (min-width: 576px) {\n  .header-callback {\n    margin-bottom: 0;\n  }\n}\n.header-callback-phone {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.header-callback-phone a {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 5px;\n  color: #1f1f1f;\n}\n.header-callback-link {\n  color: #6ba225;\n}\n.header-callback-link:hover {\n  cursor: pointer;\n}\n\n.nav {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1000;\n  background-color: #f1f1f1;\n  top: 0;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  border-color: #dcd7cf;\n}\n@media (max-width: 768px) {\n  .nav {\n    margin-top: 1.5rem;\n  }\n}\n\n.nav-inner {\n  padding: 0.7rem 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.nav-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  gap: 1rem;\n}\n@media (min-width: 992px) {\n  .nav-wrapper {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n}\n\n.nav-categories {\n  position: relative;\n}\n.nav-categories:hover .nav-categories-list {\n  display: block;\n}\n\n.nav-categories-link {\n  padding: 0.3rem 1rem;\n  color: #fff;\n  border-radius: 5px;\n  font-weight: 500;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  gap: 10px;\n  background-color: #6ba225;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n}\n.nav-categories-link:hover {\n  background-color: #50781c;\n  color: #fff;\n  cursor: pointer;\n}\n\n.nav-categories-list {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  width: 200%;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  border-radius: 5px;\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n.nav-categories-list-wrapper {\n  padding: 1rem 0;\n}\n\n.nav-category {\n  display: block;\n  color: #1f1f1f;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.nav-category:hover {\n  color: #6ba225;\n}\n.nav-category + .nav-category {\n  margin-top: 1rem;\n}\n\n.nav-menu {\n  position: relative;\n  display: none;\n  z-index: 1001;\n}\n@media (max-width: 992px) {\n  .nav-menu[data-is-opened="1"] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 3rem 1rem;\n    background-color: rgba(0, 0, 0, 0.9);\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    gap: 1rem;\n  }\n  .nav-menu[data-is-opened="1"] .nav-link {\n    color: #fff;\n  }\n}\n@media (min-width: 992px) {\n  .nav-menu {\n    display: contents;\n    height: 100%;\n  }\n}\n\n.nav-menu-link {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 10px;\n  padding: 0.3rem 1rem;\n  color: #fff;\n  border-radius: 5px;\n  font-weight: 500;\n  background-color: #6ba225;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n@media (min-width: 992px) {\n  .nav-menu-link {\n    display: none;\n  }\n}\n.nav-menu-link:hover {\n  background-color: #50781c;\n  color: #fff;\n}\n\n.nav-link {\n  padding: 0.3rem 0.4rem;\n  color: #1f1f1f;\n  border-radius: 5px;\n  font-weight: 500;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.nav-link:hover {\n  color: #6ba225;\n}\n\n.nav-menu-close {\n  position: absolute;\n  top: 20px;\n  right: 30px;\n  color: #fff;\n}\n@media (min-width: 768px) {\n  .nav-menu-close {\n    display: none;\n  }\n}\n.nav-menu-close:hover {\n  cursor: pointer;\n}\n\n.nav-search {\n  background-color: #fff;\n  border-radius: 5px;\n}\n@media (min-width: 768px) {\n  .nav-search {\n    display: none;\n  }\n}\n\n.nav-cart {\n  float: right;\n  padding: 0.3rem 0.6rem;\n  border-radius: 5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #6ba225;\n  justify-self: flex-end;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.nav-cart:hover {\n  color: #50781c;\n  cursor: pointer;\n}\n\n.nav-cart-icon {\n  position: relative;\n}\n\n.nav-cart-count {\n  position: absolute;\n  top: -20px;\n  right: -10px;\n  font-size: 9px !important;\n  background-color: #D40000;\n  color: #fff;\n  width: 20px;\n  aspect-ratio: 1/1;\n  border-radius: 100%;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: none;\n}\n.nav-cart-count[data-is-active="1"] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.services {\n  padding: 3rem 0;\n  background-color: #f1f1f1;\n}\n\n.service-title {\n  margin-bottom: 1rem;\n}\n\n.service-item {\n  overflow: hidden;\n  position: relative;\n  height: 300px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 5px;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n@media (min-width: 768px) {\n  .service-item:hover .service-item-img {\n    -webkit-filter: brightness(0.3);\n            filter: brightness(0.3);\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n  }\n}\n.service-item:hover .service-item-link {\n  opacity: 1;\n}\n\n.service-item-title {\n  z-index: 10;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  font-weight: 500;\n  top: 0;\n  padding: 0.5rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 50px;\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.service-item-title a {\n  color: #fff;\n}\n\n.service-item-img {\n  -webkit-filter: brightness(0.6);\n          filter: brightness(0.6);\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.service-item-link {\n  position: absolute;\n  opacity: 1;\n  bottom: 10%;\n  padding: 0.5rem 1rem;\n  background-color: rgba(213, 213, 213, 0.87);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 10px;\n  color: #1f1f1f;\n  border-radius: 5px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n@media (min-width: 768px) {\n  .service-item-link {\n    bottom: unset;\n    opacity: 0;\n  }\n}\n.service-item-link:hover {\n  color: #6ba225;\n}\n\n.tabs {\n  padding: 3rem 0;\n}\n\n.tabs-panel {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  gap: 1rem;\n  padding-bottom: 0.7rem;\n  border-bottom: 1px solid;\n  border-color: #dcd7cf;\n}\n\n.tabs-panel-item {\n  padding: 0.3rem 1rem;\n  color: #1f1f1f;\n  border-radius: 5px;\n  font-weight: 500;\n  background-color: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 10px;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n}\n.tabs-panel-item:hover {\n  cursor: pointer;\n  color: #6ba225;\n}\n.tabs-panel-item[data-is-active="1"] {\n  background-color: #6ba225;\n  color: #fff;\n}\n\n.tabs-panel-item--sale {\n  padding: 0.3rem 1rem;\n  color: #D40000;\n  border-radius: 5px;\n  font-weight: 500;\n  background-color: #ffe8e8;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 10px;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.tabs-panel-item--sale:hover {\n  cursor: pointer;\n  color: #D40000;\n  background-color: #ffcfcf;\n}\n.tabs-panel-item--sale[data-is-active="1"] {\n  background-color: #ffcfcf;\n  color: #D40000;\n}\n\n.tabs-content {\n  margin-top: 1rem;\n}\n\n.tabs-content-item[data-is-active="1"] {\n  display: block;\n}\n.tabs-content-item[data-is-active="0"] {\n  display: none;\n}\n\n.tabs-content-item-plug {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 4rem 0;\n  font-weight: 500;\n  color: #c0c0c0;\n  background-color: #fafafa;\n  border-radius: 5px;\n  font-size: 1.2rem;\n}\n\n.tabs-all {\n  display: block;\n  text-align: center;\n  color: #6ba225;\n  margin-top: 1rem;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.tabs-all:hover {\n  color: #50781c;\n}\n\n.card {\n  padding: 1rem;\n  border: none;\n  background-color: #fff;\n  border-radius: 5px;\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  display: grid;\n  grid-template-areas: "img" "img" "title" "actions";\n}\n.card:hover {\n  cursor: pointer;\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(52, 52, 52, 0.45);\n  box-shadow: 0px 5px 10px 2px rgba(52, 52, 52, 0.45);\n}\n\n.card-img {\n  grid-area: img;\n  border-radius: 5px;\n  height: 250px;\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.card-title {\n  grid-area: title;\n  font-weight: 500;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  color: #1f1f1f;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.card-title:hover {\n  color: #6ba225;\n}\n\n.card-price {\n  color: #6ba225;\n  font-weight: 500;\n  margin-bottom: 0;\n}\n\n.card-actions {\n  grid-area: actions;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  gap: 10px 0;\n}\n\n.card-number input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #c0c0c0;\n  border-radius: 5px;\n  padding: 0.3rem;\n}\n\n.card-cart {\n  padding: 0.3rem 1rem;\n  background-color: #6ba225;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  gap: 10px;\n  border-radius: 5px;\n  color: #fff;\n  outline: none;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.card-cart:hover {\n  background-color: #50781c;\n}\n\n.works {\n  margin-top: 2rem;\n}\n\n.works-slide {\n  margin-top: 2rem;\n  height: 300px;\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n.works-slide .carousel-inner {\n  border-radius: 5px;\n}\n\n.works-control {\n  color: #fff;\n  width: 50px;\n  opacity: 1;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.works-control:hover {\n  background-color: rgba(0, 0, 0, 0.24);\n}\n@media (min-width: 768px) {\n  .works-control {\n    color: #6ba225 !important;\n    width: 100px;\n  }\n  .works-control-prev {\n    left: -100px;\n  }\n  .works-control-next {\n    right: -100px;\n  }\n  .works-control:hover {\n    background-color: transparent;\n  }\n}\n\n.works-item-img {\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.works-item-content {\n  position: absolute;\n  right: 20%;\n  left: 20%;\n  top: 50px;\n  bottom: 50px;\n  background-color: rgba(0, 0, 0, 0.63);\n  padding: 2rem;\n}\n@media (min-width: 768px) {\n  .works-item-content {\n    left: unset;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 40%;\n  }\n}\n\n.works-item-title {\n  font-weight: 500;\n  color: #fff;\n  font-size: 1.3rem;\n}\n@media (min-width: 768px) {\n  .works-item-title {\n    font-size: 1.5rem;\n  }\n}\n\n.works-item-text {\n  color: #fff;\n  font-size: 0.8rem;\n}\n@media (min-width: 768px) {\n  .works-item-text {\n    font-size: 1rem;\n  }\n}\n\n.works-item-link {\n  display: inline;\n  padding: 0.3rem 1rem;\n  background-color: #6ba225;\n  color: #fff;\n  font-weight: 500;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  gap: 10px;\n  border-radius: 5px;\n  width: 110px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.works-item-link:hover {\n  background-color: #50781c;\n  color: #fff;\n}\n\n.contacts {\n  margin-top: 3rem;\n}\n\n.contacts-title {\n  margin-bottom: 2rem;\n}\n\n.contacts-map iframe {\n  width: 100%;\n}\n\n.contacts-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 15px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@media (min-width: 768px) {\n  .contacts-list {\n    height: 100%;\n  }\n}\n\n.contacts-list-item {\n  color: #1f1f1f;\n  font-size: 18px;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.contacts-list-item:hover {\n  color: #6ba225;\n  cursor: pointer;\n}\n.contacts-list-item i {\n  width: 40px;\n  text-align: center;\n}\n\n.site-search {\n  position: relative;\n}\n.site-search-input {\n  padding: 0.5rem 55px 0.5rem 1rem;\n  border: 1px solid #c0c0c0;\n  border-radius: 5px;\n  width: 100%;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.site-search-input:hover, .site-search-input:focus {\n  border: 1px solid #d9ecbf;\n}\n.site-search-btn {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 42px;\n  color: #6ba225;\n  border-radius: 0 5px 5px 0;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.site-search-btn:hover {\n  cursor: pointer;\n  color: #fff;\n  background-color: #6ba225;\n}\n\n.footer {\n  margin-top: 3rem;\n  background-color: #6ba225;\n  padding: 4rem 0;\n  color: #fff;\n}\n\n.footer-main {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n@media (min-width: 768px) {\n  .footer-main {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n}\n\n.footer-title {\n  font-weight: 500;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #fff;\n}\n@media (min-width: 768px) {\n  .footer-title {\n    border: none;\n    padding: 0;\n  }\n}\n.footer-title a {\n  color: #fff;\n}\n.footer-title a:hover {\n  color: #fff;\n}\n\n.footer-links {\n  margin-top: 1rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n@media (min-width: 768px) {\n  .footer-links {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    margin-top: 0;\n  }\n}\n\n.footer-link {\n  display: block;\n  color: #fff;\n}\n.footer-link + .footer-link {\n  margin-top: 5px;\n}\n.footer-link:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.footer-actions {\n  margin-top: 2rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n@media (min-width: 768px) {\n  .footer-actions {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    margin-top: 0;\n  }\n}\n\n.footer-up {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  color: #6ba225;\n  background-color: #fff;\n}\n\n.section {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.section-title {\n  font-size: 1.5rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  font-family: "Inter", sans-serif;\n  font-size: 15px;\n  background-color: #fff;\n}\n\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}',""]),e.Z=a},645:function(n){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);i&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:function(n){"use strict";n.exports=function(n){return n[1]}},379:function(n){"use strict";var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],s=0;s<n.length;s++){var c=n[s],l=i.base?c[0]+i.base:c[0],p=r[l]||0,b="".concat(l," ").concat(p);r[l]=p+1;var f=t(b),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var x=o(d,i);i.byIndex=s,e.splice(s,0,{identifier:b,updater:x,references:1})}a.push(b)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var c=i(n,o),l=0;l<r.length;l++){var p=t(r[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=c}}},569:function(n){"use strict";var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:function(n){"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},837:function(n,e,t){var i={"./4e3h7t3s1bee5rj5ox5j36x7y0og102y.png":307,"./4gdabgfq3jpuq2i7zauwf5w38th1yc25.jpg":163,"./WhatsApp.png":922,"./adress.png":312,"./col.jpg":658,"./dkqb7zobqez8ocyx0pkgj4vjudvsl8ne.jpg":630,"./eap46boyh6bxvrse7u6e9sqi96hvjt6t.png":905,"./how.png":44,"./io7mtsl699hbfy701uy7poa5p7q865fm.jpg":652,"./j2.png":65,"./j3.png":596,"./j4.png":979,"./jeton.png":377,"./k9lybkkagycythkhqplb1687wzhq3bfq.jpg":959,"./logo.jpg":63,"./mail.png":467,"./mvd.png":375,"./ph0l6x9v3p5i1bgey5us42aptzy7hox5.jpg":242,"./phone.png":248,"./photo_2023-05-02_15-58-41.jpg":344,"./photo_2023-05-07_21-26-20.jpg":429,"./planka1.png":903,"./prim2.jpg":971,"./sh.jpg":601,"./slide03.jpg":133,"./telegram.png":456,"./time.png":119,"./w67i0k048klg53vovewz5oh5bv5q3ote.jpg":445};function o(n){var e=r(n);return t(e)}function r(n){if(!t.o(i,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return i[n]}o.keys=function(){return Object.keys(i)},o.resolve=r,n.exports=o,o.id=837},107:function(){function n(){let n=0;for(let e in localStorage)localStorage.hasOwnProperty(e)&&(n+=Number(localStorage.getItem(e)));const e=$("#cart").find(".nav-cart-count");n>0?(e.attr("data-is-active","1"),e.text(n)):(e.attr("data-is-active","0"),e.text(""))}$(document).ready((function(){n()})),$(".nav-menu-link").click((function(n){n.stopPropagation(),n.preventDefault(),$("#nav-menu").attr("data-is-opened","1"),$("body").css("overflow","hidden")})),$(".nav-menu-close").click((function(n){n.preventDefault(),$("#nav-menu").attr("data-is-opened","0"),$("body").css("overflow","initial")})),$(".nav-link").click((function(n){$("#nav-menu").attr("data-is-opened","0"),$("body").css("overflow","initial")})),$(".tabs-panel-item").click((function(n){n.preventDefault();const e=$(this).attr("data-target");$(".tabs-content-item").attr("data-is-active","0"),$(`.tabs-content-item[data-target="${e}"]`).attr("data-is-active","1"),$(".tabs-panel-item").attr("data-is-active","0"),$(`.tabs-panel-item[data-target="${e}"]`).attr("data-is-active","1")})),$(".card").find(".card-cart").click((function(e){e.preventDefault(),console.log(e.target);const t=$(this).closest(".card").attr("data-id");let i=localStorage.getItem(t);null===i?i=1:i++,localStorage.setItem(t,i),n(),$("#cart").effect("shake")})),$(".site-search-btn").click((function(n){const e=$(this).closest("form").find("input");""===e.val()?e.focus():$(this).closest("form").submit()}))},307:function(n,e,t){"use strict";n.exports=t.p+"images/4e3h7t3s1bee5rj5ox5j36x7y0og102y.png"},163:function(n,e,t){"use strict";n.exports=t.p+"images/4gdabgfq3jpuq2i7zauwf5w38th1yc25.jpg"},922:function(n,e,t){"use strict";n.exports=t.p+"images/WhatsApp.png"},312:function(n,e,t){"use strict";n.exports=t.p+"images/adress.png"},658:function(n,e,t){"use strict";n.exports=t.p+"images/col.jpg"},630:function(n,e,t){"use strict";n.exports=t.p+"images/dkqb7zobqez8ocyx0pkgj4vjudvsl8ne.jpg"},905:function(n,e,t){"use strict";n.exports=t.p+"images/eap46boyh6bxvrse7u6e9sqi96hvjt6t.png"},44:function(n,e,t){"use strict";n.exports=t.p+"images/how.png"},652:function(n,e,t){"use strict";n.exports=t.p+"images/io7mtsl699hbfy701uy7poa5p7q865fm.jpg"},65:function(n,e,t){"use strict";n.exports=t.p+"images/j2.png"},596:function(n,e,t){"use strict";n.exports=t.p+"images/j3.png"},979:function(n,e,t){"use strict";n.exports=t.p+"images/j4.png"},377:function(n,e,t){"use strict";n.exports=t.p+"images/jeton.png"},959:function(n,e,t){"use strict";n.exports=t.p+"images/k9lybkkagycythkhqplb1687wzhq3bfq.jpg"},63:function(n,e,t){"use strict";n.exports=t.p+"images/logo.jpg"},467:function(n,e,t){"use strict";n.exports=t.p+"images/mail.png"},375:function(n,e,t){"use strict";n.exports=t.p+"images/mvd.png"},242:function(n,e,t){"use strict";n.exports=t.p+"images/ph0l6x9v3p5i1bgey5us42aptzy7hox5.jpg"},248:function(n,e,t){"use strict";n.exports=t.p+"images/phone.png"},344:function(n,e,t){"use strict";n.exports=t.p+"images/photo_2023-05-02_15-58-41.jpg"},429:function(n,e,t){"use strict";n.exports=t.p+"images/photo_2023-05-07_21-26-20.jpg"},903:function(n,e,t){"use strict";n.exports=t.p+"images/planka1.png"},971:function(n,e,t){"use strict";n.exports=t.p+"images/prim2.jpg"},601:function(n,e,t){"use strict";n.exports=t.p+"images/sh.jpg"},133:function(n,e,t){"use strict";n.exports=t.p+"images/slide03.jpg"},456:function(n,e,t){"use strict";n.exports=t.p+"images/telegram.png"},119:function(n,e,t){"use strict";n.exports=t.p+"images/time.png"},445:function(n,e,t){"use strict";n.exports=t.p+"images/w67i0k048klg53vovewz5oh5bv5q3ote.jpg"}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n}(),t.nc=void 0,function(){"use strict";t(107);var n=t(379),e=t.n(n),i=t(795),o=t.n(i),r=t(569),a=t.n(r),s=t(565),c=t.n(s),l=t(216),p=t.n(l),b=t(589),f=t.n(b),d=t(686),x={};x.styleTagTransform=f(),x.setAttributes=c(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=p(),e()(d.Z,x),d.Z&&d.Z.locals&&d.Z.locals,function(n){let e={};n.keys().map(((t,i)=>{e[t.replace("./","")]=n(t)}))}(t(837))}()}();