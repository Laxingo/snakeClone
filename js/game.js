import MainScene from "./mainscene.js"


const config = {
    width: 640,
    heigth: 640,
    type: Phaser.auto,
    parent: 'game-canvas',
    scenes: [MainScene]
}

new Phaser.Game(config);