const url = 'http://127.0.0.1:80/api/get/all/text'; // Replace with your API endpoint

fetch('https://example.com/api/data') // Replace with the URL of your API
  .then(response => response.json())
  .then(data => {
    const text1 = document.getElementById('text_1');
    text1.innerText = data["1"];
  })
  .catch(error => console.error(error));