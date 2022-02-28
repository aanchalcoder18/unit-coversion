// feet = meters × 3.2808398950131
function metersAndFeet(){
    let qval = document.getElementById("qval").value;
    let feet = qval * 3.2808398950131;
    let meters = qval / 3.2808398950131;
    document.getElementById("rlen").innerHTML = qval + " meters = " + feet.toPrecision(5) + " feet" + " | " + qval + " feet = " + meters.toPrecision(6) + " meters";
}
// 1 liter = 0.264172 gallons
function litersAndGallons(){
    let qval = document.getElementById("qval").value;    
    let liters = qval / 0.264172;
    let gallons = qval * 0.264172;
    document.getElementById("rvol").innerHTML = qval + " liters = " + gallons.toPrecision(5) + " gallons" + " | " + qval + " gallons = " + liters.toPrecision(6) + " liters";
}
// 1 kg = 2.20462262185 lb
function kgsAndLbs(){
    let qval = document.getElementById("qval").value;    
    let kilos = qval / 2.20462262185;
    let pounds = qval * 2.20462262185;
    document.getElementById("rmas").innerHTML = qval + " kilos = " + pounds.toPrecision(5) + " pounds" + " | " + qval + " pounds = " + kilos.toPrecision(6) + " kilos";
}

function converter(){
    metersAndFeet();
    litersAndGallons();
    kgsAndLbs();
}

