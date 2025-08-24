const validPin = 1234;

// function to get input value
function getInputValue(id) {
    return document.getElementById(id).value;
}

// function to get input value and convert to number
function getInputValueNumber(id) {
    return parseInt(document.getElementById(id).value);
}

// frnction to get innertext
function getInnerText(id){
    return parseInt(document.getElementById(id).innerText);
}

// function to set innertext
function setInnerText(value){
    return parseInt(document.getElementById('available-balance').innerText = value);
}

// log out button interactivity
document.getElementById('logout-btn').addEventListener('click', function (){
    window.location.href = './index.html'
})

// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    for (const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// function for toggle button effect
function handleToggleEffect(id){
    const formBtns = document.getElementsByClassName('form-btn');
    for (const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]', 'text-blue-500');
        btn.classList.add('border-gray-200');
    }
    document.getElementById(id).classList.remove('border-gray-200');
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]', 'text-blue-500');
}

// add money button interativity 
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    const bankName = getInputValue('bank-name');
    const accountNumber = getInputValue('account-number');
    const addAmount = getInputValueNumber('add-amount');
    const pinNumber = getInputValueNumber('add-pin');

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

    const availableBalance = getInnerText('available-balance');
    const newAvailableBalance = availableBalance + addAmount;
    setInnerText(newAvailableBalance);

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
    handleToggle('add-money-container');
    handleToggleEffect('add-money');
});

document.getElementById('cashout').addEventListener('click', function(){
    handleToggle('cashout-container');
    handleToggleEffect('cashout');
});

document.getElementById('transfer-money').addEventListener('click', function(){
    handleToggle('transfer-money-container');
    handleToggleEffect('transfer-money');
});

document.getElementById('get-bonus').addEventListener('click', function(){
    handleToggle('get-bonus-container');
    handleToggleEffect('get-bonus');
});

document.getElementById('pay-bill').addEventListener('click', function(){
    handleToggle('pay-bill-container');
    handleToggleEffect('pay-bill');
});

document.getElementById('transaction').addEventListener('click', function(){
    handleToggle('transaction-container');

    const formBtns = document.getElementsByClassName('form-btn');
    for (const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]', 'text-blue-500');
        btn.classList.add('border-gray-200');
    }
    document.getElementById('transaction').classList.remove('border-gray-200');
    document.getElementById('transaction').classList.add('border-[#0874f2]', 'bg-[#0874f20d]', 'text-blue-500');
});

// cashout button interactivity
document.getElementById('cashout-button').addEventListener('click', function(e){
    e.preventDefault();
    const agentNumber = getInputValue('agent-number');
    const cashoutAmount = getInputValueNumber('cashout-amount');
    const cashoutPin = getInputValueNumber('cashout-pin');

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

    const availableBalance = getInnerText('available-balance'); 
    const newAvailableBalance = availableBalance - cashoutAmount;
    setInnerText(newAvailableBalance);

    document.getElementById('agent-number').value = '';
    document.getElementById('cashout-amount').value = '';
    document.getElementById('cashout-pin').value = '';

    alert(`$${cashoutAmount} cash out successful. Balance: $${newAvailableBalance}`);
});

// transfer money button interactivity
document.getElementById('transfer-button').addEventListener('click', function(e){
    e.preventDefault();
    const recipientNumber = getInputValue('recipient-number');
    const transferAmount = getInputValueNumber('transfer-amount');
    const transferPin = getInputValueNumber('transfer-pin');

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

    const availableBalance = getInnerText('available-balance');
    const newAvailableBalance = availableBalance - transferAmount;
    setInnerText(newAvailableBalance);

    document.getElementById('recipient-number').value = '';
    document.getElementById('transfer-amount').value = '';
    document.getElementById('transfer-pin').value = '';

    alert(`$${transferAmount} transferred to ${recipientNumber} successful. Balance: $${newAvailableBalance}`);
});
