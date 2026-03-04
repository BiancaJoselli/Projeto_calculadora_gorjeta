<script setup>
import {useItensStore} from '../store/itens';
    
const {bill, tip, people, calculate} = useItensStore();



</script>
<template>
    <div class="panel">
                <h2>Entradas</h2>
                <input v-model="bill" class="input" placeholder="Valor" />
                <input v-model="tip" class="input" placeholder="Porcentagem" />
                <input v-model="people" class="input" placeholder="Pessoas" />
                <button class="small-btn" @click="calculate">Calcular</button>
            </div>

</template>
<style scoped>

h1 {
    font-size: large;
}
</style>