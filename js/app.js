const input = document.getElementById('input');

/**
 * Function that posts user URL to API
 * @returns Object url
 */
async function postUrl(){
    /**
     * Cors-anywhere is NodeJS proxy which adds CORS headers to the proxied request. 
     * It's temporally, it's use for problems with CORS policy
     * link for more information https://github.com/Rob--W/cors-anywhere
     */
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

    const yourUrl = 'https://urlshortenerapi.vercel.app/shortener/api/v1/shortener/';
    
    /**
     * My url and the corsanywhere url needs to be together for the request
     */
    return fetch(corsAnywhere + yourUrl, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }), 
        body: JSON.stringify({
            "url": input.value,
        })
    })
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => null);
  }

  /**
   * Function that retrieves all the URLs from the API.
   */
async function getUrl() {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const yourUrl = 'https://urlshortenerapi.vercel.app/shortener/api/v1/shortener/';

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
