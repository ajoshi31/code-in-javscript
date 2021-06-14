// Parent Controller
class Controller {
    constructor() {
        this.errors = [];
    }
    showDialog(title, msg) {
        console.log(title, msg);
    }
    success(msg) {
        this.showDialog("Success", msg);
    }
    faliure(err) {
        this.errors.push(err);
        this.showDialog("Faliure", err);
    }
}


// Children LoginController from Controler
class LoginController  extends Controller{
    constructor() {
        // super call for constructore
        super();
    }
    getUser() {
        return document.getElementById("login_username").value;
    }
    getPassword() {
        return document.getElementById("login_password").value;
    }
    validateEntry(user, pw) {
        user = user || this.getUser();
        pw = pw || this.getPassword();

        if (!(user && pw)) {
            return this.faliure("Please enter a password and username");
        } else if (pw.length < 5) {
            return this.faliure("Please enter a pawword of length 5 or more");
        } else {
            return true;
        }
    }
    // Override to extend base faliure
    faliure(msg) {
        // super call to the base method
        super.faliure( "Login Faliure " + msg);
    }
}

// Link child class prototype to parent
LoginController.prototype = Object.create(Controller.prototype);


// Child Controller for the Authentication
class AuthController extends Controller{
    constructor(login) {
        // super call for constructore
        super();
        // Extra composition
        this.login = login;
    }
    server(url, data) {
        // This ajax call returns a promise
        // $.ajax({
        //     url: url,
        //     data: data
        // })
        return new Promise((resolve, reject) => {
            if (true)
                resolve(true);

            else
                reject(false);
        });
    }
    checkAuth() {
        var user = this.login.getUser();
        var pw = this.login.getPassword();
        if (this.login.validateEntry(user, pw)) {
            this.server("/check-auth", {
                user: user,
                pw: pw
            })
                .then(this.success.bind(this))
                .catch(this.failure.bind(this));
        }
    }
    success() {
        // "super" call
        super.success("Authenticated!");
    }
    // Override to extend base `failure()`
    failure(err) {
        // "super" call
        super.success("Auth Failed: " + err);

    }
}

AuthController.prototype = Object.create(Controller.prototype);

var auth = new AuthController(
    // in addition to inheritance, we also need composition
    new LoginController()
);

auth.checkAuth()