//Seleciona os elementos do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

//captura o evento de input para formatar o valor
amount.oninput = () => {
  //obtem o valor atual do input e remove os caracteres não numericos
  let value = amount.value.replace(/\D/g, "");

  //transformar o valor em centavos
  value = Number(value) / 100;

  //atualiza o valor do input
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  //formata o valor no padrão BRL (Real brasileiro)
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  //retorn o valor formatado
  return value;
}

//captura o evento de submit fo formulario para obter os valores
form.onsubmit = (event) => {
  event.preventDefault(); // não recarrega a pagina

  //cria um objeto com os detalhes na nova despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };
  //chama a função que vai adicionar o item na lista
  expenseAdd(newExpense);
};

function expenseAdd(newExpense) {
  try {
    //cria o elemento de li para adicionar o item na lista (ul)
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.");
    console.log(error);
  }
}
