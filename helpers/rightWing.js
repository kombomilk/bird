// правое крыло птицы
rightWingMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
rightWing = new THREE.Mesh(
    new THREE.CubeGeometry(size*3/2, size*3, size/10, 16), rightWingMaterial);

rightWing.position.x = body.position.x;
rightWing.position.y = body.position.y;
rightWing.position.z = body.position.z + size;
rightWing.rotation.x -= 1.0;
