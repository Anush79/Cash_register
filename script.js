var billAmount = document.querySelector("#bill");
var cashGiven = document.querySelector("#cash");
var btn = document.querySelector("#cbutton");
var noteCount = document.querySelectorAll(".notes");
var msg = document.querySelector("#errormsg")
var cashDiv = document.querySelector(".cash_given")

const value = [2000, 500, 200, 100, 50, 10, 5, 1];

function msghandler(text) {
    msg.innerText = text;
}
function hidemsg(target) {
    target.style.display = "none";

}
function showinput() {
    cashDiv.style.display = "block";
}


hidemsg(cashDiv); //hides cashgiven div initially
billAmount.addEventListener("change", showinput);//shows cashdiv when there is any input in bill amount.
 


// billAmount.value.onchange=showinput();

function calculate(money_left) {
    for (let x = 0; x < value.length; x++) {
        const no_of_notes = Math.trunc(money_left / value[x]);
        money_left = money_left % value[x];

        if (no_of_notes > 0) {
            noteCount[x].innerText = no_of_notes;
        }
        else {
            noteCount[x].innerText = "----"
        }


    }


}

function cleanTable(){
    for (let x = 0; x < value.length; x++){
        noteCount[x].innerText = "----";
    }
}

btn.addEventListener("click", function verification() {


    if (billAmount.value > 0) {


        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const returnMoney = cashGiven.value - billAmount.value;
            calculate(returnMoney);
            msg.innerHTML = "Amount to be returned is  ₹ <span>" + returnMoney + "</span>";
        } else {
            msghandler("Amount Given is less, Call Security!!!!");
            msg.style.color="red";
            cleanTable();
        }
    }
    else {
        msghandler("Invalid amount given");
        msg.style.color="red";
    }


})