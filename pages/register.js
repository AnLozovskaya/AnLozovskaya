const { I } = inject();

module.exports = {
  registerHeaderTextEng: 'Register Account',
  firstNameField: { xpath: '//*[@id="input-firstname"]' },
  lastNamefield: { xpath: '//*[@id="account"]/div[3]/label' },
  emailField: { xpath: '//*[@id="account"]/div[4]/label' },
  telephoneField: { xpath: '//*[@id="account"]/div[5]/label' },
  passwordField: { xpath: '//*[@id="content"]/form/fieldset[2]/div[1]/label' },
  termsRadiobutton: { xpath: '//*[@id="content"]/form/div/div/input[1]' },
  passConfirmField: { xpath: '//*[@id="content"]/form/fieldset[2]/div[2]/label' },
  continueButton: { xpath: '//*[@id="content"]/form/div/div/input[2]' },
  registrationconfirmationTextEng: 'Your Account Has Been Created!',

  verifyRegisterAccountText() {
    I.see(this.registerHeaderTextEng);
  },

  fillRegistrationDetails(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNamefield, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.telephoneField, user.telephone);
    I.fillField(this.passwordField, user.password);
    I.fillField(this.passConfirmField, user.password);
    I.click(this.termsRadiobutton);
    I.click(this.continueButton);
    I.see(this.registrationconfirmationTextEng);
  }
}






