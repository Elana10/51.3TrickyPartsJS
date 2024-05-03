function createAccount(pin, amount =0) {
    let key = pin;
    let balance = amount;
    
    return {
        checkBalance(num){
            if(num === key) return `$${balance}`;
            return "Invalid PIN."
        },

        deposit(num, depo){
            if(num !== key) return "Invalid PIN."
            balance += depo;
            return `Succesfully deposited $${depo}. Current balance: $${balance}.`
        },

        withdraw(num, withd){
            if(num !== key) return "Invalid PIN."
            if(withd > balance) return `Withdrawal amount exceeds account balance. Transaction cancelled.`
            balance -= withd;
            return `Succesfully withdrew $${withd}. Current balance: $${balance}.`
        },

        changePin(num1, num2){
            if(num1 !== key) return "Invalid PIN."  
            key = num2;
            return "PIN successfully changed!"
        }
    }


}

module.exports = { createAccount };
