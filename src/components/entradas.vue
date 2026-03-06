<script setup>
import {useItensStore} from '../store/itens';
    
const itensStore = useItensStore()
</script>
<template>
    <div class="panel">
                <h2>Entradas</h2>
                <input v-model="itensStore.bill" class="input" placeholder="Valor" />
                <input v-model="itensStore.tip" class="input" placeholder="Porcentagem" />
                <input v-model="itensStore.people" class="input" placeholder="Pessoas" />
                <button class="small-btn" @click="itensStore.calculate">Calcular</button>
            </div>

</template>
<style scoped>
div {
    justify-items: center;
}

h2 {
    font-size: 2vw;
    color: #ff8d22;

}
input{
    display: flex;
    margin: 1vw;
    background-color: white;
    border: none;
    padding: 1vw;
    color: black;   
    text-align: left;
    width: 30vw;
    font-size: 1.2vw;
    border-radius: 0.6vw;
}

input:focus {
    background-color: rgb(255, 225, 170);
}

button {
    width: 32.5vw;
    display: block;
    background-color: #ff8d22;
    border-radius: 0.6vw;
    border: 1px solid transparent;
    padding: 1vw;
    font-size: 1.2vw;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
}
button:hover {
    border-color: #ffc063;
}
button:focus,
button:focus-visible {
    outline: 4px auto #ffc063;
}



@media (max-width: 600px) {
    h2 {
        font-size: 3vw;
    }
    input{
        padding: 1.5vw;
        font-size: 3vw;
        display: flex;
        margin: 1.5vw;
        width: 55vw;
    }   

    button {
        width: 58vw;
        font-size: 3vw;
    }
}
</style>