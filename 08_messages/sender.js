input.onButtonPressed(Button.AB, () => {
    radio.sendValue("button", 3)
    images.iconImage(IconNames.Ghost).showImage(0)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, () => {
    radio.sendValue("button", 1)
    images.iconImage(IconNames.Heart).showImage(0)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, () => {
    radio.sendValue("tilt", 1)
    images.arrowImage(ArrowNames.North).showImage(0)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    radio.sendValue("button", 2)
    images.iconImage(IconNames.Skull).showImage(0)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, () => {
    radio.sendValue("tilt", 2)
    images.arrowImage(ArrowNames.North).showImage(0)
    basic.clearScreen()
})
basic.showString("Sender")
radio.setGroup(42)
basic.clearScreen()
