var initalPrice = document.querySelector("#initPrice");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#currPrice");
var btnSubmit = document.querySelector("#btnSubmit");
var output = document.querySelector("#output");

function calculateProfitLoss(){
    var costPrice = initalPrice.value * quantity.value;
    var sellingPrice = currentPrice.value * quantity.value;
    console.log(costPrice);
    if(costPrice<sellingPrice){
        var profit = sellingPrice - costPrice;
        var profitPercentage = (profit * 100 / costPrice).toFixed(2);
        output.innerText = "Hoorrayy!! You are in a Profit of " + profit + " and your profit percentage is " + profitPercentage + "%.";
    }
    else if(sellingPrice < costPrice){
        var loss = costPrice - sellingPrice;
        var lossPercentage = (loss * 100 / costPrice).toFixed(2);
        output.innerText = "Oohh noo!! You are in a Loss of " + loss + " and your loss percentage is " + lossPercentage + "%.";
    }
    else {
        output.innerText = "You are currently not in loss, but not in profit either...";
    }
}

btnSubmit.addEventListener("click", calculateProfitLoss);