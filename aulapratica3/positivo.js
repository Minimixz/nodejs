feedbacks = ["positivo", "negativo", "neutro", "positivo", "negativo", "positivo"]

contagem_positivos = 0
contagem_negativos = 0
contagem_neutros = 0

for feedback in feedbacks:
    if feedback == "positivo":
        contagem_positivos += 1
    elif feedback == "negativo":
        contagem_negativos += 1
    else:
        contagem_neutros += 1

total_feedbacks = len(feedbacks)
percentual_positivos = (contagem_positivos / total_feedbacks) * 100
percentual_negativos = (contagem_negativos / total_feedbacks) * 100
percentual_neutros = (contagem_neutros / total_feedbacks) * 100

print("Total de feedbacks positivos:", contagem_positivos)
print("Total de feedbacks negativos:", contagem_negativos)
print("Total de feedbacks neutros:", contagem_neutros)
print("Percentual de feedbacks positivos:", percentual_positivos, "%")
print("Percentual de feedbacks negativos:", percentual_negativos, "%")
print("Percentual de feedbacks neutros:", percentual_neutros, "%")