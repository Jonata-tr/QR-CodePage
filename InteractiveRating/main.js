function getRating() {
    let rating = document.querySelectorAll("input[type=radio]")
    for(let i = 0; i < rating.length; i++){
        if(rating[i].checked){
            let valueRating = rating[i].value
            const hidden = document.querySelector(".hidden")
            hidden.style.display = "none"
            const show = document.querySelector(".show")
            show.style.display = "inline-block"
            
            let note = document.querySelector("#note")
            note.innerText = valueRating
        }
    }
}