// левое крыло
leftWingMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
leftWing = new THREE.Mesh(
    new THREE.CubeGeometry(size*3/2, size*3, size/10, 16), leftWingMaterial);
leftWing.position.x = body.position.x;
leftWing.position.y = body.position.y;
leftWing.position.z = body.position.z - size;
leftWing.rotation.x += 1.0;
