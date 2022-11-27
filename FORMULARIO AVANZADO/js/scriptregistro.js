let nomCorrecto=false;
let ap1Correcto=false;
let ap2Correcto=false;
let numtelCorrecto=false;
let correoCorrecto=false;
let domCorrecto=false;
let cpCorrecto=false;
let nomusCorrecto=false;
let contCorrecto=false;


$("#nom").change(function(){
  if($("#nom").val().length<3){
    $("#nomalert").show()
    nomCorrecto=false;
  }else{
    $("#nomalert").hide()
    nomCorrecto=true;
}
});

$("#ap1").change(function(){
  if($("#ap1").val().length<3){
    $("#ap1alert").show()
    ap1Correcto=false;
  }else{
    $("#ap1alert").hide()
    ap1Correcto=true;
  }  
});

$("#ap2").change(function(){
  if($("#ap2").val().length<3){
    $("#ap2alert").show()
    ap2Correcto=false;
  }else{
    $("#ap2alert").hide()
    ap2Correcto=true;
  }
});

$("#numtel").change(function(){
  if($("#numtel").val().length<9 || $("#numtel").numeric){
    $("#numalert").show()
    numtelCorrecto=false;
  }else{
    $("#numalert").hide()
    numtelCorrecto=true;
  }  
});

$("#correo").change(function(){

  if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {
    $("#correoalert").show()
    correoCorrecto=false;
  }else{
    $("#correoalert").hide()
    correoCorrecto=true;
  } 
});

$("#dom").change(function(){
  if($("#dom").val().length<6){
    $("#domalert").show()
    domCorrecto=false;
  }else{
    $("#domalert").hide()
    domCorrecto=true;
  }  
});

$("#cp").change(function(){
  if($("#cp").val().length<5 || $("#cp").numeric){
    $("#cpalert").show()
    cpCorrecto=false;
  }else{
    $("#cpalert").hide()
    cpCorrecto=true;
  }  
});

$("#nomus").change(function(){
  if($("#nomus").val().length<5){
    $("#nomusalert").show()
    nomusCorrecto=false;
  }else{
    $("#nomusalert").hide()
    nomusCorrecto=true;
}
});

$("#cont").change(function(){
  if($("#cont").val().length<3){
    $("#contalert").show()
    contCorrecto=false;
  }else{
    $("#contalert").hide()
    contCorrecto=true;
  }
});

function validar(){
  if(nomCorrecto && ap1Correcto && ap2Correcto && numtelCorrecto && correoCorrecto && domCorrecto && cpCorrecto && nomusCorrecto && contCorrecto){
    location.href ='pago.html';
  }
}

document.getElementById("submit").addEventListener("click", function(){
  var nombre = document.getElementById("nom");
  localStorage.setItem("nom", nombre).value;
});

document.getElementById("submit").addEventListener("click", function(){
  var apell1 = document.getElementById("ap1");
  localStorage.setItem("ap1", apell1).value;
});

document.getElementById("submit").addEventListener("click", function(){
  var apell2 = document.getElementById("ap2");
  localStorage.setItem("ap2", apell2).value;
});

document.getElementById("submit").addEventListener("click", function(){
  var numerotel = document.getElementById("numtel");
  localStorage.setItem("numtel", numerotel).value;
});

document.getElementById("submit").addEventListener("click", function(){
  var corr = document.getElementById("correo");
  localStorage.setItem("correo", corr).value;
});

document.getElementById("submit").addEventListener("click", function(){
  var domicilio = document.getElementById("dom");
  localStorage.setItem("dom", domicilio).value;
});

document.getElementById("submit").addEventListener("click", function(){
  var codpost = document.getElementById("cp");
  localStorage.setItem("cp", codpost).value;
});

document.getElementById("submit").addEventListener("click", function(){
  var nombreUs = document.getElementById("nomus");
  localStorage.setItem("nomus", nombreUs).value;
});

document.getElementById("submit").addEventListener("click", function(){
  var contrasenia = document.getElementById("cont");
  localStorage.setItem("cont", contrasenia).value;
});