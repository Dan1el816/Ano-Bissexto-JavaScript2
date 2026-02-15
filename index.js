function verificarAnoBissexto(ano) {

  if (ano % 4 == 0 && ano % 100 == 0) {
    if (ano % 400 == 0) {
      alert("É um ano bissexto");
      return 0;
    }
    alert("NÃO é um ano bissexto");
  } else if (ano % 4 != 0) {
    alert("NÃO é um ano bissexto");
  } else if (ano % 4 == 0) {
    alert("É um ano bissexto");
  }

}

/*Exemplo:*/
verificarAnoBissexto(2000);
