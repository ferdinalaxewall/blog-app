let dataArticle = [
    {
        "id" : 03112022001,
        "title" : "Perulangan menggunakan Pemrograman Python",
        "date" : "Kamis, 03 November 2022",
        "image" : "loop-img.jpg",
        "content" : [
            {
                "title" : "Pengertian Perulangan Dalam Python",
                "description" : [
                    "Dalam bahasa pemrograman Python ini sendiri dikenal adanya dua jenis perulangan yang dapat digunakan yaitu for loops dan while loops."
                ]
            },
            {
                "title" : "Perulangan Menggunakan For",
                "description" : [
                    "Jika sudah tau berapa kali perulangan akan dilakukan maka sebaiknya gunakanlah for loops. Hal ini dikarenakan pada for loops ini dikenal adanya penggunaan batas bawah (start) dan batas atas (stop) yang dijadikan sebagai acuan berapa kali perulangan akan dilakukan. Sebaliknya jika kamu kurang yakin berapa kali perulangan akan dilakukan maka sebaiknya gunakanlah while loops karena pada perulangan yang satu ini perulangannya akan terus dieksekusi selama kondisi yang menjadi acuan berapa kali perulangan ini akan dilakukan terpenuhi."
                ]
            },
            {
                "title" : "Fungsi Range",
                "description" : [
                    "for loops dengan satu acuan dituliskan seperti berikut ini: for i in range", 
                    "Nantinya perulangan akan dilakukan sebanyak acuan start yang mana indeksnya akan dimulai dari indeks (angka) ke 0 hingga indeks ke stop - 1.",
                    "Perulangan dengan satu buah acuan  akan dilakukan sebanyak acuan tersebut yang mana indeks awal dimulainya perulangan tersebut akan dimulai dari 0 hingga indeks start - 1. Dari contoh di atas perulangan akan dilakukan sebanyak 5 kali (stop) dan karena dimulai dari 0 maka akan menghasilkan output 0, 1, 2, 3, dan 4.",
                    "for loops dengan dua buah acuan dituliskan seperti berikut ini: for i in range (start, stop):",
                    "Nantinya perulangan akan dimulai dari indeks start (bukan dimulai dari 0 lagi) hingga indeks ke stop - 1.",
                    "Sehingga pada perulangannya kita menggunakan angka 5 sebagai start dan angka 11 sebagai stop. kenapa menggunakan angka 11 sebagai stopnya padahal angka yang kita cetak adalah angka 5 - 10?",
                    "pada perulangan for loops ini proses yang dilakukan hanya sampai stop - 1 bukan sampai stopnya (dalam hal ini perulangan hanya dilakukan sampai 10 (stop - 1) bukan 11).",
                    "for i in range (start, stop, step):",
                    "Nantinya perulangan akan dimulai dari indeks start hingga indeks ke stop - 1 dengan catatan indeks startnya akan selalu bertambah sesuai dengan angka pada stepnya.",
                    "jika pada penggunaan dua buah acuan maka indeksnya selalu bertambah 1 maka pada penggunaan tiga buah acuan ini indeksnya akan bertambah sesuai angka stepnya sehingga dari contoh di atas akan menghasilkan output 5, 7 (5 + 2), dan 9 (7 + 2)."
                ]
            },
            {
                "title" : "Perulangan menggunakan While",
                "description" : [
                    "Pada while loops, perulangan akan dilakukan selama kondisi yang menjadi acuannya masih terpenuhi. Adapun penulisan perulangan while loops ini adalah sebagai berikut: while (kondisi):",
                    "Pada perulangan while loops ini kita sebelumnya harus mendeklarasikan sebuah variabel pembantu yang akan kita gunakan pada kondisi di atas. Disini kita dapat memanfaatkan operasi perbandingan (<, <=, >, >=, ==, !=) maupun boolean untuk mengecek apakah perulangan yang akan dilakukan masih memenuhi kondisi yang telah ditentukan."
                ]
            },
            {
                "title" : "Studi Kasus",
                "description" : [
                    "Contoh Penggunaan:",
                    "Program untuk mencetak 5 bilangan cacah pertama (0, 1, 2, 3, 4) menggunakan while loops:",
                    "Contoh loop di phyton :",
                ]
            },
        ],
    },
    {
        "id" : 03112022002,
        "title" : "Perulangan menggunakan Pemrograman Python",
        "date" : "Kamis, 03 November 2022",
        "image" : "loop-img.jpg",
        "content" : [
            {
                "title" : "Pengertian Perulangan Dalam Python",
                "description" : [
                    "Dalam bahasa pemrograman Python ini sendiri dikenal adanya dua jenis perulangan yang dapat digunakan yaitu for loops dan while loops."
                ]
            },
            {
                "title" : "Perulangan Menggunakan For",
                "description" : [
                    "Jika sudah tau berapa kali perulangan akan dilakukan maka sebaiknya gunakanlah for loops. Hal ini dikarenakan pada for loops ini dikenal adanya penggunaan batas bawah (start) dan batas atas (stop) yang dijadikan sebagai acuan berapa kali perulangan akan dilakukan. Sebaliknya jika kamu kurang yakin berapa kali perulangan akan dilakukan maka sebaiknya gunakanlah while loops karena pada perulangan yang satu ini perulangannya akan terus dieksekusi selama kondisi yang menjadi acuan berapa kali perulangan ini akan dilakukan terpenuhi."
                ]
            },
            {
                "title" : "Fungsi Range",
                "description" : [
                    "for loops dengan satu acuan dituliskan seperti berikut ini: for i in range", 
                    "Nantinya perulangan akan dilakukan sebanyak acuan start yang mana indeksnya akan dimulai dari indeks (angka) ke 0 hingga indeks ke stop - 1.",
                    "Perulangan dengan satu buah acuan  akan dilakukan sebanyak acuan tersebut yang mana indeks awal dimulainya perulangan tersebut akan dimulai dari 0 hingga indeks start - 1. Dari contoh di atas perulangan akan dilakukan sebanyak 5 kali (stop) dan karena dimulai dari 0 maka akan menghasilkan output 0, 1, 2, 3, dan 4.",
                    "for loops dengan dua buah acuan dituliskan seperti berikut ini: for i in range (start, stop):",
                    "Nantinya perulangan akan dimulai dari indeks start (bukan dimulai dari 0 lagi) hingga indeks ke stop - 1.",
                    "Sehingga pada perulangannya kita menggunakan angka 5 sebagai start dan angka 11 sebagai stop. kenapa menggunakan angka 11 sebagai stopnya padahal angka yang kita cetak adalah angka 5 - 10?",
                    "pada perulangan for loops ini proses yang dilakukan hanya sampai stop - 1 bukan sampai stopnya (dalam hal ini perulangan hanya dilakukan sampai 10 (stop - 1) bukan 11).",
                    "for i in range (start, stop, step):",
                    "Nantinya perulangan akan dimulai dari indeks start hingga indeks ke stop - 1 dengan catatan indeks startnya akan selalu bertambah sesuai dengan angka pada stepnya.",
                    "jika pada penggunaan dua buah acuan maka indeksnya selalu bertambah 1 maka pada penggunaan tiga buah acuan ini indeksnya akan bertambah sesuai angka stepnya sehingga dari contoh di atas akan menghasilkan output 5, 7 (5 + 2), dan 9 (7 + 2)."
                ]
            },
            {
                "title" : "Perulangan menggunakan While",
                "description" : [
                    "Pada while loops, perulangan akan dilakukan selama kondisi yang menjadi acuannya masih terpenuhi. Adapun penulisan perulangan while loops ini adalah sebagai berikut: while (kondisi):",
                    "Pada perulangan while loops ini kita sebelumnya harus mendeklarasikan sebuah variabel pembantu yang akan kita gunakan pada kondisi di atas. Disini kita dapat memanfaatkan operasi perbandingan (<, <=, >, >=, ==, !=) maupun boolean untuk mengecek apakah perulangan yang akan dilakukan masih memenuhi kondisi yang telah ditentukan."
                ]
            },
            {
                "title" : "Studi Kasus",
                "description" : [
                    "Contoh Penggunaan:",
                    "Program untuk mencetak 5 bilangan cacah pertama (0, 1, 2, 3, 4) menggunakan while loops:",
                    "Contoh loop di phyton :",
                ]
            },
        ],
    }
];

function getAllArticle(){
    return dataArticle;
}

function getArticleById(id){
    const dataArticleByid = dataArticle.filter(article => article.id !== id)

    return dataArticleByid;
}
