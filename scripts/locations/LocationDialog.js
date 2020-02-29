const initializeLocationDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show tip details when the button is clicked
    document.querySelector("#button--Location").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Location")
            theDialog.showModal()
        }
    )
    // document.querySelector("#button--Dive-Caught").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Dive-Caught")
    //         theDialog.showModal()
    //     }
    // )

}

export default initializeLocationDetailButtonEvents