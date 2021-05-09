const RegisterPage = require ('../pageobjects/register.page');

describe('Register form', () => {
    it('should deny access with wrong username', () => {
        RegisterPage.open ();
        RegisterPage.email.setValue('maru@gmail.com')
        RegisterPage.password.setValue('Maru123')
        RegisterPage.submit()
        expect(RegisterPage.alertEmail).toHaveText("Invalid email address")
    })
});