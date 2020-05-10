selectedTypes = ["EDU", "VOL", "VISITS"];
selectedMonths = ["GEN", "FEB", "MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT", "NOV", "DEC"];


events = document.getElementsByClassName('event')

var curMonth = "ALL";
var curType = "ALL";








filterMonths = function (month) {
    curMonth = month;
    allMonthBtns = document.getElementsByClassName("month-btn");

    for(let btn of allMonthBtns){
        $(btn).removeClass("active");
    }
    if (!($(event.currentTarget).hasClass("active"))) {
        $(event.currentTarget).addClass("active");
        for (let ev of events) {
            if (($(ev).hasClass(month) || curMonth=="ALL") && ($(ev).hasClass(curType) || curType == "ALL")) {
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



filterTypes = function (type) {
    curType = type;
    allTypesBtns = document.getElementsByClassName("type-btn");

    for(let btn of allTypesBtns){
        $(btn).removeClass("active");
    }
    if (!($(event.currentTarget).hasClass("active"))) {
        $(event.currentTarget).addClass("active");
        for (let ev of events) {
            if (($(ev).hasClass(type) || curType == "ALL") && ($(ev).hasClass(curMonth) || curMonth == "ALL")) {
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
