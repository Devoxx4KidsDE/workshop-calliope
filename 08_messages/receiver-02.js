radio.onDataPacketReceived(({receivedString, receivedNumber}) => {
    if (receivedString == "button") {
        if (receivedNumber == 1) {
            images.iconImage(IconNames.Heart).showImage(0)
        }
        if (receivedNumber == 2) {
            images.iconImage(IconNames.Skull).showImage(0)
        }
        if (receivedNumber == 3) {
            images.iconImage(IconNames.Ghost).showImage(0)
        }
    }
    if (receivedString == "tilt") {
        if (receivedNumber == 1) {
            images.arrowImage(ArrowNames.North).showImage(0)
        }
        if (receivedNumber == 2) {
            images.arrowImage(ArrowNames.North).showImage(0)
        }
    }
    basic.clearScreen()
})
basic.showString("Receiver")
radio.setGroup(42)
basic.clearScreen()