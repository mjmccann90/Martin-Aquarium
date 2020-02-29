/**
 *  Tip which renders individual fish objects as HTML
 */
const Location = (location) => {
    return `
    <section class="location">
    <div class="location-card">
      <img src="${location.image}"
      alt=""
      style="width:100%" />
      <div class="container">
        <h4><b>${location.name}</b></h4>
        <p>${location.description}</p>
      </div>
    </div>
  </section>
      `
}

export default Location