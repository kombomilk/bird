var leftEyeMaterial = new THREE.MeshBasicMaterial({color: 0xFE9000});
var leftEyeRadius = size/10, leftEyeSegments = 16, leftEyeRings = 16;
leftEye = new THREE.Mesh(
    new THREE.SphereGeometry(leftEyeRadius, leftEyeSegments, leftEyeRings), leftEyeMaterial);
leftEye.position.z = head.position.z - size/2;
leftEye.position.x = head.position.x + size*4/5;
leftEye.position.y = beak.position.y + size/10;
