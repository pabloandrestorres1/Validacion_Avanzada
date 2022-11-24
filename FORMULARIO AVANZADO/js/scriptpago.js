let numtarjCorrecto=false;
let nomtarjCorrecto=false;
let cvcCorrecto=false;

$("#numtarj").change(function(){
    if($("#numtarj").val().length!=16){
      $("#numtarjalert").show()
      numtarjCorrecto=false;
    }else{
      $("#numtarjalert").hide()
      numtarjCorrecto=true;
  }
});

$("#nomtarj").change(function(){
    if($("#nomtarj").val().length<5){
      $("#nomtarjalert").show()
      nomtarjCorrecto=false;
    }else{
      $("#nomtarjalert").hide()
      nomtarjCorrecto=true;
  }
});

$("#cvc").change(function(){
    if($("#cvc").val().length!=3){
      $("#cvcalert").show()
      cvcCorrecto=false;
    }else{
      $("#cvcalert").hide()
      cvcCorrecto=true;
  }
});

function validar(){
    if(numtarjCorrecto && nomtarjCorrecto && cvcCorrecto){
      location.href ='bienvenida.html';
    }
  }