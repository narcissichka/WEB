//use IIFE (so that global scope won`t be affected with local variables)
(() => {
  let isSession = false;
  const currentFile = location.pathname.match(/[^/]*$/)[0];
  const hp = currentFile === "index.html" ? "active" : "";
  const lp = currentFile === "login.html" ? "active" : "";
  const sp = currentFile === "signup.html" ? "active" : "";
  const learning = currentFile === "learning.html" ? "active" : "";

  const navbar = `
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
  <a class="navbar-brand" href="./index.html">
  <img
  src="./images/racoon.png"
  alt="racoon logo"
  width="35"
  height="35"
  />
    </a>
    <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
      <a class="nav-link ${hp}" aria-current="page" href="{{homeLink}}"
      >Home</a
      >
      </li>
      {{#unless isSession}}
      <li class="nav-item">
      <a class="nav-link ${lp}" href="{{loginLink}}">Login</a>
      </li>
      <li class="nav-item">
      <a class="nav-link ${sp}" href="{{signUpLink}}">Sign up</a>
      </li>
      {{/unless}}
      <li class="nav-item dropdown">
      <a
      class="nav-link dropdown-toggle ${learning}"
      href="#"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >
      Learning path
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="{{learnLink}}">Learn</a></li>
      <li>
      <a class="dropdown-item" href="{{repeatLink}}">Repeat</a>
      </li>
      <li><hr class="dropdown-divider" /></li>
      <li>
      <a class="dropdown-item" href="{{searchLink}}">Search</a>
            </li>
            </ul>
            </li>
            </ul>
            </div>
{{!-- {{#if isSession}} this will be uncommented later, when there will be an opportunity to use session --}}
            <div class="flex-shrink-0 dropdown">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="./images/person-circle.svg" alt="user" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" style="
            position: absolute;
            inset: 0px 0px auto auto;
            margin: 0px;
            transform: translate3d(0px, 34px, 0px);
        ">
          <li><a class="dropdown-item" href="{{profileLink}}">Profile</a></li>
          <li><a class="dropdown-item" href="{{changeProfileLink}}">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
{{!-- {{/if}} --}}
            </div>
            </nav>
            `;
  const template = Handlebars.compile(navbar);
  const options = (hl, logl, sul, pl, cpl, learnl, rl, sl, session) => {
    return {
      homeLink: hl,
      loginLink: logl,
      signUpLink: sul,
      profileLink: pl,
      changeProfileLink: cpl,
      learnLink: learnl,
      repeatLink: rl,
      searchLink: sl,
      isSession: session,
    };
  };
  const navbarComp = template(
    options(
      "./index.html",
      "./login.html",
      "./signup.html",
      "./profile.html",
      "./ch-profile.html",
      "./learning.html#learning",
      "./learning.html#train",
      "./learning.html#search",
      isSession
    )
  );

  document.getElementById("header").innerHTML += navbarComp;
})();
