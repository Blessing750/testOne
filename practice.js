function fullName(firstName, middleName, lastName) {
    
    if (typeof(firstName) !== 'string' || typeof(middleName) !== 'string' || typeof(lastName) !== 'string') {
        return "letters only!";
    }
    else{
        return firstName + " "+ middleName +" " + lastName
    }  
};
function totalItemsPrice(price1, price2, price3) {
   
    if (typeof(price1) !== 'number' || typeof(price2) !== 'number' || typeof(price3) !== 'number') {
        return "numbers only!";
    }
    else{
        return price1 + price2 + price3
    }  
   
};
function acc_bal(totalItemsBought) {
    const accountBalance = 10000;
    const availableBalance = accountBalance - totalItemsBought; 
        

    if (totalItemsBought > accountBalance) {
        return "insufficient balance";
    } 
    else {
         return availableBalance
    }
};

const names = fullName("Jane", "chika" , "Obi");
const totalItemsBought = totalItemsPrice(500, 250, 1000);
const availableBalance = acc_bal(totalItemsBought);

document.write("Your Full name is " + names )  
document.write("<br> The total sum is " + totalItemsBought )
document.write("<br> Your available balance is " + availableBalance)


const siblings = ["modupe", "segun", "paul", "isaiah", "idowu", "matthew"]
document.write("<br>", siblings)
// how to check the length
document.write("<br>", siblings.length)

document.write("<br>", siblings[3])
// how to add to an array
siblings[3] = "jane";
document.write("<br>", siblings)
/* function displayDate() {
    document.write = Date();
  };
displayDate();

const person = "faith"
const len = person.length
console.log(len)

const text = "We are the so-called \b from the north.";
console.log(text)*/