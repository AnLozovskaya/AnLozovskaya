// in this file you can append custom step methods to 'I' object
const STORE_URL = 'http://opencart.qatestlab.net/'
module.exports = function () {
  return actor({
    openStore() {
      this.amOnPage(STORE_URL);
    }
  });
}