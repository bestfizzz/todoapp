const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = component.registerPage
            const signUpButton = document.getElementById('signUp')
            const signInButton = document.getElementById('signIn')
            const container = document.getElementById('container')
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            })
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            })
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    name:registerForm.name.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                }
                controller.register(data)
            })
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(data)
            })
            break;
        case 'toDoPage':
            document.getElementById('app').innerHTML = component.toDoPage
            break;
    }
}
// view.setErrorMessage = (elementId, context) => {
//     document.getElementById(elementId).innerText = context
// }