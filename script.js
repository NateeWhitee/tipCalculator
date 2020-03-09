function confirm() {
    let billTotal = document.getElementById('billTotal').value;
    let serviceQuality = parseFloat(document.getElementById('serviceQuality').value);
    let peoplePaying = document.getElementById('peoplePaying').value;

    let tipTotal = Math.round(Math.round(billTotal * serviceQuality));
    let tipIndividual = tipTotal / peoplePaying;

    alert(`Your tip: $${tipIndividual}`);
} 