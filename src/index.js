let clock = document.getElementById("clock");
function getClock(){
  const date = new Date();
  clock.innerText = "The time is "+String(date.getHours()).padStart(2,"0")+" : "+String(date.getMinutes()).padStart(2,"0")+" : "+String(date.getSeconds()).padStart(2,"0");
}
setInterval(getClock, 1000);
