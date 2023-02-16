let loginUser = {
    email: 'qatest987658@gmail.com',
    password: 'Testing1!',
};
const productQuantity = "1";

Feature('buy');

Scenario.only('buy product', async ({ I, productPage, cartPage, checkoutPage }) => {
    I.openStore();
    I.selectWebsiteEngLang();
    I.login(loginUser);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=49');


    const price = await productPage.getProductPrice();
    const convertedProductPrice = productPage.convertPrice(price);
    console.log('converted product price = ' + convertedProductPrice);
    productPage.selectProductCharacteristics();
    const sizePrice = await productPage.getSizePrice();
    const convertedSizePrice = productPage.convertPrice(sizePrice);
    console.log('converted Size price = ' + convertedSizePrice);
    const colorPrice = await productPage.getColorPrice();
    const convertedColorPrice = productPage.convertPrice(colorPrice);
    console.log('converted Color price = ' + convertedColorPrice);
    productPage.addProductToCart();
    checkoutPage.clickCartIcon();
    cartPage.clickCartIconToGoToView();
    cartPage.clearProductQuantityField();
    cartPage.fillProductQuantityField(productQuantity);
    cartPage.refreshProductQuantityField();
    cartPage.proceedToCheckoutFromCart();
    checkoutPage.checkoutProcess();
    const shippingPrice = await checkoutPage.getShippingPrice();
    const convertedShippingPrice = productPage.convertPrice(shippingPrice);
    console.log('converted Shipping price = ' + convertedShippingPrice);
    const countedTotalAmount = await checkoutPage.getCountedTotalAmount();
    const convertedTotalAmount = productPage.convertPrice(countedTotalAmount);
    console.log('converted Counted total amount = ' + convertedTotalAmount);
    const totalAmount = checkoutPage.sumTotalPrice(+convertedProductPrice, +convertedColorPrice, +convertedSizePrice, +convertedShippingPrice);
    I.assertEqual(totalAmount, +convertedTotalAmount, 'Prices are not in match');
    checkoutPage.confirmOrder();
    pause();
});
