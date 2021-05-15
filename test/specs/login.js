const LoginPage = require("../pageobjects/login.page");

describe("Login automation", () =>{
    beforeAll("Open browser", () => {
        LoginPage.open();
    });
    describe("Login email testing", () => {
        it("if email input is empty show the proper msg", () => {
            LoginPage.inputEmail.click();
            LoginPage.inputEmail.keys("Tab");
            expect(LoginPage.emailError).toHaveText("The email is invalid");
            browser.pause(3000);    
        });
        it("if email is invalid show the proper msg", () => {
            LoginPage.setEmail("maru");
            expect(LoginPage.emailError).toHaveText("The email is invalid");
            browser.pause(2000);    
        });
    });
    describe("Login password testing", () => {
        it("if password input is empty show the proper msg", () => {
            LoginPage.inputPassword.click();
            LoginPage.inputPassword.keys("Tab");
            expect(LoginPage.passwordError).toHaveText("The password must contain at least 8 characters, consisting of letters and numbers");
            browser.pause(3000);  
        });
        it("if password is invalid show the proper msg", () => {
            LoginPage.setPassword("wrongpass");
            expect(LoginPage.passwordError).toHaveText("The password must contain at least 8 characters, consisting of letters and numbers");
            browser.pause(2000);    
        }); 
    });
    describe("Testing Login btn", () => {
        it("Register btn display user data", () => {
            LoginPage.login("validemail@gmail.com", "password01");
            LoginPage.btnLogin.keys("Tab");
            LoginPage.btnLogin.keys("Enter");
            expect(LoginPage.validations).toHaveTextContaining(["validemail@gmail.com",
            "password01"]);
            browser.pause(3000);  
        });
    });
});