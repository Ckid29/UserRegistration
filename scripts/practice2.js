//click on the button and increase the counter
let c=0;
let div=$("counter");

function counter(){
    c++;
    div.text;
}

function init(){
    $("#btn-counter").on('click',counter);
    $("btn-counter").on('mouseover',function(){
        console.log("The user attempts a click");
    //hide
    $("#link-info1").on("mouseover",function(){
    $("#div-info2").hide();
    $("div-info1").show();
    $(this).addClass({'color','#222'});
    });
    $("link-info2").on("mouseover",function(){
    $("div-info1").hide();
    $("#div-info2").show();
    });

}

window.onload=init;
