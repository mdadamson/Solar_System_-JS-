// name:        Michael Adamson
// class:       CMSC 405
// description: Project 3 (Three.js)

var scene, camera, renderer, myCanvas = document.getElementById("myCanvas");
var sunBox, mercBox, venBox, earthBox, moonBox, marsBox, jupBox, satBox,
uranBox, neptBox;
var sunGeom, mercGeom, venGeom, earthGeom, moonGeom, marsGeom, jupGeom, satGeom, 
satRingGeom1, satRingGeom2, satRingGeom3, satRingGeom4, uranGeom, neptGeom;
var sunTexture, mercTexture, venTexture, earthTexture, moonTexture, marsTexture, 
jupTexture, satTexture, satRingTexture, uranTexture, neptTexture;
var sunMaterial, mercMaterial, venMaterial, earthMaterial, moonMaterial, 
marsMaterial, jupMaterial, satMaterial, satRingMaterial, uranMaterial, neptMaterial;
var sun, mercury, venus, earth, moon, mars, jupiter, saturn, saturnRing1, 
saturnRing2, saturnRing3, saturnRing4, uranus, neptune;
var mercOrbit, venOrbit, earthOrbit, moonOrbit, marsOrbit, jupOrbit, satOrbit,
uranOrbit, neptOrbit, mercOrbitGeom, mercOrbitMat, venOrbitGeom, venOrbitMat,
earthOrbitGeom, earthOrbitMat, moonOrbitGeom, moonOrbitMat, marsOrbitGeom,
marsOrbitMat, jupOrbitGeom, jupOrbitMat, satOrbitGeom, satOrbitMat, uranOrbitGeom,
urbanOrbitMat, neptOrbitGeom, netpOrbitMat;
var mercOrbitalRadius, venOrbitalRadius, earthOrbitalRadius, moonOrbitalRadius, 
marsOrbitalRadius, jupOrbitalRadius, satOrbitalRadius, uranOrbitalRadius, 
neptOrbitalRadius;
var mercTheta, venTheta, earthTheta, moonTheta, marsTheta, jupTheta, satTheta, 
uranTheta, neptTheta; 
var mercDTheta, venDTheta, earthDTheta, moonDTheta, marsDTheta, jupDTheta, 
satDTheta, uranDTheta, neptDTheta;
var sunLight, moonLight;

