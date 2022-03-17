radio.set_group(9)
basic.clear_screen()
start = False
začátek = 1
konec = 2
reset = 0
cas = control.millis()
RunComp.set_light_level()
def on_light_drop(): 
    if not start:
        radio.send_number(1)
        cas
        start = True
        console.log_value("x", cas)
    if start:
        radio.send_number(2)
        cas
        start = False
RunComp.on_light_drop(on_light_drop)

def on_received_number(receivedNumber):
    if receivedNumber == 1:
        cas
        start = True
    if receivedNumber == 2:
        cas
        start = False
radio.on_received_number(on_received_number)
def on_button_pressed_a():
    control.reset()
    radio.send_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)
print (cas)