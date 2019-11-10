
let array_tabela = [];
  var cont=0;
  var cont2=0;

      //funções para alterar a cor do background do botão quando se coloca o mouse em cima

     function mudaCor(el){
        el.style.backgroundColor = '#00BFFF';
    }


    function mudaCor_volta(el){
        el.style.backgroundColor = '#4169E1';
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

//Adiciona na primeira tabela

function add() {

  let nome = document.dados.nome.value;
  let tempo = document.dados.tempo.value;
  if ((validacao(nome) && validacao(tempo)) == true) {
    if(cont<6){
    let tabela = document.getElementById("tabela");
    let largada = tabela.rows.length;
    let newRow = tabela.insertRow(largada);
    for (var j = 0; j < 3; j++) {
      newCell = newRow.insertCell(j);
      if (j == 0) {
        newCell.innerHTML = largada;
      } else if (j == 1) {
        newCell.innerHTML = nome;
      } else {
        newCell.innerHTML = tempo;
      }
    }
    let obj = [];
    obj["largada"] = largada;
    obj["nome"] = nome;
    obj["tempo"] = tempo;
    array_tabela.push(obj);
    document.dados.nome.value = "";
    document.dados.tempo.value = "";
    console.log(array_tabela);
    cont++;
  }
  else{
    window.alert("Ops! O máximo são 6 jogadores.");
  }
}
}

//Ordena o array de maneira correta e cria a segunda tabela

function ordenacao_vencedores() {

//Ordenação

  if(cont2==0){
  array_tabela.sort(function(a, b) {
    if (a.tempo < b.tempo) {
      return -1;
    }

    if (a.tempo > b.tempo) {
      return 1;
    }

    return 0;
  });
  let primeiro = array_tabela[0];
  let menor = primeiro.tempo;
  for (let i = 0; i < array_tabela.length; i++) {
    if (menor > array_tabela[i].tempo) {
      menor = array_tabela[i].tempo;
    }
  }

  //Criação da segunda tabela

  document.getElementById("tabela_resul").style.visibility = "visible";
  let tabela_resul = document.getElementById("tabela_resul");
  for (let i = 0; i < array_tabela.length; i++) {
    let newRow = tabela_resul.insertRow(i+1);
    newCell = newRow.insertCell(0);
    if(array_tabela[i].tempo == menor){
      newCell.innerHTML = (1);
    }
    else{
    newCell.innerHTML = (i+1);
  }
    newCell = newRow.insertCell(1);
    newCell.innerHTML = array_tabela[i].largada;
    newCell = newRow.insertCell(2);
    newCell.innerHTML = array_tabela[i].nome;
    newCell = newRow.insertCell(3);
    newCell.innerHTML = array_tabela[i].tempo;
    newCell = newRow.insertCell(4);
    if (array_tabela[i].tempo == menor) {
      newCell.innerHTML = "Vencedor(a)! :D";
    }
    else {
      newCell.innerHTML = "-";
    }
  }
   cont2 = 1;
  }
 
  else if(cont2==1){
    window.alert("Ops! Você já gerou a tabela de resultados.");
  }
}

