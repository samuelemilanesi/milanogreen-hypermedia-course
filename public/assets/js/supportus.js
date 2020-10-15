selectedTypes = ["PAN", "DON", "ALB", "SPO"];


events = document.getElementsByClassName('event')


filterTypes = function (type) {
    curType = type;
    allTypesBtns = document.getElementsByClassName("type-btn");

    for(let btn of allTypesBtns){
        $(btn).removeClass("active");
    }
    if (!($(event.currentTarget).hasClass("active"))) {
        $(event.currentTarget).addClass("active");
        for (let ev of events) {
            if (($(ev).hasClass(type))) {
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
        }
    }
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
$("#dona30").show();
$("#dona50").hide();
$("#dona100").hide();


showComment = function(commentID){ 
	console.log(commentID)
    IDs = ["#dona30", "#dona50", "#dona100"]
    for( i of IDs){
        if(i==commentID){
			console.log("ora mostro")
            $(commentID).show(500);
        }
        else{
            $(i).hide(500);
        }
	}

	$(".bg-active").removeClass("bg-active");
	$(event.target).addClass("bg-active");

	
}
