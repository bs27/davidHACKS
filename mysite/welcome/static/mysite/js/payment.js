const items = JSON.parse(localStorage.getItem('items'));
const imglink = JSON.parse(localStorage.getItem('imglink'));
const category = JSON.parse(localStorage.getItem('category'));
const Size = JSON.parse(localStorage.getItem('Size'));
const description = JSON.parse(localStorage.getItem('description'));
const price = JSON.parse(localStorage.getItem('price'));

console.log(items);
console.log(imglink);
console.log(category);
console.log(Size);
console.log(description);
console.log(price);

//printing all the passed information
if(items.length == 0){
    console.log("len is 0");
    let noitem = document.createElement("h1");
    noitem.innerHTML = "There are no items in your cart";
    noitem.style.textAlign = "center";
    noitem.style.marginTop = "20%";
    document.body.appendChild(noitem);
}
for(let i=0; i<items.length; i++){
    console.log(i + " " + items[i]);
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="container">
        <img class="prodimg" src="${imglink[i]}" alt="product_image">
        <div class="info">
            <h1>${items[i]}</h1>
            <h3>${price[i]}</h3>
            <div class="category">
                <li class="catlist">${category[i]}</li>
            </div>
            <h5 style="margin-bottom: 0px;">${Size[i]}</h5>
            <p style="margin-top: 0px;">${description[i]}</p>
        </div>
        <div class="buttons">
            <button class="delelement" onclick="removethis(this)"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg></button>
        </div>
    </div>`;

    document.body.appendChild(newDiv);
    if(i == items.length-1){
        total = 0.0;
        for(let j=0; j<items.length;j++){
            total+= parseFloat(price[j].slice(1));
        }
        let buybutton = document.createElement("button");
        buybutton.id = "buybutton";
        buybutton.onclick = PaymentRedir;
        buybutton.innerHTML = `<h1 id="pay">PAY <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg></h1>
        <h1 id="price">$${total}</h1>`;
        document.body.appendChild(buybutton);
        break;
    }
}

function removethis(mydiv){
    var productName = mydiv.closest(".container").querySelector(".info h1").innerHTML;
    const index = items.indexOf(productName);
    const container = mydiv.parentNode.parentNode;
    container.classList.add("slide-left");
    setTimeout(() => container.remove(), 800);
    
    if (index > -1) {
        items.splice(index, 1);
    }
    if(items.length == 0){
        let noitem = document.createElement("h1");
        noitem.innerHTML = "There are no items in your cart";
        noitem.style.textAlign = "center";
        noitem.style.marginTop = "20%";
        document.getElementById("buybutton").remove();
        document.body.appendChild(noitem);
    }
}

function PaymentRedir(){
    window.location.href = "http://127.0.0.1:8000/welcome/taptopay";
}