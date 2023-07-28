let ul = document.querySelector(".ullist")
let li = document.querySelectorAll('li');
let input = document.querySelector("input")
let dataDiv = document.querySelector(".dataDiv")
let form = document.querySelector("form")
let apply = document.querySelector(".apply")
let i = document.querySelector("i")
let review = document.querySelector("#review")
let average = document.querySelector("#average")
let card;
let a = ul.children.length - 1;
let livalue = 5;
let newarr = [];
let arr;


li[a].classList.add('apply');
let giveRating = (e) => {

    if (e.target.classList.contains("list")) {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].classList.remove('apply')
        }
        e.target.classList.add('apply');
        livalue = Number(e.target.innerText)

    }
    input.focus();
}


ul.addEventListener("click", giveRating)

let createCard = (e) => {
    e.preventDefault()
    newarr.push(livalue)

    card = document.createElement(`div`)
    card.className = "card"
    card.innerHTML = `<p class="livalue">${livalue}</p>
                      <p class="inputvalue">${input.value}</p>
                      <i class="fa-solid fa-trash-can "></i>`

    dataDiv.append(card)


    form.reset();
    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].classList.remove('apply')
    }
    li[a].classList.add('apply');
    update();

    livalue = 5;
}

let update = () => {
    
    arr = newarr.reduce((a, b) => a + b , 0)
    let avg = arr / dataDiv.children.length
    review.innerText = 'Review : ' + dataDiv.children.length;
    average.innerText = 'Ratting Avg. : ' + avg.toFixed(2);
}

input.focus();

form.addEventListener("submit", createCard);


dataDiv.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'I') {
        e.target.classList.add('fa-bounce')
        e.target.style.color = 'red'
    }
})
dataDiv.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'I') {
        e.target.classList.remove('fa-bounce')
        e.target.style.color = 'black'
    }
})

dataDiv.addEventListener("click", (e) => {

    if (e.target.tagName === 'I') {    

        dataDiv.querySelectorAll('.card').forEach((elem, i) => {
                if(elem.children[2].classList.contains('fa-bounce')){
                    newarr.splice(i,1)
                }
            })
            e.target.parentElement.remove();
        update();
    }
    if(dataDiv.children.length == ""){
        average.innerText = 'Ratting Avg. : 0.00'
    }
})


