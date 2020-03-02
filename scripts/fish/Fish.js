/**
 *  Fish which renders individual fish objects as HTML
 */
const Fish = (fish) => {
    return `
    <section class="fish">
            <div class="fish-card">
                <img class="card-picture"
                src="${fish.image}"
                alt=""
                style="width:100%"
                />

            <div class="fish-container">
            <div class="fish__name"><h4><b>${fish.name}</b></h4>
            </div>
            
            <button id="button--${fish.name}">Details</button>
            <dialog class="dialog--fish" id="details--${fish.name}">
                <div>Species: ${fish.species}</div>
                <div>Location: ${fish.harvestLocation}</div>
                <div>Length: ${fish.length}</div>
                <div>Food: ${fish.food.join(",")}</div>

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    </section>
    `
}

export default Fish