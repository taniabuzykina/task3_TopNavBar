$(document).ready(function () {
/*
    $(".search").click(function () {
        $(".dd-checkbox").toggleClass("visible");       //не работает
    });*/
    $(".mainSearch").focus(
        function(){
            $(this).val(" ");
        }
    );

});
