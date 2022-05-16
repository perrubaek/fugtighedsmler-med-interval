input.onButtonPressed(Button.A, function () {
    basic.showNumber(fugt)
})
let fugt = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(2000)
    fugt = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    fugt,
    1023
    )
    basic.showNumber(fugt)
    basic.pause(500)
    if (fugt < 900) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(6000)
})
basic.forever(function () {
	
})
