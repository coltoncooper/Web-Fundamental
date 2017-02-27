$(document).ready(function(){
    // $('body').click(function(){
    //     alert("hello");
    // })

    $("#hide").click(function(){
        $('p').hide();
    })
    $("#show").click(function(){
        $('p').show();
        $("button").css("background-color", "yellow");
    })

    $("h3").hover(function(){
        $("h3").text("This is my new text");
    },function(){
        $("h3").text("This is my original text")
    })

    $("h3").click(function(){
        $("#result").append(" pass");
    })

    var x=["Apple", "Orange", "Carrot"];
    var y=1979;
    var name="Edwin";
    var bot=$('#hide');

    console.log(x,y,name,bot);

    $("#ch4hide").hover(function(){
        $('button .hideclass').css("background-color", "yellow");
    },function(){
        $('button .hideclass').css("background-color", "gray");
    })
    $("#ch4show").hover(function(){
        $('#show').css("background-color", "red");
    },function(){
        $("#show").css("background-color", "gray");
    })

    $("#toggler").click(function(){
        $(".aftertoggle").toggle("fast");
        $(".beforetoggle").toggle("fast");
    })
});

