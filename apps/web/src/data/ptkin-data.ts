export interface PTKIN {
  id: number;
  kode: string;
  nama: string;
  alamat: string;
  website: string;
  phone: string;
  fax: string;
  email: string;
  timezone: "WIB" | "WITA" | "WIT";
  logo?: string; // Path ke logo, contoh: "/logos/uinsu.png"
  provinsi: string;
}

export interface Prodi {
  id: number;
  kodeProdi: string;
  namaProdi: string;
  dayaTampung: number;
}

export const PTKIN_DATA: PTKIN[] = [
  {
    id: 101,
    kode: "101",
    nama: "UIN Sumatera Utara Medan",
    alamat: "Jl. Williem Iskandar Pasar V Medan Estate 20731",
    website: "https://uinsu.ac.id/",
    phone: "061-6615683, 061-6622925",
    fax: "061-6615683",
    email: "info@uinsu.ac.id",
    timezone: "WIB",
    provinsi: "Sumatera Utara"
  },
  {
    id: 102,
    kode: "102",
    nama: "UIN Sultan Syarif Kasim Riau",
    alamat: "Jl. H.R. Subrantas No.155 KM. 15 Simpang Baru Panam Pekanbaru 28293",
    website: "https://sireg.uin-suska.ac.id/",
    phone: "0761 588961",
    fax: "0761-562052",
    email: "info@uin-suska.ac.id",
    timezone: "WIB",
    provinsi: "Riau"
  },
  {
    id: 103,
    kode: "103",
    nama: "UIN Ar-Raniry Banda Aceh",
    alamat: "Jl. Syaikh Abdul Rauf, Kopelma Darussalam, Syiah Kuala, Banda Aceh, 23111",
    website: "https://uinarraniry.siakadcloud.com/spmbfront/",
    phone: "0651-7552921, 081290709010",
    fax: "0651-7552922",
    email: "humas@uinarraniry.ac.id",
    timezone: "WIB",
    provinsi: "Aceh"
  },
  {
    id: 104,
    kode: "104",
    nama: "UIN Imam Bonjol Padang",
    alamat: "Kampus III Sungai Bangek Kel. Balai Gadang Kec. Koto Tangah Kota Padang, Sumatera Barat 25171",
    website: "https://uinib.ac.id/",
    phone: "WA: 082346345106/ 085363659018",
    fax: "0751-20923",
    email: "humas@uinib.ac.id",
    timezone: "WIB",
    provinsi: "Sumatera Barat"
  },
  {
    id: 105,
    kode: "105",
    nama: "UIN Sultanah Nahrasiyah Lhokseumawe",
    alamat: "Jln. Medan Banda Aceh Km. 275, No. 1 Buket Rata - Alue Awe, Lhokseumawe",
    website: "https://registrasi.iainlhokseumawe.ac.id/",
    phone: "082118444436",
    fax: "0645-40329",
    email: "humas@iainlhokseumawe.ac.id",
    timezone: "WIB",
    provinsi: "Aceh"
  },
  {
    id: 106,
    kode: "106",
    nama: "IAIN Langsa",
    alamat: "Jl. Meurandeh Kota Langsa - Nangroe Aceh Darussalam 24411",
    website: "https://pmb.iainlangsa.ac.id",
    phone: "0641-22619, 0641-23129",
    fax: "0641-425139",
    email: "humas@iainlangsa.ac.id",
    timezone: "WIB",
    provinsi: "Aceh"
  },
  {
    id: 107,
    kode: "107",
    nama: "UIN Syekh Ali Hasan Ahmad Addary Padangsidimpuan",
    alamat: "Jl. T. Rizal Nurdin Km. 4,5 Sihitang, Padangsidimpuan 22733",
    website: "https://www.uinsyahada.ac.id/",
    phone: "082162980707",
    fax: "081328533115",
    email: "info@uinsyahada.ac.id",
    timezone: "WIB",
    provinsi: "Sumatera Utara"
  },
  {
    id: 108,
    kode: "108",
    nama: "UIN Mahmud Yunus Batusangkar",
    alamat: "Jl. Jend. Sudirman No. 137 Lima Kaum Batusangkar Sumbar 27213",
    website: "https://pmb.uinmybatusangkar.ac.id/",
    phone: "0752-71150",
    fax: "0752-71879",
    email: "humas@uinmybatusangkar.ac.id",
    timezone: "WIB",
    provinsi: "Sumatera Barat"
  },
  {
    id: 109,
    kode: "109",
    nama: "UIN Sjech M. Djamil Djambek Bukittinggi",
    alamat: "Jl. Paninjauan Garegeh Koto Selayan Bukittinggi Sumatera Barat 25253",
    website: "https://uinbukittinggi.ac.id/",
    phone: "0752-33136",
    fax: "0752-22875",
    email: "info@uinbukittinggi.ac.id",
    timezone: "WIB",
    provinsi: "Sumatera Barat"
  },
  {
    id: 153,
    kode: "153",
    nama: "IAIN Takengon",
    alamat: "Jl. Yos Sudarso/Panglima A Dimot No. 10 Takengon Aceh Tengah",
    website: "https://iaintakengon.ac.id/",
    phone: "0643-23268",
    fax: "0643-22422",
    email: "humas@iaintakengon.ac.id",
    timezone: "WIB",
    provinsi: "Aceh"
  },
  {
    id: 154,
    kode: "154",
    nama: "IAIN Datuk Laksemana Bengkalis",
    alamat: "Jl. Lembaga Senggoro Kec. Bengkalis Kab. Bengkalis",
    website: "https://kampusmelayu.ac.id/",
    phone: "0766-8001050",
    fax: "0766-8001050",
    email: "info@iainbengkalis.ac.id",
    timezone: "WIB",
    provinsi: "Riau"
  },
  {
    id: 155,
    kode: "155",
    nama: "STAIN Teungku Dirundeng Meulaboh",
    alamat: "Jln. Lingkar Kampus Alue Peunyareng, Gampong Gunong Kleng, Meureubo - Aceh Barat 23615",
    website: "https://staindirundeng.ac.id/pmb/",
    phone: "0821-3967-1518",
    fax: "0655-7551591",
    email: "humas@staindirundeng.ac.id",
    timezone: "WIB",
    provinsi: "Aceh"
  },
  {
    id: 157,
    kode: "157",
    nama: "STAIN Sultan Abdurrahman Kepulauan Riau",
    alamat: "Jl. Lintas Barat KM. 19 Ceruk Ijuk Kelurahan Toapaya Asri. Kabupaten Bintan, Provinsi Kepulauan Riau",
    website: "https://stainkepri.ac.id/",
    phone: "+62 771 444 2607",
    fax: "+62 771 444 2610",
    email: "humas@stainkepri.ac.id",
    timezone: "WIB",
    provinsi: "Kepulauan Riau"
  },
  {
    id: 158,
    kode: "158",
    nama: "STAIN Mandailing Natal",
    alamat: "Jl. Prof. Andi Hakim Nasution, Panyabungan, 22978",
    website: "https://www.stain-madina.ac.id/",
    phone: "085262970313",
    fax: "-",
    email: "info@stain-madina.ac.id",
    timezone: "WIB",
    provinsi: "Sumatera Utara"
  },
  {
    id: 210,
    kode: "210",
    nama: "UIN Raden Fatah Palembang",
    alamat: "Jl. KH. Zainal Abidin Fikri Km. 3,5 Palembang 30126",
    website: "https://registrasi.radenfatah.ac.id",
    phone: "0711-354668, 0711-356209",
    fax: "0711-356209",
    email: "humas@radenfatah.ac.id",
    timezone: "WIB",
    provinsi: "Sumatera Selatan"
  },
  {
    id: 211,
    kode: "211",
    nama: "UIN Raden Intan Lampung",
    alamat: "Jl. Letkol H. Endro Suratmin Sukarame I Bandar Lampung 35131",
    website: "https://www.radenintan.ac.id/",
    phone: "0721-780887, 0721-703531, 088286036448, 085266831087",
    fax: "0721-780422",
    email: "info@radenintan.ac.id",
    timezone: "WIB",
    provinsi: "Lampung"
  },
  {
    id: 212,
    kode: "212",
    nama: "UIN Sulthan Thaha Saifuddin Jambi",
    alamat: "Jl. Jambi - Ma. Bulian KM. 16 Simp. Sei. Duren Kab. Ma. Jambi 36363",
    website: "https://uinjambi.ac.id/",
    phone: "0741-583183, 0741-584118",
    fax: "0741-583183",
    email: "humas@uinjambi.ac.id",
    timezone: "WIB",
    provinsi: "Jambi"
  },
  {
    id: 213,
    kode: "213",
    nama: "IAIN Kerinci",
    alamat: "Jl. Kapten Muradi, Kec - Pesisir Bukit Kota Sungai Penuh",
    website: "http://www.iainkerinci.ac.id/",
    phone: "0748-21065",
    fax: "0748-22114",
    email: "humas@iainkerinci.ac.id",
    timezone: "WIB",
    provinsi: "Jambi"
  },
  {
    id: 214,
    kode: "214",
    nama: "IAIN Curup",
    alamat: "Jl. Dr. AK Gani No. 01, Curup, Dusun Curup, Kec. Curup Utara, Kabupaten Rejang Lebong, Bengkulu 39119",
    website: "https://iaincurup.ac.id/",
    phone: "(0732) 21759 / Wa : 089653378665",
    fax: "",
    email: "humas@iaincurup.ac.id",
    timezone: "WIB",
    provinsi: "Bengkulu"
  },
  {
    id: 215,
    kode: "215",
    nama: "UIN Fatmawati Sukarno Bengkulu",
    alamat: "Jl. Pagar Dewa Air Sebakul Bengkulu 38613",
    website: "https://uinfasbengkulu.ac.id/",
    phone: "0736-51171",
    fax: "0736-51172",
    email: "humas@uinfasbengkulu.ac.id",
    timezone: "WIB",
    provinsi: "Bengkulu"
  },
  {
    id: 216,
    kode: "216",
    nama: "UIN Jurai Siwo Lampung",
    alamat: "Jl. Ki. Hajar Dewantoro 15-A Iringmulyo Kota Metro - Lampung Tengah 34151",
    website: "https://spmb.metrouniv.ac.id/",
    phone: "+6281584250956",
    fax: "0725-47296",
    email: "humas@metrouniv.ac.id",
    timezone: "WIB",
    provinsi: "Lampung"
  },
  {
    id: 217,
    kode: "217",
    nama: "IAIN Syaikh Abdurrahman Siddik Bangka Belitung",
    alamat: "Jl. Raya Petaling Km 13, Kecamatan Mendo Barat, Kab. Bangka - Bangka Belitung 33173",
    website: "https://pmb.iainsasbabel.ac.id",
    phone: "081367436791",
    fax: "-",
    email: "humas@iainsasbabel.ac.id",
    timezone: "WIB",
    provinsi: "Bangka Belitung"
  },
  {
    id: 318,
    kode: "318",
    nama: "UIN Syarif Hidayatullah Jakarta",
    alamat: "Jl. Ir. H. Juanda No.95 Ciputat 15412 Jakarta Selatan",
    website: "https://admisi.uinjkt.ac.id",
    phone: "021 7401925, Ekstensi 1829",
    fax: "021-7402982",
    email: "humas@uinjkt.ac.id",
    timezone: "WIB",
    provinsi: "DKI Jakarta"
  },
  {
    id: 319,
    kode: "319",
    nama: "UIN Sunan Gunung Djati Bandung",
    alamat: "Jl. Raya Cipadung No. 105 Ujung Berung Bandung 40614",
    website: "https://uinsgd.ac.id/",
    phone: "(022) 7800525",
    fax: "(022) 7803936",
    email: "humas@uinsgd.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Barat"
  },
  {
    id: 320,
    kode: "320",
    nama: "UIN Sultan Maulana Hasanuddin Banten",
    alamat: "Jl. Jend. Sudirman No. 30 Serang, Banten 42118",
    website: "https://uinbanten.ac.id/",
    phone: "0254-200323, 0254-208849",
    fax: "0254-200022",
    email: "humas@uinbanten.ac.id",
    timezone: "WIB",
    provinsi: "Banten"
  },
  {
    id: 321,
    kode: "321",
    nama: "UIN Siber Syekh Nurjati Cirebon",
    alamat: "Jl. Perjuangan By Pass Sunyaragi Cirebon 45132",
    website: "https://uinssc.ac.id/",
    phone: "0231-481264",
    fax: "0231-489926",
    email: "humas@uinssc.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Barat"
  },
  {
    id: 322,
    kode: "322",
    nama: "IAIN Pontianak",
    alamat: "Jalan Letjen. Soeprapto No. 19 Pontianak 78122 Kalimantan Barat",
    website: "https://pmb.iainptk.ac.id/",
    phone: "0561-734170, WA 085183335351",
    fax: "0561-734170",
    email: "humas@iainptk.ac.id",
    timezone: "WIB",
    provinsi: "Kalimantan Barat"
  },
  {
    id: 359,
    kode: "359",
    nama: "Universitas Singaperbangsa Karawang (UNSIKA)",
    alamat: "Jalan H. S. Ronggowaluyo, Telukjambe Timur, Karawang, 41361, Jawa Barat",
    website: "https://unsika.ac.id/",
    phone: "-",
    fax: "-",
    email: "info@unsika.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Barat"
  },
  {
    id: 423,
    kode: "423",
    nama: "UIN Sunan Kalijaga Yogyakarta",
    alamat: "Jl. Marsda Adisucipto Yogyakarta 55281",
    website: "https://uin-suka.ac.id/",
    phone: "0274-558254, WA- 08172302020",
    fax: "0274-586117",
    email: "humas@uin-suka.ac.id",
    timezone: "WIB",
    provinsi: "DI Yogyakarta"
  },
  {
    id: 424,
    kode: "424",
    nama: "UIN Walisongo Semarang",
    alamat: "Jl. Prof. Dr. Hamka km 2 Ngalian, Kota Semarang 70185",
    website: "https://walisongo.ac.id/",
    phone: "024-7604554, 024-76469090, 024-76469092",
    fax: "024-7601293",
    email: "humas@walisongo.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Tengah"
  },
  {
    id: 425,
    kode: "425",
    nama: "UIN K.H. Abdurrahman Wahid Pekalongan",
    alamat: "Jl. Kusuma Bangsa No. 9 Pekalongan Jateng 51141",
    website: "https://uingusdur.ac.id/",
    phone: "(0285) 412575",
    fax: "0285-423418",
    email: "humas@uingusdur.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Tengah"
  },
  {
    id: 426,
    kode: "426",
    nama: "UIN Raden Mas Said Surakarta",
    alamat: "Jl. Pandawa Pucangan Kartasura Sukoharjo - Jawa Tengah 57168",
    website: "https://admisi.uinsaid.ac.id",
    phone: "0271-781516, WA 085190091299",
    fax: "0271-782774",
    email: "humas@uinsaid.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Tengah"
  },
  {
    id: 427,
    kode: "427",
    nama: "UIN Profesor K.H. Saifuddin Zuhri Purwokerto",
    alamat: "Jl. Jend. A. Yani No. 40-A Purwokerto Jateng 53126",
    website: "https://pmb.uinsaizu.ac.id",
    phone: "0281-635624, 0281-628250",
    fax: "0281-636553",
    email: "humas@uinsaizu.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Tengah"
  },
  {
    id: 428,
    kode: "428",
    nama: "UIN Salatiga",
    alamat: "Jl. Lingkar Salatiga Km.02, Pulutan, Kec. Sidorejo Salatiga",
    website: "https://www.uinsalatiga.ac.id/",
    phone: "0298-323706",
    fax: "0298-323433",
    email: "humas@uinsalatiga.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Tengah"
  },
  {
    id: 429,
    kode: "429",
    nama: "UIN Sunan Kudus",
    alamat: "Jl. Conge Ngembalrejo Po. Box. 51 Kudus Jawa Tengah 59311",
    website: "https://iainkudus.ac.id/",
    phone: "0291-438881",
    fax: "0291-441613",
    email: "humas@iainkudus.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Tengah"
  },
  {
    id: 530,
    kode: "530",
    nama: "UIN Sunan Ampel Surabaya",
    alamat: "Jl. Jend. A. Yani No. 117 Tromol Pos 4/WO Surabaya 60237",
    website: "https://pmb.uinsa.ac.id/pengumuman",
    phone: "031-8410298",
    fax: "031-8413300",
    email: "humas@uinsa.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Timur"
  },
  {
    id: 531,
    kode: "531",
    nama: "UIN Maulana Malik Ibrahim Malang",
    alamat: "Jl. Gajayana No. 50 Dinoyo Malang 65144 Jawa Timur",
    website: "https://uin-malang.ac.id/",
    phone: "0341-551354",
    fax: "0341-572533",
    email: "humas@uin-malang.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Timur"
  },
  {
    id: 532,
    kode: "532",
    nama: "UIN Antasari Banjarmasin",
    alamat: "Jl. Jenderal Ahmad Yani Km. 4.5 Banjarmasin Kalimantan Selatan 70239",
    website: "https://www.uin-antasari.ac.id/",
    phone: "(0511) 3252829 ext 118",
    fax: "0511-3254344",
    email: "humas@uin-antasari.ac.id",
    timezone: "WITA",
    provinsi: "Kalimantan Selatan"
  },
  {
    id: 533,
    kode: "533",
    nama: "UIN Mataram",
    alamat: "Jl. Gajahmada No. 100 Jempong Baru Mataram",
    website: "https://uinmataram.ac.id/",
    phone: "085174099739",
    fax: "0370-625337",
    email: "humas@uinmataram.ac.id",
    timezone: "WITA",
    provinsi: "Nusa Tenggara Barat"
  },
  {
    id: 534,
    kode: "534",
    nama: "UIN KH.Achmad Siddiq ( KHAS ) Jember",
    alamat: "Jl. Mataram No. 1 Mangli - Jember 68136",
    website: "https://uinkhas.ac.id/",
    phone: "0331-487550",
    fax: "0331-427005",
    email: "humas@uinkhas.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Timur"
  },
  {
    id: 535,
    kode: "535",
    nama: "UIN Madura",
    alamat: "Jl. Panglegur Km. 04 Pamekasan 69371",
    website: "https://iainmadura.ac.id/",
    phone: "0324-6123433",
    fax: "-",
    email: "humas@iainmadura.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Timur"
  },
  {
    id: 536,
    kode: "536",
    nama: "UIN Syekh Wasil Kediri",
    alamat: "Jl. Sunan Ampel No. 7 Ngronggo Jawa Timur 68137",
    website: "https://iainkediri.ac.id/",
    phone: "0354-689282",
    fax: "0354-689282",
    email: "humas@iainkediri.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Timur"
  },
  {
    id: 537,
    kode: "537",
    nama: "UIN Sayyid Ali Rahmatullah Tulungagung",
    alamat: "Jl. Mayor Sujadi Timur No. 46 Tulungagung Jawa Timur 66221",
    website: "https://www.uinsatu.ac.id/",
    phone: "0355-321513",
    fax: "0355-321656",
    email: "humas@uinsatu.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Timur"
  },
  {
    id: 538,
    kode: "538",
    nama: "UIN Kiai Ageng Muhammad Besari Ponorogo",
    alamat: "Jl. Pramuka No. 156 Ronowijayan Siman Ponorogo 63471",
    website: "https://iainponorogo.ac.id/",
    phone: "0352-481277",
    fax: "0352-461893",
    email: "humas@iainponorogo.ac.id",
    timezone: "WIB",
    provinsi: "Jawa Timur"
  },
  {
    id: 539,
    kode: "539",
    nama: "UIN Sultan Aji Muhammad Idris Samarinda",
    alamat: "Jl. H.A.M Rifaddin Loa Janan Ilir Samarinda",
    website: "https://www.uinsi.ac.id/",
    phone: "0541-727222",
    fax: "0541-7268933",
    email: "humas@uinsi.ac.id",
    timezone: "WITA",
    provinsi: "Kalimantan Timur"
  },
  {
    id: 540,
    kode: "540",
    nama: "UIN Palangka Raya",
    alamat: "Jl. George Obos Komplek Islamic Center Palangkaraya 73112",
    website: "https://mikwa.iainplk.ac.id/spmb/",
    phone: "0536-3226947, 0536-3222105",
    fax: "0536-3222105",
    email: "humas@iainplk.ac.id",
    timezone: "WIB",
    provinsi: "Kalimantan Tengah"
  },
  {
    id: 641,
    kode: "641",
    nama: "UIN Alauddin Makasar",
    alamat: "Jl. HM. Yasin Limpo, Gowa",
    website: "https://siadin.uin-alauddin.ac.id/",
    phone: "0411-841879",
    fax: "0411-8221400",
    email: "humas@uin-alauddin.ac.id",
    timezone: "WITA",
    provinsi: "Sulawesi Selatan"
  },
  {
    id: 642,
    kode: "642",
    nama: "IAIN Sultan Amai Gorontalo",
    alamat: "Jl. Gelatik No. 1 Gorontalo",
    website: "https://iaingorontalo.ac.id/",
    phone: "0435-821942, 0435-822725",
    fax: "0435-828866, 0435-882398",
    email: "humas@iaingorontalo.ac.id",
    timezone: "WITA",
    provinsi: "Gorontalo"
  },
  {
    id: 643,
    kode: "643",
    nama: "UIN Abdul Muthalib Sangadji Ambon",
    alamat: "Jl. Dr. H. Tarmizi Taher Kebon Cengkeh Batu Merah Atas Ambon 97582",
    website: "https://spmb.iainambon.ac.id",
    phone: "0911-344816",
    fax: "0911-344315, 0911-355090",
    email: "humas@iainambon.ac.id",
    timezone: "WIT",
    provinsi: "Maluku"
  },
  {
    id: 644,
    kode: "644",
    nama: "IAIN Manado",
    alamat: "Jl. Dr. S.H. Sarundajang, Kawasan Ring Road I Manado",
    website: "https://iain-manado.ac.id/",
    phone: "0431-860616",
    fax: "0431-850774",
    email: "humas@iain-manado.ac.id",
    timezone: "WITA",
    provinsi: "Sulawesi Utara"
  },
  {
    id: 645,
    kode: "645",
    nama: "UIN Datokarama Palu",
    alamat: "Jl. Diponegoro No. 23 Palu Sulawesi Tengah 94221",
    website: "https://uindatokarama.ac.id/",
    phone: "0451-460798",
    fax: "0451-460165",
    email: "humas@uindatokarama.ac.id",
    timezone: "WITA",
    provinsi: "Sulawesi Tengah"
  },
  {
    id: 646,
    kode: "646",
    nama: "IAIN Parepare",
    alamat: "Jl. Amal Bakti No. 8 Kec. Soreang Kota Parepare",
    website: "https://admisi.iainpare.ac.id/",
    phone: "082155165516",
    fax: "0421-24404",
    email: "humas@iainpare.ac.id",
    timezone: "WITA",
    provinsi: "Sulawesi Selatan"
  },
  {
    id: 647,
    kode: "647",
    nama: "IAIN Bone",
    alamat: "Jl. HOS Cokroaminoto Watampone 92732, Kab. Bone - Sulawesi Selatan",
    website: "http://iain-bone.ac.id/",
    phone: "0481-26653, 0481-26153, 0481-27153",
    fax: "0481-23928",
    email: "humas@iain-bone.ac.id",
    timezone: "WITA",
    provinsi: "Sulawesi Selatan"
  },
  {
    id: 648,
    kode: "648",
    nama: "UIN Palopo",
    alamat: "Jl. Dr. Ratulangi Palopo 91921 Sulawesi Selatan",
    website: "https://iainpalopo.ac.id/",
    phone: "0471-22076",
    fax: "0471-325195",
    email: "humas@iainpalopo.ac.id",
    timezone: "WITA",
    provinsi: "Sulawesi Selatan"
  },
  {
    id: 649,
    kode: "649",
    nama: "IAIN Kendari",
    alamat: "Jl. Sultan Qaimuddin No. 17 Baruga Kendari 93116",
    website: "https://iainkendari.ac.id/",
    phone: "0401-393711",
    fax: "0401-393710",
    email: "humas@iainkendari.ac.id",
    timezone: "WITA",
    provinsi: "Sulawesi Tenggara"
  },
  {
    id: 650,
    kode: "650",
    nama: "IAIN Ternate",
    alamat: "Jl. Lumba-lumba Kel. Dufa-dufa Kec. Ternate Utara Kota Ternate - Maluku Utara 97727",
    website: "https://pmb.iain-ternate.ac.id/",
    phone: "0823 4424 5191",
    fax: "0921-23773",
    email: "humas@iain-ternate.ac.id",
    timezone: "WIT",
    provinsi: "Maluku Utara"
  },
  {
    id: 651,
    kode: "651",
    nama: "IAIN Fattahul Muluk Papua",
    alamat: "Jl. Merah Putih Buper Waena, Jayapura, Papua",
    website: "https://iainfmpapua.ac.id/",
    phone: "0967-572126",
    fax: "0967-572125",
    email: "humas@iainfmpapua.ac.id",
    timezone: "WIT",
    provinsi: "Papua"
  },
  {
    id: 652,
    kode: "652",
    nama: "IAIN Sorong",
    alamat: "Jl. Sorong-Klamono Km.17 Klablim, Kota Sorong, Papua Barat",
    website: "https://iainsorong.ac.id/",
    phone: "0951-322133",
    fax: "0951-322133",
    email: "humas@iainsorong.ac.id",
    timezone: "WIT",
    provinsi: "Papua Barat"
  },
  {
    id: 656,
    kode: "656",
    nama: "STAIN Majene",
    alamat: "Jl. Balai Latihan Kerja Kel. Totoli Kec. Bangge Kab. Majene",
    website: "https://stainmajene.ac.id",
    phone: "0821-9128-7417",
    fax: "-",
    email: "humas@stainmajene.ac.id",
    timezone: "WITA",
    provinsi: "Sulawesi Barat"
  }
];

export const getPTKINByProvinsi = (provinsi: string): PTKIN[] => {
  return PTKIN_DATA.filter((ptkin) =>
    ptkin.provinsi.toLowerCase().includes(provinsi.toLowerCase())
  );
};

export const getPTKINBySearch = (search: string): PTKIN[] => {
  const lowerSearch = search.toLowerCase();
  return PTKIN_DATA.filter(
    (ptkin) =>
      ptkin.nama.toLowerCase().includes(lowerSearch) ||
      ptkin.kode.toLowerCase().includes(lowerSearch) ||
      ptkin.provinsi.toLowerCase().includes(lowerSearch) ||
      ptkin.alamat.toLowerCase().includes(lowerSearch)
  );
};

export const getPTKINById = (id: number): PTKIN | undefined => {
  return PTKIN_DATA.find((ptkin) => ptkin.id === id);
};
