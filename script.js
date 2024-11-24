// Function to create and append a product card
function createProductCard(imageSrc, description, price) {
    // Create the div that will represent the card
    const card = document.createElement('div');
    card.classList.add('card');

    // Create the image element
    const img = document.createElement('img');
    img.setAttribute('src', imageSrc);
    img.setAttribute('alt', description);  // Set alt attribute for image
    card.appendChild(img);

    // Create the paragraph element for the product description
    const p = document.createElement('p');
    p.textContent = description;
    card.appendChild(p);

    // Create the span element for the price
    const span = document.createElement('span');
    span.textContent = `$${price}`;
    card.appendChild(span);

    // Append the card to the document's product container
    document.getElementById('product-container').appendChild(card);
}

// Example usage: Adding a product card to the page
createProductCard('https://via.placeholder.com/150', 'Product Name', 99.99);
createProductCard('https://via.placeholder.com/150', 'Another Product', 49.99);
createProductCard('https://via.placeholder.com/150', 'Yet Another Product', 29.99);
