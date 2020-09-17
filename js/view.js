const view={}
view.setActiveScreen = (screenName, fromCreateConversation = false) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = component.registerPage
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
                controler.register(data)
            })
            document.getElementById('redirect-to-login').addEventListener('click', () => {
                view.setActiveScreen('loginPage')
            })
            break;
        case 'loginPage':
            document.getElementById('app').innerHTML = component.loginPage
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controler.login(data)
            })
            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerPage')
            })
            break;
        case 'toDoPage':
            document.getElementById('app').innerHTML = component.toDoPage
            const sendMessageForm = document.getElementById('send-message-form')
            sendMessageForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const message = {
                    content: sendMessageForm.message.value,
                    owner: model.currentUser.email,
                    createdAt: new Date().toISOString()
                }
                if (!(message.content.trim() === '')) {
                    model.addMessage(message)
                    sendMessageForm.message.value = ''
                }
            })
            document.querySelector('#send-message-form input').addEventListener('click', () => {
                view.hideNotification(model.currentConversation.id)
            })
            const addUserForm = document.getElementById('add-user-form')
            addUserForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const email = addUserForm.email.value
                controler.addUser(email)
                addUserForm.email.value = ''
            }
            )
            document.getElementById('create-conversation').addEventListener('click', () => {
                view.setActiveScreen('createConversationPage')
            })
            if (fromCreateConversation) {
                view.showCurrentConversation()
                view.showConversations()
            } else {
                model.getConversations()
                model.listenConversationChange()
            }
            break;
    }
}