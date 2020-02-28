import { useTip } from "./TipDataProvider.js"
import Tip from "./tip.js"

const TipList = () => {

    // 1. Get the data from the provider
    // 2. Iterate the array
    // 3. Convert each obj to HTML representation
    // 4. Put in the DOM

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".sidebar")
    const tips = useTip()

    for (const tipObject of tips) {
        contentElement.innerHTML += Tip(tipObject)
    }
}

export default TipList