function start()
{
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera
    (
        45, 
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer
    ( {
        canvas: myCanvas,
        antialias: true,
        alpha: true
    } );

    renderer.setSize(window.innerWidth, window.innerHeight - 28);
    renderer.shadowMapEnabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    sunGeom = new THREE.SphereBufferGeometry(1, 32, 32);
    sunTexture = new THREE.TextureLoader().load('myTextures/sun_surface.png');
    sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    sun = new THREE.Mesh(sunGeom, sunMaterial);
    sunLight = new THREE.PointLight( 0xffffff, 1.5 );
    sunLight.add(sun);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);
    
    mercGeom = new THREE.SphereBufferGeometry(0.2, 16, 16);
    mercTexture = new THREE.TextureLoader().load('myTextures/mercury_surface.jpg');
    mercMaterial = new THREE.MeshStandardMaterial({ map: mercTexture });
    mercury = new THREE.Mesh(mercGeom, mercMaterial);
    scene.add(mercury);
    mercOrbitGeom = new THREE.TorusGeometry(2, 0.01, 32, 100);
    mercOrbitMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    mercOrbit = new THREE.Mesh(mercOrbitGeom, mercOrbitMat);
    mercOrbit.rotateX(Math.PI / 2);
    scene.add(mercOrbit);
    mercOrbitalRadius = 2;
    mercTheta = 2;
    mercDTheta = Math.PI / 300;

    venGeom = new THREE.SphereBufferGeometry(0.25, 16, 16);
    venTexture = new THREE.TextureLoader().load('myTextures/venus_surface.png');
    venMaterial = new THREE.MeshStandardMaterial({ map: venTexture });
    venus = new THREE.Mesh(venGeom, venMaterial);
    scene.add(venus);
    venOrbitGeom = new THREE.TorusGeometry(3, 0.01, 32, 100);
    venOrbitMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    venOrbit = new THREE.Mesh(venOrbitGeom, venOrbitMat);
    venOrbit.rotateX(Math.PI / 2);
    scene.add(venOrbit);
    venOrbitalRadius = 3;
    venTheta = -0.5;
    venDTheta = Math.PI / 550;

    earthGeom = new THREE.SphereBufferGeometry(0.4, 16, 16);
    earthTexture = new THREE.TextureLoader().load('myTextures/earth_atmos_2048.jpg');
    earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
    earth = new THREE.Mesh(earthGeom, earthMaterial);
    scene.add(earth);
    earthOrbitGeom = new THREE.TorusGeometry(4.5, 0.01, 32, 100);
    earthOrbitMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    earthOrbit = new THREE.Mesh(earthOrbitGeom, earthOrbitMat);
    earthOrbit.rotateX(Math.PI / 2);
    scene.add(earthOrbit);
    earthOrbitalRadius = 4.5;
    earthTheta = -0.3;
    earthDTheta = Math.PI / 750;

    moonGeom = new THREE.SphereBufferGeometry(0.15, 8, 8);
    moonTexture = new THREE.TextureLoader().load('myTextures/moon_1024.jpg');
    moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    moon = new THREE.Mesh(moonGeom, moonMaterial);
    scene.add(moon);
    moonLight = new THREE.SpotLight(0xffffff, 1);
    moonLight.angle = Math.PI / 4;
    moonLight.target = earth;
    moonLight.distance = 3;
    scene.add(moonLight);
    moonOrbitGeom = new THREE.TorusGeometry(1, 0.01, 32, 100);
    moonOrbitMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    moonOrbit = new THREE.Mesh(moonOrbitGeom, moonOrbitMat);
    moonOrbit.rotateX(Math.PI / 4.3);
    scene.add(moonOrbit);
    moonOrbitalRadius = 0.9;
    moonTheta = 1;
    moonDTheta = Math.PI / 150;

    marsGeom = new THREE.SphereBufferGeometry(0.3, 16, 16);
    marsTexture = new THREE.TextureLoader().load('myTextures/mars_surface.jpg');
    marsMaterial = new THREE.MeshStandardMaterial({ map: marsTexture });
    mars = new THREE.Mesh(marsGeom, marsMaterial);
    scene.add(mars);
    marsOrbitGeom = new THREE.TorusGeometry(6.5, 0.01, 32, 100);
    marsOrbitMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    marsOrbit = new THREE.Mesh(marsOrbitGeom, marsOrbitMat);
    marsOrbit.rotateX(Math.PI / 2);
    scene.add(marsOrbit);
    marsOrbitalRadius = 6.5;
    marsTheta = 1.3;
    marsDTheta = Math.PI / 1000;

    jupGeom = new THREE.SphereBufferGeometry(0.7, 32, 32);
    jupTexture = new THREE.TextureLoader().load('myTextures/jupiter_surface.jpg');
    jupMaterial = new THREE.MeshStandardMaterial({ map: jupTexture });
    jupiter = new THREE.Mesh(jupGeom, jupMaterial);
    scene.add(jupiter);
    jupOrbitGeom = new THREE.TorusGeometry(8, 0.01, 32, 100);
    jupOrbitMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    jupOrbit = new THREE.Mesh(jupOrbitGeom, jupOrbitMat);
    jupOrbit.rotateX(Math.PI / 2);
    scene.add(jupOrbit);
    jupOrbitalRadius = 8;
    jupTheta = -0.9;
    jupDTheta = Math.PI / 1000;

    satGeom = new THREE.SphereBufferGeometry(0.45, 24, 24);
    satTexture = new THREE.TextureLoader().load('myTextures/saturn_surface.jpg');
    satMaterial = new THREE.MeshStandardMaterial({ map: satTexture });
    saturn = new THREE.Mesh(satGeom, satMaterial);
    saturn.rotateX(Math.PI / -4);
    scene.add(saturn);
    satOrbitGeom = new THREE.TorusGeometry(9.8, 0.01, 32, 100);
    satOrbitMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    satOrbit = new THREE.Mesh(satOrbitGeom, satOrbitMat);
    satOrbit.rotateX(Math.PI / 2);
    scene.add(satOrbit);
    satOrbitalRadius = 9.8;
    satTheta = -3.5;
    satDTheta = Math.PI / 1150;

    satRingGeom1 = new THREE.TorusGeometry(0.7, 0.015, 16, 100);
    satRingGeom2 = new THREE.TorusGeometry(0.8, 0.015, 16, 100);
    satRingGeom3 = new THREE.TorusGeometry(0.9, 0.015, 16, 100);
    satRingGeom4 = new THREE.TorusGeometry(1, 0.015, 16, 100);
    satRingTexture = new THREE.TextureLoader().load('myTextures/saturn_surface.jpg');
    satRingMaterial = new THREE.MeshStandardMaterial({ map: satRingTexture });
    saturnRing1 = new THREE.Mesh(satRingGeom1, satRingMaterial);
    saturnRing2 = new THREE.Mesh(satRingGeom2, satRingMaterial);
    saturnRing3 = new THREE.Mesh(satRingGeom3, satRingMaterial);
    saturnRing4 = new THREE.Mesh(satRingGeom4, satRingMaterial);
    saturnRing1.rotateX(Math.PI / 4);
    saturnRing2.rotateX(Math.PI / 4);
    saturnRing3.rotateX(Math.PI / 4);
    saturnRing4.rotateX(Math.PI / 4);
    scene.add(saturnRing1);
    scene.add(saturnRing2);
    scene.add(saturnRing3);
    scene.add(saturnRing4);

    uranGeom = new THREE.SphereBufferGeometry(0.4, 24, 24);
    uranTexture = new THREE.TextureLoader().load('myTextures/uranus_surface.jpg')
    uranMaterial = new THREE.MeshStandardMaterial({ map: uranTexture });
    uranus = new THREE.Mesh(uranGeom, uranMaterial);
    scene.add(uranus);
    uranOrbitGeom = new THREE.TorusGeometry(11.5, 0.01, 32, 100);
    uranOrbitMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    uranOrbit = new THREE.Mesh(uranOrbitGeom, uranOrbitMat);
    uranOrbit.rotateX(Math.PI / 2);
    scene.add(uranOrbit);
    uranOrbitalRadius = 11.5;
    uranTheta = -0.4;
    uranDTheta = Math.PI / 1300;

    neptGeom = new THREE.SphereBufferGeometry(0.4, 24, 24);
    neptTexture = new THREE.TextureLoader().load('myTextures/neptune_surface.png');
    neptMaterial = new THREE.MeshStandardMaterial({ map: neptTexture });
    neptune = new THREE.Mesh(neptGeom, neptMaterial);
    scene.add(neptune);
    neptOrbitGeom = new THREE.TorusGeometry(13.5, 0.01, 32, 100);
    neptOrbitMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    neptOrbit = new THREE.Mesh(neptOrbitGeom, neptOrbitMat);
    neptOrbit.rotateX(Math.PI / 2);
    scene.add(neptOrbit);
    neptOrbitalRadius = 13.5;
    neptTheta = 1.6;
    neptDTheta = Math.PI / 1450;

    sunBox = document.getElementById('Sun');
    mercBox = document.getElementById('Mercury');
    venBox = document.getElementById('Venus');
    earthBox = document.getElementById('Earth');
    moonBox = document.getElementById('Moon');
    marsBox = document.getElementById('Mars');
    jupBox = document.getElementById('Jupiter');
    satBox = document.getElementById('Saturn');
    uranBox = document.getElementById('Uranus');
    neptBox = document.getElementById('Neptune');

    camera.position.z = 24;
    camera.position.y = 10;
    camera.lookAt(earth.position);
}

