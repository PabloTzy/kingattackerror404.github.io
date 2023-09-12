    // Fungsi untuk mengarahkan ke halaman yang sesuai berdasarkan status situs
    function redirectToPage() {
        const siteStatus = localStorage.getItem('siteStatus'); // Baca status dari localStorage
        if (siteStatus === 'maintenance') {
            window.location.href = 'maintenance.html';
        } else if (siteStatus === 'under_attack_v1') {
            window.location.href = '502.html'; // Arahkan ke 502.html
        } else if (siteStatus === 'under_attack_v2') {
            window.location.href = 'v2.html'; // Arahkan ke v2.html
        } else {
            window.location.href = 'main.html'; // Arahkan ke main.html (normal)
        }
    }

    // Panggil fungsi pengalihan saat halaman dimuat
    redirectToPage();

    // Variabel untuk menyimpan status sebelumnya
    let currentStatus = localStorage.getItem('siteStatus');

    // Fungsi untuk memeriksa perubahan status dan melakukan refresh saat diperlukan
    function checkAndRefreshStatus() {
        const newStatus = localStorage.getItem('siteStatus'); // Ambil status baru
        if (newStatus !== currentStatus) {
            location.reload(); // Lakukan refresh jika terjadi perubahan status
        }
    }

    // Panggil fungsi pemantauan perubahan status secara berulang
    setInterval(checkAndRefreshStatus, 1000); // Periksa setiap 1 detik
