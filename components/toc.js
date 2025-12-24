// Auto-generate ToC from h2, h3, h4 in .post-content
const tocScript = document.currentScript;

document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.post-content');
    if (!content) return;

    const headings = content.querySelectorAll('h2, h3, h4');
    if (headings.length === 0) return;

    const items = Array.from(headings).map((h, i) => {
        if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || `section-${i}`;
        const indent = (parseInt(h.tagName[1]) - 2);
        return `<li style="margin-left:${indent}rem"><a href="#${h.id}">${h.textContent}</a></li>`;
    }).join('');

    tocScript.insertAdjacentHTML('afterend', `
        <nav class="toc">
            <strong>Contents</strong>
            <ul>${items}</ul>
        </nav>
    `);
});
