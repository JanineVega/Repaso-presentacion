window.onload=function(){
	document.getElementsByTagName("form")[0].onsubmit=function(e){
		e.preventDefault();
	}
	var objetoCoder = JSON.parse(localStorage.getItem("coderNew"));
	console.log(objetoCoder);
	var coderEditar = document.getElementsByClassName("coder-editar");
	coderEditar[0].value = objetoCoder.nombre;
	coderEditar[1].value = objetoCoder.apellido;
	coderEditar[2].value = objetoCoder.correo;
	coderEditar[3].value = objetoCoder.contrasena;
//nombre password o contrasena
var guardar=document.getElementById("guardar");
	guardar.addEventListener("click",function(){
		if(coderEditar[0].length!=0 && coderEditar[1].length!=0 && coderEditar[2].length!=0 && coderEditar[3].length!=0){
			objetoCoder.nombre=coderEditar[0].value;
			objetoCoder.apellido= coderEditar[1].value
			objetoCoder.correo = coderEditar[2].value;
			objetoCoder.contrasena = coderEditar[3].value;
			localStorage.setItem("coderNew",JSON.stringify(objetoCoder));
			window.location="coderInfo.html"
		}
		else{
			alert("Todos los campos son obligatorios");
		}
	})
};
