$(document).ready(function () {

    //Hide menus on body click

    let search_form = ('.search-bar__advanced-search');
    // let search_form = ('.search-bar__advanced-search');;

    $(document).click((e) => {
        if (!search_form.is(e.target) &&
            $search_form.has(e.target).length==0) {

            $search_form.toggleClass('becomeVisible');
        }
    });

    // Dropdown menus

    $(".search-bar__input").click(function(){
        $(".search-bar__filter-icon").css("visibility", "visible");
        $(".navbar__search-bar").css("border-bottom", "1px solid #CDD6DB");
    });

    $(".search-bar__filter-icon").click(function(){
        $(".search-bar__advanced-search").toggleClass("becomeVisible");
        $(".search-bar__filter-icon").toggleClass('becomeBlue');
        console.log("the filter has been clicked");
    });

    $('.profile__add-options').click(function () {
        $(".add-options__add").toggleClass('becomeBlock');
        $(this).toggleClass("becomeGreen");
    });

    $('.profile__user').click(function () {
        $('.user__options').toggleClass('becomeBlock');
    });
    
    $('.sections__view-module').click(function () {
        $('.sections__menu').toggleClass('becomeBlock');
    });


    //Change center icon color
    $(".menu__section").click( function () {
        var col = $(this).find(".material-icons").css('color');
        $(".sections__view-module").css("color", col);
    });

    //region CHECKBOX DROPDOWN

        $(".advanced-search__option").click(function(){
            let $tick = $(this).find(".option__option-box_checked");
            let $box = $(this).find(".option__option-box");
            let $text = $(this).find(".option__text");
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

    let $search_form = $(".viewModule .dd-checkbox");
    $(document).click((e)=>{
      if(!$search_form.is(e.target)&&$search_form.has(e.target).length===0){
        console.log("blur");
        $search_form.toggleClass('open');
      }
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
