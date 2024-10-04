document.getElementById("confirm-btn").addEventListener("click", function() {

    let inputValue = document.getElementById("getPlasticQuantity").value;

    console.log(inputValue);

    document.getElementById("plasicQuantity").innerText = inputValue;
});
