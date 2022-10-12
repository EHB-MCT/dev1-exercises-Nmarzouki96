"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width
let height = context.canvas.height

let margin = 50;
let spacing = 100;




function drawLines(){ 
    context.beginPath();
    context.moveTo(margin, spacing);
    context.lineTo(400 - margin, spacing);
    context.lineTo(margin, spacing*2);
    context.lineTo(400 - margin, spacing*2);
    context.lineTo(margin, spacing*3);
    context.lineTo(400 - margin, spacing*3);
    context.lineTo(margin, spacing);


    context.stroke()


    
}
    
drawLines()
