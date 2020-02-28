/**
 *  FishList which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

import { useFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"

const FishList = () => {

    // 1. Get the data from the provider
    // 2. Iterate the array
    // 3. Convert each obj to HTML representation
    // 4. Put in the DOM

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fish-list")
    const fishes = useFish()

    for (const fishObject of fishes) {
        contentElement.innerHTML += Fish(fishObject)
    }
}

export default FishList