import { Login } from "../pages/Login";
import { Checkout } from "../pages/Checkout";

// the logout tests
describe("Logout", () => {
    const login = new Login();
    const checkout = new Checkout();

    // the login is done before each test
    beforeEach(() => {
        cy.env(["user_name", "user_password"], { log: false }).then(({ user_name, user_password }) => {
            login.login(user_name, user_password);
        });
    });

    // the first test is to logout
    it("should logout", () => {
        checkout.Logout();
    });
});