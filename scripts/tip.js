const initializeTipDetailButtonEvents = () => {
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
    document.querySelector("#button--harpoon").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--harpoon")
            theDialog.showModal()
        }
    ),
        document.querySelector("#button--dive-caught").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--dive-caught")
                theDialog.showModal()
            }
        ),
        document.querySelector("#button--cleaning").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--cleaning")
                theDialog.showModal()
            }
        )

}

export default initializeTipDetailButtonEvents