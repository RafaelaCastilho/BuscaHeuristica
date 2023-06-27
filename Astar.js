// importanto os dados do mock em outro arquivo
const { d_estrada_real, d_linha_reta, teste } = require('./mocks');

const readline = require('readline');

function buscaRotas(saindoDe, rotas) {
  const resp = [];
  const destinos = [];

  while (saindoDe !== "sp_capital") {
    for (const rota of rotas) {
      if (rota.cidade1.includes(saindoDe) || rota.cidade2.includes(saindoDe)) {
        const destino = buscaDestino(rota, saindoDe);
        resp.push(rota);
        destinos.push(destino);
      }
    }

    const distancias = calculaDistancias(resp, destinos);
    classificaRotas(resp, distancias);

    if (resp[0].cidade1 === saindoDe) {
      saindoDe = resp[0].cidade2;
    } else {
      saindoDe = resp[0].cidade1;
    }

    console.log(saindoDe);
  }
}

function buscaDestino(rota, saindoDe) {
  if (rota.cidade1 === saindoDe) {
    return rota.cidade2;
  } else {
    return rota.cidade1;
  }
}

function calculaDistancias(resp, destinos) {
  const distancias = [];

  for (let i = 0; i < resp.length; i++) {
    const cidadeDestino = destinos[i];

    const estrada = d_estrada_real.find(d => d.cidade === cidadeDestino && d.distancia_real_sp);

    const linhaReta = d_linha_reta.find(d => d.cidade === cidadeDestino && d.distancia_reta_sp);
    
    if (estrada && linhaReta) {
      const distancia = estrada.distancia_real_sp + linhaReta.distancia_reta_sp;

      distancias.push({ index: i, distancia: distancia });

      resp[i].distancia += distancia;
    }
  }
  
  return distancias;
}

function classificaRotas(rotas, distancias) {
  for (let i = 0; i < distancias.length; i++) {
    const index = distancias[i].index;
    const distancia = distancias[i].distancia;
    rotas[index].distancia += distancia;
  }

  rotas.sort((a, b) => a.distancia - b.distancia);
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // verifica se já está em SP
  rl.question('Saindo de: ', saindoDe => {
    if (saindoDe === "sp_capital") {
      console.log("Você já está em São Paulo!");
      rl.close();
      return;
    }

    // verifica se a cidade existe
    if (!d_estrada_real.some(cidade => cidade.cidade === saindoDe)) {
      console.log("Cidade não encontrada!");
      rl.close();
      return;
    }

    buscaRotas(saindoDe, teste);
    rl.close();
  });
}

main();
