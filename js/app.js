/*
const button = document.getElementById('button');
const input = document.getElementById('input');

button.addEventListener("click", () =>{
    //console.log(input.value)
    if(input.value == ""){
        alert('Try to put a link');
    }else{
        event.preventDefault();
        getUrl();
        //postUrl();

    }
});

async function postUrl(){
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const yourUrl =
        'https://urlshortenerapi.vercel.app/shortener/api/v1/shortener/';

    fetch(corsAnywhere + yourUrl, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }), 
        body: JSON.stringify({
            "id": "321",
            "url": input.value
        })
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
  }

async function getUrl() {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

    const yourUrl =
        'https://urlshortenerapi.vercel.app/shortener/api/v1/shortener/';

    fetch(corsAnywhere + yourUrl, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
  }
  */