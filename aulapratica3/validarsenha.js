const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para validar a senha (pode ser personalizada)
function validarSenha(senha) {
  // Critério básico: senha deve ter pelo menos 8 caracteres
  return senha.length >= 8;
}

// Solicita a senha ao usuário e verifica se é válida
rl.question('Digite uma senha (mínimo 8 caracteres): ', (senha) => {
  while (!validarSenha(senha)) { // Enquanto a senha for inválida...
    console.log('Senha inválida. Tente novamente.');
    rl.question('Digite sua senha: ', (novaSenha) => {
      senha = novaSenha; // Atualiza a senha com a nova entrada
    });
  }
  console.log('Senha válida!');
  rl.close(); // Fecha a interface de linha de comando
});