const barangSelect = document.getElementById('barang');
  const selectedItemsContainer = document.getElementById('selected-items');
  const limitWarning = document.getElementById('limit-warning');

  let selectedItems = [];

  barangSelect.addEventListener('change', () => {
    const selected = barangSelect.value;
    if (selected && selectedItems.length < 20) {
      selectedItems.push(selected);
      renderSelectedItems();
    }

    barangSelect.value = '';

    limitWarning.style.display = selectedItems.length >= 20 ? 'block' : 'none';
  });

  function renderSelectedItems() {
    selectedItemsContainer.innerHTML = '';

    selectedItems.forEach((item, index) => {
      const tag = document.createElement('div');
      tag.className = 'item-tag';
      tag.innerHTML = `${item} <span class="remove-item" data-index="${index}">&times;</span>`;
      selectedItemsContainer.appendChild(tag);
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        selectedItems.splice(index, 1);
        renderSelectedItems();
        limitWarning.style.display = 'none';
      });
    });
  }

limitWarning.textContent = "Maksimal 20 item ya!";
limitWarning.style.display = selectedItems.length >= 20 ? 'block' : 'none';
