class RegisterPage {
    get inputName () { return $('#fname') }
    get nameError () { return $('#fnameError') }
    get inputEmail () { return $('#email') }
    get emailError () { return $('#emailError') }
    get inputPassword () { return $('#passw') }
    get passwordError () { return $('#passwError') }
    get inputConfirm () { return $('#rpassw') }
    get confirmError () { return $('#rpasswError') }
    get btnSubmit () { return $$('.submit')[0] }
    get btnReset () { return $$('.reset')[0] }
    get validations () { return $('#reg-alert') }

    completeRegister (name, email, password, confirm) {
        this.inputName.setValue(name);
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.inputConfirm.setValue(confirm);
    }
    setName (value){
        this.inputName.click();
        this.inputName.setValue(value);
        this.inputName.keys("Tab");
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
    setConfirm (value){
        this.inputConfirm.click();
        this.inputConfirm.setValue(value);
        this.inputConfirm.keys("Tab");
    }
    allSets(){
        this.setName();
        this.setEmail();
        this.setPassword();
        this.setConfirm();
    };
    open () {
        return browser.url('https://marianasdiaz.github.io/Task9/register.html');
    }
}

module.exports = new RegisterPage();