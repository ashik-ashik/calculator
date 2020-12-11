



function calculate(x){
    document.form.output.value = document.form.output.value+x;
}

function clock(){
    var mydate = new Date();

    var second = mydate.getSeconds();
    var minute  = mydate.getMinutes();
    var hour    = mydate.getHours();
    var date = mydate.getDate();
    var day = mydate.getDay();
    var mon = mydate.getMonth();
    var year = mydate.getFullYear();

    var da = ['Sunday','Monday','Tuesday','Wednesday','Thurshday','Friday','Saterday'];
    var dayname = da[day];

    var mo = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    var month = mo[mon];

    if(hour < 10){
        document.getElementById('hour').innerText = '0'+hour + ' ';
    }else{
        document.getElementById('min').innerText = hour + " ";
    };
    if(minute < 10){
    document.getElementById('min').innerText = '0'+minute + " ";
    }else{
        document.getElementById('min').innerText = minute + " ";
    };

    document.getElementById('sec').innerText = second ;
    if(hour <12){
        document.getElementById('ampm').innerText = "AM"
    }else{
        document.getElementById('ampm').innerText = "AM"
    };
    if(second%2 == '0'){
        document.getElementById('dot').style.color = "red";
    }else{
        document.getElementById('dot').style.color = "#ffc404";
    }
    document.getElementById('year').innerText = date + " "+ month + ' , ' + year+ ' , '+  dayname ;
}
setInterval(clock, 1000)