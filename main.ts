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
    basic.pause(500)
    led.plotBarGraph(
    fugt,
    1023
    )
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P0, 0)
    if (fugt < 900) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.pause(6000)
})
basic.forever(function () {
    fugt = pins.analogReadPin(AnalogPin.P0)
})
