const countValue = document.querySelector('#counter')

function increment() {
    //fetch the value  from UI
    let value = parseInt(countValue.innerText)
    //increment the value
    value++
    //set the value on UI
    countValue.innerText = value
}

function decrement() {

    let value = parseInt(countValue.innerText)
    //decrement the value
    value--
    countValue.innerText = value
}