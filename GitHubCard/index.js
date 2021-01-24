/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
    /////
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function userCard(obj){

  //creating elements
  const card = document.createElement('div');
  const imagen = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement ('p');
  const userProfile = document.createElement('p');
  const userUrl = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');
  // setting classnames
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  //creating the hierarchy
  card.appendChild('imagen');
  card.appendChild('cardInfo');
  cardInfo.appendChild('name');
  cardInfo.appendChild('userName');
  cardInfo.appendChild('userLocation');
  cardInfo.appendChild('userProfile');
  //cardInfo.appendChild('userUrl');
  cardInfo.appendChild('userFollowers');
  cardInfo.appendChild('userFollowing');
  cardInfo.appendChild('userBio');
  userProfile.appendChild('userUrl')

  //setting text content
  
  imagen.src = obj.avatar_url;
  name.textContent = `Name : ${obj.name}`;
  userName.textContent= `User name: ${obj.loging}`;
  userLocation.textContent = `Location: ${obj.location}`;
  userUrl.textContent = `${obj.html_url}`;
  userFollowers.textContent= `Followers: ${obj.followers}`;
  userFollowing.textContent = `Following: ${obj.following}`;
  userBio.textContent = `Bio: ${obj.bio}`;


 
  

return card;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const getPromise = axios
.get('https://api.github.com/users/Liliana-Leyva')
.then((res) => {
  console.log(res);
  const information = userCard(res.obj);
  document.querySelector(".cards").appendChild(information);
})
.catch((err) => {
  console.log("There is an error!",err);
});

console.log(getPromise);






const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];
followersArray.forEach((i) => {
  axios
  .get(`'https://api.github.com/users/${i}'`)
  then((res)=>{
    console.log(res.obj);
    const information= userCard(res.obj);
    documents.querySelector(".cards").appendChild(information);
  })
  .catch((err) => {
    console.log(err);
  });
})

const allCards = getPromise.obj;
console.log(allCards);
