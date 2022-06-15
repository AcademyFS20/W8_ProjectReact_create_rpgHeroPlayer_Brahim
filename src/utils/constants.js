import player1 from "../assets/pictures/characters/player1.png";
import player2 from "../assets/pictures/characters/player2.png";
import player3 from "../assets/pictures/characters/player3.png";


export const navLinks = [


    {
        id: 1,
        url: "/",
        text: "Home",

    },
    {
        id: 2,
        url: "/about",
        text: "About"
    },
    {
        id: 3,
        url: "/character",
        text: "Create Character"
    },
    {
        id: 4,
        url: "/faq",
        text: "FAQ"
    }

]

const character1 = {
    id: 1,
    img: player1,
    characterName: "de Beauvoir",
    playerDescription: "fearless heroine with strength and agility"
}

const character2 = {
    id: 2,
    img: player2,
    characterName: "Sartre",
    playerDescription: "Hero with great intellect and courage"
}


const character3 = {
    id: 3,
    img: player3,
    characterName: "Camus",
    playerDescription: "A revolutionary that always charge forward"
}
export const heroes = [ character1,character2,character3]


