import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';

export function createGun(gun, camera) {
    const gunloader = new GLTFLoader();
    gunloader.load('assets/model/gun.gltf', function (gltf) {
        gun.add(gltf.scene);
        gun.rotation.y = -Math.PI / 2 - Math.PI / 180 * 20;
        gun.position.z = -1.2;
        gun.position.y = -0.7;
        gun.position.x = 0.9;
        camera.add(gun);
    });
}