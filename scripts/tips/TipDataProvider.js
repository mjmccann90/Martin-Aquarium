const tipCollection = [
    {
        title: "Fish Harvesting Techniques",
        name: "Harpoon",
        whereUsedFor: "Waters where swordfish and bluefish tuna are found.",
        economicBenefitsPitfalls: "The method is where the target must be seen before striking so if the fish aren’t seen there’s no money.",
        environmentalBenefitsPitfalls: "The mature fish is only taken leaving the immature fishes behind and also the fishes might get an advantage since they’re fished in the night.",
        image: "./images/harpoon.jpg"
    },
    {
        title: "Fish Harvesting Techniques",
        name: "Dive-Caught",
        whereUsedFor: "Around reef or deep waters possible for humans; lobsters, abalone, seaweed, sponges, reef dwellingfishes.",
        economicBenefitsPitfalls: "Little fish is caught so not really much of an economic benefit, also the gear to even divecaught is costly; can possible catch a rare expensive fish.",
        environmentalBenefitsPitfalls: "Since it’s human hand fishing there’s the little damages to the fishes habitat; humans can destroy some habitats without knowing it.",
        image: "./images/dive-caught.jpg"
    }
]

export const useTip = () => {
    //returns the array
    //Array method slice() returns a copy of the data but not the actual database
    return tipCollection.slice()

}