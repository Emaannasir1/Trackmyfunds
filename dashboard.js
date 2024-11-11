import chartJs from "https://esm.sh/chart.js";
document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const pageTitle = document.getElementById('page-title');
    const links = document.querySelectorAll('.sidebar nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href').substr(1);
            loadContent(page);
            updatePageTitle(page);
        });
    });

    function loadContent(page) {
        if (page === 'dashboard') {
            content.innerHTML = document.getElementById('dashboard').outerHTML;
            createSpendingChart();
        } else {
            content.innerHTML = `<h2>${capitalizeFirstLetter(page)}</h2><p>This is the ${page} content.</p>`;
        }
    }

    function updatePageTitle(page) {
        pageTitle.textContent = capitalizeFirstLetter(page);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function createSpendingChart() {
        const ctx = document.getElementById('spendingChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
                datasets: [{
                    label: 'Monthly Spending',
                    data: [450, 530, 800, 695, 420, 345],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Amount ($)'
                        },
                        ticks: {
                            callback: function(value, index, values) {
                                return '$' + value;
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Month'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Monthly Spending Overview',
                        font: {
                            size: 18
                        }
                    }
                }
            }
        });
    }
  document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const pageTitle = document.getElementById('page-title');
    const links = document.querySelectorAll('.sidebar nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href').substr(1);
            loadContent(page);
            updatePageTitle(page);
        });
    });

    function loadContent(page) {
        if (page === 'dashboard') {
            content.innerHTML = document.getElementById('dashboard').outerHTML;
            createSpendingChart();
        } else {
            content.innerHTML = `<h2>${capitalizeFirstLetter(page)}</h2><p>This is the ${page} content.</p>`;
        }
    }

    function updatePageTitle(page) {
        pageTitle.textContent = capitalizeFirstLetter(page);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function createSpendingChart() {
        const ctx = document.getElementById('spendingChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
                datasets: [{
                    label: 'Monthly Spending',
                    data: [450, 530, 800, 695, 420, 345],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Amount ($)'
                        },
                        ticks: {
                            callback: function(value, index, values) {
                                return '$' + value;
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Month'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Monthly Spending Overview',
                        font: {
                            size: 18
                        }
                    }
                }
            }
        });
    }
    // Load dashboard by default
    loadContent('dashboard');
})});
