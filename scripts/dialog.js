const initializeDialogDetailButtonEvents = () => {
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

    // Show fish details when the button is clicked
    document.querySelector("#button--betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--betty")
            theDialog.showModal()
        }
    ),

        document.querySelector("#button--jelly").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--jelly")
                theDialog.showModal()
            }
        ),

        document.querySelector("#button--patrick").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--patrick")
                theDialog.showModal()
            }
        ),

        document.querySelector("#button--willy").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--willy")
                theDialog.showModal()
            }
        ),

        document.querySelector("#button--ozzie").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--ozzie")
                theDialog.showModal()
            }
        ),
        document.querySelector("#button--thurman").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--thurman")
                theDialog.showModal()
            }
        )

}







export default initializeDialogDetailButtonEvents;