class CalculadoraRPN {

	constructor() {
		this.pila = new Array();
	}

	apilar(valor) {
		if (valor === "") {
			//No se muestra nada
		} else {
			this.pila.push(valor);
			this.mostrarPila();
			this.borrarDatos("");
		}
	}

	desapilar(){
		return (this.pila.pop());
		this.mostrarPila();
	}

	mostrarPila() {
		var stringPila = "Pila: ";
		for (var i in this.pila) {
			stringPila += this.pila[i] + " ";
		}
		document.getElementById('ventanaPila').value = stringPila;
	}

	añadirAResultados(valor) {
		document.getElementById('ventanaResultados').value += valor;
	}	

	borrarDatos(valor) {
		document.getElementById('ventanaResultados').value = valor;
	}

	borrarValor() {
		var valoresActuales = document.getElementById('ventanaResultados').value;
		document.getElementById('ventanaResultados').value = valoresActuales.substring(0, valoresActuales.length - 1);
	}

	sumar() {
		if (this.pila.length >= 2) {
		var nuevoValor;
		var valor1 = this.desapilar();
		var valor2 = this.desapilar();
		nuevoValor = parseInt(valor1) + parseInt(valor2);
		this.apilar(nuevoValor);
		}
	}

	restar() {
		if (this.pila.length >= 2) {
		var nuevoValor;
		var valor1 = this.desapilar();
		var valor2 = this.desapilar();
		nuevoValor = parseInt(valor2) - parseInt(valor1);
		this.apilar(nuevoValor);
		}
	}

	multiplicar() {
		if (this.pila.length >= 2) {
		var nuevoValor;
		var valor1 = this.desapilar();
		var valor2 = this.desapilar();
		nuevoValor = valor1 * valor2;
		this.apilar(nuevoValor);
		}
	}

	dividir() {
		if (this.pila.length >= 2) {
		var nuevoValor;
		var valor1 = this.desapilar();
		var valor2 = this.desapilar();
		nuevoValor = valor2 / valor1;
		this.apilar(nuevoValor);
		}
	}

	exponencial() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.exp(valor);
		this.apilar(nuevoValor);
		}
	}

	elevarACuadrado() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = valor * valor;
		this.apilar(nuevoValor);
		}
	}

	cambiarSignos() {
	if(document.getElementById('ventanaResultados').value.substring(0, 1) == "-") {
		document.getElementById('ventanaResultados').value = document.getElementById('ventanaResultados').value.substring(1, document.getElementById('ventanaResultados').value.length);
	} else {
		document.getElementById('ventanaResultados').value = "-" + document.getElementById('ventanaResultados').value;
		}
	}

	raiz() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.sqrt(valor);
		this.apilar(nuevoValor);
		}
	}

	logaritmoNeperiano() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.log(valor);
		this.apilar(nuevoValor);
		}
	}

	coseno() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.cos(valor);
		this.apilar(nuevoValor);
		}
	}

	seno() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.sin(valor);
		this.apilar(nuevoValor);
		}
	}

	tangente() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.tan(valor);
		this.apilar(nuevoValor);
		}
	}

	potencial() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.pow(valor);
		this.apilar(nuevoValor);
		}
	}

	arcocoseno() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.acos(valor);
		this.apilar(nuevoValor);
		}
	}

	arcoseno() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.asin(valor);
		this.apilar(nuevoValor);
		}
	}

	arcotangente() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.atan(valor);
		this.apilar(nuevoValor);
		}
	}

	logaritmoBase10() {
		if (this.pila.length >= 1) {
		var nuevoValor;
		var valor = this.desapilar();
		nuevoValor = Math.log10(valor);
		this.apilar(nuevoValor);
		}
	}
}
var calculadoraScript = new CalculadoraRPN();

