let fugt = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(500)
    led.plotBarGraph(
    fugt,
    1024
    )
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(60000)
})
basic.forever(function () {
    fugt = pins.analogReadPin(AnalogPin.P0)
})
basic.forever(function () {
    led.plotBarGraph(
    fugt,
    1024
    )
    basic.pause(5000)
})
