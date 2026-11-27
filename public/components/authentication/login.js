class login extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
       <link rel="stylesheet" href="/PhpTodo/public/components/authentication/auth.css">
       <section class="container">
<div class="form-container">
  <div class="form-left">
    <div class="logo">
      <h2>XITIZ</h2>
    </div>
    <div class="left-img">
   
    </div>
  </div>
  <div class="form-right">
    <div class="form-content">
      <header class="form-header">
        <h1>Welcome back dearr !</h1>
        <p>Log in to continue your tasks.</p>
      </header>
      <form action="/backend/authentication/login.php" method="POST" class="login-form">
        <div class="form-group">
          <label for="email">Email.</label>
          <div class="input-form">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
              <path d="M4 7L12 13L20 7" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
            <input type="email" id="email" name="email" placeholder="xitizmgr123@gmail.com" autocomplete="email" required />
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-form">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="10" width="14" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2" />
              <circle cx="12" cy="15" r="1.5" fill="currentColor" />
            </svg>
            <input type="password" id="password" name="password" placeholder="Enter your password" autocomplete="current-password" required />
          </div>
        </div>
        <div class="form-option">
          <label class="remember">
            <input type="checkbox" name="remember" id="remember" />
            <span>Remember me</span>
          </label>

          <a href="#" class="forget-password"> Forget password </a>
        </div>
        <button class="login-btn" type="submit">Log in</button>
      </form>
      <div class="register-des">
        <p>Don't have an account ? Create one</p>
        <a href="register.php">Register</a>
      </div>
    </div>
  </div>
</div>
</section>

        
        `
  }
}
customElements.define("login-page", login)
