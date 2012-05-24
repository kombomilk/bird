// тельце у нашей птички большое и пухлое, как она только летает
//
var bodyRadius = size*3, bodySegments = 32, bodyRings = 32;
bodyMaterial = new THREE.MeshBasicMaterial({color: 0x000000, fog: 0.1});
body = new THREE.Mesh(
    new THREE.SphereGeometry(bodyRadius/2, bodySegments, bodyRings),
    bodyMaterial);
body.position.x = head.position.x-bodyRadius/2;
body.position.y = head.position.y-bodyRadius/2;

