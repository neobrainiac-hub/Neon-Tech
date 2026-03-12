const DEFAULT_SHOP_DATA = [
    {
        category: "Smartphones",
        id: "smartphones",
        products: [
            { name: "iPhone 15 Pro", price: 999, desc: "Titanium design, A17 Pro chip, and a pro-grade camera system.", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600", stock: 15, featured: true },
            { name: "Samsung Galaxy S24 Ultra", price: 1299, desc: "The ultimate switch to Galaxy with a built-in S Pen and AI power.", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600", stock: 8, featured: true },
            { name: "Google Pixel 8 Pro", price: 999, desc: "The all-pro phone engineered by Google, with the best Pixel Camera yet.", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=600", stock: 12, featured: false },
            { name: "OnePlus 12", price: 799, desc: "Fast and Smooth performance with the 4th Gen Hasselblad Camera.", img: "https://images.unsplash.com/photo-1707242137535-77987e97d19e?auto=format&fit=crop&q=80&w=600", stock: 20, featured: false },
            { name: "Xiaomi 14 Pro", price: 899, desc: "Leica Optics Summilux lens and Snapdragon 8 Gen 3 power.", img: "https://images.unsplash.com/photo-1662483162389-798858a71991?auto=format&fit=crop&q=80&w=600", stock: 5, featured: false },
            { name: "Nothing Phone (2)", price: 599, desc: "A new way to interact with the unique Glyph Interface.", img: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?auto=format&fit=crop&q=80&w=600", stock: 25, featured: true },
            { name: "Tecno Phantom X2", price: 649, desc: "World's first retractable portrait lens smartphone.", img: "https://images.unsplash.com/photo-1598327105654-20a89467fbcb?auto=format&fit=crop&q=80&w=600", stock: 10, featured: false },
            { name: "Infinix Zero Ultra", price: 529, desc: "180W Thunder Charge and 200MP Ultra Vision Camera.", img: "https://images.unsplash.com/photo-1580910051074-3eb6948865c5?auto=format&fit=crop&q=80&w=600", stock: 14, featured: false }
        ]
    },
    {
        category: "Laptops",
        id: "laptops",
        products: [
            { name: "MacBook Air M2", price: 1099, desc: "Strikingly thin, incredible speed, and up to 18 hours of battery.", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600", stock: 10, featured: true },
            { name: "MacBook Pro M3", price: 1599, desc: "The most advanced chips for personal computers ever.", img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=600", stock: 6, featured: true },
            { name: "Dell XPS 13", price: 1249, desc: "Iconic design and high performance in a compact 13-inch frame.", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600", stock: 15, featured: false },
            { name: "HP Spectre x360", price: 1399, desc: "Versatile 2-in-1 design with precision performance.", img: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=600", stock: 8, featured: false },
            { name: "ThinkPad X1 Carbon", price: 1499, desc: "The ultimate business laptop with legendary durability.", img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=600", stock: 12, featured: false },
            { name: "ASUS ZenBook 14", price: 949, desc: "Powerful, elegant, and impossibly light OLED laptop.", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=600", stock: 20, featured: false },
            { name: "Acer Swift X", price: 899, desc: "Performance for creators on the move with RTX graphics.", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600", stock: 14, featured: false },
            { name: "Surface Laptop", price: 999, desc: "Sleek and portable with the best of Windows 11.", img: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=600", stock: 11, featured: false }
        ]
    },
    {
        category: "Gaming Gear",
        id: "gaming",
        products: [
            { name: "PlayStation 5", price: 499, desc: "Experience lightning fast loading with an ultra-high speed SSD.", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=600", stock: 5, featured: true },
            { name: "Xbox Series X", price: 499, desc: "The fastest, most powerful Xbox ever built.", img: "https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ec?auto=format&fit=crop&q=80&w=600", stock: 3, featured: true },
            { name: "Nintendo Switch OLED", price: 349, desc: "Vibrant OLED screen for stunning handheld gaming.", img: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&q=80&w=600", stock: 10, featured: false },
            { name: "Neon Mechanical Keyboard", price: 149, desc: "Ultra-responsive switches and full RGB customization.", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=600", stock: 50, featured: false },
            { name: "Neon Gaming Mouse", price: 79, desc: "Lightweight design with a 26K DPI optical sensor.", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=600", stock: 45, featured: false },
            { name: "Neon Wireless Headset", price: 199, desc: "Immersive 7.1 surround sound and low-latency wireless.", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600", stock: 30, featured: false },
            { name: "RGB Extended Mouse Pad", price: 49, desc: "Precision surface with integrated edge lighting.", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600", stock: 100, featured: false },
            { name: "Neon Pro Controller", price: 69, desc: "Ergonomic design with remappable back triggers.", img: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&q=80&w=600", stock: 40, featured: false }
        ]
    },
    {
        category: "Accessories",
        id: "accessories",
        products: [
            { name: "Neon Buds Pro", price: 199, desc: "Active Noise Cancellation and spatial audio.", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600", stock: 25, featured: true },
            { name: "Noise Cancelling Headphones", price: 349, desc: "Industry-leading silence and premium sound.", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600", stock: 18, featured: false },
            { name: "MagSafe Power Bank", price: 89, desc: "Fast wireless charging in a slim obsidian finish.", img: "https://images.unsplash.com/photo-1618413665675-9c2980992383?auto=format&fit=crop&q=80&w=600", stock: 40, featured: false },
            { name: "Aluminum Laptop Stand", price: 59, desc: "Ergonomic elevation with heat dissipation design.", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600", stock: 30, featured: false },
            { name: "10-in-1 USB-C Hub", price: 129, desc: "Expand your productivity with 4K HDMI and ultra-fast data.", img: "https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&q=80&w=600", stock: 22, featured: false },
            { name: "Fast Charger GaN 100W", price: 79, desc: "Hyper-speed charging for three devices simultaneously.", img: "https://images.unsplash.com/photo-1619131603515-5e60805c8623?auto=format&fit=crop&q=80&w=600", stock: 50, featured: false },
            { name: "Shockproof Tech Case", price: 39, desc: "Military-grade protection with a sleek carbon texture.", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=600", stock: 100, featured: false },
            { name: "Neon Watch Series 2", price: 399, desc: "Advanced health tracking with an Always-On Retina display.", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600", stock: 15, featured: true }
        ]
    },
    {
        category: "Smart Home",
        id: "smarthome",
        products: [
            { name: "Smart Neon Bulbs", price: 49, desc: "16 million colors controlled via your smartphone.", img: "https://images.unsplash.com/photo-1550985543-f47f38aee65e?auto=format&fit=crop&q=80&w=600", stock: 60, featured: false },
            { name: "Smart Wi-Fi Plug", price: 29, desc: "Control your appliances from anywhere, anytime.", img: "https://images.unsplash.com/photo-1558002038-103792e07a70?auto=format&fit=crop&q=80&w=600", stock: 100, featured: false },
            { name: "4K Smart Doorbell", price: 189, desc: "See, hear, and speak to visitors from your phone.", img: "https://images.unsplash.com/photo-1558002038-12467d5e4934?auto=format&fit=crop&q=80&w=600", stock: 12, featured: true },
            { name: "AI Security Camera", price: 149, desc: "Smart detection with 360-degree night vision.", img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&q=80&w=600", stock: 20, featured: false },
            { name: "Neon Smart Speaker", price: 99, desc: "Crisp sound with built-in voice assistant.", img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=600", stock: 35, featured: false },
            { name: "Eco Smart Thermostat", price: 249, desc: "Optimize your energy usage with intelligent scheduling.", img: "https://images.unsplash.com/photo-1568027762-7203055c1e27?auto=format&fit=crop&q=80&w=600", stock: 10, featured: false }
        ]
    }
];

// Load Shop Data from LocalStorage or use Defaults
let shopData = JSON.parse(localStorage.getItem('neon_shop_data')) || DEFAULT_SHOP_DATA;

// Save Shop Data to LocalStorage
function saveShopData() {
    localStorage.setItem('neon_shop_data', JSON.stringify(shopData));
}

// Ensure data is synced at least once
if (!localStorage.getItem('neon_shop_data')) saveShopData();

// DOM Elements
const shopContainer = document.getElementById('shopContainer');
const nav = document.querySelector('nav');

// Shop State
let activeFilter = 'all';
let searchQuery = '';
let sortOrder = 'featured';
let cart = JSON.parse(localStorage.getItem('neon_cart')) || [];

// Initialize Shop Sections
function initShop() {
    if (!shopContainer) return;

    // Discovery UI listeners
    const searchInput = document.getElementById('shopSearch');
    const filterGroup = document.getElementById('filterGroup');
    const sortSelect = document.getElementById('shopSort');

    if (searchInput) searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderShop();
    });

    if (filterGroup) {
        filterGroup.querySelectorAll('.filter-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                filterGroup.querySelector('.active').classList.remove('active');
                pill.classList.add('active');
                activeFilter = pill.dataset.filter;
                renderShop();
            });
        });
    }

    if (sortSelect) sortSelect.addEventListener('change', (e) => {
        sortOrder = e.target.value;
        renderShop();
    });

    renderShop();
    updateCartUI();
}

// Cart Logic
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.getElementById('mobileMenuToggle');
    
    if (navLinks && toggle) {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('active');
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    }
}

// Close mobile menu on link click
document.addEventListener('click', (e) => {
    if (isMobileMenuOpen && e.target.closest('.nav-links a')) {
        toggleMobileMenu();
    }
});

function toggleCart() {
    const drawer = document.getElementById('sideCart');
    const backdrop = document.getElementById('cartBackdrop');
    if (drawer && backdrop) {
        drawer.classList.toggle('active');
        backdrop.classList.toggle('active');
    }
}

function addToCart(pName) {
    let product;
    shopData.forEach(cat => {
        const found = cat.products.find(p => p.name === pName);
        if (found) product = found;
    });

    if (!product || product.stock <= 0) return;

    const existingItem = cart.find(item => item.name === pName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    
    // Open cart
    const drawer = document.getElementById('sideCart');
    if (drawer && !drawer.classList.contains('active')) toggleCart();
}

function removeFromCart(pName) {
    cart = cart.filter(item => item.name !== pName);
    saveCart();
    updateCartUI();
}

function updateQuantity(pName, delta) {
    const item = cart.find(i => i.name === pName);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(pName);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('neon_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const itemsContainer = document.getElementById('cartItems');
    const badge = document.getElementById('cartCountBadge');
    const headerCount = document.getElementById('cartHeaderCount');
    const totalPrice = document.getElementById('cartTotalPrice');

    if (!itemsContainer) return;

    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalVal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (badge) badge.innerText = totalQty;
    if (headerCount) headerCount.innerText = `(${totalQty})`;
    if (totalPrice) totalPrice.innerText = `$${totalVal.toLocaleString()}`;

    // Update Sticky Bar
    const stickyBar = document.getElementById('mobileStickyBar');
    const stickyTotal = document.getElementById('stickyTotal');
    if (stickyBar && stickyTotal) {
        stickyTotal.innerText = `$${totalVal.toLocaleString()}`;
        if (totalQty > 0) {
            stickyBar.classList.add('active');
        } else {
            stickyBar.classList.remove('active');
        }
    }

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<div class="empty-cart-msg" style="padding: 2rem; text-align: center; opacity: 0.5;">Your gear stash is empty.</div>';
        return;
    }

    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="p-price" style="color: var(--primary); font-weight: 700;">$${item.price.toLocaleString()}</div>
                <div class="cart-qty-controls">
                    <button class="qty-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                </div>
            </div>
            <button class="btn-remove" onclick="removeFromCart('${item.name}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// Master Render Function
function renderShop() {
    const resultsContainer = document.getElementById('searchResultsContainer');
    const resultsGrid = document.getElementById('searchResultsGrid');
    const resultCountText = document.getElementById('resultCount');
    
    // Flatten all products for search/filter
    let allProducts = [];
    shopData.forEach(cat => {
        cat.products.forEach(p => {
            allProducts.push({ ...p, categoryId: cat.id });
        });
    });

    // Apply Filters
    let filtered = allProducts.filter(p => {
        const matchesCategory = activeFilter === 'all' || p.categoryId === activeFilter || (activeFilter === 'accessories' && !['smartphones', 'laptops', 'gaming', 'smarthome'].includes(p.categoryId));
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || p.desc.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    // Apply Sorting
    if (sortOrder === 'low') filtered.sort((a, b) => a.price - b.price);
    if (sortOrder === 'high') filtered.sort((a, b) => b.price - a.price);

    // Switch View Logic
    if (searchQuery || activeFilter !== 'all') {
        shopContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        resultCountText.textContent = `Found ${filtered.length} products`;
        
        resultsGrid.innerHTML = filtered.map((product, pIdx) => renderProductCard(product, pIdx)).join('');
        
        // Restart reveal observer for new elements
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    } else {
        shopContainer.style.display = 'block';
        resultsContainer.style.display = 'none';
        
        shopContainer.innerHTML = shopData.map((cat, catIdx) => `
            <section id="${cat.id}" class="section-py shop-section">
                <div class="container">
                    <div class="shop-header reveal">
                        <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                            <div>
                                <h2 class="heading-lg parallax-title"><span>${cat.category}</span></h2>
                                <p style="color: rgba(255,255,255,0.5); margin-top: 0.5rem;">Explore the latest in ${cat.category.toLowerCase()}.</p>
                            </div>
                            <button class="btn btn-secondary btn-sm" style="margin-bottom: 0.5rem;">View All</button>
                        </div>
                    </div>
                    <div class="product-scroller reveal">
                        <div class="product-grid horizontal">
                            ${cat.products.map((product, pIdx) => renderProductCard(product, pIdx)).join('')}
                        </div>
                    </div>
                </div>
            </section>
        `).join('');
    }
}

function renderProductCard(product, pIdx) {
    const isOutOfStock = product.stock <= 0;
    return `
        <div class="p-card glass reveal stagger-${(pIdx % 4) + 1}">
            <div class="p-img">
                <img src="${product.img}" alt="${product.name}" loading="lazy">
                <div class="p-overlay">
                    <button class="btn btn-secondary btn-sm" onclick="alert('Quick View: ${product.name}')">Quick View</button>
                </div>
                ${isOutOfStock ? '<div class="stock-badge oos">Out of Stock</div>' : ''}
                ${product.featured ? '<div class="stock-badge featured">Featured</div>' : ''}
            </div>
            <div class="p-info">
                <h3 class="p-name">${product.name}</h3>
                <p class="p-desc">${product.desc}</p>
                <div class="p-footer">
                    <span class="p-price">$${product.price.toLocaleString()}</span>
                    <button class="btn btn-primary btn-sm" 
                            ${isOutOfStock ? 'disabled' : ''} 
                            onclick="addToCart('${product.name}')">
                        ${isOutOfStock ? 'Sold Out' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Intersection Observer for Reveal Animations
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

// Scroll Handling for Navbar and Progress
function handleScroll() {
    // Progress Bar
    const scrollProgress = document.getElementById('scrollProgress');
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollProgress) scrollProgress.style.width = scrolled + "%";

    // Navbar
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Hero Parallax Effect
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
    window.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        heroVisual.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
}

// Testimonial Carousel Logic
const testimonialTrack = document.getElementById('testimonialTrack');
if (testimonialTrack) {
    let index = 0;
    const cards = testimonialTrack.querySelectorAll('.test-card');
    const total = cards.length;
    
    function slide() {
        const itemsPerView = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
        const maxIndex = total - itemsPerView;
        
        index++;
        if (index > maxIndex) index = 0;
        
        const gap = 32; // 2rem
        const cardWidth = cards[0].offsetWidth;
        const offset = index * (cardWidth + gap);
        
        testimonialTrack.style.transform = `translateX(-${offset}px)`;
    }
    
    let interval = setInterval(slide, 5000);
    
    testimonialTrack.addEventListener('mouseenter', () => clearInterval(interval));
    testimonialTrack.addEventListener('mouseleave', () => interval = setInterval(slide, 5000));
    
    // Recalculate on resize
    window.addEventListener('resize', () => {
        index = 0;
        testimonialTrack.style.transform = `translateX(0)`;
    });
}

// Custom Cursor Follower
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Dot follows instantly
        dotX = mouseX;
        dotY = mouseY;
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;

        // Outline follows with lag (lerp)
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.2;
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    document.querySelectorAll('a, button, .cat-card, .p-card').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

// Magnetic Buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px) scale(1.05)`;
    });

    btn.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Section Parallax Titles
window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax-title span').forEach(el => {
        const speed = 0.15;
        const rect = el.parentElement.getBoundingClientRect();
        const offset = (window.innerHeight / 2 - rect.top) * speed;
        el.style.transform = `translateY(${offset}px)`;
    });
});

// Newsletter Success Simulation
const nForm = document.querySelector('.n-form');
if (nForm) {
    nForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newsletter = nForm.closest('.newsletter');
        const btn = nForm.querySelector('button');
        const input = nForm.querySelector('input');
        
        btn.textContent = "Verified ✓";
        newsletter.classList.add('success');
        input.value = "";
        
        setTimeout(() => {
            btn.textContent = "Join Now";
            newsletter.classList.remove('success');
        }, 3000);
    });
}

// Event Listeners
window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('DOMContentLoaded', () => {
    initShop();
    handleScroll();
    
    // Start observing reveal elements
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});

// Button Ripple Effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });
});
