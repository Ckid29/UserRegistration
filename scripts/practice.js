// selecting the txtEmail with JS
// let email=document.getElementById
// selectors type:
// #id, .class, tag
// jquery = $

//selecting by ID
email=$("#txtEmail").val();
console.log(email);

//selecting by className
//let formControl = $(".form-control");
//console.log(formControl);

let formControl = $(".form-control");
formControl.hide();

//selecting by tagName
// let input = document.getElementsByTagName("label");
// console.log(labels);
let labels = $("label");
console.log(labels);

//External
//*Notes-jquery is a JS framework is fast and small. https://jquery.com/
//Do more writing less
//JQuery = $
//Jquery uses the CSS selectors