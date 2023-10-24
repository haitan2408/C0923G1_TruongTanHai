class ElectricLamp {
    constructor(status) {
        this.status = status;
    }
    //Method dùng để tắt đèn
    turnOff() {
        this.status = false;
    }

    //Method dùng để bật đèn
    turnOn() {
        this.status = true;
    }
}

class SwitchButton {
    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchOff() {
        this.status = false;
        this.lamp.turnOff();
    }

    switchOn() {
        this.status = true;
        this.lamp.turnOn();
    }
}

let lamp = new ElectricLamp(false);
let switchButton = new SwitchButton(false, lamp);
switchButton.switchOn();
