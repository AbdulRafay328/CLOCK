setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let hrotation = 30 * htime + mtime / 2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;
    let hrs = document.querySelector("#hours");
    let min = document.querySelector("#minutes");
    let sec = document.querySelector("#seconds");
    if (hrs) {
        hrs.style.transform = `rotate(${hrotation}deg)`;
    }
    if (min) {
        min.style.transform = `rotate(${mrotation}deg)`;
    }
    if (sec) {
        sec.style.transform = `rotate(${srotation}deg)`;
    }
}, 1000);
