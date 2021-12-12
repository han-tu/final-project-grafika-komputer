import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';

export class Enemy {
    constructor(url, scene, objects, enemiesObj, scale, y, isMoving) {
        this.scene = scene;
        this.objects = objects;
        this.url = url;
        this.scale = scale;
        this.y = y ;
        this.isMoving = isMoving;
        this.enemiesObj = enemiesObj;
        this.makeInstance();
        this.headX = 0;
        this.headZ = 1;
        // this.makeRaycaster();
    }

    rotate(deg) {
        let rad = deg / 180 * Math.PI;
        this.instance.rotation.y += rad;
    }

    setVelocity(v) {
        this.velocity = v;
    }

    move(delta) {
        if (this.checkFront()) {
            this.turn();
        }
        this.instance.position.x += (this.headX * this.velocity * delta);
        this.instance.position.z += (this.headZ * this.velocity * delta);
        this.updateRaycaster();
    }

    turn() {
        if (this.headX != 0) {
            let directionZ = 0;
            while (directionZ == 0)
                directionZ = this.gachaInt(-1, 2);
            this.updateHead(0, directionZ)
            
            if (directionZ == 1) this.instance.rotation.y = 0;
            if (directionZ == -1) this.instance.rotation.y = Math.PI;

        }
        else {
            let directionX = 0;
            while (directionX == 0)
                directionX = this.gachaInt(-1, 2);
            this.updateHead(directionX, 0)
            
            if (directionX == 1) this.instance.rotation.y = Math.PI * 0.5;
            if (directionX == -1) this.instance.rotation.y = -Math.PI * 0.5;
        }
    }

    checkFront() {
        let intersectDir = this.raycaster.intersectObjects(this.objects, false);
        let front = intersectDir.length > 0;
        if (front) return 1;
        else return 0;
    }

    updateHead(directionX, directionZ) {

        this.headX = directionX;
        this.headZ = directionZ;
        this.updateRaycaster();
    }

    updateRaycaster() {
        this.raycaster.ray.origin.copy(this.instance.position);
        this.raycaster.ray.direction.set(this.headX, 0, this.headZ);
    }

    makeRaycaster() {
        let raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(), 0, 10);
        raycaster.ray.origin.copy(this.instance.position);
        raycaster.ray.direction.set(this.headX, 0, this.headZ);
        this.raycaster = raycaster;
    }

    makeInstance() {
        let model
        const loader = new GLTFLoader();
        loader.load(
            this.url,
            (gltf) => {
                let scale = this.scale;
                console.log(scale);
                model = gltf.scene;
                model.scale.set(scale, scale, scale);
                model.position.set(this.gachaInt(-10, 10) * 40 + this.gachaInt(4, 36), this.y, this.gachaInt(-10, 10) * 40 + this.gachaInt(4, 36));
                let mixer = new THREE.AnimationMixer(model);
                let action = mixer.clipAction(gltf.animations[0]);
                action.play();
                this.scene.add(model);
                this.instance = model;
                this.enemiesObj.push(model);
                this.mixer = mixer;
                this.makeRaycaster();
            }
        );
    }

    getInstance() {
        return this.instance;
    }

    gachaInt(st, end) {
        let x = Math.floor(Math.random() * (end - st));
        return x + st;
    }
}