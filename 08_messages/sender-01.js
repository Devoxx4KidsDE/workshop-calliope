let geheimnachricht = ""
input.onButtonPressed(Button.A, () => {
    geheimnachricht = "Hallo!"
    radio.sendString(geheimnachricht)
    basic.showString(geheimnachricht)
})
basic.showString("Sender")
radio.setGroup(42)
basic.clearScreen()