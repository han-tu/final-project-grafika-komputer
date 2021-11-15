import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

export function createScene(bgColor) {
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(bgColor);
    return scene;
}