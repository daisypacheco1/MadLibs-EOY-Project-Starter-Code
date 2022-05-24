let storiesCreated = 0
;
$(".submit").click(function(){
    let username = $(".name-input").val();
    let transport = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let time = $(".number-input").val();
    storiesCreated = storiesCreated + 1;
    console.log(username,transport, adjective, time, storiesCreated);
    $(".story").append("One day my friend " + username + " and I decided to take a trip to the beach, so we packed our bags and took the " + transport + " over. It was a " + adjective + " day at the beach! We ended up staying for " + time + " hours! ");
});    

