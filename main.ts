radio.setGroup(9)
basic.clearScreen()
let start = false
let začátek = 1
let konec = 2
let reset = 0
let cas = control.millis()
RunComp.SetLightLevel()
RunComp.OnLightDrop(function on_light_drop() {
    let start: boolean;
    if (!start) {
        radio.sendNumber(1)
        cas
        start = true
        console.logValue("x", cas)
    }
    
    if (start) {
        radio.sendNumber(2)
        cas
        start = false
    }
    
})
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let start: boolean;
    if (receivedNumber == 1) {
        cas
        start = true
    }
    
    if (receivedNumber == 2) {
        cas
        start = false
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    control.reset()
    radio.sendNumber(0)
})
console.log(cas)
