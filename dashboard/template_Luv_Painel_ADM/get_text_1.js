const url = 'http://127.0.0.1:80/api/get/text?id='; // Replace with your API endpoint

fetch(`${url}1`)
  .then(response => response.text())
  .then(text => {
    const element = document.getElementById('text_1');
    console.log(text)
    element.innerText = text;
  })
  .catch(error => {
    console.error(error);
    const element = document.getElementById('text_1');
    element.innerText = 'Error: ' + error.message;
  });
