//Real-time clock

const hours = document.querySelector(".hour");
const mins = document.querySelector(".min");
const secs = document.querySelector(".sec");
const am = document.querySelector("#am");

//to get right format
function formatZero(WithZero) {
  return WithZero < 10 ? "0".concat(WithZero) : WithZero;
}

function time() {
  //time
  let datex = new Date();
  let h = datex.getHours();
  let m = datex.getMinutes();
  let s = datex.getSeconds();

  hours.innerHTML = `${formatZero(h % 12 || 12)}`;
  mins.innerHTML = `${formatZero(m)}`;
  secs.innerHTML = `${formatZero(s)}`;
  am.innerHTML = `${h >= 12 ? "PM" : "AM"}`;
}
setInterval(time, 1000);

//clock_finished

//changing image with time
let datex = new Date();
let h = datex.getHours();
const h1 = h % 12 || 12;
const am_pm = h >= 12 ? "PM" : "AM";

const img_text = document.querySelector(".dis");
const img2 = document.querySelector(".image_chg");
const greet = document.querySelector(".t1");

decider();

function decider() {
  if (am_pm === "AM") {
    img_text.innerHTML = "WAKE UP!!";
    img2.style.cssText =
      "background:url(./morning.png);background-color:white ;background-size:100% 100%";
    greet.innerHTML = "GOOD MORNING !!";
  } else if (h1 < 4) {
    img_text.innerHTML = " LET'S HAVE SOME LUNCH !!";
    greet.innerHTML = "GOOD AFTERNOON !!";
    img2.style.cssText =
      "background:url(./lunch_image.svg);background-color:white ;background-size:100% 100%";
  } else if (h1 >= 4) {
    img_text.innerHTML = " GOOD NIGHT !!";
    img2.style.cssText =
      "background:url(./night.png); background-color:white; background-size:100% 100%";
    greet.innerHTML = "GOOD NIGHT !!";
  }
}

//party image

const party = document.querySelector(".party1");

party.addEventListener("click", partyHandler);

function partyHandler(e) {
  const img_text2 = document.querySelector(".dis");
  const img = document.querySelector(".image_chg");
  const greet2 = document.querySelector(".t1");

  greet2.innerHTML = "DOUBLE CLICK TO END PARTY !!";
  img_text.innerHTML = " ABHI TOH PARTY SHURU HUI HAI !!";
  img.style.cssText =
    "background:url(./party2.svg); background-color:white; background-size:100% 100%";

  party = document.querySelector(".party1");
  greet2.addEventListener("dblclick", partyKhatam);

  function partyKhatam(e) {
    decider();
  }
}
