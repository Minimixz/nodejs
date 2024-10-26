function converterParaSegundos(horas, minutos) {
    const segundosPorHora = 3600
    const segundosPorMinuto = 60
    return (horas * segundosPorHora) + (minutos * segundosPorMinuto)
  }
  
  const segundos = converterParaSegundos(2, 30)
  console.log("O tempo em segundos é:", segundos)