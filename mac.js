//get button-1
const memory8GB = document.getElementById('button-1');

memory8GB.addEventListener('click',function(){
    const extraMemory = document.getElementById('memory-cost');
    const extraMemoryAmount = extraMemory.innerText = '0';  
    totalPriceCalculation();
       
})
//get button-2
const memory16GB = document.getElementById('button-2');

memory16GB.addEventListener('click',function(){
    const extraMemory = document.getElementById('memory-cost');
    const extraMemoryAmount = extraMemory.innerText='180';
    
    totalPriceCalculation();
    
})
//get button-3
const ssd256GB = document.getElementById('button-3');

ssd256GB.addEventListener('click',function(){
    const extraStorage = document.getElementById('storage-cost');
    const extraStorageAmount = extraStorage.innerText = '0';
         
    totalPriceCalculation();
    
})
//get button-4
const ssd512GB = document.getElementById('button-4');

ssd512GB.addEventListener('click',function(){
    const extraStorage = document.getElementById('storage-cost');
    const extraStorageAmount = extraStorage.innerText = '100';
    
    totalPriceCalculation();
    
})
//get button-5
const ssd1TB = document.getElementById('button-5');

ssd1TB.addEventListener('click',function(){
    const extraStorage = document.getElementById('storage-cost');
    const extraStorageAmount = extraStorage.innerText = '180';
      
    totalPriceCalculation();
    
})
//get button-6
const aug25 = document.getElementById('button-6');

aug25.addEventListener('click',function(){
    const extraDelivery = document.getElementById('delivery-cost');
    const extraDeliveryAmount = extraDelivery.innerText = '0';
    
    totalPriceCalculation();
    
})
//get button-7
const aug21 = document.getElementById('button-7');

aug21.addEventListener('click',function(){
    const extraDelivery = document.getElementById('delivery-cost');
    const extraDeliveryAmount = extraDelivery.innerText = '20';

    totalPriceCalculation();
})

// calculationg the total price by calling a fuction

function totalPriceCalculation(){
    const memoryPrice = parseInt(document.getElementById('memory-cost').innerText);
    const storagePrice = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery-cost').innerText);
    const calculatedTotal= memoryPrice + storagePrice + deliveryPrice;
    const totalPriceAmount = 1299 + calculatedTotal;
    document.getElementById('total-cost').innerText = totalPriceAmount;
    document.getElementById('bonus-total').innerText = totalPriceAmount;

}

// function for promo code input field

function totalPromoCalculation(){
    const memoryPrice = parseInt(document.getElementById('memory-cost').innerText);
    const storagePrice = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery-cost').innerText);
    const calculatedTotal= memoryPrice + storagePrice + deliveryPrice;
    const totalPriceAmount = 1299 + calculatedTotal;
    const promoAmount = totalPriceAmount * .2;
    document.getElementById('bonus-total').innerText = promoAmount;
}

//eventhandler for apply button

document.getElementById('apply').addEventListener('click',function(){
    const promoValue = document.getElementById('promo-input').value;
    const promoCode = 'stevekaku';
    if(promoValue == promoCode){
        totalPromoCalculation();
    }
    else{
        totalPriceCalculation();
    }
    document.getElementById('promo-input').value = '';
})
