$("#dona30").hide();
$("#dona50").hide();
$("#dona100").hide();


showComment = function(commentID){ 
    IDs = ["#dona30", "#dona50", "#dona100"]
    for( i in IDs){
        if(i==commentID){
            $(commentID).show(700);
        }
        else{
            $(i).hide(700);
        }
    }
}
