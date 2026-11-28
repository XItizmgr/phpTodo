class register extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/PhpTodo/public/components/authentication/auth.css" />

<section class="container">
  <div class="register-container form-container">
    <div class="form-left">
      <div class="logo">
        <h2>XITIZ</h2>
      </div>
      <div class="left-img"></div>
    </div>

    <div class="form-right">
      <div class="form-content">
        <header class="form-header">
          <h1>Create an account!</h1>
          <p>Start organizing your tasks today.</p>
        </header>

        <form action="/backend/authentication/register.php" method="POST" class="login-form">
          <div class="form-group">
            <label for="username">Username</label>
            <div class="input-form">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2" />
                <path d="M4 21a8 8 0 0 1 16 0" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
              <input type="text" id="username" name="username" placeholder="Enter your username" autocomplete="username" required />
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
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
              <input type="password" id="password" name="password" placeholder="Create a password" autocomplete="new-password" required />
            </div>
          </div>

          <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <div class="input-form">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="10" width="14" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2" />
                <path d="M9 15l2 2 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <input type="password" id="confirm-password" name="confirm_password" placeholder="Confirm your password" autocomplete="new-password" required />
            </div>
          </div>

          <button class="login-btn" type="submit">Create Account</button>
        </form>

        <div class="register-des">
          <p>Already have an account?</p>
          <a href="login.php">Log in</a>
        </div>
      </div>
    </div>
  </div>
</section>

        
        `

  }
}

customElements.define("register-page", register)