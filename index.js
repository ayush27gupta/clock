//Real-time clock

const hours = document.querySelector(".hour");
const mins = document.querySelector(".min");
const secs = document.querySelector(".sec");
const am = document.querySelector("#am");

//to get right format
function formatZero(formatted) {
  return formatted < 10 ? "0".concat(formatted) : formatted;
}

function time() {
  //time
  var datex = new Date();
  var h = datex.getHours();
  var m = datex.getMinutes();
  var s = datex.getSeconds();

  hours.innerHTML = `${formatZero(h % 12 || 12)}`;
  mins.innerHTML = `${formatZero(m)}`;
  secs.innerHTML = `${formatZero(s)}`;
  am.innerHTML = `${h >= 12 ? "PM" : "AM"}`;
}
setInterval(time, 1000);

//clock_finished
