// глобальные переменные, самая интересная - size
// если ее изменить, то вся птичка изменится в размерах
size = 20;
WIDTH = 800, HEIGHT = 600;
VIEW_ANGLE = 45, ASPECT = WIDTH / HEIGHT, NEAR = 0.1, FAR = 10000;

renderer = new THREE.WebGLRenderer();
camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
scene = new THREE.Scene();

camera.position.z = 300;

renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColorHex(0XAC8FA5, 1); // установить цвет фона

pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(10, 50, 130);

sphereMaterial = new THREE.MeshLambertMaterial({color: 0xCC0000});
