
// Selecting both left and right container using getElementById
let leftBox = document.getElementById('left')
let rightBox = document.getElementById('right')

// Select the button element using getElementById
let button = document.getElementById('button')

// Select all the elements with className item
const items = document.getElementsByClassName('item')


let selected = null


for (let item of items) {

    // Add a dragStart event listener to each item

    item.addEventListener('dragstart', function (e) {
        item.classList.add('dragging')
        selected = e.target;
    })


    // Add a dragEnd event listener to each item

    item.addEventListener('dragend', function (e) {
        e.preventDefault();
        item.classList.remove('dragging')
        selected = null;
    })

}

// Add a dragEnter event listener to the rightBox

rightBox.addEventListener('dragenter', function (e) {
    e.preventDefault();
})

// Add a dragEnd event listener to the rightBox

rightBox.addEventListener('dragover', function (e) {
    e.preventDefault();
})


// Add a drop event listener to the rightBox
rightBox.addEventListener('drop', function (e) {
    rightBox.appendChild(selected);
    alert('Successfully dropped')
})


// Add a click event listener to the reset button
button.addEventListener('click', () => {

    // Shifting items from right to left container

    for (let item of items) {
        leftBox.appendChild(item)

    }

})