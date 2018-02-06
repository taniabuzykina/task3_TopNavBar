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

    $(".aViewModuleDropDown").click(function(){
        $(".viewModule > .dd-checkbox").toggleClass("becomeVisible");
    });

    $(".moduleMenuOption").click( function () {
        var col = $(this).css('color');
        $(".aViewModuleDropDown > i.material-icons.layoutViolet").css("color", "black");
    }, function(){
        $(".viewModule > .dd-checkbox").hide();
    });

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

