$(document).ready(function () {
/*
    $(".search").click(function () {
        $(".dd-checkbox").toggleClass("visible");       //не работает
    });*/
    $(".mainSearch").focus(function(){
        $(".filterList").show();
        $(".search").css("border-bottom", "1px solid lightgrey");
    });
    $(".mainSearch").blur(function(){
        $(".filterList").hide();
    });

    $(".aViewModuleDropDown").click(function(){
        $(".viewModule > .dd-checkbox").show();
    });

    $(".moduleMenuOption").click(function(){
        $(".viewModule > .dd-checkbox").hide();
    }/* , function () {
        var colorClass = $(this).attr('class');
        $(".aViewModuleDropDown > .material-icons.layoutViolet").addClass(colorClass);
    } */);

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

