const validPin = 1234;

const transactionData = [];

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

// function to make input field empty after transactions
function emptyStr(id) {
    document.getElementById(id).value = '';
}

// defaut display 
document.getElementById('add-money-container').style.display = 'none';
document.getElementById('cashout-container').style.display = 'none';
document.getElementById('transfer-money-container').style.display = 'none';
document.getElementById('get-bonus-container').style.display = 'none';
document.getElementById('pay-bill-container').style.display = 'none';
document.getElementById('transaction-container').style.display = 'block';

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
    handleToggleEffect('transaction');
});

// log out button interactivity
document.getElementById('logout-btn').addEventListener('click', function (){
    window.location.href = './index.html'
});

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

    emptyStr('account-number');
    emptyStr('add-amount');
    emptyStr('add-pin');
    document.getElementById('bank-name').value = document.getElementById('select-bank').innerText;

    alert(`$${addAmount} Add money successful. Balance: $${newAvailableBalance}`);

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
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

    emptyStr('agent-number');
    emptyStr('cashout-amount');
    emptyStr('cashout-pin');

    alert(`$${cashoutAmount} cash out successful. Balance: $${newAvailableBalance}`);

    const data = {
        name: 'Cashout',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
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

    emptyStr('recipient-number');
    emptyStr('transfer-amount');
    emptyStr('transfer-pin');

    alert(`$${transferAmount} transferred to ${recipientNumber} successful. Balance: $${newAvailableBalance}`);

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
});

// display transactionData 
document.getElementById('transaction').addEventListener('click', function (){
    const transactionHistory = document.getElementById('transaction-history-container');
    transactionHistory.innerText = ''

    for (const data of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-between items-center bg-white rounded-xl p-3 mt-3">
                <div class="flex items-center gap-3">
                    <div class="p-3 rounded-full bg-[#f4f5f7]">
                        <img src="./assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h2>${data.name}</h2>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transactionHistory.appendChild(div);
    }
})