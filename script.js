let ratingState = document.querySelector(".Rating-state");
let state = document.querySelector(".state");
let sBtn = document.querySelector(".btn");


sBtn.addEventListener("click", () => {
    ratingState.classList.add("hide-div");
    state.classList.remove("hide-div");
    document.getElementById("s-rate").innerHTML
                        = "You selected " + radioBtnVal() + " out of 5";
    console.log(radioBtnVal());
});

function radioBtnVal() {
    let rateEle = document.getElementsByName("rate");
    for (i = 0; i < rateEle.length; i++) {
        if (rateEle[i].checked)
            return rateEle[i].value;
    }
}