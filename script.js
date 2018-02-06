$(document).ready(function () {
/*
    $(".search").click(function () {
        $(".dd-checkbox").toggleClass("visible");       //не работает
    });*/
    $(".mainSearch").focus(function(){
        $(".filterList").show();
    });
/*
    $(".mainSearch").blur(function(){
        $(".filterList").hide();
    });*/

    $(".aViewModuleDropDown").click(function(){
        $(".viewModule > .dd-checkbox").show();
    });
    
    $(".moduleMenuOption").click(function(){
        $(".viewModule > .dd-checkbox").hide();
    });
});
