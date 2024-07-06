let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];

const button = document.getElementById("purchase-btn");
button.addEventListener("click", () => {
  let changeContainer = document.getElementById("change-due");
  changeContainer.innerText = "Change will be displayed here\n";
  let money = document.getElementById("cash").value;
  if (money < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (money == price) {
    changeContainer.innerText = "No change due - customer paid with exact cash";
    return;
  }
let resultTemplate = "";
let spare = 0;
let change = money - price;
  if (change % 1 != 0) {
    change *= 100;
  }
const custMoney = change;
let total = 0;

//insufficient fund check
cid.forEach((money) => {
  total += money[1]
  if (total % 1 != 0) {
    total = total * 100
  }
})
if (total < change) {
  changeContainer.innerText = "Status: INSUFFICIENT_FUNDS";
return;
}

//one hundred dollar
   if (change >= 10000 && cid[8][1] != 0) {
    while (change >= 10000 && cid[8][1] > 0) {
    change -= 10000
    cid[8][1] *= 100
    cid[8][1] -= 10000
    cid[8][1] /= 100
    spare += 100
    }
    resultTemplate += cid[8][0] + ": $" + spare + "\n"
    spare = 0
   }
//twenty dollar
  if (change >= 2000 && cid[7][1] != 0) {  
    while (change >= 2000 && cid[7][1] > 0) {
    change -= 2000
    cid[7][1] *= 100
   cid[7][1] -= 2000
   cid[7][1] /= 100
   spare += 20
    }
    resultTemplate += cid[7][0] + ": $" + spare + "\n"
    spare = 0
}
//ten dollar
 if (change >= 1000 && cid[6][1] != 0) {  
    while (change >= 1000 && cid[6][1] > 0) { 
    change -= 1000
    cid[6][1] *= 100
    cid[6][1] -= 1000
    cid[6][1] /= 100
    spare += 10
  }
    resultTemplate += cid[6][0] + ": $" + spare + "\n"
     spare = 0
  }
//five dollar
if (change >= 500 && cid[5][1] != 0) {  
  while (change >= 500 && cid[5][1] > 0) {
    change -= 500
    cid[5][1] *= 100
   cid[5][1] -= 500
   cid[5][1] /= 100
   spare += 5
  }
    resultTemplate += cid[5][0] + ": $" + spare + "\n"
    spare = 0
    }
//dollar
if (change >= 100 && cid[4][1] != 0) {
  while (change >= 100 && cid[4][1] > 0) {
    change -= 100
    cid[4][1] *= 100
   cid[4][1] -= 100
   cid[4][1] /= 100
   spare += 1
  }
    resultTemplate += cid[4][0] + ": $" + spare + "\n"
     spare = 0
}
//quarter
if (change >= 25 && cid[3][1] != 0) {
  while (change >= 25 && cid[3][1] > 0) {
    change -= 25
    cid[3][1] *= 100
   cid[3][1] -= 25
   cid[3][1] /= 100
   spare += 0.25
  }
    resultTemplate += cid[3][0] + ": $" + spare + "\n"
     spare = 0
}
//dime
if (change >= 10 && cid[2][1] != 0) {
  while (change >= 10 && cid[2][1] > 0) {
    change -= 10
    cid[2][1] *= 100
   cid[2][1] -= 10
   cid[2][1] /= 100
   spare += 0.1
  }
    resultTemplate += cid[2][0] + ": $" + spare + "\n"
spare = 0
}
//nickle
if (change >= 5 && cid[1][1] != 0) {
  while (change >= 5 && cid[1][1] > 0) {
    change -= 5
    cid[1][1] *= 100
   cid[1][1] -= 5
   cid[1][1] /= 100
   spare += 0.05
  }
    resultTemplate += cid[1][0] + ": $" + spare + "\n"
     spare = 0
}
//penny
if (change >= 5 && cid[0][1] != 0 && cid[1][1] == 0 || cid[2][1] || cid[3][1]) {
  //if ran out of quarter
   if (cid[3][1] == 0) {
      while (change > 0 && cid[0][1] > 0) {
        change -= 25
        cid[0][1] *= 100
        cid[0][1] -= 25
        cid[0][1] /= 100
        spare += 0.25
        console.log("loop change: " + change)
        console.log("pennies left: " + cid[0][1])
       }
       //if ran out of dime
   } else if (cid[2][1] == 0) {
      while (change > 0 && cid[0][1] > 0) {
        change -= 10
        cid[0][1] *= 100
        cid[0][1] -= 10
        cid[0][1] /= 100
        spare += 0.1
      }
      //if ran out of nickel
   } else if (cid[1][1] == 0) {
      while (change > 0 && cid[0][1] > 0) {
        change -= 5
        cid[0][1] *= 100
        cid[0][1] -= 5
        cid[0][1] /= 100
        spare += 0.05
      }
      //default pennies
   } else {
      while (change > 0 && cid[0][1] > 0) {
        change -= 1
        cid[0][1] *= 100
        cid[0][1] -= 1
        cid[0][1] /= 100
        spare += 0.01
      }
    }
    console.log("change left: " + change)
    resultTemplate += cid[0][0] + ": $" + spare + "\n"
      spare = 0
    console.log("spare: " + spare)
    console.log("total: " + total)
    console.log("customer money: " + custMoney)
      }

//status check
if (total === custMoney) {
  let result = "Status: CLOSED\n"
    changeContainer.innerText = result + resultTemplate
  } else if (total > custMoney) {
    let result = "Status: OPEN\n"
    changeContainer.innerText = result + resultTemplate
  }
});