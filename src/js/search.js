document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const filterSelect = document.querySelector(".filter");
    const sortSelect = document.querySelector(".sort");
    const productsContainer = document.querySelector(".main-content");
    const noResults = document.querySelector(".no-results");
    
    // Pobieramy wszystkie produkty raz na starcie
    const allProducts = Array.from(document.querySelectorAll(".product"));
  
    function updateProducts() {
      const searchTerm = searchInput.value.toLowerCase();
      const selectedFilter = filterSelect.value;
      const selectedSort = sortSelect.value;
  
      // Filtrujemy produkty według wpisanej frazy i kategorii
      let visibleProducts = allProducts.filter(product => {
        const name = product.dataset.name.toLowerCase();
        const composition = product.dataset.composition.toLowerCase();
        const category = product.dataset.category;
        const matchesSearch = name.includes(searchTerm) || composition.includes(searchTerm);
        const matchesFilter = selectedFilter ? (category === selectedFilter) : true;
        return matchesSearch && matchesFilter;
      });
  
      // Sortowanie produktów według ceny, jeśli wybrano sortowanie
      if (selectedSort === "asc" || selectedSort === "desc") {
        visibleProducts.sort((a, b) => {
          const priceA = parseFloat(a.querySelector(".price").textContent.replace(" zł", "").replace(",", "."));
          const priceB = parseFloat(b.querySelector(".price").textContent.replace(" zł", "").replace(",", "."));
          return selectedSort === "asc" ? priceA - priceB : priceB - priceA;
        });
      }
  
      // Usuwamy z kontenera tylko elementy produktów
      const currentProducts = productsContainer.querySelectorAll(".product");
      currentProducts.forEach(prod => prod.remove());
  
      // Jeśli są produkty spełniające kryteria, dodajemy je do kontenera
      if (visibleProducts.length > 0) {
        visibleProducts.forEach(product => productsContainer.appendChild(product));
        // Ukrywamy komunikat "Brak wyników" (jeśli był wcześniej dodany)
        noResults.style.display = "none";
      } else {
        // Jeśli nie ma widocznych produktów, upewnij się, że komunikat "Brak wyników" jest w kontenerze i widoczny
        if (!productsContainer.contains(noResults)) {
          productsContainer.appendChild(noResults);
        }
        noResults.style.display = "block";
      }
    }
  
    searchInput.addEventListener("input", updateProducts);
    filterSelect.addEventListener("change", updateProducts);
    sortSelect.addEventListener("change", updateProducts);
  });
  