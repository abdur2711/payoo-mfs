const validPin = 1234;

// log out button interactivity
document.getElementById('logout-btn').addEventListener('click', function (){
    window.location.href = './index.html'
})

// add money button interativity 
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

    document.getElementById('account-number').value = '';
    document.getElementById('add-amount').value = '';
    document.getElementById('add-pin').value = '';
    document.getElementById('bank-name').value = document.getElementById('select-bank').innerText;

    alert(`$${addAmount} Add money successful. Balance: $${newAvailableBalance}`);
});

// defaut display 
document.getElementById('add-money-container').style.display = 'none';
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

// cashout button interactivity
document.getElementById('cashout-button').addEventListener('click', function(e){
    e.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;
    const cashoutAmount = parseInt(document.getElementById('cashout-amount').value);
    const cashoutPin = parseInt(document.getElementById('cashout-pin').value);

    if (agentNumber.length < 11 || agentNumber.length > 11) {
        alert('Please provide valid agent number');
        return;
    }

    if (cashoutPin !== validPin) {
        alert('Please provide valid pin');
        return;
    }

    if (cashoutAmount <= 0) {
        alert('Please provide valid amount');
        return;
    }

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const newAvailableBalance = availableBalance - cashoutAmount;
    document.getElementById('available-balance').innerText = newAvailableBalance;

    document.getElementById('agent-number').value = '';
    document.getElementById('cashout-amount').value = '';
    document.getElementById('cashout-pin').value = '';

    alert(`$${cashoutAmount} cash out successful. Balance: $${newAvailableBalance}`);
});

// transfer money button interactivity
document.getElementById('transfer-button').addEventListener('click', function(e){
    e.preventDefault();
    const recipientNumber = document.getElementById('recipient-number').value;
    const transferAmount = parseInt(document.getElementById('transfer-amount').value);
    const transferPin = parseInt(document.getElementById('transfer-pin').value);

    if (recipientNumber.length < 11 || recipientNumber.length > 11) {
        alert('Please provide valid user account number');
        return;
    }

    if (transferPin !== validPin) {
        alert('Please provide valid pin');
        return;
    }

    if (transferAmount <= 0) {
        alert('Please provide valid amount');
        return;
    }

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const newAvailableBalance = availableBalance - transferAmount;
    document.getElementById('available-balance').innerText = newAvailableBalance;

    document.getElementById('recipient-number').value = '';
    document.getElementById('transfer-amount').value = '';
    document.getElementById('transfer-pin').value = '';

    alert(`$${transferAmount} transferred to ${recipientNumber} successful. Balance: $${newAvailableBalance}`);
});