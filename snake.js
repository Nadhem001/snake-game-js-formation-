export const SNAKE_SPEED = 5;
let newSegments = 0;

import { getinputDiraction } from "./input.js";


const snakeBody = [
    {x: 10, y:11},
];

export function update(){
    addSegments()
    let inputDiraction = getinputDiraction();
    for(let i = snakeBody.length - 2 ;i >= 0 ;i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }
   snakeBody[0].x += inputDiraction.x;
   snakeBody[0].y += inputDiraction.y;

}


export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);

    });
}

export function expandSnake(amount) {
    
    newSegments += amount
}

export function onSnake(position,{ ignoreHead= false} = {}){

    return snakeBody.some((segment,index) => {
        if(ignoreHead && index === 0 ) return false;
        return equalPositions(segment,position);
    });
}

function equalPositions(pos1 , pos2){

    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments(){
    for(let i = 0 ; i < newSegments ; i++ ){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegments = 0 ;
}

export function getSnakehead(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return onSnake(snakeBody[0],{ignoreHead: true});
}