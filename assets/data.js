let dataArticle = [
    {
        "id" : "03112022001",
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
                    "link=>https://wtools.io/code/embed-iframe/bG9h",
                    "Maka output yang dihasilkan seperti ini :",
                    "image=>loop-terminal.png"
                ]
            },
        ],
    },
    {
        "id" : "03112022002",
        "title" : "Percabangan dalam Pemrograman Python",
        "date" : "Kamis, 03 November 2022",
        "image" : "branching-img.jpg",
        "content" : [
            {
                "title" : "Pengertian Percabangan Dalam Python",
                "description" : [
                    "If-else digunakan untuk menentukan pilihan dari suatu kondisi yang diberikan, cara kerjanya adalah melakukan perbandingan menggunakan Relational operator dan atau Logical operator.",
                    "Ada juga Statement if-else bersarang merupakan kombinasi dari beberapa If-else dimana ada beberapa kondisi yang diuji kebenarannya ( if didalam if).",
                    "Statement else-if untuk menentukan satu kondisi benar dari beberapa kondisi yang tersedia, dan untuk switch-case adalah bentuk lain dari else-if dengan mendaftar kondisi secara vertikal dalam satu kolom sehingga memudahkan dalam hal evaluasi program.",
                    "image=>branching-table.PNG",
                ]
            },
            {
                "title" : "Pernyataan IF",
                "description" : [
                    "Pernyataan if menguji satu buah kondisi. Bila hasilnya benar maka pernyataan di dalam blok if tersebut dieksekusi. Bila salah, maka pernyataan tidak dieksekusi. Sintaksnya adalah seperti berikut:",
                    "syntax=>if tes kondisi:",
                    "syntax=>&nbsp;&nbsp;blok pernyataan if",
                ]
            },
            {
                "title" : "Pernyataan IF ELSE",
                "description" : [
                    "Pengambilan keputusan (kondisi if elif) merupakan lanjutan/percabangan logika dari “kondisi if”. Dengan elif kita bisa membuat kode program yang akan menyeleksi beberapa kemungkinan yang bisa terjadi. Hampir sama dengan kondisi “else”, bedanya kondisi “elif” bisa banyak dan tidak hanya satu. Sintak nya adalah sebagai berikut:",
                    "syntax=>if tes kondisi: ",
                    "syntax=>&nbsp;&nbsp;blok pernyataan if",
                    "syntax=>elif tes kondisi:  ",
                    "syntax=>&nbsp;&nbsp;blok pernyataan elif ",
                    "syntax=>else:  ",
                    "syntax=>&nbsp;&nbsp;blok pernyataan else ",
                ]
            },
            {
                "title" : "Studi Kasus",
                "description" : [
                    "Tahun kabisat atau yang disebut dengan Leap year adalah tahun yang mengalami penambahan satu hari dengan tujuan untuk menyesuaikan penanggalan dengan tahun astronomi.",
                    "Dalam satu tahun tidak secara persis terdiri dari 365 hari, tetapi 365 hari 5 jam 48 menit 45,1814 detik. Jika hal ini tidak dihiraukan, maka setiap 4 tahun akan kekurangan hampir 1 hari (tepatnya 23 jam 15 menit 0,7256 detik).",
                    "Maka untuk mengkompensasi hal ini, setiap 4 tahun sekali (tahun yang bisa dibagi 4), diberi 1 hari ekstra: 29 Februari. Tetapi karena 5 jam 48 menit 45,1814 detik kurang dari 6 jam, maka tahun-tahun yang bisa dibagi 100 (seperti tahun 1900), bukan tahun kabisat, kecuali bisa dibagi dengan 400 (seperti tahun 2000)",
                    "Algoritma dalam tahun kabisat ini cukup mudah dimana :",
                    "-- Jika tahun modulus 4 sama dengan 0 dan tahun modulus 100 tidak sama dengan 0 atau",
                    "-- Tahun modulus 400 sama dengan 0",
                    "-- Maka tahun tersebut merupakan tahun kabisat",
                    "link=>https://wtools.io/code/embed-iframe/bG97",
                    "Maka output yang dihasilkan seperti ini :",
                    "image=>branching-terminal.png",
                    "Untuk penjelasan program diatas :",
                    "-- Pertama kita masukkan tahun yang akan kita hitung dengan peintahtahun = int(input())",
                    "-- Kemudian kita cek apakah tahun yang kita input di modulus 4 hasilnya 0 dan tahun di modulus 100 hasilnya tidak sama dengan 0 atau tahun di modulus 400 sama dengan 0 dengan perintah if( (tahun%4==0 and tahun%100!=0) or (tahun % 400 == 0)): ",
                    "-- Kemudian kita akan cetak hasilnya apakah tahun yang kita masukkan merupakan tahun kabisat atau bukan.",
                ]
            },
        ],
    },
    {
        "id" : "03112022003",
        "title" : "Aritmatika dalam Pemrograman Python",
        "date" : "Kamis, 03 November 2022",
        "image" : "arithmetic-img.jpg",
        "content" : [
            {
                "title" : "Operator Aritmatika",
                "description" : [
                    "Operator aritmatika adalah operator yang digunakan untuk melakukan operasi matematika, seperti penjumlahan, pengurangan, perkalian, pembagian, dan sebagainya. Tabel berikut menunjukkan jenis operator aritmatika",
                    "image=>arithmetic-table.PNG",
                ]
            },
            {
                "title" : "Studi Kasus",
                "description" : [
                    "Contoh penggunaan Operator Aritmatika dalam Python, membuat sebuah program untuk menghitung luas sebuah tabung",
                    "link=>https://wtools.io/code/embed-iframe/bG99",
                    "Maka output yang dihasilkan seperti ini :",
                    "image=>arithmetic-terminal.png"
                ]
            },
        ],
    },
    {
        "id" : "03112022004",
        "title" : "Library Pandas dalam Pemrograman Python",
        "date" : "Kamis, 03 November 2022",
        "image" : "pandas-img.png",
        "content" : [
            {
                "title" : "Pengertian Pandas",
                "description" : [
                    "Pandas adalah sebuah library di Python yang berlisensi BSD dan open source yang menyediakan struktur data dan analisis data yang mudah digunakan. Pandas biasa digunakan untuk membuat tabel, mengubah dimensi data, mengecek data, dan lain sebagainya. Struktur data dasar pada Pandas dinamakan DataFrame, yang memudahkan kita untuk membaca sebuah file dengan banyak jenis format seperti file .txt, .csv, dan .tsv. Fitur ini akan menjadikannya table dan juga dapat mengolah suatu data dengan menggunakan operasi seperti join, distinct, group by, agregasi, dan teknik lainnya yang terdapat pada SQL. ",
                    "Library Pandas memiliki dua tipe struktur data untuk versi terbaru yaitu Series dan Data Frame serta satu deprecated struktur data yaitu Panel (deprecated). Series diibaratkan sebagai array satu dimensi sama halnya dengan numpy array, hanya bedanya mempunyai index dan kita dapat mengontrol index dari setiap elemen tersebut. Sedangkan data frame merupakan array dua dimensi dengan baris dan kolom. Struktur data ini merupakan cara paling standar untuk menyimpan data dalam bentuk tabel/data tabular. Dapat disimpulkan, bahwa Pandas merupakan library analisis data yang diperlukan untuk membersihkan data mentah ke dalam sebuah bentuk yang bisa untuk diolah.",
                ]
            },
            {
                "title" : "Menginstall Pandas",
                "description" : [
                    "Pandas secara default tidak tersedia pada modul standar disaat pertama kali instalasi Python dan kita diharuskan untuk melakukan instalasi terlebih dahulu sebelum menggunakan. Untuk dapat menginstall pandas, kita bisa menjalankan perintah dengan menggunakan pip ataupun bisa menggunakan Anaconda",
                    "Dengan menggunakan pip di terminal:",
                    "syntax=>pip install pandas",
                    "Jika sudah berhasil melakukan instalasi Pandas, kita dapat menggunakannya untuk melakukan manipulasi data dengan cara import modul tersebut pada projek yang akan kita buat.",
                    "syntax=>import pandas as pd",
                    "syntax=>import pandas as pd",
                ]
            },
            {
                "title" : "Mencoba Series",
                "description" : [
                    "Series merupakan struktur data dasar dalam Pandas. Series diibaratkan sebagai array satu dimensi sama halnya dengan numpy array, hanya bedanya mempunyai index dan index tersebut dapat kita kontrol dari setiap elemen tersebut.  Perintah dasar untuk membuat sebuah series dengan Pandas adalah",
                    "image=>pandas-series.PNG"
                ]
            },
            {
                "title" : "Mengatur Index",
                "description" : [
                    "Untuk mengatur indeks dari series, kita bisa menggunakan parameter index. Contohnya disini kita akan melakukan pengaturan indeks pada data numpy array yang sudah kita buat sebelumnya dengan indeks [12,13,14,15].",
                    "syntax=>pandas.Series(data=None, index=None, dtype=None, name=None, copy=False, fastpath=False)",
                    "Parameter  data, diisi dengan data yang akan dibuat series. Struktur data yang bisa ditampung berupa integer, float, dan juga string. parameter index, diisi dengan index dari series. Jumlah index harus sama dengan jumlah data. Jika kita tidak mengisi parameter index, maka series akan memiliki index integer seperti halnya array biasa. Parameter dtype, diisi dengan tipe data dari series, dan parameter copy untuk copy data, secara default akan bernilai false.",
                    "Berdasarkan sintaks di atas, kita akan membuat contoh series menggunakan Python list ataupun numpy sebagai contoh data untuk membuat series. Terlihat bahwa indeks dari series berubah menjadi [12,13,14,15]. Perlu diingat bahwa pengaturan indeks harus sesuai dengan panjang dari data yang ada, bila tidak sesuai akan menimbulkan error panjang dari indeks tidak sesuai.",
                    "image=>pandas-index.PNG"
                ]
            },
            {
                "title" : "Mencoba Data Frame",
                "description" : [
                    "Data frame merupakan tabel/data tabular dengan array dua dimensi yaitu baris dan kolom. Struktur data ini merupakan cara paling standar untuk menyimpan data. Setiap kolom pada data frame merupakan objek dari Series, dan baris terdiri dari elemen yang ada pada Series.",
                    "Untuk membuat data frame, digunakan sintaks berikut: ",
                    "syntax=>pandas.DataFrame(data, index, columns, dtype, copy)",
                    "Dengan keterangan:",
                    "-- index merupakan label untuk baris",
                    "-- columns merupakan label untuk kolom",
                    "-- dtype merupakan tipe data per kolom",
                    "-- copy digunakan untuk menyalin data, defaultnya False    ",
                ]
            },
            {
                "title" : "Studi Kasus",
                "description" : [
                    "Contoh penggunaan Library Pandas dalam pemrograman Python: Dalam kasus ini kita akan membuat sebuah program untuk menampilkan sebuah data yang sudah user(pengguna) masukkan(input), kedalam sebuah tabel.",
                    "link=>https://wtools.io/code/embed-iframe/bG9H",
                    "Maka output yang dihasilkan seperti ini :",
                    "image=>pandas-terminal.PNG"
                ]
            },
        ],
    },
];

function getAllArticle(){
    return dataArticle;
}

function getArticleById(id){
    const dataArticleByid = dataArticle.filter(article => article.id === id)
    if(dataArticleByid.length == 0){
        return false;
    }
    
    return dataArticleByid;
}

function getAllArticleId(){
    const articleId = dataArticle.filter(article => article.id)

    return articleId
}

function getAnotherArticle(id){
    const anotherArticle = dataArticle.filter(article => article.id !== id)

    if(anotherArticle.length == 0){
        return false;
    }
    
    return anotherArticle;
}
