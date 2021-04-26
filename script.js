$(document).ready(function(){
    $("button#logout").click(function(){
        alert("You are successfully logged out!.");
        window.location.href="./two.html"; 
    });

    $("button#reg").click(function(){
        if($('#name').val() && $('#email').val() && $('#pass1').val()===$('#pass2').val())
        {
            alert("Welcome "+ $("#name").val()+" click OK to continue");
            $("div#register").hide();
        }
        else if(!$('#email').val() && $('#name').val())
            alert("Please enter a valid email id");
        else if($('#pass1').val()!=$('#pass2').val())
            alert("Password did not match");
        else
            alert("Please enter your details");
    });


    var flick = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    $getJSON(flick, {
        tags: "sun, beach",
        tagmode: "any",
        format: "json"
    }).done(function(data) {
        console.log(data);
        $.each(data.items, function(index, item) {
            console.log(item);
            $("<img>").attr("src",item.media.m).appendTo("#flicker");
        });
    }).fail(function(){
        alert("Ajax call failed.");
    });
    


});