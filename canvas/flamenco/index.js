//RELATED VARIABLES
var scene,
    camera,
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
    shadowLight,
    backLight,
    light,
    renderer,
    container;

//OBJECT
var floor, menco;

//SCREEN VARIABLES
var HEIGHT,
    WIDTH,
    windowHalfX,
    windowHalfY;
// mousePos = { x: 0, y: 0 };

//INITIAL
function init() {
    scene = new THREE.Scene();
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 2000;
    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    );

    camera.position.z = 1000;
    camera.position.y = 300;
    // camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    //???setPixelRatio???
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(WIDTH, HEIGHT);
    //???shadowMapEnabled???
    renderer.shadowMap.enabled = true;

    container = document.getElementById('world');
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
    // document.addEventListener('mousemove', handleMouseMove, false);
    // document.addEventListener('touchstart', handleTouchStart, false);
    // document.addEventListener('touchend', handleTouchEnd, false);
    // document.addEventListener('touchmove', handleTouchMove, false);
}

function onWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    //???camera.updateProjectionMatrix();???
    camera.updateProjectionMatrix();
}

function createLights() {
    light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5);

    shadowLight = new THREE.DirectionalLight(0xffffff, .8);
    shadowLight.position.set(200, 200, 200);
    shadowLight.castShadow = true;

    backLight = new THREE.DirectionalLight(0xffffff, .4);
    backLight.position.set(-100, 200, 50);
    backLight.castShadow = true;

    scene.add(backLight);
    scene.add(light);
    scene.add(shadowLight);
}

function createFloor() {
    floor = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(1000, 1000),
        new THREE.MeshBasicMaterial({ color: 0xe0dacd })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -33;
    floor.receiveShadow = true;
    scene.add(floor);
}

//draw a flamenco
Flamenco = function() {
    // radialSegments 圆柱周围的分段面数
    this.rSegments = 4;
    // ???heightSegments 沿圆柱体高度的面的行数 
    this.hSegments = 3;
    // ???cylRay
    this.cylRay = 120;
    //初始位置
    this.bodyBirdInitPositions = [];
    // ???vAngle hAngle
    this.vAngle = this.hAngle = 0;


    //普通的皮肤
    this.normalSkin = { r: 255 / 255, g: 222 / 255, b: 121 / 255 };
    //害羞的皮肤
    this.shySkin = { r: 255 / 255, g: 157 / 255, b: 101 / 255 };
    this.color = { r: this.normalSkin.r, g: this.normalSkin.g, b: this.normalSkin.b };
    this.side = "left";

    this.shyAngles = { h: 0, v: 0 };
    this.behaviourInterval;
    this.intervalRunning = false;

    this.threegroup = new THREE.Group();

    // materials
    // MeshStandardMaterial
    this.yellowMat = new THREE.MeshLambertMaterial({
        color: 0xffde79,
        shading: THREE.FlatShading
    });
    this.whiteMat = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        shading: THREE.FlatShading
    });
    this.blackMat = new THREE.MeshLambertMaterial({
        color: 0x000000,
        shading: THREE.FlatShading
    });
    this.orangeMat = new THREE.MeshLambertMaterial({
        color: 0xff5535,
        shading: THREE.FlatShading
    });

    //WINGS

    this.wingLeftGroup = new THREE.Group();
    this.wingRightGroup = new THREE.Group();

    var wingGeom = new THREE.BoxGeometry(60, 60, 5);
    var wingLeft = new THREE.Mesh(wingGeom, this.yellowMat);
    this.wingLeftGroup.add(wingLeft);
    this.wingLeftGroup.position.x = 70;
    this.wingLeftGroup.position.z = 0;
    this.wingLeftGroup.rotation.y = Math.PI / 2;
    wingLeft.rotation.x = -Math.PI / 4;
    var wingRight = new THREE.Mesh(wingGeom, this.yellowMat);
    this.wingRightGroup.add(wingRight);
    this.wingRightGroup.position.x = -70;
    this.wingRightGroup.position.z = 0;
    this.wingRightGroup.rotation.y = -Math.PI / 2;
    wingRight.rotation.x = -Math.PI / 4;

    //BODY

    var bodyGeom = new THREE.CylinderGeometry(40, 70, 200, this.rSegments, this.hSegments);
    this.bodyBird = new THREE.Mesh(bodyGeom, this.yellowMat);
    this.bodyBird.position.y = 70;

    //???bodyVerticesLength
    this.bodyVerticesLength = (this.rSegments + 1) * (this.hSegments);
    for (var i = 0; i < this.bodyVerticesLength; i++) {
        var tv = this.bodyBird.geometry.vertices[i];
        this.bodyBirdInitPositions.push({ x: tv.x, y: tv.y, z: tv.z });
    }

    this.threegroup.add(this.bodyBird);
    this.threegroup.add(this.wingLeftGroup);
    this.threegroup.add(this.wingRightGroup);


    // EYES

    this.face = new THREE.Group();
    var eyeGeom = new THREE.BoxGeometry(60, 60, 10);
    var irisGeom = new THREE.BoxGeometry(10, 10, 10);

    this.leftEye = new THREE.Mesh(eyeGeom, this.whiteMat);
    this.leftEye.position.x = -30;
    this.leftEye.position.y = 120;
    this.leftEye.position.z = 35;
    this.leftEye.rotation.y = -Math.PI / 4;

    this.leftIris = new THREE.Mesh(irisGeom, this.blackMat);
    this.leftIris.position.x = -30;
    this.leftIris.position.y = 120;
    this.leftIris.position.z = 40;
    this.leftIris.rotation.y = -Math.PI / 4;


    this.rightEye = new THREE.Mesh(eyeGeom, this.whiteMat);
    this.rightEye.position.x = 30;
    this.rightEye.position.y = 120;
    this.rightEye.position.z = 35;
    this.rightEye.rotation.y = Math.PI / 4;

    this.rightIris = new THREE.Mesh(irisGeom, this.blackMat);
    this.rightIris.position.x = 30;
    this.rightIris.position.y = 120;
    this.rightIris.position.z = 40;
    this.rightIris.rotation.y = Math.PI / 4;

    // BEAK

    var beakGeom = new THREE.CylinderGeometry(0, 20, 20, 4, 1);
    this.beak = new THREE.Mesh(beakGeom, this.orangeMat);
    this.beak.position.z = 65;
    this.beak.position.y = 70;
    this.beak.rotation.x = Math.PI / 2;

    this.face.add(this.rightEye);
    this.face.add(this.rightIris);
    this.face.add(this.leftEye);
    this.face.add(this.leftIris);
    this.face.add(this.beak);

    //FEATHERS

    var featherGeom = new THREE.BoxGeometry(10, 20, 5);
    this.feather1 = new THREE.Mesh(featherGeom, this.yellowMat);
    this.feather1.position.z = 55;
    this.feather1.position.y = 185;
    this.feather1.rotation.x = Math.PI / 4;
    this.feather1.scale.set(1.5, 1.5, 1);

    this.feather2 = new THREE.Mesh(featherGeom, this.yellowMat);
    this.feather2.position.z = 50;
    this.feather2.position.y = 180;
    this.feather2.position.x = 20;
    this.feather2.rotation.x = Math.PI / 4;
    this.feather2.rotation.z = -Math.PI / 8;

    this.feather3 = new THREE.Mesh(featherGeom, this.yellowMat);
    this.feather3.position.z = 50;
    this.feather3.position.y = 180;
    this.feather3.position.x = -20;
    this.feather3.rotation.x = Math.PI / 4;
    this.feather3.rotation.z = Math.PI / 8;

    this.face.add(this.feather1);
    this.face.add(this.feather2);
    this.face.add(this.feather3);
    this.threegroup.add(this.face);

    //traverse 循环
    this.threegroup.traverse(function(object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });
}

