// import * as THREE from "three";
const THREE = require("THREE"); // should be a require (common.js)
import texture from "../assets/img/disc.png"; // https://github.com/mrdoob/three.js/blob/master/examples/textures/sprites/disc.png

let renderer = null;
let scene = null;
let camera = null;
let mouseX = 0;
let mouseY = 0;

const init = (container) => {
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    2,
    2000
  );
  camera.position.z = 1000;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  const sprite = new THREE.TextureLoader().load(texture);

  for (let i = 0; i < 3000; i++) {
    const x = 2000 * Math.random() - 1000;
    const y = 2000 * Math.random() - 1000;
    const z = 2000 * Math.random() - 1000;

    vertices.push(x, y, z);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  let material = new THREE.PointsMaterial({
    size: 10,
    sizeAttenuation: true,
    map: sprite,
    alphaTest: 0.5,
    transparent: true,
    color: 0x0000ff,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  //
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  //
  document.body.addEventListener("pointermove", onPointerMove);

  //
  window.addEventListener("resize", onWindowResize);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const clear = () => {
  document.body.removeEventListener("pointermove", onPointerMove);
  window.removeEventListener("resize", onWindowResize);
};

const onPointerMove = (event) => {
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;

  if (event.isPrimary === false) return;

  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
};

const render = () => {
  camera.position.x += (mouseX - camera.position.x) * 0.01;
  camera.position.y += (-mouseY - camera.position.y) * 0.01;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
};

const animate = () => {
  requestAnimationFrame(animate);
  render();
};

export default {
  init,
  animate,
  clear,
};
