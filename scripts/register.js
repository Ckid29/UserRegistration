//create a User Constructor

//display the new user on the console

class User {
    constructor(fname, lname, email, password, gender, address, phone, paymentmethod,color) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
        this.paymentmethod = paymentmethod;
        this.color = color;
    }
}

function register(){
    let inputfName = $("#txtFirstName").val();
    let inputlName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let gender = $("#txtGender").val();
    let address = $("#txtAddress").val();
    let phone = $("#phone").val();
    let paymentmethod = $("#paymentmethod").val();
    let color = $("#color").val();

    console.log(inputfName,inputlName,inputEmail,inputPassword);
    let newUser = new User(inputfName, inputlName,inputEmail,inputPassword);
}

function init(){
    console.log("Init Function");

    let user1 = new User("Nathan, Hundley, Cmonsterkid@hotmail.com,123456")
    let user2 = new User("Kevin, Carpenter, ccerda@gmail.com, 777777")
    console.log(user1,user2);
}

window.onload=init;
