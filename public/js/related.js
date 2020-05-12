selectedTypes = ["SER", "EVE", "TEAM"];


events = document.getElementsByClassName('event')


var curType = "ALL";











filterTypes = function (type) {
    curType = type;
    allTypesBtns = document.getElementsByClassName("type-btn");

    for(let btn of allTypesBtns){
        $(btn).removeClass("active");
    }
    if (!($(event.currentTarget).hasClass("active"))) {
        $(event.currentTarget).addClass("active");
        for (let ev of events) {
            if (($(ev).hasClass(type) || curType == "ALL")) {
                $(ev).show(700);
                $(ev).removeClass("hidden");

            }
            else {
                $(ev).hide(700);
                $(ev).addClass("hidden");

            }
        }
    }
    zeroEventsMessage();
}



countHidden = function(){
    cnt = 0;
   
    for(let ev of events){
        if(ev.className.split(" ").includes("hidden")){
            cnt++;
            console.log(ev)
        }
    }
    console.log('elementi invisibili: ', cnt);
    return cnt;
    
}

zeroEventsMessage = function(){
    if(countHidden() == events.length )
    {
        $("#zero-events").show(700);
    }
    else{
        $("#zero-events").hide(700);
    }
}
