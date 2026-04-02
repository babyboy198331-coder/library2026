function renderBooks(filter) {
    const booksWrapper = document.querySelector('.books');
    const books = getBooks();

    if (filter === "Low_To_high") {
        books.sort((a, b) => a.originalPrice - b.originalPrice);
    } else if (filter === "HIGH_TO_LOW") {
        books.sort((a, b) => b.originalPrice - a.originalPrice);
    } else if (filter === "RATING") {
        books.sort((a, b) => b.rating - a.rating);
    }

    const booksHtml = books.map(book => {
        return `<div class="book">
              <figure class="book__img--wrapper">
                <img class="book__img" src="${book.url}" alt="">
              </figure>
             <div class="book__title">
            ${book.title}
        </div>
        <div class="book__ratings">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="book__price">
            <span class="book__price--normal">$${book.originalPrice.toFixed(2)}</span> $${book.salePrice.toFixed(2)}
        </div>
        </div>`;
    }).join("");

    booksWrapper.innerHTML = booksHtml;
}

function filterBooks(event) {
    renderBooks(event.target.value);
}

setTimeout(() => {
    renderBooks();
});

