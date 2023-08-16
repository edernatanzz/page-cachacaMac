
        
    
        const products = [
            {
                title: 'Série Ouro – Prime',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '750 ml – 38% Vol.',
                price: 124.99,
                image: 'imgs/serie ouro prime.PNG',
                description: 'Caixa com 6 unidades – R$540,00.',
                whatsappLink: 'https://wa.me/seu-numero-de-telefone?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%201!'
            },
            {
                title: 'Série Ouro – Prime',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '750 ml – 38% Vol.',
                price: 124.99,
                image: 'imgs/serie ouro prime.PNG',
                description: 'Caixa com 6 unidades – R$540,00.',
                whatsappLink: 'https://wa.me/seu-numero-de-telefone?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%201!'
            },

            {
                title: 'Série Ouro – Prime',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '750 ml – 38% Vol.',
                price: 124.99,
                image: 'imgs/serie ouro prime.PNG',
                description: 'Caixa com 6 unidades – R$540,00.',
                whatsappLink: 'https://wa.me/seu-numero-de-telefone?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%201!'
            },
            {
                title: 'Série Ouro – Prime',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '750 ml – 38% Vol.',
                price: 124.99,
                image: 'imgs/serie ouro prime.PNG',
                description: 'Caixa com 6 unidades – R$540,00.',
                whatsappLink: 'https://wa.me/seu-numero-de-telefone?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%201!'
            },
            {
                title: 'Série Ouro – Prime',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '750 ml – 38% Vol.',
                price: 124.99,
                image: 'imgs/serie ouro prime.PNG',
                description: 'Caixa com 6 unidades – R$540,00.',
                whatsappLink: 'https://wa.me/seu-numero-de-telefone?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%201!'
            },
            {
                title: 'Série Ouro – Prime',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '750 ml – 38% Vol.',
                price: 124.99,
                image: 'imgs/serie ouro prime.PNG',
                description: 'Caixa com 6 unidades – R$540,00.',
                whatsappLink: 'https://wa.me/seu-numero-de-telefone?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%201!'
            },

            
            // Adicione mais produtos conforme necessário
        ];
        
        const productsList = document.getElementById('products-list');
        
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            
            const productImageContainer = document.createElement('div');
            productImageContainer.classList.add('product-image-container');
            
            const productImage = document.createElement('img');
            productImage.src = product.image;
            
            const productImageSubtitle = document.createElement('div');
            productImageSubtitle.classList.add('product-image-subtitle');
            productImageSubtitle.textContent = product.imageSubtitle;
            
            productImageContainer.appendChild(productImage);
            productImageContainer.appendChild(productImageSubtitle);
            
            const productTitle = document.createElement('div');
            productTitle.classList.add('product-title');
            productTitle.textContent = product.title;
            
            const productSubtitle = document.createElement('div');
            productSubtitle.classList.add('product-subtitle');
            productSubtitle.textContent = product.subtitle;
            
            const productPrice = document.createElement('div');
            productPrice.classList.add('product-price');
            productPrice.textContent = `R$ ${product.price.toFixed(2)}`;
            
            const productDescription = document.createElement('div');
            productDescription.classList.add('product-description');
            productDescription.textContent = product.description;
            
            const buyButton = document.createElement('a');
            buyButton.classList.add('buy-button');
            buyButton.href = product.whatsappLink;
            buyButton.textContent = 'Comprar no WhatsApp';
            
            productDiv.appendChild(productImageContainer);
            productDiv.appendChild(productTitle);
            productDiv.appendChild(productSubtitle);
            productDiv.appendChild(productPrice);
            productDiv.appendChild(productDescription);
            productDiv.appendChild(buyButton);
            
            productsList.appendChild(productDiv);
        });
        
/* nav bar */

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});