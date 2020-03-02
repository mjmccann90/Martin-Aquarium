const locationCollection = [
    {
        name: "Bahamas",
        description: "Some description of the Bahamas",
        image: "./images/bahamas.jpg"
    }
]


export const useLocation = () => {
    //returns the array
    //Array method slice() returns a copy of the data but not the actual database
    return locationCollection.slice()

}