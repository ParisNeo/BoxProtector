input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    Code = ""
    appui = ""
    appui2 = ""
    basic.showString(appui)
})
input.onButtonPressed(Button.B, function () {
    basic.showString(Code)
})
let appui2 = ""
let appui = ""
let Code = ""
Code = ""
pins.servoWritePin(AnalogPin.P1, 0)
appui = ""
appui2 = ""
let AccessCode = "1234"
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P9, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        appui = "A"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        appui = "3"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        appui = "2"
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        appui = "1"
    } else {
    	
    }
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        appui = "B"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        appui = "6"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        appui = "5"
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        appui = "4"
    } else {
    	
    }
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        appui = "C"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        appui = "9"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        appui = "8"
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        appui = "7"
    } else {
    	
    }
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        appui = "D"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        appui = "#"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        appui = "0"
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        appui = "*"
    } else {
    	
    }
    if (appui != appui2) {
        basic.showString(appui)
        appui2 = appui
        if (appui != "#" && appui != "*") {
            Code = "" + Code + appui
        } else if (appui == "#") {
            if (Code == AccessCode) {
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . . . #
                    # . . . #
                    # # # # #
                    `)
                pins.servoWritePin(AnalogPin.P1, 180)
            }
        } else {
        	
        }
    }
})
