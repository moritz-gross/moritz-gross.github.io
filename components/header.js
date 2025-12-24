// Detect if we're in a subdirectory and if this is the home page
const pathPrefix = location.pathname.includes('/posts/') ? '../' : '';
const isHome = location.pathname.endsWith('index.html') || location.pathname.endsWith('/');

document.currentScript.insertAdjacentHTML('afterend', `
<header>
    <div class="header-left">
        <h3>Moritz Groß</h3>
        <nav>
            <a href="${pathPrefix}index.html">Home</a>
            <a href="${pathPrefix}blog.html">Blog</a>
        </nav>
    </div>
    ${isHome ? `<img src="${pathPrefix}portrait.jpg" alt="Portrait of Moritz Groß" class="portrait">` : ''}
</header>
`);
