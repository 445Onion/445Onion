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
        img: "./images/Placeholder.jpg"
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
        img: "./images/Placeholder.jpg"
    },
    {
        character: "Misono Mika",
        affiliation: "Trinity",
        club: "Tea Party",
        description: "Biggest Gehenna hater",
        img: "./images/Placeholder.jpg"
    },
];

const filterContainer = document.querySelector(".filter-container");
const buttonContainer = document.querySelector(".button-container");

// event listener for loading page
window.addEventListener("DOMContentLoaded", function (){
    displayListCharacters(list);
    displayAffiliationButtons();
});

function displayListCharacters(listCharacter) {
    let displayList = listCharacter.map(function(character) {
        return `<article class="single-character">
            <img src=${character.img} class="character-photo"/>
            <div class="character-info">
                <header>
                    <p class="character">${character.character}</p>
                    <p class="affliation" ${character.affiliation}</p>
                    <p class="club" ${character.club}</p>
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

function displayAffiliationButtons () {
    const affiliations = list.reduce(
        function(values, character) {
            if (!values.includes(character.affiliation)) {
                values.push(character.affiliation);
            }
            return values;
        },
        ["All"]
    );
    const affiliationButtons = affiliations.map(function (affiliation) {
        return `<button class="filter-button" 
        data-id=${affiliation}>${affiliation}</button>`;
    }).join("");
    buttonContainer.innerHTML = affiliationButtons;
    const filterButton = document.querySelectorAll(".filter-button");
    
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
}

// nav bar for mobile devices
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileDropdown = document.querySelector(".mobile-dropdown");

mobileToggle.addEventListener("click", function () {
  mobileDropdown.classList.toggle("show-mobile-dropdown");
});