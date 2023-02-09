function main (){

}


var five = document.getElementById('five').innerHTML;


function tax_percentage(){
   
}

function calculate() {
    // console.log ('this works!');     
    let amount = document.getElementById ('income').value;
    let territory = document.getElementById('province').value;
    let final = document.getElementById('result');
    // let text = "Your final price is " + "Hurray!";
    let text = "Your final price is " + "CA$" + amount + " " + territory;
    result.innerHTML = text;
}

function compareForm () {
    let budget = document.getElementById('budget').value;
    let text = "Budget checked!";
    window.alert(text);
}
