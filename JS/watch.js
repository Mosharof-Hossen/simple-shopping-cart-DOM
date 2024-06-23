document.getElementById('apply-discount').addEventListener('click', () => {
    const promoCode = document.getElementById('promo-code').value;

    if (promoCode === "dom") {
        const originalPrice = parseFloat(document.getElementById('orginal-price').innerText);
        const discountPrice = originalPrice - (originalPrice * (30 / 100));
        document.getElementById('with-discount').innerText = discountPrice;
    }else{
        alert("This coupon has expired or has already been applied to your account(s). Coupon code is not available. Please enter a valid promotion code.")
    }

    
})