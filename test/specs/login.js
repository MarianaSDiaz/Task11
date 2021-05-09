const LoginPage = require ('../pageobjects/login.page');

describe('Login buttons', () => {
    it('should verify that all the buttons in the form are enabled', () => {
        LoginPage.open ();
        expect(LoginPage.btnSubmit).toBeClickable;
        expect(LoginPage.btnReset).toExist;
        expect(LoginPage.btnReset).toBeClickable;
        browser.pause(2000);
    })
});
describe('Login credentials verification', () => {
    it('should deny access when provide both a wrong username and password', () => {
        LoginPage.open ();
        LoginPage.email.setValue('maru@gmail.com')
        LoginPage.password.setValue('wrongpass')
        LoginPage.submit()
        expect(LoginPage.alertEmail).toHaveText('Invalid email address.')
        expect(LoginPage.alertPassword).toHaveText('Invalid password.')
        browser.pause(2000);
    })
    it('should deny access when providing a correct username and a wrong password', () => {
        LoginPage.email.setValue('mariana@gmail.com')
        LoginPage.password.setValue('wrongpass')
        LoginPage.submit()
        expect(LoginPage.alertPassword).toHaveText('Invalid password.')
        browser.pause(2000);
    })
    it('should allow access when providing correct inputs', () => {
        LoginPage.email.setValue('mariana@gmail.com')
        LoginPage.password.setValue('Maru123')
        LoginPage.submit()
        expect(LoginPage.alertPassword).not.toBeDisplayed('Invalid password.')
        expect(LoginPage.alertEmail).not.toBeDisplayed('Invalid email address.')
        expect(LoginPage.alertResult).toBeDisplayed('Your login data is: mariana@gmail.com  Maru123')
        browser.pause(2000);
    })
});
describe('Login form', () => {
    it('should deny access when providing a wrong username and leaving the passcode field empty', () => {
        LoginPage.open ();
        LoginPage.email.setValue('Mariana')
        LoginPage.password.setValue('')
        LoginPage.submit()
        expect(LoginPage.alertEmail).toHaveText('Invalid email address.')
        browser.pause(2000);
    })
});