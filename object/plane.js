import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

function makeObject(planeSize, textureUrl) {
    let obj = new THREE.Mesh(makeGeometry(planeSize), makeMaterial(planeSize, textureUrl));
    obj.receiveShadow = true;
    return obj;
}

function loadTexture(planeSize, textureUrl) {
    const loader = new THREE.TextureLoader();
    let texture = loader.load(textureUrl);

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);
    return texture;
}

function makeGeometry(planeSize) {
    let geometry = new THREE.PlaneGeometry(planeSize, planeSize);
    return geometry;
}

function makeMaterial(planeSize, textureUrl) {
    let material = new THREE.MeshPhongMaterial({
        map: loadTexture(planeSize, textureUrl),
        side: THREE.DoubleSide,
    });
    return material;
}


