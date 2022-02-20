//use IIFE (so that global scope won`t be affected with local variables)
(() => {
  const footer = `
    <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
    <div class="me-5 d-none d-lg-block">
    <span>Get connected with us on social networks:</span>
    </div>
    <div>
    <a href="https://www.facebook.com" class="me-4 link">
    <i class="bi bi-facebook"></i>
    </a>
    <a href="https://twitter.com/?lang=en" class="me-4 link">
    <i class="bi bi-twitter"></i>
    </a>
    <a href="https://accounts.google.com" class="me-4 link">
    <i class="bi bi-google"></i>
    </a>
    <a href="https://www.instagram.com" class="me-4 link">
    <i class="bi bi-instagram"></i>
    </a>
    <a href="https://www.linkedin.com" class="me-4 link">
    <i class="bi bi-linkedin"></i>
    </a>
    <a href="https://github.com/narcissichka" class="me-4 link">
    <i class="bi bi-github"></i>
    </a>
    </div>
    </section>
    <section class="">
    <div class="container text-center text-md-start mt-5">
    <div class="row mt-3">
    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    <h6 class="text-uppercase fw-bold mb-4">Racoon</h6>
    <p>
    This application does not claim to be original. It does not
    have much functionality so far. It is still under development.
    </p>
    </div>
    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    <h6 class="text-uppercase fw-bold mb-4">Partners</h6>
    <p>
    <a
    href="https://lingualeo.com/en"
    class="link"
    target="_blank"
    >Lingualeo</a
    >
    </p>
    <p>
    <a
    href="https://www.vocabulary.com"
    class="link"
    target="_blank"
    >Vocabulary</a
    >
    </p>
    <p>
    <a href="https://membean.com" class="link" target="_blank"
    >Membean</a
    >
    </p>
    <p>
    <a
    href="https://worddio.com/app/"
    class="link"
    target="_blank"
    >Worddio</a
    >
    </p>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
    <p>
    <a href="https://www.multitran.com" class="link">Multitran</a>
    </p>
    <p>
    <a href="https://www.dictionary.com" class="link"
    >Dictionary</a
    >
    </p>
    <p>
    <a href="https://dictionary.cambridge.org" class="link"
    >Cambridge Dictionary</a
    >
    </p>
    <p>
    <a href="https://translate.google.com" class="link"
    >Google Translate</a
        >
        </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i class="bi bi-house"></i> New York, NY 10012, US</p>
        <p>
        <a href="mailto:info@example.com" class="link">
        <i class="bi bi-envelope"></i>
        info@example.com
        </a>
        </p>
        <p>
        <a href="tel:+0123456788" class="link"
        ><i class="bi bi-telephone"></i> + 01 234 567 88</a
        >
        </p>
        <p>
        <a href="tel:+0123456789" class="link"
        ><i class="bi bi-printer"></i> + 01 234 567 89</a
        >
        </p>
        </div>
        </div>
        </div>
        </section>
        <div class="text-center p-4">
        © 2022 Copyright Racoon inc. all rights reserved
        </div>
        `;
  const template = Handlebars.compile(footer);
  const footerTemplate = template();
  document.getElementById("footer").innerHTML += footerTemplate;
})();
