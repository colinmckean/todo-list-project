$("li").on("click", function(){
    $(this).toggleClass("completed");
});

////selects list items and attaches click listener
//$("li").on("click", function(){
//    //if list item is grey change to black and remove line through
//    if($(this).css("color") === "rgb(128, 128, 128)"){
//        $(this).css({color: "black", textDecoration: "none"});
//    }else{
//        //else add strike through and change to grey
//    $(this).css({color: "grey","textDecoration":"line-through"});
//    }
//});