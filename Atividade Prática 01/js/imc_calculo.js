     var imc=0;
     var inter_1=0
      var inter_2=0

     //funções para alterar a cor do background do botão quando se coloca o mouse em cima
     
     function mudaCor(el){
        el.style.backgroundColor = '#FF1493';
    }


    function mudaCor_volta(el){
        el.style.backgroundColor = '#B03060';
    }


    //validação: confere se os campos foram digitados de maneira correta

    function validacao(texto) {
  	let n = texto;
 	 if (n.length < 0 || n.value <= 0 || n =="") {
    	window.alert("Ops! Algo está errado. Tente novamente.");
   	 texto.value = "";
   	 texto.focus();
   	 return false;
  }
  return true;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//Calculo do IMC juntamente com o intervalo

function calculo() {

  let peso = document.dados.peso.value;
  let altura = document.dados.altura.value;
  if ((validacao(peso) && validacao(altura) && isNumber(peso) && isNumber(altura)) == true) {

  	//IMC

   imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

     if (imc < 0.00185) {
      document.dados.res.value =   " Subnutrido";
    } else if (imc >= 0.00185 && imc <= 0.00249) {
    document.dados.res.value =  " Saudável";
    } else if (imc > 0.00249 && imc <= 0.00299) {
    document.dados.res.value =  " Sobrepeso";
    } else if (imc > 0.00299 && imc <= 0.00349) {
      document.dados.res.value =  " Obesidade grau 1";
    } else if (imc > 0.00349 && imc <= 0.00399) {
     document.dados.res.value =  " Obesidade grau 2";
    } else {
   document.dados.res.value =  " Obesidade grau 3";
    }

    //Intervalo

let inter_1=parseFloat( 0.00185)*parseFloat(altura)*parseFloat(altura);
let inter_2 = parseFloat(0.00249)*parseFloat(altura)*parseFloat(altura);


 document.dados.inter.value = " Entre " + inter_1 + " KG e " + inter_2 + " KG"; 



  
}

document.dados.peso.value = "";
document.dados.altura.value="";
}


