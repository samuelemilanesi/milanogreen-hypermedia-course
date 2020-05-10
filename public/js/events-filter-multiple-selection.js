selectedTypes = ["EDU","VOL","VISITS"];
selectedMonths= ["GEN","FEB","MAR","APR","MAG","GIU","LUG","AGO","SET","OTT","NOV","DEC"];


events = document.getElementsByClassName('event')





toHide = function(evClasses){
    //returns true if the event having classes evClasses must to be hidden
        for(let k of selectedMonths){
            if(evClasses.includes(k)){
                for(let m of selectedTypes){
                    if(evClasses.includes(m)){
                        return false;
                    }
                }
            }
        }
    return true;
}

filterByKey= function(key, selectedKeys){
    selectedKeys.push(key);
    console.log("mesi selezionati: ", selectedMonths.length)
    for(let ev of events){
        evClasses=ev.className.split(" ");
        
        if(selectedKeys==selectedTypes){
            if(selectedTypes.length == 3){
                
                filterAllTypes();
                return;
            }
        }
        else{
            if(selectedMonths.length == 7){
                console.log("selezionati tutti i mesi");

                filterAllMonths();
                return;
            }
        }
        if(toHide(evClasses, selectedKeys)){
            
            $(ev).hide(700);
            $(ev).addClass("hidden");
        }
        else{
            $(ev).show(700);
            $(ev).removeClass("hidden");
        }
        
    }
}

unfilterByKey = function(key, selectedKeys){
    selectedKeys.splice(selectedKeys.indexOf(key),1);

    if(selectedKeys.length==0){
        if(selectedKeys==selectedMonths){
            filterAllMonths();
            return;
        }
        else{
            filterAllTypes();
            return;
        }
    }

    for(let ev of events){
        evClasses=ev.className.split(" ");

        if(!toHide(evClasses,selectedKeys)){
            
            $(ev).show(700);
            $(ev).removeClass("hidden");
        }
        else{
            $(ev).hide(700);
            $(ev).addClass("hidden");
        }
    }
}



// FILTERING MONTHS 

filterMonths = function(month){
    let trigClasses=event.currentTarget.className.split(" ");
    
    let allMonthBtn = document.getElementById("all-months-btn");
    let allBtnMonthsActive = allMonthBtn.className.split(" ").includes("active")

    if(allBtnMonthsActive){
        selectedMonths = [];
        $(allMonthBtn).removeClass("active");
    }

   

    if(trigClasses.includes("active")){
        $(event.currentTarget).removeClass("active");
        unfilterByKey(month, selectedMonths);

    }
    else{
        $(event.currentTarget).addClass("active");
        filterByKey(month, selectedMonths);

    }

    zeroEventsMessage();

}


filterAllMonths = function(){
    $("#zero-events").hide();
    let allMonthBtn = document.getElementById("all-months-btn");
    $(allMonthBtn).addClass("active");
    selectedMonths = ["GEN","FEB","MAR","APR","MAG","GIU","LUG","AGO","SET","OTT","NOV","DEC"];
    for(let ev of events){
        $(ev).show(700);
    }
    let allBtns = document.getElementsByClassName("month-btn");

    for(let btn of allBtns){
        $(btn).removeClass("active");
    }
}




// FILTERING TYPES 

filterTypes = function(type){
    let trigClasses=event.currentTarget.className.split(" ");
    console.log(trigClasses);
    
    let allTypesBtn = document.getElementById("all-types-btn");
    let allTypesBtnActive = allTypesBtn.className.split(" ").includes("active")

    if(allTypesBtnActive){
        selectedTypes = [];
        $(allTypesBtn).removeClass("active");
    }

   

    if(trigClasses.includes("active")){
        $(event.currentTarget).removeClass("active");
        unfilterByKey(type, selectedTypes);

    }
    else{
        $(event.currentTarget).addClass("active");
        filterByKey(type, selectedTypes);

    }

    zeroEventsMessage();
}

filterAllTypes = function(){

    $("#zero-events").hide();

    let allTypesBtn = document.getElementById("all-types-btn");
    $(allTypesBtn).addClass("active");
    selectedTypes = ["EDU","VOL","VISITS"];
    for(let ev of events){
        $(ev).show(700);
    }
    let allBtns = document.getElementsByClassName("type-btn");

    for(let btn of allBtns){
        $(btn).removeClass("active");
    }

  

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
        $("#zero-events").show();
    }
    else{
        $("#zero-events").hide();
    }
}
