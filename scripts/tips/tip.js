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
            <ul>
            <dialog class="dialog--tip" id="details--${tip.name}">
                <li>Name: ${tip.name}</li>
              <li>
              Where Used/Used For: ${tip.whereUsedFor}
              </li>
              <li>
                Economic Benefits/Pitfalls: ${tip.economicBenefitsPitfalls}
              </li>
              <li>
                Environmental Benefits/Pitfalls: ${tip.environmentalBenefitsPitfalls}
              </li>
              <button class="button--close" >Close Dialog</button>
            </dialog>
            </ul>
            <div>
                <button id="button--${tip.name}">Details</button>
            </div>
          </div>
        </div> 
    `
}

export default Tip