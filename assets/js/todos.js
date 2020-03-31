
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");	 
});
$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").on("keypress",function(event){
	if(event.which===13)
	{
	var newtodo=$(this).val();
   
    $("ul").append("<li><span><i class='fas fa-minus-circle'></i></span>"+newtodo+"</li>");
    $("input[type='text']").val("");
	    }
});
$("ul").on("click","li",function(){
	$(this).children("span").toggleClass("slide");	 
});
$(".fa-plus").on("click",function()
	{
		$("input").fadeToggle();
	});