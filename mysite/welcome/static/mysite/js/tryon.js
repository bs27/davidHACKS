const item = JSON.parse(localStorage.getItem('item'));

window.onload = function() {
    var elem = document.getElementById("container");
    setTimeout(()=>{
        if (elem){
            elem.innerHTML = "<p class=\"typewriter\" style=\"margin-top: -5vh;text-align: center;\">The Clothes are Now Ready. <span data-text=\"Please Try them on!\"></span></p>";
        }
        document.body.style.backgroundColor  = "#7c9969";

        var span = document.querySelector(".typewriter span");
        var textArr = span.getAttribute("data-text").split(", "); 
        var maxTextIndex = textArr.length; 

        var sPerChar = 0.15; 
        var sBetweenWord = 1.5;
        var textIndex = 0; 

        typing(textIndex, textArr[textIndex]); 
        
        let buttondiv = document.createElement("div");
        buttondiv.innerHTML = `<div class="tryontwobutton">
            <button onclick="backtobuy()">Done Wearing?</button>
        </div>`;
        elem.appendChild(buttondiv);

        function typing(textIndex, text) {
            var charIndex = 0; 
            var maxCharIndex = text.length - 1; 
            
            var typeInterval = setInterval(function () {
                span.innerHTML += text[charIndex]; 
                if (charIndex == maxCharIndex) {
                    clearInterval(typeInterval);
                } else {
                    charIndex += 1; 
                }
            }, sPerChar * 1000); 
        }
    }, 5000);
    
};

function backtobuy(){
    history.back();
}

/* function tryaddcart(item){
    window.location.href = "buy.html";
    // edit buyhtml's array and append this value. Also change the add to cart button on this one.
    items.push(item);
    var elements = document.getElementsByClassName("but2");
    for (var i = 0; i < elements.length; i++) {
        var productName = elements.closest(".container").querySelector(".info h1").innerHTML;
      if (productName == item) {
        elements.closest(".container").querySelector(".buttons .but2").onclick();
        break;
      }
    }
} */