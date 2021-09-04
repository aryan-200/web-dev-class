function timeclock() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    ampm = "AMPM";

    if (hour > 12) {
        ampm = "PM";
    }else{
        ampm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let now = hour + ":"
        + min + ":" + sec + ampm;

    document.getElementById("clock")
        .innerHTML = now;
}
setInterval(timeclock, 1000);
timeclock();
