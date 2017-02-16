function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(random(255), random(255), random(255));

    fill(0, 0, 255);
        ellipse(250, 250, 250);//eyelid

    fill(240);
        ellipse(250, 250, 250, 200);//outer/inner eye ellipse

    fill(5);
        ellipse(250, 250, 50, 50);  //inner eye ellipse

    var words = ["!!!OUCHY!!!", "!!!YOWZA!!!", "!!!HEY!!!", "!!!STAWP!!!"];
    var word = random(words);


            if(mouseX > 125)
            if(mouseX < 375)
            if(mouseY > 125)
            if(mouseY < 375){
                if (mouseIsPressed)
                    fill(0, 0, 255) &&
                        ellipse(250, 250, 250, 250) &&
                        stroke(15) &&
                        line(125, 250, 375, 250) &&
                            fill(255, 0, 0) &&
                            textSize(30) &&
                            textAlign(CENTER) &&
                            textStyle(BOLD) &&
                            text(word, 250, 250) &&
                            noLoop();
       }

}
