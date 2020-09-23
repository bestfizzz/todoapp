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
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
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