Flamenco.prototype.look = function(hAngle, vAngle) {
    this.hAngle = hAngle;
    this.vAngle = vAngle;

    this.leftIris.position.y = 120 - this.vAngle * 30;
    this.leftIris.position.x = -30 + this.hAngle * 10;
    this.leftIris.position.z = 40 + this.hAngle * 10;

    this.rightIris.position.y = 120 - this.vAngle * 30;
    this.rightIris.position.x = 30 + this.hAngle * 10;
    this.rightIris.position.z = 40 - this.hAngle * 10;

    this.leftEye.position.y = this.rightEye.position.y = 120 - this.vAngle * 10;

    this.beak.position.y = 70 - this.vAngle * 20;
    this.beak.rotation.x = Math.PI / 2 + this.vAngle / 3;

    this.feather1.rotation.x = (Math.PI / 4) + (this.vAngle / 2);
    this.feather1.position.y = 185 - this.vAngle * 10;
    this.feather1.position.z = 55 + this.vAngle * 10;

    this.feather2.rotation.x = (Math.PI / 4) + (this.vAngle / 2);
    this.feather2.position.y = 180 - this.vAngle * 10;
    this.feather2.position.z = 50 + this.vAngle * 10;

    this.feather3.rotation.x = (Math.PI / 4) + (this.vAngle / 2);
    this.feather3.position.y = 180 - this.vAngle * 10;
    this.feather3.position.z = 50 + this.vAngle * 10;


    for (var i = 0; i < this.bodyVerticesLength; i++) {
        var line = Math.floor(i / (this.rSegments + 1));
        var tv = this.bodyBird.geometry.vertices[i];
        var tvInitPos = this.bodyBirdInitPositions[i];
        var a, dy;
        if (line >= this.hSegments - 1) {
            a = 0;
        } else {
            a = this.hAngle / (line + 1);
        }
        var tx = tvInitPos.x * Math.cos(a) + tvInitPos.z * Math.sin(a);
        var tz = -tvInitPos.x * Math.sin(a) + tvInitPos.z * Math.cos(a);
        tv.x = tx;
        tv.z = tz;
    }
    this.face.rotation.y = this.hAngle;
    this.bodyBird.geometry.verticesNeedUpdate = true;

}

function createFlamenco() {
    menco = new Flamenco();
    menco.threegroup.position.x = 0;
    scene.add(menco.threegroup);
}

function loop() {
    render();
    requestAnimationFrame(loop);
}

function render() {
    renderer.render(scene, camera);
}

init();
createLights();
createFlamenco();
createFloor();
loop();