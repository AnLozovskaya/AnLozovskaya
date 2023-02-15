const { I } = inject();

module.exports = {
    checkoutText: 'Checkout',
    refreshProductQuantity: { xpath: "//i[@class='fa fa-refresh']" },
    viewCartButton: { xpath: "//a[contains (text(), 'View Cart')]" },
    checkoutButton: { xpath: "//a[@class='btn btn-primary' and contains (text(), 'Checkout')]" },
    productQuantityInCart: { xpath: "//div[@class='input-group btn-block']//input[@type='text']" },
    productQuantityInCart: { xpath: "//div[@class='input-group btn-block']//input[@type='text']" },

    clickCartIconToGoToView() {
        I.click(this.viewCartButton);
    },

    clearProductQuantityField() {
        I.clearField(this.productQuantityInCart);
    },

    fillProductQuantityField(productQuantity) {
       I.fillField(this.productQuantityInCart, productQuantity);
    },

    refreshProductQuantityField() {
        I.click(this.refreshProductQuantity);
    },

    proceedToCheckoutFromCart(){
        I.click(this.checkoutButton);
        I.see(this.checkoutText);
    }
}





