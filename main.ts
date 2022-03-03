radio.setGroup(9)
basic.clearScreen()
RunComp.SetLightLevel()
RunComp.OnLightDrop(function on_light_drop() {
    radio.sendNumber(1)
})
