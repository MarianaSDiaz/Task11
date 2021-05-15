class LoginPage {
    get inputEmail () { return $('#email') }
    get emailError () { return $('#emailError') }
    get inputPassword () { return $('#password') }
    get passwordError () { return $('#passwError') }
    get btnLogin () { return $$('.button')[0] }
    get validations () { return $('#log-alert') }

    login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
    }
    setEmail (value){
        this.inputEmail.click();
        this.inputEmail.setValue(value);
        this.inputEmail.keys("Tab");
    }
    setPassword (value){
        this.inputPassword.click();
        this.inputPassword.setValue(value);
        this.inputPassword.keys("Tab");
    }
    open () {
        return browser.url('https://marianasdiaz.github.io/Task9/login.html');
    }
}

module.exports = new LoginPage();