var ticket = document.getElementsByClassName('ticket-group')
for(var i = 0; i < ticket.length; i++) {
    var ticketTarget = ticket[i]
    var incress = ticketTarget.getElementsByClassName('incress')[0]
    var decrease = ticketTarget.getElementsByClassName('decrease')[0]

    incress.addEventListener('click', function (event){
        var clickButton = event.target
        var quantityInput = clickButton.parentElement.parentElement
        var input = quantityInput.getElementsByClassName('ticket-quantity')[0]
        var ticketQuantity = parseInt(input.value) + 1
        input.value = ticketQuantity
        updateTotalCost()
    })

    decrease.addEventListener('click', function (event){
        var clickButton = event.target
        var quantityInput = clickButton.parentElement.parentElement
        var input = quantityInput.getElementsByClassName('ticket-quantity')[0]
        if (isNaN(input.value) || input.value <= 0) {
            alert("negative value not allow")
        }else{
            var ticketQuantity = parseInt(input.value) - 1
            input.value = ticketQuantity
        }
        updateTotalCost()
    })
}


function updateTotalCost() {
    var ticketContainer = document.getElementsByClassName('booking-form')[0]
    var ticketCategory = ticketContainer.getElementsByClassName('ticket-group')
    var total = 0
    for (var i = 0; i < ticketCategory.length; i++) {
        var ticketInput = ticketCategory[i]
        var priceElements = ticketInput.getElementsByClassName('ticket-price')[0]
        var quantityElements = ticketInput.getElementsByClassName('ticket-quantity')[0]
        var costTotal = parseFloat(priceElements.innerHTML)
        var quantity = quantityElements.value
        total = total + (costTotal * quantity)
        
    }
    document.getElementById('total-price').innerText = total
    var vatCharged = total * (10 / 100)
    document.getElementById('vat-charged').innerText = vatCharged
    var totalCost = document.getElementById('total')
    totalCost.innerText = parseFloat(total + vatCharged)
}