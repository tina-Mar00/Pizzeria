


document.addEventListener("DOMContentLoaded", function () {
    const pizze = [
        { nome: "Margherita", prezzo: 6 },
        { nome: "Capricciosa", prezzo: 6.50 },
        { nome: "Diavola", prezzo: 7 },
        { nome: "Quattro Formaggi", prezzo: 8 }
    ];

    const bottone = document.getElementById("mostraLista");
    const outputDiv = document.getElementById("output");

    bottone.addEventListener("click", function () {
        const isVisible = outputDiv.classList.contains("active");

        if (!isVisible) {
            let output = "";
            pizze.forEach(pizza => {
                output += `<p>${pizza.nome} - €${pizza.prezzo.toFixed(2)}</p>`;
            });
            outputDiv.innerHTML = output;
            outputDiv.classList.add("active");
            bottone.textContent = "Nascondi menù";
        } else {
            outputDiv.classList.remove("active");
            outputDiv.innerHTML = "";
            bottone.textContent = "Mostra menù";
        }
    });
});