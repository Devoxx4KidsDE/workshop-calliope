radio.onDataPacketReceived( ({ receivedString: geheimnachricht }) =>  {
    basic.showString(geheimnachricht)
})
basic.showString("Empfänger")
radio.setGroup(42)
basic.clearScreen()