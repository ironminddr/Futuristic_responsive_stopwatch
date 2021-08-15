window.onload = function () {

var start_button = document.getElementById("start-button");
var stop_button = document.getElementById("stop-button");
var reset_button = document.getElementById("reset-button");

var seconds_tag = document.getElementById("seconds");
var miliseconds_tag = document.getElementById("miliseconds")

var time_from_start=0
var pause = false

start_button.onclick = function(){
    if (time_from_start>0)
    {
        pause=false;
        increment_time();
    }
    else
    {
        time_from_start = 0;
        pause=false;
        increment_time();
    }
    
}

stop_button.onclick = function(){
    pause =true;

}

reset_button.onclick = function(){
    time_from_start =0;
    pause=true;
    miliseconds_tag.innerHTML = '00';
    seconds_tag.innerHTML = '00';
}

function increment_time()
{
    
    setTimeout(function(){
            if (pause){
                return;
            }
            
            time_from_start +=10;

            miliseconds_str= time_from_start.toString().slice(-3,-1);
            seconds_str= Math.floor(time_from_start/1000).toString();

            if (time_from_start >= 1000)
            {
                miliseconds_tag.innerHTML = miliseconds_str.length<=1?'0'+miliseconds_str:miliseconds_str;
                seconds_tag.innerHTML = seconds_str.length<=1?'0'+seconds_str:seconds_str;
            }
            else
            {
                miliseconds_tag.innerHTML = miliseconds_str.length<=1?'0'+miliseconds_str:miliseconds_str;
                seconds_tag.innerHTML = '00';
            }
 
            increment_time();


        },10)
}
};