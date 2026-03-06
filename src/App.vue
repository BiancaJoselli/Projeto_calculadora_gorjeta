<template>
    <div class="app">
        <h1 class="title">Calculadora de Gorjeta e Divisao</h1>

        <div class="layout">
            <entradas/>            
            <div class="panel">
                <h2>Resultado</h2>
                <div class="result">Total: {{ itensStore.total }}</div>
                <div class="result">Gorjeta: {{ itensStore.tipValue }}</div>
                <div class="result">Por pessoa: {{ itensStore.perPerson }}</div>
                <div class="result">{{ itensStore.message }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Entradas from './components/entradas.vue';
import {useItensStore} from './store/itens';

const itensStore = useItensStore()
</script>

<style scoped>
h1 {
    font-size: 2vw;
    margin: 1vw 0 0 1vw;

}
@media (max-width: 600px) {

    h1 {
        font-size: 3vw;
    }
}
</style>