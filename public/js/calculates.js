//Cálculos C1
function RodamientoUno(){
    var r1 = document.getElementById('rodamiento1').value;
    var prue1 = document.getElementById('prueba1').value;
    var apoyo1 = document.getElementById('apoyo1').value;
    var rodam = ["32306","32307","32308","32309","32310","32311","32312","32313","32314","32315","32316","32318","32320","30217","30220","30221","32028X","30226","30228","32034X","32036X","32922","32926","32928","32930","32934","32936","32938","32940"];
    var fuerza = [443,443,692,692,692,692,1098,1098,1098,1098,1098,1098,1772,1098,1098,1098,1772,1772,1772,2770,2770,1098,1098,1098,1772,1772,1772,2770,2770];
    var exist = rodam.indexOf(r1);
    if(exist != -1 && prue1 == "M12") {
        document.getElementById('R1').textContent = ((fuerza[exist]*0.024)/apoyo1).toFixed(2);
    } else if(exist != -1 && prue1=="M16") {
        document.getElementById('R1').textContent = ((fuerza[exist]*0.036)/apoyo1).toFixed(2);
    } else {
        document.getElementById('R1').textContent = "Rodamiento no válido.";
    }
}

function RodamientoDos(){
    var r2 = document.getElementById('rodamiento2').value;
    var prue2 = document.getElementById('prueba2').value;
    var apoyo2 = document.getElementById('apoyo2').value;
    var rodam = ["32306","32307","32308","32309","32310","32311","32312","32313","32314","32315","32316","32318","32320","30217","30220","30221","32028X","30226","30228","32034X","32036X","32922","32926","32928","32930","32934","32936","32938","32940"];
    var fuerza = [443,443,692,692,692,692,1098,1098,1098,1098,1098,1098,1772,1098,1098,1098,1772,1772,1772,2770,2770,1098,1098,1098,1772,1772,1772,2770,2770];
    var exist = rodam.indexOf(r2);
    if(exist != -1 && prue2 == "M12") {
        document.getElementById('R2').textContent = ((fuerza[exist]*0.024)/apoyo2).toFixed(2);
    } else if(exist != -1 && prue2=="M16") {
        document.getElementById('R2').textContent = ((fuerza[exist]*0.036)/apoyo2).toFixed(2);
    } else {
        document.getElementById('R2').textContent = "Rodamiento no válido.";
    }
}

function RodamientoTres(){
    var r3 = document.getElementById('rodamiento3').value;
    var prue3 = document.getElementById('prueba3').value;
    var apoyo3 = document.getElementById('apoyo3').value;
    var rodam = ["32306","32307","32308","32309","32310","32311","32312","32313","32314","32315","32316","32318","32320","30217","30220","30221","32028X","30226","30228","32034X","32036X","32922","32926","32928","32930","32934","32936","32938","32940"];
    var fuerza = [443,443,692,692,692,692,1098,1098,1098,1098,1098,1098,1772,1098,1098,1098,1772,1772,1772,2770,2770,1098,1098,1098,1772,1772,1772,2770,2770];
    var exist = rodam.indexOf(r3);
    if(exist != -1 && prue3 == "M12") {
        document.getElementById('R3').textContent = ((fuerza[exist]*0.024)/apoyo3).toFixed(2);
    } else if(exist != -1 && prue3 == "M16") {
        document.getElementById('R3').textContent = ((fuerza[exist]*0.036)/apoyo3).toFixed(2);
    } else {
        document.getElementById('R3').textContent = "Rodamiento no válido.";
    }
}

function RodamientoCuatro(){
    var r4 = document.getElementById('rodamiento4').value;
    var prue4 = document.getElementById('prueba4').value;
    var apoyo4 = document.getElementById('apoyo4').value;
    var rodam = ["32306","32307","32308","32309","32310","32311","32312","32313","32314","32315","32316","32318","32320","30217","30220","30221","32028X","30226","30228","32034X","32036X","32922","32926","32928","32930","32934","32936","32938","32940"];
    var fuerza = [443,443,692,692,692,692,1098,1098,1098,1098,1098,1098,1772,1098,1098,1098,1772,1772,1772,2770,2770,1098,1098,1098,1772,1772,1772,2770,2770];
    var exist = rodam.indexOf(r4);
    if(exist != -1 && prue4 == "M12") {
        document.getElementById('R4').textContent = ((fuerza[exist]*0.024)/apoyo4).toFixed(2);
    } else if(exist != -1 && prue4 == "M16") {
        document.getElementById('R4').textContent = ((fuerza[exist]*0.036)/apoyo4).toFixed(2);
    } else {
        document.getElementById('R4').textContent = "Rodamiento no válido.";
    }
}

