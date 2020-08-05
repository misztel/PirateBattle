 import _ from 'lodash';
 import './style.css';
 import Block from './water-block-200.png';
 import printMe from './print.js';
 import * as THREE from 'three';
 import {GLTFLoader}  from 'three/examples/jsm/loaders/GLTFLoader';
 import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
 import ship from './ship_dark.gltf';
 import palm from './palm_long.gltf';
 import tower from './tower.gltf';
 import hole from './hole.gltf';

  function component() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.set(60,55,20)

    var renderer = new THREE.WebGLRenderer({alpha: false});
    renderer.shadowMap.enabled = false; // true
    renderer.shadowMap.type = THREE.BasicShadowMap;
    renderer.setClearColor( 0xC5C5C3 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


    var controls = new OrbitControls( camera, renderer.domElement);


    var directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.castShadow = true;
    directionalLight.position.set( 50, 50, -50 ).normalize();
    scene.add( directionalLight );

    var ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
	scene.add(ambientLight);

    var light = new THREE.PointLight( 0xffffff, 1, 50, 2 );
    light.position.set( 10, 0, -10);
    light.castShadow = false;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 25;
    scene.add( light );


//     //Set up shadow properties for the light
// directionalLight.shadow.mapSize.width = 512;  // default
// directionalLight.shadow.mapSize.height = 512; // default
// directionalLight.shadow.camera.near = 0.5;    // default
// directionalLight.shadow.camera.far = 500;     // default


    var loader = new GLTFLoader( );

    loader.load(
        tower,
        ( gltf ) => {
            // called when the resource is loaded
            gltf.scene.scale.set( 1, 1, 1 );
            gltf.scene.position.set(6, 1.5, -4);
            gltf.scene.rotation.set(0, Math.PI/6, 0);
            gltf.scene.castShadow = true;
            gltf.scene.receiveShadow = true;

            scene.add( gltf.scene );
        },
        ( xhr ) => {
            // called while loading is progressing
            console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
        },
        ( error ) => {
            // called when loading has errors
            console.error( 'An error happened', error );
        },
    );

    loader.load(
        hole,
        ( gltf ) => {
            // called when the resource is loaded
            gltf.scene.scale.set( 2, 2, 2 );
            gltf.scene.position.set(7, 1.55, 12);
            gltf.scene.castShadow = true;
            gltf.scene.receiveShadow = true;					    //Position (z = front +, back-)

            scene.add( gltf.scene );
        },
        ( xhr ) => {
            // called while loading is progressing
            console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
        },
        ( error ) => {
            // called when loading has errors
            console.error( 'An error happened', error );
        },
    );

    loader.load(
        palm,
        ( gltf ) => {
            // called when the resource is loaded
            gltf.scene.scale.set( 1, 1, 1 );
            gltf.scene.position.set(-4, 1.5, 7);
            gltf.scene.castShadow = true;
            gltf.scene.receiveShadow = true;				    //Position (z = front +, back-)

            scene.add( gltf.scene );
        },
        ( xhr ) => {
            // called while loading is progressing
            console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
        },
        ( error ) => {
            // called when loading has errors
            console.error( 'An error happened', error );
        },
    );

    loader.load(
        ship,
        ( gltf ) => {
            // called when the resource is loaded
            gltf.scene.scale.set( 1, 1, 1 );
            gltf.scene.position.set(4.5, 0.8, 0.5);
            gltf.scene.castShadow = true;
            gltf.scene.receiveShadow = true;

            scene.add( gltf.scene );
        },
        ( xhr ) => {
            // called while loading is progressing
            console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
        },
        ( error ) => {
            // called when loading has errors
            console.error( 'An error happened', error );
        },
    );

    var geometry = new THREE.CylinderGeometry( 5, 5, 3, 6 );
    var material = new THREE.MeshLambertMaterial( {color: 0x04B2D9} );
    var material2 = new THREE.MeshLambertMaterial( {color: 0xF2CF8D} );

    var group = new THREE.Group();
    var cylinder = new THREE.Mesh( geometry, material2 );
    cylinder.position.set(0,0,0);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    group.add( cylinder );

    var cylinder2 = new THREE.Mesh( geometry, material );
    cylinder2.position.set(9,0,0);
    cylinder2.castShadow = true;
    cylinder2.receiveShadow = true;
    group.add( cylinder2 );

    var cylinder3 = new THREE.Mesh( geometry, material );
    cylinder3.position.set(4.5,0,7.8);
    cylinder3.castShadow = true;
    cylinder3.receiveShadow = true;
    group.add( cylinder3 );

    var cylinder4 = new THREE.Mesh( geometry, material );
    cylinder4.position.set(-4.5,0,-7.8);
    cylinder4.castShadow = true;
    cylinder4.receiveShadow = true;
    group.add( cylinder4 );

    var cylinder6 = new THREE.Mesh( geometry, material );
    cylinder6.position.set(-9,0,0);
    cylinder6.castShadow = true;
    cylinder6.receiveShadow = true;
    group.add( cylinder6 );

    var cylinder7 = new THREE.Mesh( geometry, material );
    cylinder7.position.set(4.5,0,-7.8);
    cylinder7.castShadow = true;
    cylinder7.receiveShadow = true;
    group.add( cylinder7 );

    var cylinder8 = new THREE.Mesh( geometry, material );
    cylinder8.position.set(-4.5,0,7.8);
    cylinder8.castShadow = true;
    cylinder8.receiveShadow = true;
    group.add( cylinder8 );


    scene.add( group );

    // var helper = new THREE.CameraHelper( directionalLight.shadow.camera );
    // scene.add( helper );

    var size = 100;
    var divisions = 100;

    var gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper );





    function animate() {
        render();
        requestAnimationFrame( animate );
        }

    function render() {
        renderer.render( scene, camera );
        }

    render();
    animate();




  }

component();