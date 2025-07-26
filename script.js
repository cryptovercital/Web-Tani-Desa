let keranjang = [];

function tambahKeKeranjang(namaProduk, hargaProduk) {
  keranjang.push({ nama: namaProduk, harga: hargaProduk });
  renderKeranjang();
}

function renderKeranjang() {
  const daftarKeranjang = document.getElementById("daftar-keranjang");
  const totalHargaEl = document.getElementById("total-harga");
  daftarKeranjang.innerHTML = "";

  let total = 0;
  keranjang.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp${item.harga.toLocaleString()}`;
    daftarKeranjang.appendChild(li);
    total += item.harga;
  });

  totalHargaEl.textContent = total.toLocaleString();
}

// Kirim data pemesanan (hanya console.log untuk sekarang)
document.getElementById("form-pemesanan").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    nama: this.nama.value,
    email: this.email.value,
    kontak: this.kontak.value,
    alamat: this.alamat.value,
    pesanan: keranjang
  };

  console.log("Pesanan diterima:", data);
  alert("Pesanan Anda telah dikirim! Terima kasih.");
  this.reset();
  keranjang = [];
  renderKeranjang();
});
