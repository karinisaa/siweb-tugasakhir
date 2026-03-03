function parseStock(text) {
    const num = text.replace(/\D/g, '');
    return parseInt(num, 10) || 0;
}

function updateThemeButton() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

function initTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeButton();
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeButton();
}

function handleBuy(e) {
    const btn = e.currentTarget;
    const card = btn.closest('.product-card');
    if (!card) return;
    const stokElem = card.querySelector('.stok-text');
    let stok = parseStock(stokElem.textContent);
    if (stok <= 0) {
        btn.disabled = true;
        return;
    }
    stok -= 1;
    stokElem.textContent = 'Stok: ' + stok;
    alert('Pembelian berhasil, sisa stok: ' + stok);
    if (stok === 0) {
        btn.disabled = true;
    }
}

function updateWishlistCount() {
    const list = JSON.parse(sessionStorage.getItem('wishlist') || '[]');
    const badge = document.getElementById('wishlist-count');
    if (badge) badge.textContent = list.length;
}

function handleWishlist(e) {
    const btn = e.currentTarget;
    const card = btn.closest('.product-card');
    if (!card) return;
    const title = card.querySelector('.card-title').textContent.trim();
    let list = JSON.parse(sessionStorage.getItem('wishlist') || '[]');
    if (!list.includes(title)) {
        list.push(title);
        sessionStorage.setItem('wishlist', JSON.stringify(list));
        updateWishlistCount();
        alert('"' + title + '" ditambahkan ke wishlist');
    } else {
        alert('"' + title + '" sudah ada di wishlist');
    }
}

function showWishlist() {
    const list = JSON.parse(sessionStorage.getItem('wishlist') || '[]');
    const container = document.getElementById('wishlist-items');
    container.innerHTML = '';
    if (list.length === 0) {
        container.textContent = 'Tidak ada item dalam wishlist.';
    } else {
        const ul = document.createElement('ul');
        ul.className = 'list-group';
        list.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = item;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }
    const modalEl = document.getElementById('wishlistModal');
    if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
    }
}

function clearWishlist() {
    sessionStorage.setItem('wishlist', JSON.stringify([]));
    updateWishlistCount();
    const container = document.getElementById('wishlist-items');
    if (container) container.textContent = 'Tidak ada item dalam wishlist.';
}

function bindInteraction() {
    document.querySelectorAll('.card-body .btn').forEach(btn => {
        if (btn.textContent.trim().toLowerCase() === 'beli') {
            btn.classList.add('btn-buy');
        }
    });

    document.querySelectorAll('.btn-buy').forEach(btn => {
        btn.addEventListener('click', handleBuy);
        // disable button immediately if stock 0
        const card = btn.closest('.product-card');
        const stok = parseStock(card.querySelector('.stok-text').textContent);
        if (stok === 0) btn.disabled = true;
    });
    document.querySelectorAll('.btn-wishlist').forEach(btn => {
        btn.addEventListener('click', handleWishlist);
    });
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    const wishlistBtn = document.getElementById('wishlist-button');
    if (wishlistBtn) wishlistBtn.addEventListener('click', showWishlist);

    const clearBtn = document.getElementById('clear-wishlist');
    if (clearBtn) clearBtn.addEventListener('click', clearWishlist);
}

// initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    bindInteraction();
    updateWishlistCount();
});
