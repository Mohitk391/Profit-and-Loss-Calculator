var initalPrice = document.querySelector("#initPrice");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#currPrice");
var btnSubmit = document.querySelector("#btnSubmit");
var output = document.querySelector("#output");


initalPrice.onkeydown = function(e) {
    if(!((e.keyCode >= 96 && e.keyCode < 106) || (e.keyCode > 48 && e.keyCode < 58)  || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 110 || e.keyCode == 190)) {
        return false;
    }
}

quantity.onkeydown = function(e) {
    if(!((e.keyCode >= 96 && e.keyCode < 106) || (e.keyCode > 48 && e.keyCode < 58)  || e.keyCode == 8  || e.keyCode == 9)) {
        return false;
    }
}

currentPrice.onkeydown = function(e) {
    if(!((e.keyCode >= 96 && e.keyCode < 106) || (e.keyCode > 48 && e.keyCode < 58)  || e.keyCode == 8  || e.keyCode == 9 || e.keyCode == 110 || e.keyCode == 190)) {
        return false;
    }
}

function calculateProfitLoss(){
    if(initalPrice.value === ""){
        output.innerText = "Please enter every field";
        output.style.color ="red";
        
        initalPrice.focus();
        
    }
    else if(quantity.value === ""){
        output.innerText = "Please enter every field";
        output.style.color ="red";
        quantity.focus();
    }
    else if(currentPrice.value === ""){
        output.innerText = "Please enter every field";
        output.style.color ="red";
        currentPrice.focus();
    }
    else{
        if(initalPrice.value == 0){
            output.innerText = "Inital Price cannot be zero!!!";
            output.style.color ="red";
            initalPrice.focus();
        }
        else if(quantity.value == 0){
            output.innerText = "Quantity cannot be zero!!!";
            output.style.color ="red";
            quantity.focus();
        }
        else if(currentPrice.value == 0){
            output.innerText = "Current Price cannot be zero!!!";
            output.style.color ="red";
            currentPrice.focus();
        }
        else {
            output.style.color = "black";
            var costPrice = initalPrice.value * quantity.value;
            var sellingPrice = currentPrice.value * quantity.value;
            console.log(costPrice);
            if(costPrice<sellingPrice){
                var profit = (sellingPrice - costPrice).toFixed(3);
                var profitPercentage = (profit * 100 / costPrice).toFixed(2);
                output.innerText = "Hoorrayy!! You are in a Profit of Rs. " + profit + " and your profit percentage is " + profitPercentage + "%.";
            }
            else if(sellingPrice < costPrice){
                var loss = (costPrice - sellingPrice).toFixed(3);
                var lossPercentage = (loss * 100 / costPrice).toFixed(2);
                output.innerText = "Oohh noo!! You are in a Loss of Rs. " + loss + " and your loss percentage is " + lossPercentage + "%.";
            }
            else {
                output.innerText = "You are currently not in loss, but not in profit either...";
            }
        }
    }
}

btnSubmit.addEventListener("click", calculateProfitLoss);