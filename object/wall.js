import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

export function createBox(boxSize, boxColor){
    const geometryWall = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    const materialWall = new THREE.MeshPhongMaterial(
        {
            color: boxColor, 
            metalness: 0.5, 
            roughness: 0.1
        });
    const wall = new THREE.Mesh(geometryWall, materialWall);
    return wall;
}



