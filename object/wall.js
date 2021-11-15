import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

function createBox(){
    const geometryWall = new THREE.BoxGeometry(1, 1, 1); //ukuran shape box disesuaikan
    const materialWall = new THREE.MeshPhongMaterial({color: 0xFF3E2723, metalness: 0.5, roughness: 0.1});
    const wall = new THREE.Mesh(geometryWall, materialWall);
    scene.add(wall);
}



