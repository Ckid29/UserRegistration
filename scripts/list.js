function displayUsers(usersArray){
    //travel the array
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];//get each user
        console.log(user);
        //create the tmp
    } 
    //create the row=`<>${} <>`
    //get each user
    //display the users

    //append the user on the html table append()
}
function init(){
    console.log("Listing users");
    let users=readUsers();// getting the array
    displayUsers(users);
}
window.onload=init;