
function login(){

   var user , password

   user = document.getElementById("usuario").value
   password = document.getElementById("contrasena").value

   if(user == "usuario" && password =="1234"){
      window.location ="index2.html"
   } else{
      alert("ERROR DE DATOS")
   }

}






/*Sumador*/

const cantidad1 = document.getElementById("cantidad1");
const cantidad2 = document.getElementById("cantidad2");
const cantidad3 = document.getElementById("cantidad3");
const resultado = document.getElementById("resultado");





cantidad1.onchange = function(){
   if(cantidad1.value == ""){
      cantidad1.value =0
   } sumar();
}

cantidad2.onchange = function(){
   if(cantidad2.value == ""){
      cantidad2.value =0
   } sumar();
}


cantidad3.onchange = function(){
   if(cantidad3.value == ""){
      cantidad3.value =0
   } sumar();
}






function sumar(){
   let total = parseFloat(cantidad1.value) + parseFloat
   (cantidad2.value) + parseFloat(cantidad3.value);
   resultado.value = total;
}





