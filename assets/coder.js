window.onload=function(){
	var nombre = document.getElementById("nombre-coder");
	var apellido = document.getElementById("apellido-coder");
	var correo = document.getElementById("correo-coder");
	var password = document.getElementById("contrasena-coder");

	var objetoCoder = JSON.parse(localStorage.getItem("coderNew"));
  console.log(objetoCoder);

	nombre.innerText=objetoCoder.nombre;
	apellido.innerText=objetoCoder.apellido;
	correo.innerText=objetoCoder.correo;
	password.innerText=objetoCoder.contrasena;

	function Registrando(nombreCoder,apellidoCoder,correoCoder,passwordCoder) {
		this.nombre = nombreCoder;
		this.apellido = apellidoCoder;
		this.correo = correoCoder;
		this.password = passwordCoder;

	};

	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="editar.html"
	})
};
