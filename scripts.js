class Clock {
    constructor(elem) {
        this.elem = elem;
    }

    addElement() {
        this.newClock = document.querySelector(this.elem);
        this.newClock.innerHTML = this.createHhMmSsMsFormat()
        this.newClock.className = 'full'
        this.newClock.classList.add('styles')
        this.newClock.addEventListener('click', this.toggles.bind(this))
    }

    creatAllFormats() {
        let date = new Date()
        this.hh = date.getHours();
        if (this.hh < 10) this.hh = '0' + this.hh;
        this.mm = date.getMinutes();
        if (this.mm < 10) this.mm = '0' + this.mm;
        this.ss = date.getSeconds();
        if (this.ss < 10) this.ss = '0' + this.ss;
        this.ms = date.getMilliseconds();
        if (this.ms < 10) this.ms = '00' + this.ms
        if (this.ms >= 10 && this.ms < 100) this.ms = '0' + this.ms
    }

    createHhMmSsMsFormat() {
        this.creatAllFormats()
        return `${this.hh}:${this.mm}:${this.ss}:${this.ms}`
    }

    createHhMmSsFormat() {
        this.creatAllFormats()
        return `${this.hh}:${this.mm}:${this.ss}`
    }

    creatHhMmFormat() {
        this.creatAllFormats()
        return `${this.hh}:${this.mm}`
    }

    render() {
        if (this.newClock.classList.contains('full')) {
            this.newClock.innerHTML = this.createHhMmSsMsFormat()
        } else {
            this.newClock.innerHTML = this.creatHhMmFormat()
        }
    }

    startClock() {
        setInterval(() => this.render(), 250);
    }

    toggles() {
        this.newClock.classList.toggle('full')
    }
}

let clock = new Clock('.oneClock')
console.log(clock)
clock.startClock()
clock.addElement()

class ClockChild1 extends Clock {
    render() {
        if (this.newClock.classList.contains('full')) {
            this.newClock.innerHTML = this.createHhMmSsFormat()
        } else {
            this.newClock.innerHTML = this.creatHhMmFormat()
        }
    }
}

let clockChild1 = new ClockChild1('.twoClock')
clockChild1.startClock()
clockChild1.addElement()

class ClockChild2 extends Clock {
    render() {
        if (this.newClock.classList.contains('full')) {
            this.newClock.innerHTML = this.creatHhMmFormat()
        } else {
            this.newClock.innerHTML = this.createHhMmSsMsFormat()
        }
    }
}

let clockChild2 = new ClockChild2('.threeClock')
clockChild2.startClock()
clockChild2.addElement()