function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";

    if (hrs === 0) hrs = 12;
    if (hrs > 12) {
      hrs = hrs - 12;
      period = "PM";
      
    }

    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    let time = `${hrs}:${mins}:${secs} ${period}`;
    setInterval(clock, 1000);
    document.getElementById("clock").innerText = time;

    
  }
  clock();



  const currentTime = ()=>{

  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";

  if (hrs === 0) hrs = 12;
  if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
    
  }

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  let time = `${hrs}:${mins}:${secs} ${period}`;
  return time;

  }

  
  const clockIn = document.getElementById("clockIn");
  clockIn.onclick = ()=>{ 
      
    localStorage.setItem('clockIn',currentTime());

    let valorClockIn = localStorage.getItem("clockIn",currentTime);
    document.getElementById("valorClockIn").innerHTML = valorClockIn;
    
  }
  
  
  const clockOut = document.getElementById("clockOut");
  clockOut.onclick = ()=>{ 
      
    
    localStorage.setItem('clockOut',currentTime());

    let valorClockOut = localStorage.getItem("clockOut",currentTime);
    document.getElementById("valorClockOut").innerHTML = valorClockOut;
    
  }

  
  
  