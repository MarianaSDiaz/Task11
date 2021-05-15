const RegisterPage = require("../pageobjects/register.page");

describe("Register automation", () =>{
    beforeAll("Open browser", () => {
        RegisterPage.open();
    });
    describe("Register name testing", () => {
        it("if name input is empty show the proper msg", () => {
            RegisterPage.inputName.click();
            RegisterPage.inputName.keys("Tab");
            expect(RegisterPage.nameError).toHaveText("The name must contain at least 6 letters and a space");
            browser.pause(3000);    
        });
        it("if name is invalid show the proper msg", () => {
            RegisterPage.setName("maru");
            expect(RegisterPage.nameError).toHaveText("The name must contain at least 6 letters and a space");
            browser.pause(2000);    
        });
    });
    describe("Register email testing", () => {
        it("if email input is empty show the proper msg", () => {
            RegisterPage.inputEmail.click();
            RegisterPage.inputEmail.keys("Tab");
            expect(RegisterPage.emailError).toHaveText("The email must contain a valid format");
            browser.pause(3000);    
        });
        it("if email is invalid show the proper msg", () => {
            RegisterPage.setEmail("maru.com");
            expect(RegisterPage.emailError).toHaveText("The email must contain a valid format");
            browser.pause(2000);    
        });
    });
    describe("Register password testing", () => {
        it("if password input is empty show the proper msg", () => {
            RegisterPage.inputPassword.click();
            RegisterPage.inputPassword.keys("Tab");
            expect(RegisterPage.passwordError).toHaveText("The password must contain at least 8 characters, consisting of letters and numbers");
            browser.pause(3000);    
        });
        it("if password is invalid show the proper msg", () => {
            RegisterPage.setPassword("invalidpassword");
            expect(RegisterPage.passwordError).toHaveText("The password must contain at least 8 characters, consisting of letters and numbers");
            browser.pause(2000);    
        });
    });
    describe("Register confirm password testing", () => {
        it("if confirm input is empty show the proper msg", () => {
            RegisterPage.inputConfirm.click();
            RegisterPage.inputConfirm.keys("Tab");
            expect(RegisterPage.confirmError).toHaveText("Passwords do not match");
            browser.pause(3000);    
        });
        it("if confirm password is wrong show the proper msg", () => {
            RegisterPage.setConfirm("wrongpass01");
            expect(RegisterPage.confirmError).toHaveText("Passwords do not match");
            browser.pause(2000);    
        });
    });
    describe("Testing Reset btn", () => {
        it("Reset btn erase all inputs", () => {
            RegisterPage.btnSubmit.keys("Tab");
            RegisterPage.btnReset.keys("Enter");
            expect(RegisterPage.allSets()).toEqual();
            browser.pause(3000);  
        });
    });
    describe("Testing Register btn", () => {
        it("Register btn display user data", () => {
            RegisterPage.completeRegister("Valid User", "validemail@gmail.com", "password01", "password01");
            RegisterPage.btnSubmit.keys("Tab");
            RegisterPage.btnSubmit.keys("Enter");
            expect(RegisterPage.validations).toHaveTextContaining(["Valid User", "validemail@gmail.com",
            "password01", "password01"]);
            browser.pause(3000);  
        });
    });
})
