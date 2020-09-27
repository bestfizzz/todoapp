const component={}
component.registerPage=`
<div class="main">
<div class="container" id="container">
	<div class="form-container sign-up-container">
        <form id="register-form">
			<h1>Create Account</h1>
			<input type="text" placeholder="Name" name='name'/>
			<div class="invisible" id="name-error">Please input your name</div>    
			<input type="invisible" placeholder="Email" name='email'/>
			<div class="invisible" id="email-error">Please input your email</div>    
			<input type="password" placeholder="Password" name='password'/>
			<div class="invisible" id="password-error">Please input your password</div>    
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
        <form id="login-form">
			<h1>Sign in</h1>
			<input type="email" placeholder="Email" name='email'/>
			<div class="invisible" id="email2-error">Please input your email</div>    
			<input type="password" placeholder="Password" name='password'/>
			<div class="invisible" id="password2-error">Please input your password</div>    
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>Already have an acount?</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Don't have an acount?</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
<div style="position: absolute; bottom: 0; left: 0; width: 100px; text-align:left;">To Do List</div>
</div>
	`
component.mobileSignUp=`
<div class="register-container">
<form id="register-form">
    <div class="register-header">To Do List</div>
        <input type="text" placeholder="Name" name='name'>
        <div class="invisible" id="name-error">Please input your name</div>  
        <input type="email" placeholder='Email' name="email">
        <div class="invisible" id="email-error">Please input your email</div>  
        <input type="password" placeholder="Password" name="password">
        <div class="invisible" id="password-error">Please input your password</div>  
    <div class="form-action">
        <div>Already have an account?<span class="cursor-pointer" id='redirect-to-login'>Login</span></div>
        <button type="submit" class="btn cursor-pointer">register</button>
    </div>
</form>
</div> 
`
component.mobileSignIn=`
<div class="login-container">
<form id="login-form">
    <div class="login-header">To Do List</div>
        <input type="email" placeholder='Email' name="email">
        <div class="invisible" id="email-error">Please input your email</div>
        <input type="password" placeholder="Password" name="password">
        <div class="invisible" id="password-error">Please input your password</div>
    </div>
    <div class="form-action">
        <div>Don't have an account?<span class="cursor-pointer" id='redirect-to-register'>Register</span></div>
        <button type="submit" class="btn cursor-pointer">sign in</button>
    </div>
</form>
</div>
`
component.toDoPage=`
	<div>something</div>
`