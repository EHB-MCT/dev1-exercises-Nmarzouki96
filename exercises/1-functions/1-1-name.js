"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();

function drawName() {

    //N
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(200, 250);
    context.moveTo(200, 50);
    context.lineTo(300, 250);
    context.moveTo(300, 250);
    context.lineTo(300, 50);
    context.stroke();

    ;

    

}
