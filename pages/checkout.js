const { I } = inject();

module.exports = {

  placedOrdertext: 'Your order has been placed!',
  cartIcon: { xpath: "//i[@class='linearicons-cart']" },
  checkoutButton: { xpath: "//a[@class='btn-primary btn-r']" },
  termsAndConditionCheckbox: { xpath: "//input[@type='checkbox']" },
  confirmOrderButton: { xpath: "//input[@value='Confirm Order']" },
  continuePaymentButton: { xpath: "//input[@id='button-payment-address']" },
  continueShippingButton: { xpath: "//input[@id='button-shipping-address']" },
  continueButtonPaymentMethod: { xpath: "//input[@id='button-payment-method']" },
  continueShippingMethodButton: { xpath: "//input[@id='button-shipping-method']" },
  flatShippingRate: { xpath: "//*[@id='collapse-checkout-confirm']/div/div[1]/table/tfoot/tr[2]/td[2]" },
  countedTotalAmount: { xpath: "//*[@id='collapse-checkout-confirm']/div/div[1]/table/tfoot/tr[3]/td[2]" },
  
  clickCartIcon() {
    I.click(this.cartIcon);
  },

  async getShippingPrice() {
    return await I.grabTextFrom(this.flatShippingRate);
  },

  checkoutProcess() {
    I.click(this.continuePaymentButton);
    I.click(this.continueShippingButton);
    I.click(this.cintimueShippingMethodButton);
    I.click(this.termsAndConditionCheckbox);
    I.click(this.continueButtonPaymentMethod);
  },

  sumTotalPrice(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
  },

  async getCountedTotalAmount() {
    return await I.grabTextFrom(this.countedTotalAmount);
  },

  confirmOrder() {
    I.click(this.confirmOrderButton);
    I.see(this.placedOrdertext);
  }
}
