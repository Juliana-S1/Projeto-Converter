const button = document.querySelector("button");
let real = document.querySelector(".real");
let dolar = document.querySelector(".dolar");
const select = document.querySelector(".select")


function converter() {
    let input = document.querySelector("input").value


    const dolarHoje = 5.2
    const euroHoje = 6.2


    if (select.value == "dolar") {
        dolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(input / dolarHoje)
    } if (select.value == "euro") {
        dolar.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(input / euroHoje)
    }

    real.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(input)
}
button.addEventListener("click", converter);

select.addEventListener("change", function mudou() {
    const moeda_nome = document.querySelector(".moeda-nome")
    const imagem_moeda = document.querySelector(".imagem-moeda")

    if (select.value == "dolar") {
        moeda_nome.innerHTML = "Dolar Americano"
        imagem_moeda.src = './assets/dolar.png'
        

    } if (select.value == "euro") {
        moeda_nome.innerHTML = "Euro"
        imagem_moeda.src = './assets/euro.png'
    }

    converter()
    
})

