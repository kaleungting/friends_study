class Clock {
  constructor() {
    this.hours = new Hands(24);
    this.minutes = new Hands(60);
    this.seconds = new Hands(60);
  }

  advance() {
    this.seconds.advance();
    if (this.seconds.value == 0) {
      this.minutes.advance();

      if (this.minutes.value == 0) {
        this.hours.advance();
      }
    }
  }

  displayTime() {
    setInterval(() => {
      console.log(
        `0${this.hours.value} : 0${this.minutes.value} : 0${this.seconds.value}`
      );
      this.advance();
    }, 1000);
  }

  setAlarm(){
      
  }
}

class Hands {
  constructor(limit) {
    this.limit = limit;
    this.value = 0;
  }

  advance() {
    this.value += 1;
    if (this.value >= this.limit) {
      this.value = 0;
    }
  }
}

clock = new Clock();
clock.displayTime();
