// Inisialisasi grafik menggunakan Chart.js
document.addEventListener('DOMContentLoaded', () => {
    // Grafik Aktivitas Mingguan
    const ctxActivity = document.getElementById('activityChart').getContext('2d');
    const activityChart = new Chart(ctxActivity, {
        type: 'bar',
        data: {
            labels: ['Sabtu', 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
            datasets: [
                {
                    label: 'Deposit',
                    data: [200, 100, 300, 150, 400, 200, 250],
                    backgroundColor: '#74b9ff',
                },
                {
                    label: 'Penarikan',
                    data: [100, 150, 200, 100, 250, 150, 300],
                    backgroundColor: '#ff7675',
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Aktivitas Mingguan'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Grafik Riwayat Saldo
    const ctxBalance = document.getElementById('balanceChart').getContext('2d');
    const balanceChart = new Chart(ctxBalance, {
        type: 'line',
        data: {
            labels: ['Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember', 'Januari', 'Februari'],
            datasets: [
                {
                    label: 'Saldo Deposito',
                    data: [300, 450, 400, 500, 700, 650, 800, 950],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Saldo Penarikan',
                    data: [200, 300, 250, 350, 500, 450, 600, 700],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Riwayat Saldo'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
