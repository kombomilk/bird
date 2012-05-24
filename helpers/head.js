// голова птицы
var headMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
var headRadius = size, headSegments = 16, headRings = 16;
head = new THREE.Mesh(
    new THREE.SphereGeometry(headRadius, headSegments, headRings), headMaterial);
