
const convertButton = document.querySelector(".convert")
const currencySelect = document.querySelector(".currency-select")
const convertCurrency = document.querySelector(".convert-currency")

function convertValues() {
    const inputValue = document.querySelector(".input-currency").value
    const currencyValue = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-value-converted")
    const dolarToday = 5.15
    const euroToday = 5.59
    const libraToday = 6.56
    const pesoaToday = 0.0058
    const pesocToday = 0.0057
    const bitcoinToday = 345515.90
    const realToday = 1

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }

    if (currencySelect.value == "peso-a") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValue / pesoaToday)
    }

    if (currencySelect.value == "peso-c") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP"
        }).format(inputValue / pesocToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoinToday)
    }
}

function changeCurrency() {
    const currencyImage = document.querySelector(".currency-img")
    const currencyName = document.querySelector(".currency-name")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Libra.png"
    }

    if (currencySelect.value == "peso-a") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/Peso-argentino.jpg"
    }

    if (currencySelect.value == "peso-c") {
        currencyName.innerHTML = "Peso Chileno"
        currencyImage.src = "./assets/Peso-chileno.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/Bitcoin.png"
    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
