song="";
pulsoEx=0;
pulsoEy=0;
pulsoDx=0;
pulsoDy=0;
function preload(){
    song= loadSound("music.mp3");
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide()
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("PoseNet foi inicializado");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        pulsoEx=results[0].pose.leftWrist.x;
        pulsoEy=results[0].pose.leftWrist.y;
        pulsoDy= results[0].pose.rightWrist.y;
        pulsoDx= results[0].pose.rightWrist.x;
        console.log(pulsoEx, pulsoEy, pulsoDx, pulsoDy);
    }
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function play(){
    song.play();//para tocar o som.
    song.setVolume(1);
    song.rate(1);
}