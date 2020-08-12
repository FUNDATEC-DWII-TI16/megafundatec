<template>
  <div class="container-fluid c-pagamento">
    <div class="row">
      <div class="offset-3 col-6">
        <h2>Pagamento da Megafundatec</h2>
      </div>
    </div>
    <div class="row">
      <div class="offset-3 col-9">
        <h4>Dados da aposta</h4>
      </div>
    </div>
    <div class="row">
      <div class="offset-3 col-2 label">
        Dezenas:
      </div>
      <div class="col-4">{{ dadosPagamento.dezenas }}</div>
    </div>
    <div class="row">
      <div class="offset-3 col-2 label">
        Valor:
      </div>
      <div class="col-4">
        {{ formataValor(dadosPagamento.valor) }}
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="offset-3 col-3">
        <label>Número do cartão</label>
        <input
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          maxlength="16"
          class="form-control"
          v-model="dadosCartao.numero"
        />
      </div>
      <div class="col-1">
        <label>Validade</label>
        <input
          type="text"
          placeholder="MM/AA"
          maxlength="5"
          class="form-control"
          v-model="dadosCartao.validade"
        />
      </div>
    </div>
    <div class="row">
      <div class="offset-3 col-3">
        <label>Nome do títular (igual ao impresso no cartão)</label>
        <input
          type="text"
          maxlength="50"
          placeholder="Fulano da Silva"
          class="form-control"
          v-model="dadosCartao.nomeTitular"
        />
      </div>
      <div class="col-1">
        <label>CVV</label>
        <input
          type="text"
          maxlength="3"
          placeholder="YYY"
          class="form-control"
          v-model="dadosCartao.cvv"
        />
      </div>
    </div>
    <div class="row mt-4">
      <div class="offset-3 col-4 text-right">
        <button class="btn btn-primary" @click="pagar">
          Confirmar Pagamento
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";

// switch between locales
numeral.locale("pt");

export default {
  data() {
    return {
      dadosPagamento: null,
      dadosCartao: {
        numero: null,
        validade: null,
        nomeTitular: null,
        cvv: null,
      },
    };
  },
  created() {
    this.dadosPagamento = JSON.parse(sessionStorage.getItem("dadosPagamento"));
  },
  methods: {
    formataValor(valor) {
      return numeral(valor).format("$ 0,0.00");
    },
    pagar() {
      alert("Pagamento realizado com sucesso!");
    },
  },
};
</script>

<style>
.c-pagamento {
  text-align: left;
}

.label {
  font-weight: bold;
}
</style>
