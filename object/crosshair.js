import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

export function createCrosshair(camera) {
    const map = new THREE.TextureLoader().load('./assets/crosshair.png');
    const material = new THREE.SpriteMaterial({ map: map, transparent: true, depthTest: false });

    let sprite = new THREE.Sprite(material);
    sprite.scale.set(0.1, 0.1, 1);
    sprite.position.z = -2.0;
    camera.add(sprite);
    return sprite;
}