// хвостяра
var tailTopRadius = size*3/2, tailBottomRadius = size/4, tailHeight = size*2;

tailMaterial = new THREE.MeshBasicMaterial({color: 0x010101});
tail = new THREE.Mesh(
    new THREE.CylinderGeometry(tailTopRadius, tailBottomRadius, tailHeight, 100, true), tailMaterial);
tail.rotation.z += 1;
tail.position.x = body.position.x - size*2;
//tail.position.y = body.position.y + size;
