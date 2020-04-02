fetch('https://harman221.github.io/lab4/main.json')
.then((resp) => resp.json())
.then(function(data) {

console.log(data);
let myProducts = data;
weirdProducts(myProducts);

});

function weirdProducts(jsonObj) {
     let weirdProducts = jsonObj.weirdProducts;
    for (let i = 0; i < weirdProducts.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let list = document.createElement('ul');
        let hr = document.createElement('hr');
        let br = document.createElement('br');
        let section = document.querySelector('section');
        img.setAttribute('src', 'https://harman221.github.io/lab4/img/' + weirdProducts[i].image);
        img.setAttribute('alt', weirdProducts[i].name);
        img.setAttribute('height', '300px');
        img.setAttribute('width', '300px');
        h2.textContent = weirdProducts[i].name;
        p.textContent = 'Price: ' +
            weirdProducts[i].price;
        let details = weirdProducts[i].details;
        for (let j = 0; j < details.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = details[j];
            list.appendChild(listItem);
        }
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(list);
        article.appendChild(hr);
        article.appendChild(br);
        section.appendChild(article);
    }
}


// var requestURL = 'https://harman221.github.io/lab4/main.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//     var myProducts = request.response;
//     console.log(myProducts);
//     weirdProducts(myProducts);
// };

// fetch('https://harman221.github.io/lab4/main.json').then(function(response) {
//   return response.json();
// }).then(function(json) {
//   let myProducts = json;
//   initialize(myProducts);
// }).catch(function(err) {
//   console.log('Fetch problem: ' + err.message);
// });

// const getJSON = async url => {
//   try {
//     const response = await fetch(url);
//     if(!response.ok) // check if response worked (no 404 errors etc...)
//       throw new Error(response.statusText);

//     const myProducts = await response.json(); // get JSON from the response
//     return myProducts; // returns a promise, which resolves to this data value
//   } catch(error) {
//     return error;
//   }
// }

// getJSON("https://harman221.github.io/lab4/main.json").then(weirdProducts => {
//   console.log(weirdProducts);
//   const favProduct = JSON.parse(weirdProducts);
//     // weirdProducts(favProduct);
// }).catch(error => {
//   console.error(error);
// });