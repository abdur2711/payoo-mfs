const validPin = 1234;

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    const bankName = document.getElementById('bank-name').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pinNumber = parseInt(document.getElementById('add-pin').value);

    if (accountNumber.length < 11 || accountNumber.length > 11) {
        alert('Please provide valid account number');
        return;
    }

    if (pinNumber !== validPin) {
        alert('Please provide valid pin');
        return;
    }

    if (addAmount <= 0) {
        alert('Please provide valid amount');
        return;
    }

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const newAvailableBalance = availableBalance + addAmount;

    document.getElementById('available-balance').innerText = newAvailableBalance;
});

// defaut display 
document.getElementById('add-money-container').style.display = 'block';
document.getElementById('cashout-container').style.display = 'none';
document.getElementById('transfer-money-container').style.display = 'none';
document.getElementById('get-bonus-container').style.display = 'none';
document.getElementById('pay-bill-container').style.display = 'none';
document.getElementById('transaction-container').style.display = 'none';

// toggling feature 
document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('add-money-container').style.display = 'block';
    document.getElementById('cashout-container').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transaction-container').style.display = 'none';
});

document.getElementById('cashout').addEventListener('click', function(){
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cashout-container').style.display = 'block';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transaction-container').style.display = 'none';
});

document.getElementById('transfer-money').addEventListener('click', function(){
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cashout-container').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'block';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transaction-container').style.display = 'none';
});

document.getElementById('get-bonus').addEventListener('click', function(){
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cashout-container').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'block';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transaction-container').style.display = 'none';
});

document.getElementById('pay-bill').addEventListener('click', function(){
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cashout-container').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'block';
    document.getElementById('transaction-container').style.display = 'none';
});

document.getElementById('transaction').addEventListener('click', function(){
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cashout-container').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transaction-container').style.display = 'block';
});

