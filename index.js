
document.addEventListener("DOMContentLoaded", function() {
    // Get the Buy Tickets button
    const buyTicketsButton = document.getElementById("but-btn");

    // Get the Bus Ticket div
    const busTicketDiv = document.getElementById("bus-ticket");

    // Add click event listener to the Buy Tickets button
    buyTicketsButton.addEventListener("click", function() {
        // Scroll to the Bus Ticket div when the button is clicked
        busTicketDiv.scrollIntoView({ behavior: "smooth" });
    });



    const seats = document.querySelectorAll('.kbd');
    const clickedSeats = [];
    let currentSeatNow = 0;
    const maxSeats = 4; // Maximum number of seats allowed
     let seatLift = 40;
    //  -----------
   
// --------------
    for (const seat of seats) {
        seat.addEventListener('click', function() {
            if (!clickedSeats.includes(seat)) {
                // -------------------------------



                // -----------
                const passengerNameInput = document.getElementById("name");
                const phoneNumberInput = document.getElementById("number");
                const emailInput = document.getElementById("email");
                const nextButton = document.getElementById("now-btn");
              
                
                function checkForm() {
                  if (passengerNameInput.value.trim() !== "" &&
                      phoneNumberInput.value.trim() !== "" &&
                      emailInput.value.trim() !== "@gmail.com") {
                    nextButton.disabled = false; 
                  } else {
                    nextButton.disabled = true; 
                  }
                }
              
                // Add event listeners to input fields
                passengerNameInput.addEventListener("input", checkForm);
                phoneNumberInput.addEventListener("input", checkForm);
                emailInput.addEventListener("input", checkForm);
                // -------------------
                if (currentSeatNow < maxSeats) { 
                    // selected seats
                    const nseats = seat.innerText;
                    console.log(nseats);
                    const li = document.createElement('li');
                   
                    const parent = document.getElementById('list');
                    parent.appendChild(li);
                    li.innerText =`${nseats} ----      Economic   ----      BDT 550`
                    
                    // ---------------
                    clickedSeats.push(seat);
                    seat.classList.add('bg-green-400')
                    const currentPriceText = document.getElementById('total-price');
                    const currentPrice = parseInt(currentPriceText.innerText);
                    const updatedTotalPrice = getUpdatePrice();
                    currentPriceText.innerText = updatedTotalPrice;
                    console.log(updatedTotalPrice);
                    console.log(currentPrice);
                   
                    // update seats
                    currentSeatNow = updateSeat(currentSeatNow, 1); 
                    const currentSeatText = document.getElementById('seat-count')
                    currentSeatText.innerText = currentSeatNow; 
                    // --------
                     seatLift = reduceSeat(seatLift,1);
                    const pSeatText = document.getElementById('seat-left');
                    console.log(pSeatText);
                    pSeatText.innerText =  seatLift;
                    // -------------------
                     
                    //--------
                    if(currentSeatNow === maxSeats ){
                        // ---------------
                        

                        // -------apply btn---------
                        
                        const applybtn = document.getElementById('apply');
                        applybtn.addEventListener('click',function(){
                            const couponText =   document.getElementById('coupon');
                            const couponTask = couponText.value;
                            
                            if(couponTask === 'NEWS15' || couponTask === 'Couple 20'){
                                if(couponTask === 'NEWS15'){
                                    const currentdis = 2200 * 0.15;
                                   const disPriceText = document.getElementById('discount-price');
                                    // const disPRice = parseInt(disPriceText.innerText);
                                    disPriceText.innerText = currentdis
                                    const grandTotal = document.getElementById('grand-total');
                                    grandTotal.innerText = 2200 - currentdis;
                                
                                }else if(couponTask === 'Couple 20'){
                                    const coupleDis = 2200 * 0.20;
                                    const disUp = document.getElementById('discount-price');
                                    disUp.innerText = coupleDis;
                                    const grandTotal = document.getElementById('grand-total');
                                    grandTotal.innerText = 2200 - coupleDis;
                                }
                                applyHiddenBtn()
                            }else{
                                alert('Give the write coupon first')
                            }
                        
   
                        })

 

                    
                      

                    // apply btn close------------------------

                        // -----------------

                    } 

                   
                } else {
                    alert('You cannot book more than ' + maxSeats + ' seats.');
                }
            } else {
                console.log('Seat already clicked');
                alert('You already booked this seat')
            }
        });
    }
});
// next Btn------
const nextBtn = document.getElementById('now-btn');
 console.log('next');
nextBtn.addEventListener('click',function(){
    getHiddenHome()
    setTimeout(function() {
        location.reload();
    }, 1300)
 })
//  congratulation Button
const congraBtn = document.getElementById('con');
congraBtn.addEventListener('click',function(){
    getRemoveCons()
    PreviousData()

})
// remove disabled
  function removeDisable(){
    const inPut = document.getElementById('coupon');
    inPut.disabled=false;
  }
//   coupun


// get hidden
 function getHiddenHome(){
    const hideBtns= document.getElementsByClassName('homes');
    const hidenCon = document.getElementById('con');
    hidenCon.classList.remove('hidden')
     for(const hideBtn of hideBtns ){
        hideBtn.classList.add('hidden');
     }
 }
//  Remove Hidden{
    function getRemoveCons(){
        const hideBtns= document.getElementsByClassName('homes');
        const hidenCon = document.getElementById('con');
        hidenCon.classList.add('hidden')
         for(const hideBtn of hideBtns ){
            hideBtn.classList.remove('hidden');
         }
    }

// remove previous data

  function PreviousData(){
    currentSeatNow = 0;
    const passengerNameInput = document.getElementById("name");
    const phoneNumberInput = document.getElementById("number");
    const emailInput = document.getElementById("email");
    const nextButton = document.getElementById("now-btn");

    passengerNameInput.value = ""; // Reset passenger name input
    phoneNumberInput.value = ""; // Reset phone number input
    emailInput.value = ""; // Reset email input
    nextButton.disabled = true;
    const parent = document.getElementById('ul');
    parent.innerHTML = `Selected Seats :${''}`;
    
    seatLift = 40;
    const currentSeatText = document.getElementById('seat-count');
    currentSeatText.innerText = currentSeatNow;
    const pSeatText = document.getElementById('seat-left');
    pSeatText.innerText = seatLift;
    const seats = document.querySelectorAll('.kbd');
    for(const seat of seats){
        seat.classList.remove('bg-green-400')
        
    }
    // remove clicked seats-----

    // ------------

    const tPtice = 0;
    const tPriceText = document.getElementById('total-price');
    tPriceText.innerText = tPtice;
    currentTotalPrice = 0;
    const currentPriceText = document.getElementById('total-price');
    currentPriceText.innerText = currentTotalPrice;

    // Clear clicked seats
    // discount remove
    const disUp = document.getElementById('discount-price');
    disUp.innerText = 0;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = 0;
    const couponText =   document.getElementById('coupon');
    couponText.value='';
 
}
// --------




// -------

// get ticket 
function totalPrice() {
    const currentPriceText = document.getElementById('total-price');
    const currentPrice = currentPriceText.innerText;
    return currentPrice;
}

// get ticket update price
let currentTotalPrice = 0;

function getUpdatePrice() {
    const ticketPrice = 550;
    currentTotalPrice += ticketPrice;
    return currentTotalPrice;
}
// update seats--
function updateSeat(currentSeat, seatsToAdd) {
    return currentSeat + seatsToAdd;
}
// resuce seat--
function reduceSeat(leftSeats,SeatReduce){
    return leftSeats - SeatReduce;
}

// Apply btn















