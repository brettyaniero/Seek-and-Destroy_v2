
/**
 * Spawns an enemy tank at a randomized location in the maze.
 *
 * @param {any} width how many units wide the maze is
 * @param {any} height how many units high the maze is
 */

function spawnTanks(width, height, startUnit) {
    var unitWidth = stage.canvas.width / width;
    var unitHeight = stage.canvas.height / height;
    var targetUnit = Math.floor(Math.random() * (width * height));
    var targetUnitRow = (targetUnit > width) ? Math.ceil(targetUnit / width) - 1 : 0;
    var targetUnitColumn = (targetUnit % width != 0) ? targetUnit % width - 1 : width - 1;

    var enemy = preloader.getResult("enemy");
    enemyTank = new createjs.Bitmap(enemy);
    enemyTank.regX = enemy.width / 2;
    enemyTank.x = targetUnitColumn * unitWidth + unitWidth / 2;
    enemyTank.regY = enemy.height / 2;
    enemyTank.y = targetUnitRow * unitHeight + unitHeight / 2;
    gameUI.addElement(enemyTank);

    var startUnitRow = (startUnit > width) ? Math.ceil(startUnit / width) - 1 : 0;
    var startUnitColumn = (startUnit % width != 0) ? startUnit % width - 1 : width - 1;

    var player = preloader.getResult("player");
    playerTank = new createjs.Bitmap(player);
    playerTank.regX = player.width / 2;
    playerTank.x = startUnitColumn * unitWidth + unitWidth / 2;
    playerTank.regY = player.height / 2;
    playerTank.y = startUnitRow * unitHeight + unitHeight / 2;
    gameUI.addElement(playerTank);
}