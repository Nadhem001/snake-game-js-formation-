import {onSnake, expandSnake} from "./snake.js";
import { randomGridPosition } from './grid.js'
const EXPANSION_RATE = 5

let food = getRandomFoodPosition();

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard){

    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition ;
   
    while((newFoodPosition) == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition
}