document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.post-content');
    if (!content) return;

    const headings = content.querySelectorAll('h2, h3, h4');
    if (headings.length === 0) return;

    headings.forEach((h, i) => {
        if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || `section-${i}`;
    });

    const buildItems = () => Array.from(headings).map(h => {
        const indent = parseInt(h.tagName[1]) - 2;
        return `<li style="margin-left:${indent}rem"><a href="#${h.id}" data-target="${h.id}">${h.textContent}</a></li>`;
    }).join('');

    document.body.insertAdjacentHTML('beforeend', `
        <nav class="toc toc-sidebar">
            <strong>Contents</strong>
            <ul>${buildItems()}</ul>
        </nav>
    `);

    // Highlight current section
    const sidebarLinks = document.querySelectorAll('.toc-sidebar a[data-target]');
    const setActive = id => sidebarLinks.forEach(a => a.classList.toggle('toc-active', a.dataset.target === id));

    // On click: immediately highlight
    sidebarLinks.forEach(a => a.addEventListener('click', () => setActive(a.dataset.target)));

    // On scroll: update highlight via IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        const visible = entries.find(e => e.isIntersecting);
        if (visible) setActive(visible.target.id);
    }, { rootMargin: '-20% 0px -70% 0px' });

    headings.forEach(h => observer.observe(h));
});
