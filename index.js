const box = document.querySelector(".visits");
async function updateCounter(){
    let response = await fetch("Your Lambda Function");
    let data = await response.json();
    box.innerHTML = data;

}
updateCounter();
