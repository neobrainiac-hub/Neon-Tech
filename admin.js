// Neon Tech Admin Logic

// Load shared data
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
    }
];

let shopData = JSON.parse(localStorage.getItem('neon_shop_data')) || DEFAULT_SHOP_DATA;
let orders = JSON.parse(localStorage.getItem('neon_orders')) || [];

function saveState() {
    localStorage.setItem('neon_shop_data', JSON.stringify(shopData));
    localStorage.setItem('neon_orders', JSON.stringify(orders));
}

// Authentication Simulation
const loginForm = document.getElementById('loginForm');
const loginOverlay = document.getElementById('loginOverlay');
const adminMain = document.getElementById('adminMain');
const adminSidebar = document.getElementById('adminSidebar');

if (sessionStorage.getItem('admin_logged_in') === 'true') {
    showDashboard();
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'admin' && pass === 'admin') {
        sessionStorage.setItem('admin_logged_in', 'true');
        showDashboard();
    } else {
        alert('Invalid credentials');
    }
});

function showDashboard() {
    loginOverlay.style.display = 'none';
    adminMain.style.display = 'block';
    adminSidebar.style.display = 'flex';
    renderAdminProducts();
    renderAdminOrders();
    updateStats();
}

function logout() {
    sessionStorage.removeItem('admin_logged_in');
    window.location.reload();
}

// Sidebar Navigation
document.querySelectorAll('.admin-nav-item').forEach(item => {
    item.addEventListener('click', () => {
        if (!item.dataset.view) return;
        
        document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
        document.getElementById(`view-${item.dataset.view}`).style.display = 'block';
        
        if (item.dataset.view === 'orders') renderAdminOrders();
    });
});

// Product Logic
let adminSearchTerm = '';

document.getElementById('adminSearch').addEventListener('input', (e) => {
    adminSearchTerm = e.target.value.toLowerCase();
    renderAdminProducts();
});

