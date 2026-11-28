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
            <input type="password" id="password" name="password" placeholder="Enter your password" autocomplete="current-password" required />
               <button class="toggle-password">
              </button>
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
    // const passwordInput = this.shadowRoot.querySelector("#password");
    // const togglePassword = this.shadowRoot.querySelector(".toggle-password");

    // const open = `
    //   <svg viewBox="0 0 24 24" aria-hidden="true">
    //     <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
    //       fill="none" stroke="currentColor" stroke-width="1.7"/>
    //     <circle cx="12" cy="12" r="3"
    //       fill="none" stroke="currentColor" stroke-width="1.7"/>
    //   </svg>
    // `;

    // const close = `
    //   <svg viewBox="0 0 24 24" aria-hidden="true">
    //     <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"
    //       fill="none" stroke="currentColor" stroke-width="1.7"
    //       stroke-linecap="round"/>
    //     <path d="M9.9 5.2A10 10 0 0 1 12 5c6 0 9.5 7 9.5 7a15 15 0 0 1-3.2 3.9M6.2 6.2C3.5 8.1 2.5 12 2.5 12s3.5 7 9.5 7c1.5 0 2.8-.4 4-1"
    //       fill="none" stroke="currentColor" stroke-width="1.7"
    //       stroke-linecap="round"/>
    //   </svg>
    // `;
    // togglePassword.innerHTML = open;

    // togglePassword.addEventListener("click", () => {
    //   const isPassword = passwordInput.type === "password";

    //   passwordInput.type = isPassword ? "text" : "password";

    //   togglePassword.innerHTML = isPassword ? close : open;
    // });


  }
}

customElements.define("login-page",login)