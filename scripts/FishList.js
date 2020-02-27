/**
 *  FishList which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

import { useFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"

const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fish-list")
    const fishes = useFish()

    for (const fishObject of fishes) {
        contentElement.innerHTML += Fish(fishObject)
    }
}

export default FishList