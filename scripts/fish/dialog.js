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
    document.querySelector("#button--Betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Betty")
            theDialog.showModal()
        }
    ),

        document.querySelector("#button--Jelly").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--Jelly")
                theDialog.showModal()
            }
        ),

        document.querySelector("#button--Patrick").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--Patrick")
                theDialog.showModal()
            }
        ),

        document.querySelector("#button--Willy").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--Willy")
                theDialog.showModal()
            }
        ),

        document.querySelector("#button--Ozzie").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--Ozzie")
                theDialog.showModal()
            }
        ),
        document.querySelector("#button--Thurman").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--Thurman")
                theDialog.showModal()
            }
        )

}







export default initializeDialogDetailButtonEvents;