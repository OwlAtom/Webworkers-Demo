let webWorker = new Worker("worker.js");

let data = {
  current: 9000,
  time: 0,
};
let methods = {
  setTime(value) {
    data.time = value;
  },
};
let button = document.querySelector("button");
webWorker.addEventListener("message", (e) => {
  button.textContent = e.timeStamp;
});

button.addEventListener("click", (e) => {
  webWorker.postMessage(data);
});

let text = document.querySelector("body > div");
text.addEventListener("click", (e) => {
  text.textContent = "You clicked!";
  let i = 0;
  let a;
  let c;
  while (i < 10000) {
    c = 50000;
    a = 904642046;
    c % a;
    a % c;
    a / c;
    c / a;
    a + c;
    c + a;
    a - c;
    c - a;
    i++;
    let k = i * 6;
    console.log(k);
    setTimeout(() => {
      text.textContent = "Waiting... " + k;
    }, k);
  }
});
