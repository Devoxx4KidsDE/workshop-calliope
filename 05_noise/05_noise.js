let lautstärke = 0
basic.forever(() => {
    lautstärke = pins.analogReadPin(AnalogPin.MIC)
    basic.showNumber(lautstärke)
})
