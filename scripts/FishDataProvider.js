const fishCollection = [
    {
        name: "Betty",
        Species: "Sea Turtle",
        Length: "two feet",
        food: "Seaweed",
        HarvestLocation: "Bahamas"
    },
    {
        name: "Jelly",
        Species: "Sea Turtle",
        Length: "one feet",
        food: "People",
        HarvestLocation: "Caribbean"
    },
    {
        name: "Patrick",
        Species: "Brown Puffin",
        Length: "two inches",
        food: "Children",
        HarvestLocation: "New Zealand"
    },
    {
        name: "Willy",
        Species: "Blue Whale",
        Length: "96 feet",
        food: ["Krill", "Copepod"],
        HarvestLocation: ["Arctic", "Tropical", "Subtropical", "Temperate seas"]
    },
    {
        name: "Ozzie",
        Species: "Brown Octopus",
        Length: "two feet",
        food: ["Krill", "Copepod"],
        HarvestLocation: "Pacific"
    },
    {
        name: "Thurman",
        Species: "Blue Siamese Fighting Fish",
        Length: "two inches",
        food: "Children",
        HarvestLocation: "Asia, the shallow waters of rice paddies, ponds, or slow-moving streams."
    }
]


export const useFish = () => {
    //returns the array
    //Array method slice() returns a copy of the data but not the actual database
    return fishCollection.slice()

}