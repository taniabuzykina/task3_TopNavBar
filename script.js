$(document).ready(function () {
    $(".mainSearch").focus(function(){
        $(".filterList").show();
        $(".search").css("border-bottom", "1px solid lightgrey");
    });
    $(".filterList").click(function(){
        $(".search > .dd-checkbox").toggleClass("becomeVisible");
    });

    let $view_module = $(".viewModule .dd-checkbox");
    $(".aViewModuleDropDown").click(function(){
        if($view_module.hasClass('open')) 
            $view_module.removeClass('open');
        else 
            $view_module.addClass('open');
    });

    $(".moduleMenuOption").click( function () {
        var col = $(this).find(".material-icons").css('color');
        $("#abc").css("color", col);
        $view_module.removeClass('open');
    });
    
    $(".arrowDropdown").click(function(){
        $(".arrow > .dd-checkbox").toggleClass("becomeVisible");
    });
});
