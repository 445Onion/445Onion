// list of all characters with details
const list = [
    {
        character: "Takanashi Hoshino",
        affiliation: "Abydos",
        club: "Abydos Foreclosure Taskforce",
        description: "Strongest mystic in Kivotos",
        img: "./images/SHoshino.png"
    },
    {
        character: "Sunaookami Shiroko",
        affiliation: "Abydos",
        club: "Abydos Foreclosure Taskforce",
        description: "Wolf not cat",
        img: "./images/SShiroko.png"
    },
    {
        character: "Okusora Ayane",
        affiliation: "Abydos",
        club: "Abydos Foreclosure Taskforce",
        description: "Technical support of Abydos",
        img: "./images/SAyane4k.png"
    },
    {
        character: "Hayase Yuuka",
        affiliation: "Millenium",
        club: "Seminar",
        description: "100kg human calculator",
        img: "./images/SYuuka.png"
    },
    {
        character: "Kurosaki Koyuki",
        affiliation: "Millenium",
        club: "Seminar",
        description: "Nihahahaha",
    },
    {
        character: "Sorasaki Hina",
        affiliation: "Gehenna",
        club: "Disciplinary Committee",
        description: "Gehenna president",
        img: "./images/HinaDress.png"
    },
    {
        character: "Onikata Kayoko",
        affiliation: "Gehenna",
        club: "Problem Solver 68",
        description: "Heavy metal listener",
    },
    {
        character: "Misono Mika",
        affiliation: "Trinity",
        club: "Tea Party",
        description: "Biggest Gehenna hater",
        img: "./images/MainStory(1).png"
    },
];

const filterContainer = document.querySelector(".filter-container");
const filterButton = document.querySelectorAll(".filter-button");

// event listener for loading page
window.addEventListener("DOMContentLoaded", function (){
    displayListCharacters(list);
});

filterButton.forEach(function (button) {
    button.addEventListener("click", function(e) {
        const affiliation = e.currentTarget.dataset.id;
        const listAffiliation = list.filter(function (listCharacter) {
            if (listCharacter.affiliation === affiliation) {
                return listCharacter;
            }
        });
        if (affiliation === "All") {
            displayListCharacters(list);
        } else {
            displayListCharacters(listAffiliation)
        }
    });
});

function displayListCharacters(listCharacter) {
    let displayList = listCharacter.map(function(character) {
        return `<article class="single-character">
            <div class="character-info">
                <header>
                    <p class="character">${character.img}</p>
                    <p class="character">${character.character}</p>
                    <p class="affliation" ${character.affiliation}</p>
                    <p class="affliation" ${character.club}</p>
                </header>
                <p class="character-description">
                    ${character.description}
                </p>
            </div>
            </article>`;
    });
    displayList = displayList.join("");
    filterContainer.innerHTML = displayList;
}