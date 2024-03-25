const button = document.getElementById('button');
const input = document.getElementById('input');

button.addEventListener("click", () =>{
    console.log(input.value)
    if(input.value == ""){
        alert('Try to put a link');
    }else{
        event.preventDefault();
        getUrl();
    }
});
/*
fetch("https://urlshortenerapi.vercel.app/shortener/api/v1/shortener/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: {
        "id": "123",
        "url": "https://youtube.com"
    }
})*/

async function getUrl() {
    const response = await fetch("https://urlshortenerapi.vercel.app/shortener/api/v1/shortener/", {
        headers: new Headers({ 'Content-type': 'application/json'}),
        mode: 'cors'
    });
    console.log(response);
  }