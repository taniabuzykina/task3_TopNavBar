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

    $(".option").click(function(){
        let $tick = $(this).find(".material-icons.tick");
        let $box = $(this).find(".option-box");
        let $text = $(this).find("p");
        if($tick.hasClass('checked')) {
            $tick.removeClass('checked');
            $box.removeClass('box-checked');
            $text.removeClass('p-checked');
        }
        else {
            $tick.addClass('checked');
            $box.addClass('box-checked');
            $text.addClass('p-checked');
        }
    });

    $( ".mainSearch" ).keypress(function( event ) {
        if ( event.which == 13 ) {
            let $querylog = $(".mainSearch").val();
            console.log($querylog);
            var {logquery, logoptions} = consolelog();
            
        }
    });

});

