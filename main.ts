let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
basic.forever(function () {
    haloDisplay.setBrightness(31)
    for (let led2 = 0; led2 <= 60; led2++) {
        haloDisplay.setZipLedColor(led2, kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
        basic.pause(500)
        haloDisplay.setZipLedColor(led2 - 0, kitronik_halo_hd.colors(ZipLedColors.Black))
        haloDisplay.show()
    }
    haloDisplay.showRainbow(1, 360)
})
