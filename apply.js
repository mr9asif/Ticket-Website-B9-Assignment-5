// Function to update coupon input and apply button based on selected seats
function updateCouponAndApplyButton() {
    const selectedSeats = document.querySelectorAll('.bg-green-400');
    const couponField = document.getElementById('coupon');
    const applyButton = document.getElementById('apply');

    if (selectedSeats.length === 4) {
        couponField.disabled = false;
        applyButton.disabled = false;
        // -----------
        
        
    } else {
        couponField.disabled = true;
        applyButton.disabled = true;
    }
}


// hidden apply field
/*
const applyHiddenBtn = document.getElementById('apply-hidden');
applyHiddenBtn.addEventListener('click', function(){
    const applyParentText = document.querySelector('#apply-hidden');
    // if(selectedSeats.length === 4 && (couponTask === 'NEWS15' || couponTask === 'Couple 20')){
    //     applyParentText.classList.add('hidden');
    // }else{
    //     const applyButtons = document.getElementById('apply');
    //     applyButtons.disabled = true;
    // }
    applyParentText.classList.add('hidden');
})*/
// ---------------
function applyHiddenBtn(){
    const applyParentText = document.querySelector('#apply-hidden');
    applyParentText.classList.add('hidden');
}




// Inside the seat click event listener
seat.addEventListener('click', function() {
    // Toggle seat selection
    seat.classList.toggle('bg-green-400');

    // Update coupon input and apply button
    updateCouponAndApplyButton();
});
//--------
// const currentPriceText = document.getElementById('total-price');
//  const currentPrice = parseInt(currentPriceText.innerText);
//  const updatedTotalPrice = getUpdatePrice();
//  currentPriceText.innerText = updatedTotalPrice;
//  function discountPriceNews(){
//        updatedTotalPrice * 0.15;
     
//  }