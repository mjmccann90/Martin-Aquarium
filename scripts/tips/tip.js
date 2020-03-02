/**
 *  Tip which renders individual fish objects as HTML
 */
const Tip = (tip) => {
  return `
    <div class="tip-card"> 
          <img
            class="tip-card-picture"
            src="${tip.image}"
            alt="Avatar"
            style="width:100%"
          />


          <div class="tip-container">
            <h4><b>${tip.title}</b></h4>

            <button id="button--${tip.name}">Details</button>
            <dialog class="dialog--tip" id="details--${tip.name}">
                <div>Name: ${tip.name}</div>
              <div>Where Used/Used For: ${tip.whereUsedFor}</div>
              <div>Economic Benefits/Pitfalls: ${tip.economicBenefitsPitfalls}</div>
              <div>Environmental Benefits/Pitfalls: ${tip.environmentalBenefitsPitfalls}</div>
              <button class="button--close" >Close Dialog</button>
            </dialog>


          </div>
        </div> 
    `
}

export default Tip