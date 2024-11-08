const box = document.querySelector(".visits");
async function updateCounter(){
    let response = await fetch("https://d2wnzuiomynqnelo26czsywgxe0pusnm.lambda-url.ap-south-1.on.aws/");
    let data = await response.json();
    box.innerHTML = data;

}
updateCounter();
