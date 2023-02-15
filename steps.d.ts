/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePagePage = typeof import('./pages/homePage.js');
type registerPage = typeof import('./pages/register.js');
type productPage = typeof import('./pages/product.js');
type checkoutPage = typeof import('./pages/checkout.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePagePage: homePagePage, registerPage: registerPage, productPage: productPage, checkoutPage: checkoutPage }
  interface Methods extends Playwright, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
