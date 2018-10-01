let maxPegel = 0
let lautstärke = 0
basic.forever(() => {
    lautstärke = pins.analogReadPin(AnalogPin.MIC)
    maxPegel = 100
    if (lautstärke < maxPegel) {
        basic.showIcon(IconNames.Happy)
        basic.setLedColor(Colors.Green)
    } else {
        basic.setLedColor(Colors.Red)
        for (let i = 0; i < 10; i++) {
            basic.showIcon(IconNames.Skull)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(100)
        }
    }
    basic.pause(500)
})
