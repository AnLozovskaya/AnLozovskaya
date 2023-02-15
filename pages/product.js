const { I } = inject();


module.exports = {

  availableOptionsText: 'Available Options',
  addToCartButton: { xpath: "//button[@id='button-cart']" },
  priceText: { xpath: "//div[@class='price']//span[@class='price-new']" },
  sizePrice: { xpath: "//a[@class='sbSelector' and contains (text(), 'Medium')]" },
  colorPrice: { xpath: "//a[@class='sbSelector' and contains (text(), 'Green')]" },
  productSizeSelection: { xpath: "//a[@href='#87' and contains(text(), 'Medium')]" },
  productColorSelection: { xpath: "//a[@href='#85' and contains (text(), 'Green')]" },
  sizeToggle: { xpath: "//label[@for='input-option30']/following-sibling::div//a[@class='sbSelector' and contains(text(), 'Please Select')]" },
  colorToggle: { xpath: "//label[@for='input-option29']/following-sibling::div//a[@class='sbSelector' and contains(text(), 'Please Select')]" },
  
  async getProductPrice() {
    return await I.grabTextFrom(this.priceText);
  },

  async getSizePrice() {
    return await I.grabTextFrom(this.sizePrice);
  },

  async getColorPrice() {
    return await I.grabTextFrom(this.colorPrice);
  },

  convertPrice(notConvertedPrice) {
    const convertedPrice = parseFloat(notConvertedPrice.replace(/[^\d.-]/g, ''));
    return convertedPrice.toFixed(2);
  },

  selectProductCharacteristics() {
    I.see(this.availableOptionsText);
    I.click(this.sizeToggle);
    I.click(this.productSizeSelection);
    I.click(this.colorToggle);
    I.click(this.productColorSelection);
  },

  addProductToCart() {
    I.click(this.addToCartButton);
  }
}
