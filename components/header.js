// Detect if we're in a subdirectory and if this is the home page
const pathPrefix = location.pathname.includes('/posts/') ? '../' : '';
const isHome = location.pathname.endsWith('index.html') || location.pathname.endsWith('/');

const isDark = localStorage.getItem('theme') === 'dark';
if (isDark) document.documentElement.classList.add('dark');

document.currentScript.insertAdjacentHTML('afterend', `
<header>
    <div class="header-left">
        <h3>Moritz Groß</h3>
        <nav>
            <a href="${pathPrefix}index.html">Home</a>
            <a href="${pathPrefix}blog.html">Blog</a>
        </nav>
        <button class="theme-toggle">${isDark ? '☼' : '☾'}</button>
    </div>
    ${isHome ? `<img src="${pathPrefix}portrait.jpg" alt="Portrait of Moritz Groß" class="portrait" loading="lazy">` : ''}
</header>
`);

document.querySelector('.theme-toggle').addEventListener('click', function() {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
});
