//deklarasi var yang dibutuhkan
let scene, mouse, camera;

//inisiasi scene di dalam project dan background color
scene = new THREE.Scene();
scene.background = new THREE.Color(0x808080);

//menginisiasi letak kamera atau pov(point of view)
camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 5;

//menginisiasi mouse click listener yang berfungsi untuk merubah view camera
let onMouseClick = function(event){
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    mouse.z = 1;

    rayCast.setFromCamera(mouse, camera);
}

//inisiasi shape
const geometryWall = new THREE.BoxGeometry(1, 1, 1); //ukuran shape box disesuaikan
const materialWall = new THREE.MeshPhongMaterial({color: 0xFF3E2723, metalness: 0.5, roughness: 0.1});
const wall = new THREE.Mesh(geometryWall, materialWall);
scene.add(wall);

//inisiasi arah cahaya untuk menyorot shape
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(-20, 10, 30);

scene.add(light);

//merender beberapa shape dan light diatas
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//menginisiasi control untuk merubah segala jenis view camera
controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
rayCast = new THREE.Raycaster();
mouse = new THREE.Vector2();
mouse.x = mouse.y = -1;

let mainLoop = function() {

    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(mainLoop);
}

mainLoop();