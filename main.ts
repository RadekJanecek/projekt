radio.setGroup(9)
basic.clearScreen()
let start = false
let začátek = 1
let konec = 2
let reset = 0
let cas_start = control.millis()
let cas_konec = control.millis()
RunComp.SetLightLevel()
RunComp.OnLightDrop(function on_light_drop() {
    let start: boolean;
    
    if (!start) {
        radio.sendNumber(1)
        cas_start
        start = true
    }
    
    if (start) {
        radio.sendNumber(2)
        cas_konec
        start = false
    }
    
})
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let start: boolean;
    
    if (receivedNumber == 1) {
        cas_start
        start = true
    }
    
    if (receivedNumber == 2) {
        cas_konec
        start = false
    }
    
    if (receivedNumber == 0) {
        control.reset()
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    control.reset()
    radio.sendNumber(0)
})
let cas = cas_konec - cas_start
console.log(cas)
