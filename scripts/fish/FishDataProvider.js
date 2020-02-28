const fishCollection = [
    {
        name: "Betty",
        species: "Sea Turtle",
        length: "two feet",
        food: ["Seaweed"],
        harvestLocation: "Bahamas",
        image: "./images/photo-1534527431390-5d41c7e60c1f.jpeg"
    },
    {
        name: "Jelly",
        species: "Sea Turtle",
        length: "one feet",
        food: ["People"],
        harvestLocation: "Caribbean",
        image: "./images/jelly.jpg"
    },
    {
        name: "Patrick",
        species: "Brown Puffin",
        length: "two inches",
        food: ["Children"],
        harvestLocation: "New Zealand",
        image: "./images/bown-puffin-fish.jpg"
    },
    {
        name: "Willy",
        species: "Blue Whale",
        length: "96 feet",
        food: ["Krill", "Copepod"],
        harvestLocation: ["Arctic", "Tropical", "Subtropical", "Temperate seas"],
        image: "./images/free-willy.jpg"
    },
    {
        name: "Ozzie",
        species: "Brown Octopus",
        length: "two feet",
        food: ["Krill", "Copepod"],
        harvestLocation: "Pacific",
        image: "./images/octopus.jpg"
    },
    {
        name: "Thurman",
        species: "Blue Siamese Fighting Fish",
        length: "two inches",
        food: ["Children"],
        harvestLocation: "Asia, the shallow waters of rice paddies, ponds, or slow-moving streams.",
        image: "./images/blue-siamese-fighting-fish.jpg"
    }
]


export const useFish = () => {
    //returns the array
    //Array method slice() returns a copy of the data but not the actual database
    return fishCollection.slice()

}