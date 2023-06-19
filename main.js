//elements
const myname = document.querySelector("myname"),
    greeting = document.getElementById("greeting"),
   // time = document.getElementById("time"),
    desc = document.querySelector("desc");


function showTime(){
    var x = new Date();
    
    let hour = x.getHours(),
        min = x.getMinutes(),
        mint = min <10? ("0"+min) : min;
        sec = x.getSeconds(),
        sec = sec <10? ("0"+sec) : sec;
        //set ampm
        let ampm = hour >= 12? "PM" : "AM";
        //12 hour format
        hour = hour > 12? hour%12 : hour;
        hour = hour <12? ("0"+hour) : hour;
    
    var x1 = hour+":"+ mint+":"+ sec+ ampm;
    //show clock
    document.getElementById('time').innerHTML = x1;
    
}
setInterval(showTime,1000);

//set background image
function backgroundimg(){
    let time = new Date();
    let x = time.getHours();
    console.log(x);

    if(x < 12)          //for morning
    {
        document.body.style.background = "url('./img/morning.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = "#000";
        greeting.textContent = "Good Morning";
        

    }else if(x < 18)      //for afternoon
    {
        document.body.style.background = "url('./img/afternoon.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = "#000";
        greeting.textContent = "Good Afternoon";
    }else                   // for evening
    {
        document.body.style.backgroundImage = "./img/evening.jpg";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = "#000";
        //greeting.textContent = "Good Evening";
        //console.log(greeting);
    }
}

//get name
function getName()
{
    if(localStorage.getItem("myname") == null)
    {
        myname.textContent = "[Enter Your Name]";
    }else
    {
        myname.textContent = localStorage.getItem("myname");
    }
}

backgroundimg();
getName();







