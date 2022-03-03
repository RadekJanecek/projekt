radio.set_group(9)
basic.clear_screen()
RunComp.set_light_level()
def on_light_drop(): 
    radio.send_number(1)
RunComp.on_light_drop(on_light_drop)
