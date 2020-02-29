import { useLocation } from "./LocationDataProvider.js"
import Location from "./Location.js"

const LocationList = () => {

    // 1. Get the data from the provider
    // 2. Iterate the array
    // 3. Convert each obj to HTML representation
    // 4. Put in the DOM

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".location-list")
    const locations = useLocation()

    for (const locationObject of locations) {
        contentElement.innerHTML += Location(locationObject)
    }
}

export default LocationList