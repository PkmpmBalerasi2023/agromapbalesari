function hitungTanggalPanen() {
    var tanggalMulai = new Date(document.getElementById("tanggalMulai").value);
    var sayur = document.getElementById("sayur").value;

    if (!isNaN(tanggalMulai.getTime()) && sayur !== "none") {
        var waktuPanen = 0;

        if (sayur === "sawi" || sayur === "kangkung") {
            waktuPanen = 45;
        } else if (sayur === "selada") {
            waktuPanen = 50;
        }

        var tanggalPanen = new Date(tanggalMulai);
        tanggalPanen.setDate(tanggalPanen.getDate() + waktuPanen);

        var tanggal = tanggalPanen.getDate();
        var bulan = tanggalPanen.getMonth() + 1;
        var tahun = tanggalPanen.getFullYear();

        document.getElementById("hasilPanen").innerHTML = "Tanggal Panen: " + tanggal + "/" + bulan + "/" + tahun;
    } else {
        document.getElementById("hasilPanen").innerHTML = "Masukkan tanggal mulai dan pilih jenis sayuran.";
    }
}
