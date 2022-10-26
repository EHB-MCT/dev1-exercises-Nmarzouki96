"use strict"

import context from "../../scripts/context.js";
import * as utils from '../..scripts/utils.js';

let horizontalLines = 60;
let verticalLines = 30;

let width = '600';
let height = '300';



drawLines();

function drawLines() {
    context.fillStyle = "orange"
    context.fillRect(0,0,width,height)
    let step = width / horizontalLines;

    context.strokeStyle = "white"


    for (let i= 0; i< horizontalLines; i++) {
        utils.drawLine (0+ (step * i), 0, width - (step * i), height);
    }
    for (let i= 0; i<= verticalLines; i++) {
        utils.drawLine (0, 0 + (step * 1), width, height - (step * i));
    }
}