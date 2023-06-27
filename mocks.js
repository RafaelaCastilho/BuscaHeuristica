var d_linha_reta = [
  {
    cidade: "sp_capital",
    distancia_reta_sp: 0
  },
  {
    cidade: "guarulhos",
    distancia_reta_sp: 18
  },
  {
    cidade: "campinas",
    distancia_reta_sp: 84
  },
  {
    cidade: "ribeirao_preto",
    distancia_reta_sp: 290
  },
  {
    cidade: "sao_bernardo",
    distancia_reta_sp: 18
  },
  {
    cidade: "sao_jose",
    distancia_reta_sp: 88
  },
  {
    cidade: "santo_andre",
    distancia_reta_sp: 17
  },
  {
    cidade: "osasco",
    distancia_reta_sp: 15
  },
  {
    cidade: "sorocaba",
    distancia_reta_sp: 84
  },
  {
    cidade: "maua",
    distancia_reta_sp: 23
  },
  {
    cidade: "jundiai",
    distancia_reta_sp: 47
  }
]

var d_estrada_real = [
  {
    cidade: "sp_capital",
    distancia_real_sp: 0
  },
  {
    cidade: "guarulhos",
    distancia_real_sp: 24
  },
  {
    cidade: "campinas",
    distancia_real_sp: 84
  },
  {
    cidade: "ribeirao_preto",
    distancia_real_sp: 313
  },

  {
    cidade: "sao_bernardo",
    distancia_real_sp: 22
  },
  {
    cidade: "sao_jose",
    distancia_real_sp: 96
  },
  {
    cidade: "santo_andre",
    distancia_real_sp: 21
  },

  {
    cidade: "osasco",
    distancia_real_sp: 20
  },
  {
    cidade: "sorocaba",
    distancia_real_sp: 101
  },
  {
    cidade: "maua",
    distancia_real_sp: 28
  },
  {
    cidade: "jundiai",
    distancia_real_sp: 56
  }
]

var teste = [
  {
    cidade1: "ribeirao_preto",
    cidade2: "campinas",
    distancia: 301
  },
  {
    cidade1: "ribeirao_preto",
    cidade2: "sorocaba",
    distancia: 229
  },
  {
    cidade1: "campinas",
    cidade2: "sorocaba",
    distancia: 88
  },
  {
    cidade1: "sorocaba",
    cidade2: "jundiai",
    distancia: 92
  },
  {
    cidade1: "sorocaba",
    cidade2: "osasco",
    distancia: 85
  },
  {
    cidade1: "jundiai",
    cidade2: "sp_capital",
    distancia: 56
  },
  {
    cidade1: "jundiai",
    cidade2: "osasco",
    distancia: 52
  },
  {
    cidade1: "jundiai",
    cidade2: "guarulhos",
    distancia: 69
  },
  {
    cidade1: "osasco",
    cidade2: "sp_capital",
    distancia: 22
  },
  {
    cidade1: "osasco",
    cidade2: "sao_bernardo",
    distancia: 74
  },
  {
    cidade1: "sp_capital",
    cidade2: "sao_bernardo",
    distancia: 21
  },
  {
    cidade1: "sp_capital",
    cidade2: "santo_andre",
    distancia: 25
  },
  {
    cidade1: "sp_capital",
    cidade2: "maua",
    distancia: 27
  },
  {
    cidade1: "sp_capital",
    cidade2: "guarulhos",
    distancia: 24
  },
  {
    cidade1: "guarulhos",
    cidade2: "maua",
    distancia: 36
  },
  {
    cidade1: "guarulhos",
    cidade2: "sao_jose",
    distancia: 74
  },
  {
    cidade1: "sao_jose",
    cidade2: "maua",
    distancia: 106
  },
  {
    cidade1: "maua",
    cidade2: "santo_andre",
    distancia: 10
  },
  {
    cidade1: "santo_andre",
    cidade2: "sao_bernardo",
    distancia: 3
  }
]


module.exports = {d_linha_reta, d_estrada_real, teste};