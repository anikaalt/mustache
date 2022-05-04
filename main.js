noseX =0;
noseY=0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/D0rgwW41/R.png');
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(300, 300);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log("modelLoaded");
}

function gotPoses(results){
console.log(results);
    if(results.length > 0)
    {
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;
    console.log("nose x = "+noseX);
    console.log("nose y ="+noseY);
    }
}


function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 60, 35);
}


function take_snapshot(){
    save('image.png');
} 