function renderAdminProducts() {
    const table = document.getElementById('adminProductTable');
    if (!table) return;
    let html = '';

    shopData.forEach((cat, catIdx) => {
        cat.products.forEach((p, pIdx) => {
            if (adminSearchTerm && !p.name.toLowerCase().includes(adminSearchTerm)) return;
            
            html += `
                <tr>
                    <td>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <img src="${p.img}" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;">
                            <span style="font-weight: 600;">${p.name}</span>
                        </div>
                    </td>
                    <td>${cat.category}</td>
                    <td>$${p.price.toLocaleString()}</td>
                    <td>${p.stock}</td>
                    <td>
                        <span class="status-pill ${p.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                            ${p.stock > 0 ? 'ACTIVE' : 'OUT OF STOCK'}
                        </span>
                    </td>
                    <td>
                        <div style="display: flex; gap: 0.5rem;">
                            <button class="btn btn-sm" onclick="editProduct(${catIdx}, ${pIdx})"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-sm" style="color: #ef4444;" onclick="deleteProduct(${catIdx}, ${pIdx})"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        });
    });
    table.innerHTML = html;
}

// CRUD Operations
function openProductModal(catIdx = -1, pIdx = -1) {
    const modal = document.getElementById('productModal');
    const form = document.getElementById('productForm');
    const title = document.getElementById('modalTitle');

    if (catIdx !== -1) {
        title.innerText = 'Edit Product';
        const p = shopData[catIdx].products[pIdx];
        document.getElementById('pCategory').value = shopData[catIdx].id;
        document.getElementById('pName').value = p.name;
        document.getElementById('pDesc').value = p.desc;
        document.getElementById('pPrice').value = p.price;
        document.getElementById('pStock').value = p.stock;
        document.getElementById('pImg').value = p.img;
        document.getElementById('editCategoryIndex').value = catIdx;
        document.getElementById('editProductIndex').value = pIdx;
    } else {
        title.innerText = 'Add New Product';
        form.reset();
        document.getElementById('editCategoryIndex').value = -1;
    }

    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const catId = document.getElementById('pCategory').value;
    const catIdx = shopData.findIndex(c => c.id === catId);
    
    if (catIdx === -1) return;

    const product = {
        name: document.getElementById('pName').value,
        desc: document.getElementById('pDesc').value,
        price: parseFloat(document.getElementById('pPrice').value),
        stock: parseInt(document.getElementById('pStock').value),
        img: document.getElementById('pImg').value,
        featured: false
    };

    const editCatIdx = parseInt(document.getElementById('editCategoryIndex').value);
    const editPIdx = parseInt(document.getElementById('editProductIndex').value);

    if (editCatIdx !== -1) {
        // Handle move category if changed
        if (shopData[editCatIdx].id !== catId) {
            shopData[editCatIdx].products.splice(editPIdx, 1);
            shopData[catIdx].products.push(product);
        } else {
            shopData[editCatIdx].products[editPIdx] = product;
        }
    } else {
        shopData[catIdx].products.push(product);
    }

    saveState();
    renderAdminProducts();
    updateStats();
    closeProductModal();
});

window.editProduct = (catIdx, pIdx) => openProductModal(catIdx, pIdx);
window.deleteProduct = (catIdx, pIdx) => {
    if (confirm('Delete this product permanently?')) {
        shopData[catIdx].products.splice(pIdx, 1);
        saveState();
        renderAdminProducts();
        updateStats();
    }
};
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.logout = logout;

function updateStats() {
    let totalProducts = 0;
    let lowStock = 0;
    let totalRevenue = 0;
    let activeOrders = orders.filter(o => o.status !== 'Delivered').length;
    
    shopData.forEach(cat => {
        totalProducts += cat.products.length;
        cat.products.forEach(p => {
            if (p.stock < 5) lowStock++;
        });
    });

    orders.forEach(o => {
        totalRevenue += o.total;
    });

    const statProducts = document.getElementById('stat-products');
    const statStock = document.getElementById('stat-stock');
    const statRevenue = document.getElementById('stat-revenue');
    const statOrders = document.getElementById('stat-orders');
    
    if (statProducts) statProducts.innerText = totalProducts;
    if (statStock) statStock.innerText = lowStock;
    if (statRevenue) statRevenue.innerText = `$${totalRevenue.toLocaleString()}`;
    if (statOrders) statOrders.innerText = activeOrders;
}

// Order Management Logic
function renderAdminOrders() {
    const table = document.getElementById('adminOrderTable');
    if (!table) return;
    
    if (orders.length === 0) {
        table.innerHTML = '<tr><td colspan="7" style="text-align: center; opacity: 0.5; padding: 3rem;">No orders yet.</td></tr>';
        return;
    }

    table.innerHTML = orders.map((o, idx) => `
        <tr>
            <td style="font-family: monospace; color: var(--primary);">${o.id}</td>
            <td>
                <div style="font-weight: 600;">${o.customer.name}</div>
                <div style="font-size: 0.75rem; opacity: 0.5;">${o.customer.email}</div>
            </td>
            <td>
                <div style="font-size: 0.85rem;">${o.items.length} Items</div>
                <div style="font-size: 0.7rem; opacity: 0.5;">${o.items.map(i => i.name).join(', ').substring(0, 30)}...</div>
            </td>
            <td>$${o.total.toLocaleString()}</td>
            <td><span style="font-size: 0.7rem; font-weight: 800;">${o.method}</span></td>
            <td>
                <span class="status-pill status-${o.status.toLowerCase()}">${o.status.toUpperCase()}</span>
            </td>
            <td>
                <select onchange="updateOrderStatus('${o.id}', this.value)" class="admin-input" style="padding: 0.3rem; font-size: 0.75rem; width: auto;">
                    <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
                    <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                    <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                </select>
            </td>
        </tr>
    `).join('');
}

window.updateOrderStatus = (id, status) => {
    const order = orders.find(o => o.id === id);
    if (order) {
        order.status = status;
        saveState();
        updateStats();
        renderAdminOrders();
    }
};

window.clearOrders = () => {
    if (confirm('Clear all order history? This cannot be undone.')) {
        orders = [];
        saveState();
        updateStats();
        renderAdminOrders();
    }
};

// Initial stats update
updateStats();
