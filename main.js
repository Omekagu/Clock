"use strict";
function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = " PM";
  }
  const time = `${h}:${m}:${s}${session}`;
  document.getElementById("MyClockDisplay").innerText = time;

  setTimeout(showTime, 1000);
}
showTime();
