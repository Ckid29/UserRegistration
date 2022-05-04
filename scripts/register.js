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
    $("input").removeClass("input-error");
    if(user.email.length==0){
        valid=false;
        console.error("Add an email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password==0){
        valid=false;
        console.error("Add a password");
        $("#txtPassword").AddClass("input-error");
    }
    return valid;
}

function validatePass(){
    console.log("validating pass");
    //get the value from the input
    let txtPass=$("#txtPassword");
    let password=txtPass.val();
    
    //is the password less than 6 characters
    if(password.length<6){
        txtPass.css("background", "#ff9898");//jquery function to change the css
    }else{
        txtPass.css("background","#64ce66"); //jquery function to change the
    }
}

    //compare if the password is less than 6 characters?
    //$ function to change the css
    
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
        saveUser(newUser);//this fn is on the storeManager
        $('input').val("");// clear the inputs
    }
}

    //if()
function init(){
    console.log("Register");

    $("txtPassword").keyup(validatePass);// it is excuted evertime that the key
}

window.onload=init;
