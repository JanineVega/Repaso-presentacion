window.onload=function(){
  function Registrando(nombre,apellido,correo,contrasena){
    this.nombre=nombre;
    this.apellido=apellido;
    this.correo=correo;
    this.contrasena=contrasena;
    //aqui cambie la contrasena por password
  }
  var registrar=document.getElementById("registrar");
  registrar.addEventListener("click",function(){
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var correo=document.getElementById("correo").value;
    var contrasena=document.getElementById("password").value;
    var advertencia=document.getElementById("advertencia");

    if(nombre.length==0 || apellido.length==0 || correo.length==0 || contrasena.length==0){
      advertencia.innerHTML="Todos los campos son obligatorios";
      return false;
    }else {
      advertencia.innerHTML="";
      console.log(new Registrando(nombre,apellido,correo,contrasena));
      localStorage.setItem("coderNew",JSON.stringify(new Registrando(nombre,apellido,correo,contrasena)));
        console.log(contrasena);
        //formulario.reset();
        window.location.href="coderInfo.html";

    }

  });
  var nombre=document.getElementById("nombre");
  var apellido=document.getElementById("apellido");
  var validaciones=function (e){
    var codigoTecla = e.keyCode;
    console.log(codigoTecla);
    if ((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32) {
      this.nextElementSibling.nextElementSibling.innerText = "";
			return true;
		}else{
			this.nextElementSibling.nextElementSibling.innerText = "Este campo solo permite letras";
			return false;
		}
  }
  nombre.onkeypress=validaciones;
  apellido.onkeypress=validaciones;

  var spanss=document.getElementsByClassName("input-registrar");
  console.log(spanss);
  var spanInputs=function(e){
    if(this.value.trim().length==0){
      this.value="";
      this.nextElementSibling.nextElementSibling.innerHTML="*Este campo es obligatorio";
    }else {
      this.nextElementSibling.nextElementSibling.innerHTML="";
    }
    if(this.getAttribute("type")=="text"){
      var arrDato=this.value.split(" ");
      var datosConMayusculas="";
      for (var i = 0; i < arrDato.length; i++) {
        datosConMayusculas +=arrDato[i].charAt(0).toUpperCase()+arrDato[i].substring(1).toLowerCase()+" ";
      }
      this.value=datosConMayusculas;
    }

};
  spanss[0].onblur=spanInputs;
  spanss[1].onblur=spanInputs;
var correo=document.getElementById("correo");
  function validarEmail(){
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(this.value) ) {
      advertencia.innerHTML="El correo debe de tener un formato válido";
    }else{
      advertencia.innerHTML="";
    }
  }
  correo.onblur=validarEmail;

var contrasena=document.getElementById("password");
  function validarContrasena(){
    if(this.value.length >=6 && this.value.length <=20){
      advertencia.innerHTML="";
    }else{
      advertencia.innerHTML="La contraseña debe tener entre 6 y 20 carácteres";
    }
  }
contrasena.onblur=validarContrasena;

};
