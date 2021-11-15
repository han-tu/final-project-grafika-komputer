import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

export function createBox(boxSize, boxColor){
    const geometryWall = new THREE.BoxGeometry(boxSize, 100, boxSize);
    const materialWall = new THREE.MeshPhongMaterial(
        {
            color: boxColor
        });
    const wall = new THREE.Mesh(geometryWall, materialWall);
    return wall;
}



