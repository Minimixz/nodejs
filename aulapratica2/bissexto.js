var ano = 2024
function ehBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Solicita o ano ao usuário

// Chama a função e exibe o resultado
if (ehBissexto(ano)) {
  console.log(`O ano ${ano} é bissexto.`);
} else {
  console.log(`O ano ${ano} não é bissexto.`);
}