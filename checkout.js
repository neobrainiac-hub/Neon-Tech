// Neon Tech Checkout Logic

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('neon_cart')) || [];
    const orderItemsList = document.getElementById('orderItems');
    const orderSubtotalEl = document.getElementById('subTotal');
    const orderShippingEl = document.getElementById('shippingFee');
    const orderTotalEl = document.getElementById('totalCost');
    const checkoutForm = document.getElementById('checkoutForm');
    const successOverlay = document.getElementById('successOverlay');

    // Promo Elements
    const promoInput = document.getElementById('promoInput');
    const promoFeedback = document.getElementById('promoFeedback');
    const discountRow = document.getElementById('discountRow');
    const orderDiscountEl = document.getElementById('orderDiscount');
    const promoLabel = document.getElementById('promoLabel');
    const shippingThresholdMsg = document.getElementById('shippingThresholdMsg');

    let currentDiscount = 0;
    let appliedPromo = null;

    const PROMO_CODES = {
        'NEON20': { type: 'percent', value: 0.2, label: '(20% OFF)' },
        'TAKEOFF100': { type: 'fixed', value: 100, label: '($100 OFF)' },
        'FREEGEAR': { type: 'percent', value: 1.0, label: '(100% OFF)' }
    };

    if (cart.length === 0) {
        window.location.href = 'index.html';
        return;
    }

    function renderOrderSummary() {
        if (!orderItemsList) return;
        
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Calculate Discount
        currentDiscount = 0;
        if (appliedPromo) {
            if (appliedPromo.type === 'percent') {
                currentDiscount = subtotal * appliedPromo.value;
            } else {
                currentDiscount = appliedPromo.value;
            }
        }

        // Shipping Rule: Free over $2000
        const shippingThreshold = 2000;
        const shippingFee = subtotal >= shippingThreshold ? 0 : 15;
        
        const total = Math.max(0, (subtotal - currentDiscount) + shippingFee);

        orderItemsList.innerHTML = cart.map(item => `
            <div class="order-product">
                <img src="${item.img}" alt="${item.name}">
                <div class="order-product-info">
                    <h5>${item.name}</h5>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <div style="font-weight: 700;">$${(item.price * item.quantity).toLocaleString()}</div>
            </div>
        `).join('');

        if (orderSubtotalEl) orderSubtotalEl.innerText = `$${subtotal.toLocaleString()}`;
        if (orderShippingEl) {
            orderShippingEl.innerText = shippingFee === 0 ? 'FREE' : `$${shippingFee}`;
            orderShippingEl.style.color = shippingFee === 0 ? '#10b981' : '';
        }
        if (orderTotalEl) orderTotalEl.innerText = `$${total.toLocaleString()}`;

        if (shippingThresholdMsg) {
            if (subtotal < shippingThreshold && subtotal > 0) {
                shippingThresholdMsg.innerText = `$${(shippingThreshold - subtotal).toLocaleString()} away from Free Shipping`;
            } else {
                shippingThresholdMsg.innerText = '';
            }
        }

        if (currentDiscount > 0) {
            if (discountRow) discountRow.style.display = 'flex';
            if (orderDiscountEl) orderDiscountEl.innerText = `-$${currentDiscount.toLocaleString()}`;
            if (promoLabel) promoLabel.innerText = appliedPromo.label;
        } else if (discountRow) {
            discountRow.style.display = 'none';
        }
    }

    window.applyPromoCode = () => {
        const code = promoInput ? promoInput.value.toUpperCase().trim() : '';
        if (PROMO_CODES[code]) {
            appliedPromo = PROMO_CODES[code];
            if (promoFeedback) promoFeedback.innerHTML = '<span style="color: #10b981;"><i class="fas fa-check"></i> Code applied successfully!</span>';
            renderOrderSummary();
        } else {
            appliedPromo = null;
            if (promoFeedback) promoFeedback.innerHTML = '<span style="color: #ef4444;"><i class="fas fa-exclamation-triangle"></i> Invalid transmission code.</span>';
            renderOrderSummary();
        }
    };

    // Payment Method Switching
    const paymentOpts = document.querySelectorAll('.payment-opt');
    const paymentAreas = document.querySelectorAll('.payment-form-area');

    paymentOpts.forEach(opt => {
        opt.addEventListener('click', () => {
            paymentOpts.forEach(o => o.classList.remove('active'));
            paymentAreas.forEach(a => a.classList.remove('active'));
            
            opt.classList.add('active');
            const method = opt.dataset.method;
            document.getElementById(`payment-${method}`).classList.add('active');
            
            // Toggle main submit button
            const submitBtn = document.getElementById('mainSubmitBtn');
            if (method === 'card') {
                submitBtn.style.display = 'block';
            } else {
                submitBtn.style.display = 'none';
            }
        });
    });

    // Handle Submission
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm()) {
                processOrder('interfacing with grid...');
            }
        });
    }

    // Handle Third Party Buttons
    document.querySelectorAll('.payment-form-area .btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const method = btn.innerText.includes('PayPal') ? 'PayPal' : 'Stripe';
            processOrder(`connecting to ${method}...`);
        });
    });

    function validateForm() {
        let isValid = true;
        const email = document.getElementById('cEmail').value;
        const phone = document.getElementById('cPhone').value;
        const cardArea = document.getElementById('payment-card');
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[\d\s-]{10,}$/;

        if (!emailRegex.test(email)) {
            showError('cEmail', 'Invalid holonet address');
            isValid = false;
        }
        if (!phoneRegex.test(phone)) {
            showError('cPhone', 'Invalid comms frequency');
            isValid = false;
        }

        if (cardArea.classList.contains('active')) {
            const cardNumInput = cardArea.querySelector('input[placeholder*="0000"]');
            const cardNum = cardNumInput ? cardNumInput.value.replace(/\s/g, '') : '';
            if (cardNum.length < 16) {
                showError(null, 'Card data packet incomplete');
                isValid = false;
            }
        }
        return isValid;
    }

    function showError(id, msg) {
        if (id) {
            const input = document.getElementById(id);
            input.style.borderColor = '#ef4444';
            input.style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.3)';
        }
        alert(`SECURITY ALERT: ${msg}`);
    }

    async function processOrder(msg) {
        const primaryBtn = document.getElementById('mainSubmitBtn');
        primaryBtn.disabled = true;
        primaryBtn.style.display = 'block';

        const finalCart = [...cart];
        const subtotal = finalCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shippingThreshold = 2000;
        const shippingFee = subtotal >= shippingThreshold ? 0 : 15;
        let discountVal = 0;
        if (appliedPromo) {
            discountVal = appliedPromo.type === 'percent' ? subtotal * appliedPromo.value : appliedPromo.value;
        }
        const total = Math.max(0, (subtotal - discountVal) + shippingFee);
        const activeMethod = document.querySelector('.payment-opt.active').dataset.method;

        const stages = [
            msg,
            'Establishing SSL Handshake...',
            'Encrypting Transaction Data...',
            'Verifying Digital Signature...',
            'Finalizing Gear Transfer...'
        ];

        for (const stage of stages) {
            primaryBtn.innerText = stage;
            await new Promise(r => setTimeout(r, 600));
        }

        const orderId = 'NT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 3);
        const dateString = deliveryDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

        // Save to Admin Orders
        const newOrder = {
            id: orderId,
            customer: {
                name: document.getElementById('cName').value,
                email: document.getElementById('cEmail').value,
                phone: document.getElementById('cPhone').value,
                address: `${document.getElementById('sAddress').value}, ${document.getElementById('sCity').value}, ${document.getElementById('sZip').value}`
            },
            items: finalCart,
            totalTotal: total,
            method: activeMethod.toUpperCase(),
            status: 'Processing',
            timestamp: new Date().toISOString()
        };

        const existingOrders = JSON.parse(localStorage.getItem('neon_orders')) || [];
        existingOrders.unshift(newOrder); 
        localStorage.setItem('neon_orders', JSON.stringify(existingOrders));

        document.getElementById('orderIdDisplay').innerText = orderId;
        document.getElementById('receiptTotal').innerText = `$${total.toLocaleString()}`;
        document.getElementById('deliveryEstimate').innerText = dateString;
        document.getElementById('paymentStatusReceipt').innerHTML = `<i class="fas fa-check-double"></i> ${activeMethod.toUpperCase()} CONFIRMED`;

        document.getElementById('receiptItems').innerHTML = finalCart.map(item => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.8rem; font-size: 0.9rem;">
                <span style="opacity: 0.7;">${item.name} (x${item.quantity})</span>
                <span style="font-weight: 700;">$${(item.price * item.quantity).toLocaleString()}</span>
            </div>
        `).join('');
        
        localStorage.removeItem('neon_cart');
        successOverlay.style.display = 'flex';
        window.scrollTo(0, 0);
    }

    // Intersection Observer for Reveal Animations
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    
    renderOrderSummary();
});
