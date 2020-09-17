const component={}
component.registerPage=`
<div class="register-container">
<form id="register-form">
    <div class="register-header">To do app</div>
        <div class="name-wrapper">
        <div class="input-wrapper">
            <input type="text" placeholder="First name" name='firstName'>
            <div class="error" id="first-name-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Last name" name="lastName">
            <div class="error" id="last-name-error"></div>
    </div>
    </div>
    <div class="input-wrapper">
        <input type="email" placeholder='Email' name="email">
        <div class="error" id="email-error"></div>    
    </div>
    <div class="input-wrapper">
        <input type="password" placeholder="Password" name="password">
        <div class="error" id="password-error"></div>
    </div>
    <div class="input-wrapper">
        <input type="password" placeholder="Confirm password" name="confirmPassword">
        <div class="error" id="confirm-password-error"></div>
    </div>
    <div class="form-action">
        <div>Already have an account?<span class="cursor-pointer" id='redirect-to-login'>Login</span></div>
        <button type="submit" class="btn cursor-pointer">register</button>
    </div>
</form>
</div> 

<div class="login-container">
<form id="login-form">
    <div class="login-header">To Do List</div>
    <div class="input-wrapper">
        <input type="email" placeholder='Email' name="email">
        <div class="error" id="email-error"></div>    
    </div>
    <div class="input-wrapper">
        <input type="password" placeholder="Password" name="password">
        <div class="error" id="password-error"></div>
    </div>
    <div class="form-action">
        <div>Don't have an account?<span class="cursor-pointer" id='redirect-to-register'>Register</span></div>
        <button type="submit" class="btn cursor-pointer">sign in</button>
    </div>
</form>
</div>
    `
const toDoPage=`

`