def loja_aberta(dia, hora):
    # Definindo os horários de funcionamento
    horarios = {
        "segunda": (9, 18),
        "terça": (9, 18),
        "quarta": (9, 18),
        "quinta": (9, 18),
        "sexta": (9, 18),
        "sábado": (9, 14),
        "domingo": (0, 0)  # Loja fechada
    }
    
    # Convertendo o dia para minúsculas para facilitar a comparação
    dia = dia.lower()

    # Verificando se o dia é válido
    if dia not in horarios:
        return "Dia da semana inválido."

    # Obtendo o horário de funcionamento para o dia
    hora_abertura, hora_fechamento = horarios[dia]

    # Verificando se a loja está aberta
    if hora_abertura <= hora < hora_fechamento:
        return "A loja está aberta: true"
    else:
        return "A loja está aberta: false"

# Função principal para interação com o usuário
def main():
    dia = input("Digite o dia da semana: ")
    hora = int(input("Digite a hora atual (0-23): "))
    
    resultado = loja_aberta(dia, hora)
    print(resultado)

if __name__ == "__main__":
    main()
