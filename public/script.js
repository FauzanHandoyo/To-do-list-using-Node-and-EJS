document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.querySelector('.delete-button');
    const itemList = document.querySelector('.custom-checklist');

    // Function to remove checked items
    const removeCheckedItems = () => {
        const selectedCheckboxes = document.querySelectorAll('.custom-checklist input[type=checkbox]:checked');

        selectedCheckboxes.forEach((checkbox) => {
            // Remove the item from the list and the DOM
            const listItem = checkbox.parentElement;
            itemList.removeChild(listItem);
        });
    };

    deleteButton.addEventListener('click', () => {
        removeCheckedItems();
    });

    // Handle form submission to add new items
    const addItemForm = document.querySelector('.item');
    addItemForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newItemText = addItemForm.querySelector('input[name="ItemAdded"]').value;

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox">
            <label>${newItemText}</label>
        `;

        // Insert the new list item at the top of the list
        if (itemList.firstChild) {
            itemList.insertBefore(listItem, itemList.firstChild);
        } else {
            itemList.appendChild(listItem);
        }

        // Clear the input field
        addItemForm.querySelector('input[name="ItemAdded"]').value = '';
        
        const checkbox = listItem.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                listItem.classList.add('checked');
            } else {
                listItem.classList.remove('checked');
            }
        });
    });
});

