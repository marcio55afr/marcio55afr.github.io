


$(document).ready(function(){
    
    /*Calculate the age from the bithday*/
    const age_miliseconds = new Date().getTime() - new Date(1997,09,29).getTime();
    const age = Math.round(age_miliseconds/31536000000)
    $("#age").text($("#age").text().replace("?", age))

    /*Calculate the actual year*/
    const actual_year = new Date().getFullYear()
    $("#rights").text($("#rights").text().replace("?", actual_year))

    /*Show each information*/
    $(".ctrl-model").click( function(){
        var opt = $(this);
        $("opt").removeClass("active");
        $(".module").fadeOut(400);
        $("#" + opt.attr("value")).delay(400).fadeIn(500);
    });

    /*Zoom image by clicking*/
    var img_expanded = false;
    $("#img-perfil").click(function(){
        if(img_expanded){
            $(this).animate({
                width: '86px',
                height: '86px',
                borderRadius: '50%'
            });

            $(this).addClass("img-perfil-bigger");
            setTimeout(function(){
                $("#img-perfil").fadeIn(400).removeClass("img-perfil-bigger");
            },400);
        }
        else{
            $(this).animate({
                width: '245px',
                height: '245px',
                borderRadius: '10%'
            });
            $(this).addClass("img-perfil-bigger");
        }
        img_expanded = !img_expanded 
    });
    
    /*Navegation bar collapse*/
    $("#navButton").click(function(){
        if($("#data-bar").hasClass("show"))
            $("#navbar-options").addClass("navbar-options");
        else
            $("#navbar-options").removeClass("navbar-options");
    });

});