// Fungsi Pencarian Buku
function searchBooks() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const books = document.querySelectorAll('#bookList li');

    books.forEach(book => {
        const text = book.textContent.toLowerCase();
        book.style.display = text.includes(searchInput) ? '' : 'none';
    });
}

// Formulir Pendaftaran
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Pendaftaran berhasil!');
});

// Tambahan untuk fungsionalitas JavaScript
console.log("Website Perpustakaan Siap Digunakan!");