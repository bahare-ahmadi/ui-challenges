document.getElementById('card-number').addEventListener('input', function() {
   let cardNumber = this.value;
    let cardImage = document.getElementById('card-img');

    if (cardNumber.startsWith('6037')) {
        cardImage.src = './master.png';
        cardImage.style.display = 'inline';
    } else if (cardNumber.startsWith('6274')) {
        cardImage.src = './visa.png';
        cardImage.style.display = 'inline';
    }
});






