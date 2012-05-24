// это наш клюв, он желтый и острый
var beakMaterial = new THREE.MeshBasicMaterial({color: 0xEDB000});

var beakTopRadius = 0, beakBottomRadius = size/5, beakHeight = size*2;
beak = new THREE.Mesh(
    new THREE.CylinderGeometry(beakTopRadius, beakBottomRadius, beakHeight, 100), beakMaterial);
beak.rotation.z -= 1.5;
beak.position.x = body.position.x + size*3;
