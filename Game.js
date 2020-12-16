class Game {
    constructor() {
    }
    getGameState() {
        var gameStateREF = database.ref("gameState");
        gameStateREF.on("value",function(data){
        gameState = data.val();
        });
    }
    updateGameState(update) {
        database.ref("/").update({
            gameState :update
        })
    }
    async startGame() {
        if(gameState === 0) {
            player = new Player();
            var difference = await database.ref("playerCount").once("value");
            if(difference.exists()) {
                count = difference.val()
                player.Count()
            }
            form = new Forms();
            form.display();
        }
        car1 = createSprite(500,500);
        car1.addImage(car1IMG);
        car2 = createSprite(700,500);
        car2.addImage(car2IMG);
        car3 = createSprite(900,500);
        car3.addImage(car3IMG);
        car4 = createSprite(1100,500);
        car4.addImage(car4IMG);
        cars = [car1,car2,car3,car4];
    }
    play() {
        form.hide();
        text("Start Race", 350, 350);
        player.AllPlayers();
        if(allPlayers != undefined) {
            var displayPosition = 4;
            var index = 0;
            var x = 0;
            var y;
            for(var i in allPlayers) {
                index++;
                x = x + 200;
                y = allPlayers[i].distance;
                cars[i].x = x;
                cars[i].y = y;
            }
        }
        if(keyDown(UP_ARROW) && player.index !== null) {
            player.distance += 10;
            player.updatePlayer();
        }
        drawSprites();
    }
}