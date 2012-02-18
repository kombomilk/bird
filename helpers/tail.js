var tailTopRadius = 0, tailBottomRadius = size/5, tailHeight = size*2;

tail = new THREE.Mesh(
    new THREE.CylinderGeometry(tailTopRadius, tailBottomRadius, tailHeight, 100), sphereMaterial);
tail.rotation.z += 1;
tail.position.x = body.position.x - size*2;
tail.position.y = body.position.y + size;
