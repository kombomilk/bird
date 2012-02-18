var beakTopRadius = 0, beakBottomRadius = size/5, beakHeight = size*2;

beak = new THREE.Mesh(
    new THREE.CylinderGeometry(beakTopRadius, beakBottomRadius, beakHeight, 100), sphereMaterial);
beak.rotation.z -= 1.5;
beak.position.x = body.position.x + size*3;
beak.position.y = body.position.y + size;
