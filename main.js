


		var requestURL = 'https://github.com/harman221/lab4/blob/master/main.json';
		/*Create a new XHR object */
		var request = new XMLHttpRequest();
		/* Open a new request using the request() method */
		request.open('GET', requestURL);
		/* Set JavaScript to accept JSON from the server */
		request.responseType = 'json';
		/* Send the request with the send() method */
		request.send();

		/*Add an event handler that listens for the onload event of the JSON file/object */
		request.onload = function() {
      //store the response in plenty of pizza 
			var myProducts = request.response;
      //let's check it out in the console 
			console.log(myProducts);
      //when the response is ready, invoke pizzaTypes function, passing plentyPizza as the object 
			weirdProducts(myProducts);
		};
    
 /* Parse the JSON in pizzaTypes() */   
    //define a function name pizza types, passing jsonObj as a parameter or placeholder 
		function weirdProducts(jsonObj){
			// store the JSON object in a variable, JavaScript provides us with a built in JSON object to work with, complete with methods and properties 
			let weirdProducts = jsonObj.weirdProducts;
			
			for (let i = 0; i < weirdProducts.length; i++) {
				//build HTML elements for the content
				let article = document.createElement('article');
				let h2 = document.createElement('h2');
				let img = document.createElement('img');
				let p1 = document.createElement('p');
				let p2 = document.createElement('p');
				let list = document.createElement('ul');
        //store a reference to the section element in var section 
        let section = document.querySelector('section');
        //set the image src attribute 
				img.setAttribute('src', 'https://github.com/harman221/lab4/blob/master/img/' + weirdProducts[i].image);
        //set the image alt attribute 
				img.setAttribute('alt', weirdProducts[i].name);
        //set the text content of the h2 to name
				h2.textContent = weirdProducts[i].name;
        //set the text contenxt of the first paragraph 
				p1.textContent = 'Price: ' +
        weirdProducts[i].price;
				
				let details = weirdProducts[i].details;
				for (let j = 0; j < details.length; j++) {
					let listItem = document.createElement('li');
					// Set text for each list item
					listItem.textContent = details[j];
					list.appendChild(listItem);
				}
				// append each of the above HTML elements to the ARTICLE element, then append the article element to the section
				article.appendChild(img);
				article.appendChild(h2);
				article.appendChild(p1);
				article.appendChild(list);
				section.appendChild(article);
				}
			}


		// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON