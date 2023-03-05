let items = [];
let imglink = [];
let category = [];
let Size = [];
let description = [];
let price=[];

function changebut(buttonele) {
    var productName = buttonele.closest(".container").querySelector(".info h1").innerHTML;
    var imgname = buttonele.closest(".container").querySelector("img").getAttribute("src");
    var cate = buttonele.closest(".container").querySelector(".category li").innerHTML;
    var size_ = buttonele.closest(".container").querySelector(".info h5").innerHTML;
    var desc = buttonele.closest(".container").querySelector(".info p").innerHTML;
    var price_ = buttonele.closest(".container").querySelector(".info h3").innerHTML;

    if(buttonele.innerHTML != "Added to Cart"){
        items.push(productName);
        imglink.push(imgname);
        category.push(cate);
        Size.push(size_);
        description.push(desc);
        price.push(price_);

        buttonele.innerHTML = "Added to Cart";
        buttonele.style.cssText = "background-color: #ffffff;"
    } else {
        const index = items.indexOf(productName);
        if (index > -1) {
            items.splice(index, 1);
            imglink.splice(index,1);
            category.splice(index,1);
            Size.splice(index,1);
            description.splice(index,1);
            price.splice(index,1);
        }
        buttonele.innerHTML = "Add to Cart";
        buttonele.style.cssText = "background-color: #6fae40;"
    }
}
function addtocart(){
    console.log(items);
    console.log(imglink);
    console.log(category);
    console.log(Size);
    console.log(description);
    console.log(price)
    
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('imglink', JSON.stringify(imglink));
    localStorage.setItem('category', JSON.stringify(category));
    localStorage.setItem('Size', JSON.stringify(Size));
    localStorage.setItem('description', JSON.stringify(description));
    localStorage.setItem('price', JSON.stringify(price));
    location.href = "http://127.0.0.1:8000/welcome/payment";
}

/* function temphold(item){
    var productName = buttonele.closest(".container").querySelector(".info h1").innerHTML;
    localStorage.setItem('item', JSON.stringify(item));
} */