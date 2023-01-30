let registratedUser = {
    firstName: 'Ann',
    lastName: 9,
    email: 'qatest1287@gmail.com',
    telephone: 4372552055,
    password: 'Testing987654!',
}
Feature('store');

Scenario ('test eng',  ({ I, homePagePage, registerPage }) => {
    I.openStore();
    homePagePage.selectWebsiteEngLang();
    homePagePage.openRegistrationPage();
    registerPage.verifyRegisterAccountText();
    registratedUser.email = Date.now() + '@test.com';
    registerPage.fillRegistrationDetails(registratedUser);
    pause();
    });