
let currentDate = new Date();
function purchasepackage() {
    let userNum = parseInt(prompt("Enter Package Days"));
    alert(currentDate + 'Your package expires in:' + userNum)
    console.log(currentDate.getDay);

}