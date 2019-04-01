import { monsterGenerator } from './monster.js';
import { generateNewMaze } from './maze.js';
import { player, updatePlayerGoldAndXp } from './player.js';

let currentMonster = monsterGenerator();
console.log(currentMonster);
console.log(player);
updatePlayerGoldAndXp(player, currentMonster);
console.log(player);

let maze = generateNewMaze(); // generate initial maze
console.log(maze);

let gameNotBeaten = true, currentCommand, roomNumber;

document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if(player.currentRoomNumber[1] === 0) {
        console.log('can\'t move left');
      } else {
        console.log('move left');
        player.currentRoomNumber[1]--;
      }
      break;
    case 38:
      e.preventDefault();
      if(player.currentRoomNumber[0] === 0) {
        console.log('can\'t move up');
      } else {
        console.log('move up');
        player.currentRoomNumber[0]--;
      }
      break;
    case 39:
      e.preventDefault();
      if(player.currentRoomNumber[1] === 4) {
        console.log('can\'t move right');
      } else {
        console.log('move right');
        player.currentRoomNumber[1]++;
      }
      break;
    case 40:
      e.preventDefault();
      if(player.currentRoomNumber[0] === 4) {
        console.log('can\'t move down');
      } else {
        console.log('move down');
        player.currentRoomNumber[0]++;
      }
      break;
  }
  roomNumber = maze[player.currentRoomNumber[0]][player.currentRoomNumber[1]].roomNumber;
  document.querySelector(".active-cell").classList.remove("active-cell");
  document.getElementById('cell-' + roomNumber).classList.add("active-cell");
  console.log(roomNumber);
}