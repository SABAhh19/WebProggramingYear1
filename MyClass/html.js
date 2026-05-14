function makeBed(callback) {
  setTimeout(() => {
    console.log("bed made");
    callback();
  }, 2000);
}

function cleanDesk(callback) {
  setTimeout(() => {
    console.log("desk cleaned");
    callback();
  }, 1000);
}

function play(callback) {
  setTimeout(() => {
    console.log("playing");
    callback();
  }, 4000);
}

function sleep() {
  setTimeout(() => {
    console.log("going to sleep");
  }, 3000);
}

makeBed(() => {
  cleanDesk(() => {
    play(() => {
      sleep();
    });
  });
});
