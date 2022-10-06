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

    //O
    context.strokeStyle = "blue";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(400, 50);
    context.lineTo(400, 250);
    context.moveTo(400, 250);
    context.lineTo(475, 250);
    context.moveTo(475, 250);
    context.lineTo(475, 50);
    context.moveTo(475, 50);
    context.lineTo(400, 50);
    context.stroke();

    //U
    context.strokeStyle = "green";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(550, 50);
    context.lineTo(550, 250);
    context.moveTo(550, 250);
    context.lineTo(625, 250);
    context.moveTo(625, 250);
    context.lineTo(625, 50);
    context.stroke();

    //R
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(700, 50);
    context.lineTo(700, 250);
    context.moveTo(700, 50);
    context.lineTo(825, 50);
    context.moveTo(825, 50);
    context.lineTo(825, 100);
    context.moveTo(825, 100);
    context.lineTo(700, 100);
    context.moveTo(700, 100);
    context.lineTo(825, 250);
    context.stroke();

    //I
    context.strokeStyle = "purple";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(900, 50);
    context.lineTo(900, 250);
    context.stroke();



    



    

}
