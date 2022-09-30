input.onButtonPressed(Button.A, function () {
    monkey.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    run = 1
    time = 500
})
input.onButtonPressed(Button.B, function () {
    monkey.move(1)
})
let banana: game.LedSprite = null
let time = 0
let run = 0
let monkey: game.LedSprite = null
monkey = game.createSprite(2, 4)
run = 0
basic.forever(function () {
    if (run == 1) {
        banana = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index <= 4; index++) {
            banana.move(index)
            basic.pause(500)
        }
        banana.delete()
        basic.pause(1000)
    }
})
