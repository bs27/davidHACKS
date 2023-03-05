window.onload = function(){
    setTimeout(function() {
        console.log("in timeout");
        document.getElementById("ttp").remove();
        let newDiv = document.createElement("div");
        newDiv.innerHTML=`<div class="container">
            <span class="spinner spinner--quarter"></span>
        </div>`;
        document.body.appendChild(newDiv);
        setTimeout(function() {
            window.location.href = "http://127.0.0.1:8000/welcome/successful";
        }, 3000);
    }, 2000);
}