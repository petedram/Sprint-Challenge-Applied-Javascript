// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let axiosPromiseCard = axios.get("https://lambda-times-backend.herokuapp.com/articles");


function createCard(hLine, aPhoto, aName) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorSpan = document.createElement('span');

    card.classList.add('card')
    headline.classList.add('headline')
    authorDiv.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = hLine
    img.src = aPhoto
    authorSpan.textContent = aName

    card.appendChild(headline)
    card.appendChild(authorDiv)
    authorDiv.appendChild(imgContainer)
    imgContainer.appendChild(img)
    authorDiv.appendChild(authorSpan)

    return card;
}

const cardObject = document.querySelector('.cards-container');

axiosPromiseCard.then(response => {
    let articlesObject = response.data.articles;
    console.log(articlesObject);

    //get the name of each object key in case they change in the future
    let keyNames = Object.keys(articlesObject);
    console.log(keyNames);
    console.log('start of arrays');

    //get all the headlines
    let headlineArray = [];
   
    console.log(articlesObject.bootstrap);
    newArray = articlesObject.bootstrap;
    var ArrayHeadlines = newArray.map(function (item) { return item.headline});
    var ArrayauthorPhoto = newArray.map(function (item) { return item.authorPhoto});
    var ArrayauthorName = newArray.map(function (item) { return item.authorName});

    var i = 0;
    for (i = 0; i < ArrayauthorPhoto.length; i++) {
        cardObject.appendChild(createCard(ArrayHeadlines[i], ArrayauthorPhoto[i], ArrayauthorName[i]));
    }

    
    console.log(articlesObject.javascript);
    newArray = articlesObject.javascript;
    var ArrayHeadlines = newArray.map(function (item) { return item.headline});
    var ArrayauthorPhoto = newArray.map(function (item) { return item.authorPhoto});
    var ArrayauthorName = newArray.map(function (item) { return item.authorName});

    var i = 0;
    for (i = 0; i < ArrayauthorPhoto.length; i++) {
        cardObject.appendChild(createCard(ArrayHeadlines[i], ArrayauthorPhoto[i], ArrayauthorName[i]));
    }

    console.log(articlesObject.technology);
    newArray = articlesObject.technology;
    var ArrayHeadlines = newArray.map(function (item) { return item.headline});
    var ArrayauthorPhoto = newArray.map(function (item) { return item.authorPhoto});
    var ArrayauthorName = newArray.map(function (item) { return item.authorName});

    var i = 0;
    for (i = 0; i < ArrayauthorPhoto.length; i++) {
        cardObject.appendChild(createCard(ArrayHeadlines[i], ArrayauthorPhoto[i], ArrayauthorName[i]));
    }

    console.log(articlesObject.jquery);
    newArray = articlesObject.jquery;
    var ArrayHeadlines = newArray.map(function (item) { return item.headline});
    var ArrayauthorPhoto = newArray.map(function (item) { return item.authorPhoto});
    var ArrayauthorName = newArray.map(function (item) { return item.authorName});

    var i = 0;
    for (i = 0; i < ArrayauthorPhoto.length; i++) {
        cardObject.appendChild(createCard(ArrayHeadlines[i], ArrayauthorPhoto[i], ArrayauthorName[i]));
    }
   
    console.log(articlesObject.node);
    newArray = articlesObject.node;
    var ArrayHeadlines = newArray.map(function (item) { return item.headline});
    var ArrayauthorPhoto = newArray.map(function (item) { return item.authorPhoto});
    var ArrayauthorName = newArray.map(function (item) { return item.authorName});

    var i = 0;
    for (i = 0; i < ArrayauthorPhoto.length; i++) {
        cardObject.appendChild(createCard(ArrayHeadlines[i], ArrayauthorPhoto[i], ArrayauthorName[i]));
    }



    // function ArticleMaker(object) {
    //     this.headline = object.headline;
    // }

//forEach of the keyNames create new object 
//let newObject = articlesObject.keyNames[0]




    keyNames.forEach(item => {
    })

//map new array from object for each headline



  });

  //headline authorPhoto, authorName



