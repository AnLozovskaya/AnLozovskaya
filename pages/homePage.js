const { I } = inject();

module.exports = {

    websiteLanguageSpoiler: { xpath: '//*[@id="form-language"]/div/span' },
    websiteLanguageEng: { xpath: '//*[@id="form-language"]/div/ul/li[1]/button' },
    myAccountSpoiler: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
    registerLink: { xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a' },

    openRegistrationPage() {
        I.click(this.myAccountSpoiler);
        I.click(this.registerLink);
    },

    selectWebsiteEngLang() {
        I.click(this.websiteLanguageSpoiler);
        I.click(this.websiteLanguageEng);
    }
}