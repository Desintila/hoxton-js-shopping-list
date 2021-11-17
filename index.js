const shoppingListNames =['Milk ' , 'Cocoa', 'Salad', 'Carrots', 'Tomatoes', 'Ready Meals']
const shoppingListPrices =[1.20, 2.00, 2.00, 2.00, 2.50 ,5.00]
let askTheUser=true
while(askTheUser==true){
const addItem= prompt("Add a new item?")
shoppingListNames.push(addItem)
const addPrice= Number(prompt("Add the new item price?"))
shoppingListPrices.push(addPrice)
if (Number.isNaN(addPrice)|| addPrice<0){
    alert("You need to enter a positive number")
}
else if(addItem==null || addItem==""|| addPrice==null || addPrice=="" ){
    alert("You need to write values")
} 
else{
    let confirmTheUser = confirm("Would you like to add again?")
    if (confirmTheUser == true){
        askTheUser = true;
    } else {
        askTheUser = false;
    }
}
}
for (let i=0; i<shoppingListNames.length;i++){
    console.log(`${shoppingListNames[i]} costs  £${shoppingListPrices[i].toFixed(2)}`)}
    let total = 0
for (let i=0; i<shoppingListPrices.length;i++){
    total +=shoppingListPrices[i];
}
console.log(`Your total is: £${total.toFixed(2)}`)