document.addEventListener("DOMContentLoaded", () => {
    const expenseBtn = document.getElementById("expenseBtn");
    const incomeBtn = document.getElementById("incomeBtn");
  
    expenseBtn.addEventListener("click", () => {
      expenseBtn.classList.add("active");
      incomeBtn.classList.remove("active");
    });
  
    incomeBtn.addEventListener("click", () => {
      incomeBtn.classList.add("active");
      expenseBtn.classList.remove("active");
    });
  
    document.getElementById("cashTransactionForm").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Transaction submitted!");
      // Add form submission logic here
    });
  });
  