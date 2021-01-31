let Ultrasondist = 0
basic.forever(function () {
    if (k_Bit.ultra() > 10 && k_Bit.ultra() < 50) {
        Ultrasondist = Math.map(k_Bit.ultra(), 10, 50, 131, 988)
        music.playTone(Ultrasondist, music.beat(BeatFraction.Half))
    } else {
        Ultrasondist = 0
    }
})
