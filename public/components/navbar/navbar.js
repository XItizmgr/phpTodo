class Navbar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href = "public/components/navbar/navbar.css"/>
        <header>
      <nav>
        <div class="nav-logo">
          <span class="logo">XITIZ</span>
        </div>
        <ul class="nav-lists">
          <li><a class="nav-list" href="#home">Home</a></li>
          <li><a class="nav-list" href="#mytask">My task</a></li>
        </ul>
        <button class="nav-btn">Log in</button>
      </nav>
    </header>

        `
    }
}

customElements.define("nav-bar",Navbar)

