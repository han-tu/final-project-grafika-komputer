import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

export function generateWallObject(x1, y1, x2, y2, h) {
    
    let lengthX = Math.abs(x1 - x2);
    let lengthZ = Math.abs(y1 - y2);

    if (lengthX == 0) lengthX = 10 ;
    if (lengthZ == 0) lengthZ = 10 ;
    
    const geometryWall = new THREE.BoxGeometry(lengthX, h, lengthZ);
    const materialWall = new THREE.MeshPhongMaterial(
        {
            color: 0xffffff
        });
    const obj = new THREE.Mesh(geometryWall, materialWall);
    obj.position.set(x1, 0, y1);
    return obj;
}