radio.set_group(9)
basic.clear_screen()
start = False
začátek = 1
konec = 2
reset = 0
cas_start = control.millis()
cas_konec = control.millis()
RunComp.set_light_level()
def on_light_drop(): 
    global cas_start, cas_konec
    if not start:
        radio.send_number(1)
        cas_start
        start = True
    if start:
        radio.send_number(2)
        cas_konec
        start = False
RunComp.on_light_drop(on_light_drop)

def on_received_number(receivedNumber):
    global cas_konec, cas_start
    if receivedNumber == 1:
        cas_start
        start = True
    if receivedNumber == 2:
        cas_konec
        start = False
    if receivedNumber == 0:
        control.reset()
radio.on_received_number(on_received_number)
def on_button_pressed_a():
    control.reset()
    radio.send_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)
cas = cas_konec - cas_start
print(cas)