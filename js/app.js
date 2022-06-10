const teamAresMembers = [{
    names: "Aladesuru Oriyomi",
    image: "img/oriyomi.jpeg",
    bestFood: "Pounded yam and okro soup",
    bestMovie: "Charmed",
    complexion: "Dark-skinned",
    thingsLearnt : ["HTML", "CSS", "Bootstrap", "JavaScript"],
    age: "23years",
},
{
    names: "Austin Tonayam",
    image: "img/tonayam.jpeg",
    bestFood: "Spaghetti",
    bestMovie: "Inglorious Basterds",
    complexion: "Dark-skinned",
    thingsLearnt : ["HTML", "CSS", "Bootstrap", "JavaScript"],
    age: "22years",
},
{
    names: "Igah Abiye",
    image: "img/abiye.jpeg",
    bestFood: "Ewa Ago and Bread",
    bestMovie: "Halo",
    complexion: "Dark-skinned",
    thingsLearnt : ["HTML", "CSS", "Bootstrap", "JavaScript"],
    age: "21years",
},
{
    names: "Amos thibault BIKARI",
    image: "img/amos.jpeg",
    bestFood: "Uburobe and ndagara",
    bestMovie: "Suits",
    complexion: "Dark-skinned",
    thingsLearnt : ["HTML", "CSS", "Bootstrap", "JavaScript"],
    age: "23years",
},
{
    names: "Susan Chepkosgei",
    image: "img/sussy.jpeg",
    bestFood: "Pilau and chicken",
    bestMovie: "the darkest mind",
    complexion: "Dark-skinned",
    thingsLearnt : ["HTML", "CSS", "Bootstrap", "JavaScript"],
    age: "22years",
},
{
    names: "Susan Mwende",
    image: "img/susan.jpeg",
    bestFood: "Chips and chicken",
    bestMovie: "The legend",
    complexion: "Dark-skinned",
    thingsLearnt : ["HTML", "CSS", "Bootstrap", "JavaScript"],
    age: "21years",
},
{
    names: "Izima Obisike",
    image: "img/izzy.jpeg",
    bestFood: "Chips and chicken",
    bestMovie: "House MD",
    complexion: "Light-skinned",
    thingsLearnt : ["HTML", "CSS", "Bootstrap", "JavaScript"],
    age: "22years",
},
{
    names: "Oyiwumi",
    image: "img/oyiwumi.jpg",
    bestFood: "Yam and Egg",
    bestMovie: "Spiderman",
    complexion: "Light-skinned",
    thingsLearnt : ["HTML", "CSS", "Bootstrap", "JavaScript"],
    age: "25years",
}


]

let row = document.querySelector(".row");

for(let i = 0; i < teamAresMembers.length; i++){
    const members = teamAresMembers[i];
    let card = `<div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card mb-5 bg-white hover-zoom">
                        
                        <img src="${members.image}" class="card-img-top" alt="${members.names}">
                        <div class="card-body  bg-primary text-white">
                            <h5 class="card-title">${members.names}</h5>
                            <p class="card-text" id="food">${members.bestFood}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${members.bestMovie}</li>
                            <li class="list-group-item">${members.complexion}</li>
                            <li class="list-group-item">${members.thingsLearnt}</li>
                            <li class="list-group-item">${members.age}</li>
                        </ul>
                        <div class="card-body">
                            <button class="btn btn-primary" onclick="clickMe(${i})">Blow Your Mind</button>
                    
                        </div>
                    </div>
                </div>`;

    row.innerHTML += card;
    
}

function clickMe(i) {
    alert(`${teamAresMembers[i].names}🌟🌟` ); 
}





