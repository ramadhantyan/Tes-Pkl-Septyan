// Contoh proses asinkronus dengan callback
console.log('Mulai');

// Fungsi simulasi yang memanggil callback setelah beberapa detik
function prosesAsinkron(callback) {
    setTimeout(() => {
        console.log('Tugas asinkronus selesai');
        callback();
    }, 2000);
}

// Memanggil fungsi prosesAsinkron dengan callback
prosesAsinkron(() => {
    console.log('Lanjut ke tugas berikutnya');
});

console.log('Selesai');
