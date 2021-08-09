//problem-1: seer to mon converter with function
function seerToMon(seer) { //function defination
    let mon = 0; //initializing mon value
    if (seer > 0) { //start if condition
        mon = seer / 40; //calculation
    } //end of if condition
    else { //start fo else statement
        mon = 'Please enter a valid number!'; //return an error message
    } //end of else condition
    return mon; //return the expected value after calculation
} // function end
const inputMon = 380; //taking sample output
const getMon = seerToMon(inputMon); //calling the seerToMOn function
console.log(getMon); //print the output






//problem-2: total sales counting of a shop
function totalSales(shirt, pant, shoe) { //function defination
    const pricePerShirt = 100; //set shirt price
    const pricePerPant = 200; //set pant price
    const pricePershoe = 500; //set shoe price
    let totalPrice = 0; //initializing total price
    if (shirt > 0 || pant > 0 || shoe > 0) {
        const totalShirtPrice = pricePerShirt * shirt;
        const totalPantPrice = pricePerPant * pant;
        const totalShoePrice = pricePershoe * shoe;
        totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice; //overall calculation
    }
    else if(shirt == 0 && pant == 0 && shoe == 0){
        totalPrice='Please, choose at least one product. Thank you.'
    }
    else {
        totalPrice = 'Sorry! Price cannot be an invalid value.' //send an error message
    }
    return totalPrice; //return a desired value.
}
const inputShirt = 5; //set number of shirts
const inputpant = 4; //set number of pants
const inputShoe = 2; //set number of shoes
const getPrice = totalSales(inputShirt, inputpant, inputShoe); //function calling with three parameters and get the desired value from function. 
console.log(getPrice); //print the output






//problem-3: calculate delivery cost for every tshirt
function deliveryCost(totalTshirts) { //function defination
    let totalTshirtPrice = 0;
    if (totalTshirts < 0) {
        totalTshirtPrice = 'You can not enter a negative number. Thank you.' //set an error message for negative values.
    }
    else if (totalTshirts == 0) {
        totalTshirtPrice = 'You have to enter at least 1 Tshirt for delivery. Thank you.' //set an error message for null value.
    }
    else if (totalTshirts <= 100) { //if tshirt is not more than 100 enter this condition
        totalTshirtPrice = totalTshirts * 100; 
    }
    else if (totalTshirts > 100 && totalTshirts <= 200) { //if tshirt is not more 100 and not more than 200 enter this condition
        const first100Price = 100 * 100;
        let rest = totalTshirts - 100; //calculation for rest tshirts after 100
        const second100Price = rest * 80;
        totalTshirtPrice = first100Price + second100Price; //calculaiting total price
    }
    else { ////if tshirt is more than 200 enter this condition
        const first100Price = 100 * 100;
        const second100Price = 100 * 80;
        rest = totalTshirts - 200; //calculating rest tshirts after 200
        const restTshirtsPrice = rest * 50;
        totalTshirtPrice = first100Price + second100Price + restTshirtsPrice; //calculaiting total price
    }
    return totalTshirtPrice; //returns the values or string according to the input
}
const inputTshirts = 450; //set an initial input value
const getDeliveryCost = deliveryCost(inputTshirts); //function calling and talking result from function
console.log(getDeliveryCost); //print the output






//problem-4: first friend name with 5 letter
const friendsArray = ['shamim', 'shujon', 'rafsan', 'opu', 'ishaq', 'montu', 'shahin', 'mahbub']; //set an array for friends name

function perfectFriend(names) { //function defination
    let friendName; //storing variable
    for (let i = 0; i < names.length; i++) { //for loop for checking each name on the array
        if (names[i].length == 5) { //checking if name length is equal
            friendName = names[i]; //if true set the name on the storing variable 
            return friendName; //return the value of storing variable and immediately get out from the loop (because we just need the first one which length is equal to 5).
        }
        else { //if the name length is not equal to 5
            friendName = 'Sorry! There is no perfect friend name with 5 letters.' // set an error
        }
    }
    return friendName; //return the error message
}
const getPerfectFriend = perfectFriend(friendsArray); //function calling and set output value
console.log(getPerfectFriend); //print output