let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose  , skeleton;
let actor_img;
let specs,specs2,smoke;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO);
    capture.size(800, 500);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses);

    /*for image on face */
 // actor_img =   loadImage('images/salman.png')
 //specs = loadImage('images/specs.png')
//specs2 = loadImage('images/specs2.png')
//smoke = loadImage('images/cigar.png');
}

function receivedPoses(poses){
    console.log(poses);

    if (poses.length > 0) {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
        
        noseX = singlePose.nose.x;
        noseY = singlePose.nose.y;

        reyeX = singlePose.rightEye.x;
        reyeY = singlePose.rightEye.y;

        leyeX = singlePose.leftEye.x;
        leyeY = singlePose.leftEye.y;

        console.log("noseX = " + noseX + " noseY = " + noseY);
    }
}

function modelLoaded() {
    console.log('model has loaded');
}

function draw() {
    // Draw video
    image(capture, 0, 0, 800, 600);
    // Draw ellipses on detected points
    fill(255, 0, 0);
    if (singlePose) {
        for (let i = 0; i < singlePose.keypoints.length; i++) {
            let keypoint = singlePose.keypoints[i];
            ellipse(keypoint.position.x, keypoint.position.y, 20);
        }

        stroke(255, 255, 255);
        strokeWeight(5);
        for ( j=0; j < skeleton.length; j++) {
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x ,skeleton[j][1].position.y)
    }

    /*for image on face*/
  // image(actor_img,singlePose.nose.x-100,singlePose.nose.y-90,250,250);
 // image(specs,singlePose.nose.x-100,singlePose.nose.y-120,250,300);
  // image(specs2,singlePose.nose.x-100,singlePose.nose.y-120,250,300);
  // image(smoke,singlePose.nose.x-100,singlePose.nose.y-120,250,300);
}

}






