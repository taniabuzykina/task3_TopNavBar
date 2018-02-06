$(document).ready(function () {
/*
    $(".search").click(function () {
        $(".dd-checkbox").toggleClass("visible");       //не работает
    });*/
    $(".mainSearch").focus(function(){
        $(".filterList").show();
        $(".search").css("border-bottom", "1px solid lightgrey");
    });
    /*$(".search").blur(function(){
        $(".filterList").hide();
    });*/
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
    }/*, function(){
        $(".viewModule > .dd-checkbox").hide();
    }*/);

/*$(".aViewModuleDropDown").click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
            $(".viewModule > .dd-checkbox").show();
        } else {
            $(".viewModule > .dd-checkbox").hide();
        }
        $(this).data("clicks", !clicks);
    });

    $(".moduleMenuOption").click(function(){
        $(".viewModule > .dd-checkbox").hide();
    }, function(){
        
    }); */
    /*
    $(".viewModule > .dd-checkbox").blur(function(){
        $(".viewModule > .dd-checkbox").hide();
    });*/
});

