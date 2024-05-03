// list of all characters with details
const list = [
    {
        character: "Takanashi Hoshino",
        affiliation: "Abydos",
        dmgType: "Damage Type: Piercing",
        description: "Strongest mystic in Kivotos",
    },
    {
        character: "Sunaookami Shiroko",
        affiliation: "Abydos",
        dmgType: "Damage Type: Mystic",
        description: "Wolf not cat",
    },
    {
        character: "Okusora Ayane",
        affiliation: "Abydos",
        dmgType: "Damage Type: Piercing",
        description: "Technical support of Abydos",
    },
    {
        character: "Hayase Yuuka",
        affiliation: "Millenium",
        dmgType: "Damage Type: Explosive",
        description: "100kg human calculator",
    },
    {
        character: "Kurosaki Koyuki",
        affiliation: "Millenium",
        dmgType: "Damage Type: Mystic",
        description: "Nihahahaha",
    },
    {
        character: "Sorasaki Hina",
        affiliation: "Gehenna",
        dmgType: "Damage Type: Explosive",
        description: "Gehenna president",
    },
    {
        character: "Onikata Kayoko",
        affiliation: "Gehenna",
        dmgType: "Damage Type: Explosive",
        description: "Heavy metal listener",
    },
    {
        character: "Misono Mika",
        affiliation: "Trinity",
        dmgType: "Damage Type: Piercing",
        description: "Biggest Gehenna hater",
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
                    <p class="character">${character.character}</p>
                    <p class="affliation" ${character.affiliation}</p>
                    <p class="dmg-type">${character.dmgType}</p>
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