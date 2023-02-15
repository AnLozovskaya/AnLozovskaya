let registerUser = {
    firstName: 'Ann',
    lastName: 9,
    email: 'qatest1287@gmail.com',
    telephone: 4372552055,
    password: 'Testing987654!',
};
Feature('store');

Scenario('register new user',  ({ I, homePagePage, registerPage }) => {
    I.openStore(); 
    I.selectWebsiteEngLang();  //homePagePage.
    homePagePage.openRegistrationPage();//
    registerPage.verifyRegisterAccountText();
    registerUser.email = Date.now() + '@test.com';
    registerPage.fillRegistrationDetails(registerUser);
    
    });