function PromedioUno(){ 
    var e1 = document.getElementById('E1').value; 
    var e2 = document.getElementById('E2').value;
    document.getElementById('P1').textContent = ((parseFloat(e1) + parseFloat(e2))/2).toFixed(2); 
    document.getElementById('P11').textContent = Math.abs(((parseFloat(e1) + parseFloat(e2))/2)).toFixed(2);
    document.getElementById('P111').textContent = Math.abs(((parseFloat(e1) + parseFloat(e2))/2)).toFixed(2);
}

function DiferenciaUno(){
    var e3 = document.getElementById('E3').value;
    var e4 = document.getElementById('E4').value;
    document.getElementById('D1').textContent = ((parseFloat(e3) - parseFloat(e4))).toFixed(2); 
}

function FunA1(){
    document.getElementById('A1').textContent = (parseFloat(document.getElementById("D1").innerHTML) + Math.abs(parseFloat(document.getElementById("P1").innerHTML))).toFixed(2);
}

function DiferenciaDos(){
    var a2 = document.getElementById('A2').value;
    document.getElementById('D2').textContent = ((parseFloat(document.getElementById("A1").innerHTML))-(parseFloat(a2))).toFixed(2);
}

function C1(){
    document.getElementById('C1').textContent = (Math.abs(parseFloat(document.getElementById("D2").innerHTML)) + Math.abs(parseFloat(document.getElementById("P1").innerHTML))).toFixed(2);
}

//Cálculos C2
function PromedioDos(){ 
    var e5 = document.getElementById('E5').value; 
    var e6 = document.getElementById('E6').value;
    document.getElementById('P2').textContent = ((parseFloat(e5) + parseFloat(e6))/2).toFixed(2); 
    document.getElementById('P22').textContent = Math.abs(((parseFloat(e5) + parseFloat(e6))/2)).toFixed(2);
    document.getElementById('P222').textContent = Math.abs(((parseFloat(e5) + parseFloat(e6))/2)).toFixed(2);
}

function FunA3(){
    var e7 = document.getElementById('E7').value;
    document.getElementById('A3').textContent = (parseFloat(e7) + Math.abs(parseFloat(document.getElementById("P2").innerHTML))).toFixed(2);
}

function DiferenciaTres(){
    var e8 = document.getElementById('E8').value;
    document.getElementById('D3').textContent = ((parseFloat(document.getElementById("A3").innerHTML))-(parseFloat(e8))).toFixed(2);
}
function C2(){
    document.getElementById('C2').textContent = (Math.abs(parseFloat(document.getElementById("D3").innerHTML)) + Math.abs(parseFloat(document.getElementById("P2").innerHTML))).toFixed(2);
}

//Calculos C3
function PromedioTres(){ 
    var e9 = document.getElementById('E9').value; 
    var e10 = document.getElementById('E10').value;
    document.getElementById('P3').textContent = ((parseFloat(e9) + parseFloat(e10))/2).toFixed(2); 
    document.getElementById('P33').textContent = Math.abs(((parseFloat(e9) + parseFloat(e10))/2)).toFixed(2);
    document.getElementById('P333').textContent = Math.abs(((parseFloat(e9) + parseFloat(e10))/2)).toFixed(2);
}
function FunA4(){
    var e11 = document.getElementById('E11').value;
    document.getElementById('A4').textContent = (parseFloat(e11) + Math.abs(parseFloat(document.getElementById("P3").innerHTML))).toFixed(2);
}
function DiferenciaCuatro(){
    var e12 = document.getElementById('E12').value;
    document.getElementById('D4').textContent = ((parseFloat(document.getElementById("A4").innerHTML))-(parseFloat(e12))).toFixed(2);
}
function C3(){
    document.getElementById('C3').textContent = (Math.abs(parseFloat(document.getElementById("D4").innerHTML)) + Math.abs(parseFloat(document.getElementById("P3").innerHTML))).toFixed(2);
}
//Calculos C4
function PromedioCuatro(){ 
    var e13 = document.getElementById('E13').value; 
    var e14 = document.getElementById('E14').value;
    document.getElementById('P4').textContent = ((parseFloat(e13) + parseFloat(e14))/2).toFixed(2); 
    document.getElementById('P44').textContent = Math.abs(((parseFloat(e13) + parseFloat(e14))/2)).toFixed(2);
    document.getElementById('P444').textContent = Math.abs(((parseFloat(e13) + parseFloat(e14))/2)).toFixed(2);
}
function FunA5(){
    var e15 = document.getElementById('E15').value;
    document.getElementById('A5').textContent = (parseFloat(e15) + Math.abs(parseFloat(document.getElementById("P4").innerHTML))).toFixed(2);
}
function DiferenciaCinco(){
    var e16 = document.getElementById('E16').value;
    document.getElementById('D5').textContent = ((parseFloat(document.getElementById("A5").innerHTML))-(parseFloat(e16))).toFixed(2);
}
function C4(){
    document.getElementById('C4').textContent = (Math.abs(parseFloat(document.getElementById("D5").innerHTML)) + Math.abs(parseFloat(document.getElementById("P4").innerHTML))).toFixed(2);
}