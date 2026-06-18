const jangan = {
    direncana: () => ({
    efekSamping: "Gravitasi kasur meningkat",
    status: "Gagal move on"
    })
};

const mager = jangan.direncana();
console.log(mager);

// Output:
// {
//     efekSamping: "Gravitasi kasur meningkat",
//     status: "Gagal move on" 
// }

// Logika dan Kondisional
console.log(hitungTotalBayar(120000)); // Output: 108000 (karena diskon 12.000)
console.log(hitungTotalBayar(50000)); // Output: 50000 (tidak dapat diskon)

function hitungTotalBayar(harga) {
    if (harga > 100000) {
        return harga * 0.9; // Diskon 10%
    } else {
        return harga; // Tidak ada diskon
    }
}


// Array dan Perulangan

let nilaiUjian = [80, 85, 90, 75];
console.log(hitungRataRata(nilaiUjian)); // Output: 82.5

function hitungRataRata(nilai) {
    let total = 0;
    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i];
    }
    return total / nilai.length;
}

// Manipulasi Object dan .map()

const produkToko = [
    { nama: "Cushion", harga: 150000 },
    { nama: "Lipstick", harga: 100000 },
    { nama: "Foundation", harga: 200000 }
];
const hargaDiskon = produkToko.map(produk => {
    return {
        nama: produk.nama,
        harga: produk.harga * 0.9 // Diskon 10%
    };
});
console.log(hargaDiskon);

// Output:
// [
//     { nama: "Cushion", harga: 135000 },
//     { nama: "Lipstick", harga: 90000 },
//     { nama: "Foundation", harga: 180000 }
// ]


