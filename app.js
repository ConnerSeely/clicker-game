// NOTE variables relating to studs
var studs = 0;

var studsPerClick = 1;

var studsPerSecond = 0;

var multiplier = 1;

// NOTE variables relating to upgrades on offCanvas
var hireJawa = 10;
var jawas = 0;

var hireProtocolDroid = 10;
var protocolDroids = 0;

var hireClone = 100;
var clones = 0;

var hireObiWanKenobi = 200;
var ObiWanKenobi = 0;

var hireAnakinSkywalker = 10000;
var anakinskywalker = 0;














document.getElementById("stud-image").onclick = function () { getStuds() };

// NOTE function to gain studs from clicking
function getStuds() {
    studs += studsPerClick * multiplier;
    document.getElementById('stud-counter').innerText = studs;
    // console.log(studs)
}
// NOTE function to gain studs passively
function passiveStuds() {
    studs += studsPerSecond
    document.getElementById('stud-counter').innerText = studs;
    console.log('Passive Studs:', studsPerSecond)
}

// NOTE All stud upgrades
function buyJawa() {

    if (studs >= hireJawa) {
        studs -= hireJawa;

        document.getElementById("stud-counter").innerText = studs;

        jawas++;

        document.getElementById("jawa-number").innerText = jawas;


        hireJawa *= 2;

        document.getElementById("hireJawa-cost").innerText = hireJawa;


        studsPerSecond += 1;

        document.getElementById("studs-second").innerText = studsPerSecond;

    } else {
        alert("You don't have enough Studs!")
    }
}

function buyProtocolDroid() {

    if (studs >= hireProtocolDroid) {
        studs -= hireProtocolDroid;

        document.getElementById("stud-counter").innerText = studs;

        protocolDroids++;

        document.getElementById("droid-number").innerText = protocolDroids;


        hireProtocolDroid *= 2;

        document.getElementById("hire-droid-cost").innerText = hireProtocolDroid;


        studsPerClick += 1;

        document.getElementById("studs-click").innerText = studsPerClick;

    } else {
        alert("You don't have enough Studs!")
    }
}

function buyClone() {

    if (studs >= hireClone) {
        studs -= hireClone;

        document.getElementById("stud-counter").innerText = studs;

        clones++;

        document.getElementById("clone-number").innerText = clones;


        hireClone *= 2;

        document.getElementById("hire-clone-cost").innerText = hireClone;


        studsPerSecond += 50;

        document.getElementById("studs-second").innerText = studsPerSecond;

    } else {
        alert("You don't have enough Studs!")
    }
}

function buyObiWanKenobi() {

    if (studs >= hireObiWanKenobi) {
        studs -= hireObiWanKenobi;

        document.getElementById("stud-counter").innerText = studs;

        ObiWanKenobi++;

        document.getElementById("obiwan-number").innerText = ObiWanKenobi;


        hireObiWanKenobi *= 2;

        document.getElementById("hire-obiwan-cost").innerText = hireObiWanKenobi;


        studsPerClick += 100;

        document.getElementById("studs-click").innerText = studsPerClick;

    } else {
        alert("You don't have enough Studs!")
    }
}

function buyAnakinSkywalker() {

    if (studs >= hireAnakinSkywalker) {
        studs -= hireAnakinSkywalker;

        document.getElementById("stud-counter").innerText = studs;

        anakinskywalker++;

        document.getElementById("anakin-number").innerText = anakinskywalker;


        hireAnakinSkywalker *= 2;

        document.getElementById("hire-anakin-cost").innerText = hireAnakinSkywalker;


        studsPerClick += 1000;

        document.getElementById("studs-click").innerText = studsPerClick;

    } else {
        alert("You don't have enough Studs!")
    }
}



setInterval(passiveStuds, 1000)