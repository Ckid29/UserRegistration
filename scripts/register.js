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

function isValid(user){
    //mandatory email and password
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    if(user.email.length==0){
        valid=false;
        console.error("Add an email");
    }
    if(user.password==0){
        valid=false;
        console.error("Add a password");
    }
    return valid;
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

    let newUser = new User(inputfName, inputlName,inputEmail,inputPassword,inputGender,inputAddress,inputPhone,inputPaymentMethod,inputColor);
    if(isValid(newUser)){
        console.log(newUser);
    }
}

    //if()
function init(){
    console.log("Init Function");

    let user1 = new User("Nathan, Hundley, Cmonsterkid@hotmail.com,123456")
    let user2 = new User("Kevin, Carpenter, ccerda@gmail.com, 777777")
    console.log(user1,user2);
}

window.onload=init;
