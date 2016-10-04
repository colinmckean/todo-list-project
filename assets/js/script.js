$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").on("keypress", function(e){
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i> </span> ' + todoText + "</li>")
    }
})
$(".fa-plus-circle").on("click", function(){
    $("input[type='text']").fadeToggle()
})
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