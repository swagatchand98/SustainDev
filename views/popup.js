document.addEventListener("DOMContentLoaded", () => {
    const openWalletBtn = document.getElementById("openWalletBtn");
    const walletPopup = document.getElementById("walletPopup");
    const closeBtn = document.querySelector(".closeBtn");
    const totalAmountEl = document.getElementById("totalAmount");
    const paymentHistoryEl = document.getElementById("paymentHistory");

    // Mock data
    const walletData = {
        totalAmount: 120.50,
        paymentHistory: [
            { date: "2024-08-01", amount: 50 },
            { date: "2024-08-15", amount: 30 },
            { date: "2024-09-01", amount: 40.50 }
        ]
    };

    // Function to update wallet popup with data
    function updateWalletPopup() {
        totalAmountEl.textContent = walletData.totalAmount.toFixed(2);

        // Clear previous payment history
        paymentHistoryEl.innerHTML = '';

        // Add new payment history items
        walletData.paymentHistory.forEach(payment => {
            const listItem = document.createElement("li");
            listItem.textContent = `Date: ${payment.date}, Amount: $${payment.amount.toFixed(2)}`;
            paymentHistoryEl.appendChild(listItem);
        });
    }

    // Open the wallet popup
    openWalletBtn.addEventListener("click", () => {
        updateWalletPopup();
        walletPopup.style.display = "flex";
    });

    // Close the wallet popup
    closeBtn.addEventListener("click", () => {
        walletPopup.style.display = "none";
    });

    // Close the popup if clicked outside of it
    window.addEventListener("click", (event) => {
        if (event.target === walletPopup) {
            walletPopup.style.display = "none";
        }
    });
});


