document.getElementById('expenseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    try {
        const response = await fetch('/api/add-expense', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 1, title, amount, category, date })
        });

        if (response.ok) {
            alert('Expense added successfully!');
        }
    } catch (error) {
        console.error('Error adding expense:', error);
    }
});
