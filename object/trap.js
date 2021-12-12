import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';

export async function createTrap(x, z, scene, traps, url) {

    let loader = new GLTFLoader();
    loader.load(url, function (gltf) {
        let scaling = 0.001;
        gltf.scene.scale.set(scaling, scaling, scaling);
        gltf.scene.position.set(x, 0, z);
        gltf.scene.rotation.y += Math.PI * Math.random();
        scene.add(gltf.scene);
        traps.push(gltf.scene);
    });
}

