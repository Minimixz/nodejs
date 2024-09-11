# Passo 1: Definição das credenciais corretas
usuario_correto = "admin"
senha_correta = "1234"

# Passo 2: Solicitação de entrada
usuario_informado = input("Digite o nome de usuário: ")
senha_informada = input("Digite a senha: ")

# Passo 3: Verificação das credenciais
if usuario_informado == usuario_correto and senha_informada == senha_correta:
    # Passo 4: Exibição do resultado
    print("Login permitido: true")
else:
    print("Login permitido: false")
