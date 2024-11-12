document.getElementById('jemtarForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Nomor WhatsApp driver (ganti dengan nomor yang sebenarnya)
    // Pastikan format: 62 + nomor tanpa awalan 0
    const nomorDriver = '6289652198683'; // Contoh: jika nomor 081234567890
    
    // Mengambil data dari form
    const nama = document.getElementById('nama').value;
    const alamatJemput = document.getElementById('alamatJemput').value;
    const alamatAntar = document.getElementById('alamatAntar').value;
    
    // Menyiapkan pesan
    const pesan = `Halo Driver, saya ${nama} ingin memesan Jemtar dengan detail:\n\nAlamat Jemput: ${alamatJemput}\nAlamat Antar: ${alamatAntar}`;
    
    // Membuat URL WhatsApp dengan format yang benar
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${nomorDriver}&text=${encodeURIComponent(pesan)}`;
    window.open(whatsappUrl, '_blank');
});