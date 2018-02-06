$(document).ready(function () {
/*
    $(".search").click(function () {
        $(".dd-checkbox").toggleClass("visible");       //не работает
    });*/
    $(".mainSearch").focus(
        function(){
            $(this).val(" ");
           // $(".filterList").show();
        }
    );
/*
    $(".mainSearch").blur(
        function(){
            $(".filterList").hide();
        }
    );*/

    $(".aViewModuleDropDown").click(
        function(){
            $(".viewModule > .dd-checkbox").show();
        }
    );
    $(".aViewModuleDropDown").dblclick(
        function(){
            $(".viewModule > .dd-checkbox").hide();
        }
    );
});
