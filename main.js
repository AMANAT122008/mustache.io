noseX=0;
noseY=0;

function preload()   {
clown_nose = loadImage('data:image/png;base64,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')
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){

    image(video,0, 0, 300, 300);
image(clown_nose,noseX,noseY,30,30);

}

function take_snapshot(){
    save('myfilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results)

{
    if(results.length > 0){
        console.log(results);
        noseX=results [0].pose.nose.x;
        noseY=results [0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    
    }


}

