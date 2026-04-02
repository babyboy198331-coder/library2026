function renderBooks() {
    const booksWrapper = document.querySelector('.books');
    

    const books = getBooks();

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
            <span class="book__price--normal">$${book.originalPrice}</span> $${book.salePrice}
        </div>
        </div>`;
    })

    booksWrapper.innerHTML = booksHtml;
}
setTimeout(() => {
    renderBooks();
});

