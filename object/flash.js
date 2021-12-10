import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

export function createMuzzleFlash(camera) {
    let flash = new THREE.PointLight(0xf5e153, 0, 100);
    flash.position.set(0.0, 0.0, -2.0);
    flash.visible = true;
    camera.add(flash);
    return flash;
}