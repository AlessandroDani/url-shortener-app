const input = document.getElementById('input');

async function postUrl(){
    const id = randomId();
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
            "id": id,
            "url": input.value
        })
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
        return 'https://urlshortenerapi/' + id;
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

  function randomId(){
    let id = '';
    const list = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    for(let i=0; i < 6; i++){
        id += list[Math.floor(Math.random() * (61 - 0) + 0)];
    }
    return id
  }