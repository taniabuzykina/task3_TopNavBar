$(document).ready(function () {

    $(".mainSearch").focus(function(){
        $(".filterList").show();
        $(".inputarea").css("border-bottom", "1px solid lightgrey");
        $(".searchicon").css("color", "black");
    });

    function searchhide(){
      $(".filterList").hide();
      $(".search").css("border-bottom", "none");
      $(".searchicon").css("color", "#79919d");
    }


    $(".inputarea").blur(function(){
        console.log("not clicked");
        searchhide();
      });
      //$('body').on('click', '.filterList')
        /*$(".filterList").hide();
        $(".search").css("border-bottom", "none");
        $(".searchicon").css("color", "#79919d");
        $(".search > .dd-checkbox").removeClass("becomeVisible");*/

    $(".filterList").click(function(){
        $(".search > .dd-checkbox").toggleClass("becomeVisible");
        console.log("the filter has been clicked");
    });

    $(".mainSearch").blur(function(){
        console.log("filter has lost the focus");
        searchhide();
    });
    //region CHECKBOX DROPDOWN

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

    function Obj(query, options) {
        this.query = query;
        this.options = options;
    }

    $( ".search" ).keypress(function( event ) {
        if ( event.which == 13 ) {
            let $querylog = $(".mainSearch").val();
            let $arr = [];
            let $text = $(this).find(".p-checked")
                .map(function () {
                    $arr.push($(this).text());
                });
            let obj = new Obj($querylog, $arr);
            console.log(obj);
        }
    });
    //endregion


    let $view_module = $(".viewModule .dd-checkbox");
    $(".aViewModuleDropDown").click(function(){
        if($view_module.hasClass('open'))
            $view_module.removeClass('open');
        else
            $view_module.addClass('open');
    });

    $(".aViewModuleDropDown").blur(function(){
        $view_module.removeClass('open');
    });

        $(".moduleMenuOption").click( function () {
            var col = $(this).find(".material-icons").css('color');
            $(".aViewModuleDropDown > .material-icons.layoutViolet").css("color", col);
            $view_module.removeClass('open');
        });


    $(".addClick").click(function () {
        $(".drop-add").toggleClass("show-block");
        console.log("focus");
    });

    $(".addClick").blur(function () {
        $(".drop-add").removeClass("show-block");
    });

    $(".arrowDropdown").click(function(){
        $(".arrow > .dd-checkbox").toggleClass("becomeVisible");
    });

    $(".arrowDropdown").blur(function(){
        $(".arrow > .dd-checkbox").removeClass("becomeVisible");
    });
});
