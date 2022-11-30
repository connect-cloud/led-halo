haloDisplay = kitronik_halo_hd.create_zip_halo_display(60)

def on_forever():
    haloDisplay.set_zip_led_color(0, kitronik_halo_hd.colors(ZipLedColors.RED))
    haloDisplay.show_rainbow(1, 360)
    haloDisplay.show()
basic.forever(on_forever)
