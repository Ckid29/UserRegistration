const STORE_KEY ="users";

function saveUser(user){
    let oldData=readusers();// getting localstorage info
    oldData.push(user);
    let val=JSON.stringify(OldData);
    localStorage.setItem(STORE_KEY,val);//
}
function readUsers(){
    let data=localStorage.getItem(STORE_KEY);
    console.log(data); // <-JSON
    if(!data){ //is not data?
        //if you get here it means is empty
        return [];// creating the array
    }else{
        //we have data
        let list = JSON.parse(data);// pasing JSON to obj
        return list;//return the list of obj
    }

}
