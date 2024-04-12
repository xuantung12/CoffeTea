let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); // Chuyển đổi ảnh mỗi 2 giây
}




document.addEventListener("DOMContentLoaded", function() {
    var cartLink = document.getElementById("cart-link");
    var cartContainer = document.querySelector(".cart-container");
    var closeCartBtn = document.getElementById("close-cart");
    var totalPriceDiv = document.getElementById("total-price");
    var totalPrice = 0;

    cartLink.addEventListener("click", function() {
        cartContainer.classList.toggle("open");
    });

    closeCartBtn.addEventListener("click", function() {
        cartContainer.classList.remove("open");
    });

    var cartIcons = document.querySelectorAll(".Cloudfee .price a");

    cartIcons.forEach(function(icon) {
        icon.addEventListener("click", function(e) {
            e.preventDefault();

            var productContainer = icon.closest(".Cloudfee");
            var productName = productContainer.querySelector(".des span").textContent;
            var productPrice = parseFloat(productContainer.querySelector(".price span").textContent.replace("đ", "").replace(",", ""));

            // Create cart item
            var cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${productName}</p>
                <p>${productPrice},000đ</p>
                <button class="remove-item">Xóa</button>
            `;

            // Append cart item to cart content
            var cartContent = document.querySelector('.cart-content');
            cartContent.appendChild(cartItem);

            totalPrice += productPrice;
            totalPriceDiv.innerText = `Tổng tiền: ${totalPrice},000đ`;

            // Add event listener for remove item button
            var removeItemBtn = cartItem.querySelector('.remove-item');
            removeItemBtn.addEventListener('click', function() {
                cartItem.remove();
                totalPrice -= productPrice;
                totalPriceDiv.innerText = `Tổng tiền: ${totalPrice},000đ`;
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.slide1');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Chuyển đổi sau mỗi 3 giây
    }
});



