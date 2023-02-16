
const signinButton = { xpath: '//a[text()="Sign In"]' };
const emailField = { css: '#input-email' };
const passwordField = { css: '#input-password' };
const submitButton = { xpath: '//input[@type="submit"]' };
const websiteLanguageSpoiler = { xpath: '//*[@id="form-language"]/div/span' };
const websiteLanguageEng = { xpath: '//*[@id="form-language"]/div/ul/li[1]/button' };



const STORE_URL = 'http://opencart.qatestlab.net/';
module.exports = function () {
  return actor({

    openStore() {
      this.amOnPage(STORE_URL);
    },

    selectWebsiteEngLang() {
      this.click(websiteLanguageSpoiler);
      this.click(websiteLanguageEng);
  },

    login(user) {
      this.click(signinButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      this.click(submitButton); 
    },

  });
}
