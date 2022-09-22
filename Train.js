/*/document.getElementById("numberofp").innerText = 6;

//let count= 10;
//console.log (count) ;\


//let myage = 19;
//console.log(`I am ${myage} years old!`);


let myage = 19;
let humandogratio = 7;
const mydogage = myage * humandogratio;

console.log (mydogage);


let bonuspoints = 50;
console.log(bonuspoints);

bonuspoints = bonuspoints + 50;
console.log(bonuspoints);

bonuspoints = bonuspoints -75;
console.log(bonuspoints) ;

bonuspoints = bonuspoints + 45;
console.log(bonuspoints); */



/*let count = 0;


function incrementvalue(){

    count = count +1 ;
    
    console.log(`${count} people entered the train!`) ;
}


function savevalue(){

    console.log(`${count} people entered Train A`) ;

}




savevalue();*/


/*let username = " per" ;
let message = "You have 3 new notifications" ;

let messageToUser = message + "," + username + "!" ;
console.log(messageToUser) ;*/

/*let names ="ong kit wei" ;
let greeting ="Hi, my name is " ;

let myGreeting = greeting + names + "!";
console.log(myGreeting) ;*/


let count = 0 ;


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl);



function increment(){
    count = count+1;
    console.log(`${count} people`) ;
    countEl.textContent = count;
}


function save(){
    let countStr =  count + " - " ;
    saveEl.textContent = saveEl.textContent + countStr; 
    console.log(`total of ${count} people!`) ;
    //innerText only shows human readable content wont return hidden elements
    //textContent returns every element in the node
    count = 0;
    countEl.textContent = count;
    
}



function reset(){
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = "Previous Entries: ";
}





    
    
















