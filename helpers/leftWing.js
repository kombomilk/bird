leftWing = new THREE.Mesh(
    new THREE.CubeGeometry(size, size*2, size/10, 16), sphereMaterial);
leftWing.position.x = body.position.x;
leftWing.position.y = body.position.y + size*2;
leftWing.rotation.x += 1.0;
