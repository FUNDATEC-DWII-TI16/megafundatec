<template>
  <div class="c-mega-fundatec">
    <h2>Mega Fundatec</h2>
    <div v-for="gn in gruposDezenas" :key="gn">
      <div
        class="dezena"
        v-for="dezena in obterDezenasDoGrupo(gn)"
        :key="dezena"
      >
        <button
          :class="
            (dezenaJaEstaMarcada(dezena) ? 'marcada' : '') + ' btn-dezena'
          "
          type="button"
          @click="marcaOuDesmarcaDezena(dezena)"
        >
          {{ formataDezena(dezena) }}
        </button>
      </div>
    </div>
    <div class="resumo-jogo">
      {{ resumoDoJogo }}
    </div>
    <button type="button" @click="confirmarJogo">Confirmar Jogo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dezenas: [],
      gruposDezenas: [0, 1, 2, 3, 4, 5],
      dezenasMarcadas: [],
    };
  },
  created() {
    for (let i = 1; i <= 60; i++) this.dezenas.push(i);
  },
  computed: {
    resumoDoJogo() {
      if (this.dezenasMarcadas.length === 0)
        return "Você ainda não marcou nenhuma dezena";

      let dezenaOrdenadasEFormatas = this.dezenasMarcadas
        .map((dm) => this.formataDezena(dm))
        .sort()
        .join("-");

      return "Você jogou as seguintes dezenas: " + dezenaOrdenadasEFormatas;
    },
  },
  methods: {
    confirmarJogo() {
      if (this.dezenasMarcadas.length < 6) {
        alert("Você precisa marcar pelo menos 6 dezenas");
        return;
      }

      alert("Jogo efetuado, boa sorte! Não esqueça de guardar seu canhoto");
    },
    dezenaJaEstaMarcada(dezena) {
      return this.dezenasMarcadas.filter((dm) => dm === dezena).length > 0;
    },
    marcaOuDesmarcaDezena(dezena) {
      if (this.dezenaJaEstaMarcada(dezena)) {
        this.desmarcaDezena(dezena);
      } else {
        this.marcaDezena(dezena);
      }
    },
    desmarcaDezena(dezena) {
      //remove dezena das marcadas
      this.dezenasMarcadas = this.dezenasMarcadas.filter((dm) => dm !== dezena);
    },
    marcaDezena(dezena) {
      if (this.dezenasMarcadas.length >= 6) return;

      //adiciona dezena nas marcadas
      this.dezenasMarcadas.push(dezena);
    },
    formataDezena(dezena) {
      if (dezena < 10) return "0" + dezena;

      return dezena;
    },
    obterDezenasDoGrupo(grupoDezena) {
      if (grupoDezena === 0)
        return this.dezenas.filter((dezena) => {
          return dezena <= 10;
        });

      if (grupoDezena === 1)
        return this.dezenas.filter((dezena) => {
          return dezena > 10 && dezena <= 20;
        });

      if (grupoDezena === 2)
        return this.dezenas.filter((dezena) => {
          return dezena > 20 && dezena <= 30;
        });

      if (grupoDezena === 3)
        return this.dezenas.filter((dezena) => {
          return dezena > 30 && dezena <= 40;
        });
      top;

      if (grupoDezena === 4)
        return this.dezenas.filter((dezena) => {
          return dezena > 40 && dezena <= 50;
        });

      if (grupoDezena === 5)
        return this.dezenas.filter((dezena) => {
          return dezena > 50 && dezena <= 60;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dezena {
  display: inline-block;
  width: 30px;
  margin: 5px;
}

.btn-dezena {
  border-radius: 10px;
  background-color: white;
  border: 1px solid;
}

.marcada {
  background-color: #ccc;
}

.resumo-jogo {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
