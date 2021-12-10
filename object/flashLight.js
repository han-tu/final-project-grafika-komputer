import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

export function createFlashLight(camera, crosshair) {
    let flashLight = new THREE.SpotLight(0xffffff);
    flashLight.distance = 70;
    flashLight.angle = 0.7;
    flashLight.penumbra = 0.7;
    flashLight.position.set(0.9, -0.7, -1.2);
    flashLight.target.position.set(0.9, -0.7, -2);
    camera.add(flashLight);
    camera.add(flashLight.target);
    return flashLight;
}