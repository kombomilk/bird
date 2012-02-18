var rightEyeMaterial = new THREE.MeshBasicMaterial({color: 0xFE9000});
var rightEyeRadius = size/10, rightEyeSegments = 16, rightEyeRings = 16;
rightEye = new THREE.Mesh(
    new THREE.SphereGeometry(rightEyeRadius, rightEyeSegments, rightEyeRings), rightEyeMaterial);
rightEye.position.z = head.position.z + size/2;
rightEye.position.x = head.position.x + size*4/5;
rightEye.position.y = beak.position.y + size/10;
