rightWing = new THREE.Mesh(
    new THREE.CubeGeometry(size, size*2, size/10, 16), sphereMaterial);
rightWing.position.x = body.position.x;
rightWing.position.y = body.position.y - size*2;
rightWing.rotation.x += 1.0;
