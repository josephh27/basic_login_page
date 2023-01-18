let names = document.querySelector(".name-list")
const signInBtn = document.querySelector('input[type="submit"]')
let emailField = document.querySelector("#email-field")


signInBtn.addEventListener("click", () => {
    new_item = document.createElement("li")
    new_name = document.createTextNode(emailField.value)
    new_item.appendChild(new_name)
    names.appendChild(new_item)
})