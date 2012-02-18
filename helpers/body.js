var bodyRadius = size*3, bodySegments = 32, bodyRings = 32;
body = new THREE.Mesh(
    new THREE.SphereGeometry(bodyRadius/2, bodySegments, bodyRings),
    sphereMaterial);
body.position.x = head.position.x-bodyRadius/2;
body.position.y = head.position.y-bodyRadius/2;

