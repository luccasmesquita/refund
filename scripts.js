//Seleciona os elementos do formulario
const amount = document.getElementById("amount")

//captura o evento de input para formatar o valor
amount.oninput = () => {
    //obtem o valor atual do input e remove os caracteres não numericos
    let value = amount.value.replace(/\D/g, "")

    //transformar o valor em centavos 
    value = Number(value) / 100

    //atualiza o valor do input
    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    //formata o valor no padrão BRL (Real brasileiro)
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return value
}