const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04a7b63742mshe31a0e0ebbb49f8p1cd7ebjsn812e3735989f',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

const userInput = document.querySelector('input');
const btn = document.querySelector('button');

let params = ''
const callParams = () => {
    params = userInput.value
    fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${params}`, options)
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.items.map(item => {
                output += `
                    <h1>${item.title}</h1>
                    <li>
                    <a href="${item.url}">${item.url}</a>
                    </li>
                    `;
                  
            })
            document.querySelector('.result').innerHTML = output;
        })
        .catch(err => console.error(err));
    userInput.value = '';
}


btn.addEventListener('click', callParams)