/**
 *  Fish which renders individual fish objects as HTML
 */
const Fish = (fish) => {
    return `
    
        <div class="fish">
            <div class="fish-card">
                <img class="card-picture"
                src="${fish.image}"
                alt=""
                style="width:100%"
                />

            <div class="fish-container">
                <div class="fish__name"><h4><b>${fish.name}</b></h4>
                <button id="button--${fish.name}">Details</button>
            </div>

            <dialog class="dialog--fish" id="details--${fish.name}">
                <div>Species: ${fish.species}</div>
                <div>Location: ${fish.location}</div>
                <div>Length: ${fish.length}</div>
                <div>Food: ${fish.food.join(",")}</div>

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
        </div>
    `
}

export default Fish