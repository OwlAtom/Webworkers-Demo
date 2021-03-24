self.addEventListener("message", (e) => {
  var eventData = e.data.current;
  let wait = e.data.time;
  let i = 0;
  let a;
  let c;
  while (i < 10000000000) {
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
  }
  postMessage(i);
  /*
    setInterval(function () {
    math = coolMath.add(eventData);
    postMessage(math);
    eventData = math;
  }, 1000000);*/
});

let coolMath = {
  add(number) {
    let calc;
    if (calc === Infinity) {
      calc = number / 900;
    } else {
      calc = number * 1.1;
    }
    return calc;
  },
};
