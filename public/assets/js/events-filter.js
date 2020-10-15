selectedTypes = ["EDU", "VOL", "VISITS"];
months = ["GEN", "FEB", "MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT", "NOV", "DEC"]
selectedMonths = months;


events = document.getElementsByClassName('event')

var curMonth = "ALL";
var curType = "ALL";


var curDate = new Date();
var curMonthIdx = curDate.getMonth();


for( i=curMonthIdx; i<curMonthIdx+7; i++){
    $("#btn-row2").append(`
        <button class="filter-btn onlytext-btn month-btn" onclick="filterMonths('${months[i%12]}')">
            <p>${months[i%12]}</p>
        </button>
    `)
}





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
