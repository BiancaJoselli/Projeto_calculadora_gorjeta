import { defineStore } from "pinia";
import { ref } from "vue";

export const useItensStore = defineStore("itens", () => {


const bill = ref('');
const tip = ref('');
const people = ref('');

const total = ref(0);
const tipValue = ref(0);
const perPerson = ref(0);
const message = ref('');




  function calculate() {
    console.log(bill.value)
    const billValue = Number(bill.value);
    const tipPercent = Number(tip.value);
    const peopleCount = Number(people.value);

    if (!billValue || !tipPercent || !peopleCount) {
        alert('Preencha os dados');
        message.value = 'Algo deu errado.';
        return;
    }

    tipValue.value = (billValue * tipPercent) / 100;
    total.value = billValue + tipValue.value;
    perPerson.value = total.value / peopleCount;
    message.value = 'Ok';
}
 
return {bill, tip, people, total, tipValue, perPerson, message, calculate}


})