let semaforo=false;

$("#nom").change(function(){
  console.log("lanzo aviso");
  if($("#nom").val().length<3){
    $("#nomalert").show()
  }else{
    $("#nomalert").hide()
    semaforo=true;
}
});

$("#ap1").change(function(){
  console.log("lanzo aviso");
  if($("#ap1").val().length<3){
    $("#ap1alert").show()
  }else{
    $("#ap1alert").hide()
    semaforo=true;
  }  
});

$("#ap2").change(function(){
  console.log("lanzo aviso");
  if($("#ap2").val().length<3){
    $("#ap2alert").show()
  }else{
    $("#ap2alert").hide()
    semaforo=true;
  }  
});

$("#numtel").change(function(){
  console.log("lanzo aviso");
  if($("#numtel").val().length<9 || $("#numtel").numeric){
    $("#numalert").show()
  }else{
    $("#numalert").hide()
    semaforo=true;
  }  
});

$("#correo").change(function(){
  console.log("lanzo aviso");

  if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {
    $("#correoalert").show()
  }else{
    $("#correoalert").hide()
    semaforo=true;
  } 
});

$("#dom").change(function(){
  console.log("lanzo aviso");
  if($("#dom").val().length<6){
    $("#domalert").show()
  }else{
    $("#domalert").hide()
    semaforo=true;
  }  
});

$("#cp").change(function(){
  console.log("lanzo aviso");
  if($("#cp").val().length<5 || $("#cp").numeric){
    $("#cpalert").show()
  }else{
    $("#cpalert").hide()
    semaforo=true;
  }  
});

$("#nomus").change(function(){
  console.log("lanzo aviso");
  if($("#nomus").val().length<5){
    $("#nomusalert").show()
  }else{
    $("#nomusalert").hide()
    semaforo=true;
}
});

$("#cont").change(function(){
  console.log("lanzo aviso");
  if($("#cont").val().length<3){
    $("#contalert").show()
  }else{
    $("#contalert").hide()
    semaforo=true;
  }
});

if(semaforo==true){
  $("#enviar").prop('disabled', false)
}