function transformPlanets()
{
    requestAnimationFrame(transformPlanets);

    if(sunBox.checked)
    {
        sun.rotation.x += 0.001;
        sun.rotation.y += 0.001;
    }

    if(mercBox.checked)
    {
        mercury.rotation.z -= 0.07;
        mercury.rotation.y += 0.002;
        mercTheta += mercDTheta;
        mercury.position.x = mercOrbitalRadius * Math.cos(mercTheta);
        mercury.position.z = mercOrbitalRadius * Math.sin(mercTheta); 
    }

    if(venBox.checked)
    {
        venus.rotation.x += 0.02;
        venus.rotation.y -+ 0.001;
        venTheta += venDTheta;
        venus.position.x = venOrbitalRadius * Math.cos(venTheta);
        venus.position.z = venOrbitalRadius * Math.sin(venTheta); 
    }
    
    if(earthBox.checked)
    {
        earth.rotation.z += 0.005;
        earth.rotation.y -+ 0.04;
        earthTheta += earthDTheta;
        earth.position.x = earthOrbitalRadius * Math.cos(earthTheta);
        earth.position.z = earthOrbitalRadius * Math.sin(earthTheta);
        
        moonOrbit.position.x = earth.position.x;
        moonOrbit.position.z = earth.position.z;
    }
    
    if(moonBox.checked)
    {
        moon.position.x = earth.position.x + moonOrbitalRadius * Math.cos(moonTheta);
        moon.position.z = earth.position.z + moonOrbitalRadius * Math.sin(moonTheta);
        moon.position.y = moonOrbitalRadius * Math.sin(moonTheta);
        moonLight.position.x = moon.position.x;
        moonLight.position.z = moon.position.z;
        moonLight.position.y = moon.position.y;
        moon.rotation.x += 0.002;
        moon.rotation.y += 0.001;
        moonTheta += moonDTheta;
    }
    else
    {
        moon.position.x = earth.position.x + moonOrbitalRadius;
        moon.position.z = earth.position.z + moonOrbitalRadius;
        moon.position.y = moonOrbitalRadius;
        moonLight.position.x = moon.position.x;
        moonLight.position.z = moon.position.z;
        moonLight.position.y = moon.position.y;
    }

    if(marsBox.checked)
    {
        mars.rotation.x += 0.02;
        mars.rotation.y -+ 0.03;
        marsTheta += marsDTheta;
        mars.position.x = marsOrbitalRadius * Math.cos(marsTheta);
        mars.position.z = marsOrbitalRadius * Math.sin(marsTheta);
    }

    if(jupBox.checked)
    {
        jupiter.rotation.y += 0.01;
        jupTheta += jupDTheta;
        jupiter.position.x = jupOrbitalRadius * Math.cos(jupTheta);
        jupiter.position.z = jupOrbitalRadius * Math.sin(jupTheta);
    }

    if(satBox.checked)
    {
        saturn.rotation.y += 0.02;
        satTheta += satDTheta;
        saturn.position.x = satOrbitalRadius * Math.cos(satTheta);
        saturn.position.z = satOrbitalRadius * Math.sin(satTheta);
        saturnRing1.position.x = satOrbitalRadius * Math.cos(satTheta);
        saturnRing1.position.z = satOrbitalRadius * Math.sin(satTheta);
        saturnRing2.position.x = satOrbitalRadius * Math.cos(satTheta);
        saturnRing2.position.z = satOrbitalRadius * Math.sin(satTheta);
        saturnRing3.position.x = satOrbitalRadius * Math.cos(satTheta);
        saturnRing3.position.z = satOrbitalRadius * Math.sin(satTheta);
        saturnRing4.position.x = satOrbitalRadius * Math.cos(satTheta);
        saturnRing4.position.z = satOrbitalRadius * Math.sin(satTheta);
    }

    if(uranBox.checked)
    {
        uranus.rotation.x += 0.001;
        uranus.rotation.y -+ 0.03;
        uranTheta += uranDTheta;
        uranus.position.x = uranOrbitalRadius * Math.cos(uranTheta);
        uranus.position.z = uranOrbitalRadius * Math.sin(uranTheta);
    }
    
    if(neptBox.checked)
    {
        neptune.rotation.y += 0.05;
        neptTheta += neptDTheta;
        neptune.position.x = neptOrbitalRadius * Math.cos(neptTheta);
        neptune.position.z = neptOrbitalRadius * Math.sin(neptTheta); 
    }
    
    renderer.render(scene, camera);
}

function ifWindowResized()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', ifWindowResized);

start();
transformPlanets();