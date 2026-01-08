export interface InfoContent {
  title: string;
  content: string;
}

export const INFO_CONTENTS: Record<string, InfoContent> = {
  pengantar: {
    title: "PENGANTAR",
    content: `Berdasarkan Undang-Undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi dan Peraturan Pemerintah Republik Indonesia Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi, ditetapkan bahwa pola penerimaan mahasiswa baru pada Perguruan Tinggi Negeri dilaksanakan secara nasional dan bentuk lain.

Pola PMB secara nasional pada Universitas Islam Negeri (UIN), Institut Agama Islam Negeri (IAIN), Sekolah Tinggi Agama Islam Negeri (STAIN) dan Perguruan Tinggi yang memiliki program studi dengan ijin pendirian dari Kementerian Agama antara lain dilaksanakan dalam bentuk Ujian Masuk Perguruan Tinggi Keagamaan Islam Negeri (UM-PTKIN).

UM-PTKIN diselenggarakan dalam satu sistem yang terpadu secara serentak oleh Panitia Pelaksana yang ditetapkan oleh Menteri Agama Republik Indonesia. Pelaksanaan UM-PTKIN secara nasional harus memenuhi prinsip adil, transparan, dan tidak diskriminatif dengan tetap memperhatikan kekhususan dan kekhasan PTKIN/PTN.

Pada tahun 2026 UM-PTKIN diselenggarakan secara luring di PTKIN Titik Lokasi Ujian yang dipilih oleh peserta dan menggunakan aplikasi Sistem Seleksi Elektronik (SSE). SSE adalah aplikasi ujian yang menggunakan komputer (PC/Laptop). Melalui SSE, pelaksanaan ujian tidak lagi menggunakan kertas (paperless), baik untuk naskah soal maupun lembar jawaban.`,
  },
  ketentuan: {
    title: "KETENTUAN UMUM",
    content: `
<ol>
  <li>
    <p class="mb-2"><strong>Peserta yang berhak mendaftar</strong> adalah siswa pada Satuan Pendidikan MA/MAK/SMA/SMK/SPM/PDF/PKPPS/sederajat lulusan tahun 2024, 2025, dan 2026.</p>
  </li>
  <li>
    <p class="mb-2"><strong>Persyaratan Dokumen</strong>:<br/>
    Peserta lulusan tahun 2024 dan 2025 wajib memiliki Ijazah/Surat Keterangan Lulus (SKL), dan Peserta lulusan 2026 wajib memiliki salah satu dari Surat Keterangan Lulus (SKL)/Pengumuman Lulus/KTP/Kartu Siswa.</p>
  </li>
  <li>
    <p class="mb-2"><strong>Persyaratan Data</strong> - Peserta wajib memiliki:<br/>
    • Nomor Induk Siswa Nasional (NISN)<br/>
    • Email yang aktif dan dapat dihubungi<br/>
    • Nomor WhatsApp yang aktif dan dapat dihubungi</p>
  </li>
  <li>
    <p class="mb-2"><strong>Cara Pendaftaran</strong> - Peserta melakukan pendaftaran secara mandiri pada laman <a href="https://um.ptkin.ac.id" class="text-primary underline hover:text-primary/80">https://um.ptkin.ac.id</a></p>
  </li>
  <li>
    <p class="mb-2"><strong>Pembayaran</strong> - Peserta melakukan pembayaran biaya pendaftaran melalui bank yang ditetapkan oleh Panitia Nasional. Biaya pendaftaran yang sudah dibayarkan tidak dapat ditarik kembali dengan alasan apapun.</p>
  </li>
  <li>
    <p class="mb-2"><strong>Pilihan Program Studi</strong> - Peserta memilih maksimal 3 (tiga) Program Studi pada PTKIN/PTN.</p>
  </li>
  <li>
    <p class="mb-2"><strong>Pilihan Lokasi Ujian</strong> - Peserta memilih PTKIN/PTN Titik Lokasi Ujian.</p>
  </li>
  <li>
    <p class="mb-2"><strong>Finalisasi</strong> - Pendaftaran peserta dinyatakan selesai apabila peserta telah melakukan Finalisasi Pendaftaran.</p>
  </li>
</ol>`,
  },
  jadwal: {
    title: "JADWAL PELAKSANAAN",
    content: `
<table class="w-full border-collapse border border-border text-sm">
  <tbody>
    <tr class="border-b border-border">
      <td className="border-r border-border py-3 px-4 font-medium text-right">Pendaftaran</td>
      <td className="py-3 px-4 font-bold">13 April 2026 pukul 08.00 WIB - 30 Mei 2026 pukul 15.00 WIB</td>
    </tr>
    <tr className="border-b border-border bg-muted/50">
      <td className="border-r border-border py-3 px-4 font-medium text-right">Pembayaran</td>
      <td className="py-3 px-4 font-bold">13 April 2026 pukul 08.00 WIB - 30 Mei 2026 pukul 23.59 WIB</td>
    </tr>
    <tr className="border-b border-border">
      <td className="border-r border-border py-3 px-4 font-medium text-right">Finalisasi Pendaftaran</td>
      <td className="py-3 px-4 font-bold">13 April 2026 pukul 08.00 WIB - 03 Juni 2026 pukul 15.00 WIB</td>
    </tr>
    <tr className="border-b border-border bg-muted/50">
      <td className="border-r border-border py-3 px-4 font-medium text-right">Cetak Kartu Peserta Ujian SSE UM-PTKIN</td>
      <td className="py-3 px-4 font-bold">Dimulai pada 14 April 2026 pukul 08.00 WIB</td>
    </tr>
    <tr className="border-b border-border">
      <td className="border-r border-border py-3 px-4 font-medium text-right">Pelaksanaan Ujian SSE UM-PTKIN</td>
      <td className="py-3 px-4 font-bold">08 Juni - 14 Juni 2026</td>
    </tr>
    <tr className="bg-muted/50">
      <td className="border-r border-border py-3 px-4 font-medium text-right">Pengumuman</td>
      <td className="py-3 px-4 font-bold">30 Juni 2026</td>
    </tr>
  </tbody>
</table>`,
  },
  biaya: {
    title: "BIAYA PENDAFTARAN",
    content: `
<div class="space-y-6">
  <div>
    <h3 class="text-lg font-semibold mb-3">Biaya Pendaftaran</h3>
    <p class="mb-4">Biaya pendaftaran sebesar <span className="font-bold text-primary text-xl">Rp. 200.000</span> (Dua Ratus Ribu Rupiah), belum termasuk biaya tambahan jika transaksi menggunakan bank selain Bank Mandiri.</p>
  </div>

  <div>
    <h3 class="text-lg font-semibold mb-3">Tata Cara Pembayaran</h3>
    
    <div style={{ position: 'relative', width: '100%', maxWidth: '100%', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src="https://www.youtube.com/embed/YftaRzbBaC4"
        title="Tutorial Pembayaran UM-PTKIN"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
</div>`,
  },
  alur: {
    title: "ALUR PENDAFTARAN",
    content: `
<ol className="space-y-4 list-decimal list-inside">
  <li>
    <p className="mb-2"><strong>Registrasi Akun UM-PTKIN</strong><br/>
    Calon peserta mendaftar Akun UM-PTKIN. Pilih Daftar Bagi Calon Pendaftar yang memiliki NISN dan belum memiliki akun SPAN-PTKIN. Username dan Password didapat setelah melakukan pendaftaran dan dikirim melalui email yang dicantumkan saat pendaftaran akun UM-PTKIN.</p>
  </li>
  <li>
    <p className="mb-2"><strong>Login</strong><br/>
    Pilih Login. Gunakan Username/NISN dan Password.</p>
  </li>
  <li>
    <p className="mb-2"><strong>Mengisi Biodata</strong><br/>
    Mengisi biodata secara online di <a href="https://um.ptkin.ac.id/" className="text-primary underline hover:text-primary/80">https://um.ptkin.ac.id/</a> atau menggunakan aplikasi mobile Android UM-PTKIN 2026 hingga mendapat INVOICE dan nomor VA (Virtual Account), Informasi nominal yang harus dibayarkan serta tatacara pembayaran.</p>
  </li>
  <li>
    <p className="mb-2"><strong>Melakukan Pembayaran</strong><br/>
    <div className="flex items-center gap-3 my-3">
      <img src="/logo-bank-mandiri.png" alt="Bank Mandiri" className="h-10 w-auto" />
      <div className="text-sm">
        <p className="font-semibold">Bank Mandiri</p>
        <p className="text-muted-foreground">Channel pembayaran resmi UM-PTKIN</p>
      </div>
    </div>
    Calon peserta melakukan pembayaran pada Channel Pembayaran Bank Mandiri atau Bank lain dengan ketentuan sebagai berikut:<br/>
    • Melalui Bank Mandiri, pembayaran dapat dilakukan di seluruh Teller Kantor Cabang Bank Mandiri, ATM Bank Mandiri, LIVIN by Mandiri dengan menunjukkan / memasukkan nomor VA/Kode Bayar.<br/>
    • Selain Bank Mandiri, pembayaran dapat dilakukan di ATM Bank lain, dan Transfer dengan Nomor Rekening tujuan ke VA (Virtual Account) melalui Bank Non-Mandiri di seluruh Indonesia yang mendukung transfer antar bank dengan nomor VA (Virtual Account) sebagai nomor rekening tujuan. <span className="font-semibold">(ada tambahan biaya tergantung mitra)</span>.</p>
  </li>
  <li>
    <p className="mb-2"><strong>Bukti Pembayaran</strong><br/>
    Peserta mendapat bukti pembayaran. Biaya seleksi yang sudah dibayar tidak dapat ditarik kembali dengan alasan apapun.</p>
  </li>
  <li>
    <p className="mb-2"><strong>Pemilihan Prodi dan Lokasi Ujian</strong><br/>
    Peserta melanjutkan pendaftaran online di <a href="https://um.ptkin.ac.id/" className="text-primary underline hover:text-primary/80">https://um.ptkin.ac.id/</a> atau menggunakan aplikasi mobile Android UM-PTKIN 2026 dengan mengecek status pembayaran, kemudian dilanjutkan dengan memilih program studi dan PTKIN/PTN titik lokasi ujian hingga cetak kartu peserta ujian.</p>
  </li>
  <li>
    <p className="mb-2"><strong>Mengikuti Ujian</strong><br/>
    Mengikuti ujian SSE UM-PTKIN pada PTKIN/PTN titik lokasi ujian yang dipilih oleh peserta.</p>
  </li>
</ol>`,
  },
  materiujian: {
    title: "MATERI UJIAN",
    content: `
<ol className="space-y-6 list-decimal list-inside">
  <li>
    <p className="mb-3"><strong>Penalaran Akademik (PA)</strong> mengukur kemampuan potensi calon mahasiswa yang dapat menghantarkan penyelesaian dan keberhasilan studi di jenjang strata satu. TPA terdiri atas:<br/>
    <ul className="mt-2 space-y-2 list-disc list-inside ml-4 text-sm">
      <li>Penalaran Verbal berupa kemampuan pemahaman berbahasa secara tertulis dan ketrampilan bahasa yang berdasarkan struktur dan aturan bahasa baik dalam kata, kalimat, maupun narasi;</li>
      <li>Penalaran Gambar berupa kemampuan dalam menvisualisasikan dan memahami objek atau simbol secara abstrak. Penalaran gambar sangat cocok untuk memprediksi kreativitas calon mahasiswa;</li>
      <li>Penalaran Kuantitatif berupa kemampuan menerapkan konsep hitungan, logika angka, simbol numerical dalam berpikir sistematis dan memecahkan masalah. Konteks dalam tes penalaran "gambar" bersifat umum, sedangkan konteks dalam penalaran "verbal" dikaitkan dengan aspek-aspek dalam kehidupan sehari-hari yang meliputi masalah keindonesiaan, keislaman, sains dan teknologi, Pendidikan, Kesehatan, ekonomi dan bisnis, dan seni budaya dan olah raga.</li>
    </ul></p>
  </li>
  <li>
    <p className="mb-3"><strong>Penalaran Matematika</strong> mengukur kemampuan peserta dalam memahami dan menganalisis isi bacaan sederhana dengan menggunakan penalarannya guna memecahkan permasalahan kehidupan sehari-hari melalui penerapan konsep, prosedur dan fakta dalam matematika. Bacaan tersebut dielaborasi melalui beragam representasi (grafik/tabel/bagan atau representasi lainnya) untuk memprediksi dan/atau mengambil keputusan yang dibutuhkan mereka sebagai bekal dalam menghadapi tuntutan hidup abad ke-21.</p>
  </li>
  <li>
    <p className="mb-3"><strong>Literasi Membaca</strong> mengukur kemampuan untuk memahami, menggunakan, mengevaluasi, merefleksikan berbagai jenis teks Bahasa Indonesia dan Bahasa Inggris dalam konteks sosio humaniora dan konteks sains serta jenis teks Bahasa Arab untuk menyelesaikan masalah dan mengembangkan kapasitas individu yang moderat dan unggul sebagai warga Indonesia dan warga dunia agar dapat berkontribusi secara produktif dan proporsional.</p>
  </li>
  <li>
    <p className="mb-3"><strong>Literasi Ajaran Islam</strong> mengukur kemampuan memahami, menerapkan dan menganalisis materi ajaran Islam meliputi Al-Quran, Hadis, Fikih dan Sejarah Kebudayaan Islam dalam konteks personal, masyarakat, global dan moderasi untuk mewujudkan masyarakat madani. Penguasaan literasi ajaran Islam ini sangat penting untuk menanamkan kepribadian yang baik dan memperkuat iman serta mengaplikasikan ajaran Islam dalam kehidupan individu sehari-hari maupun dalam kehidupan bermasyarakat dan berbangsa.</p>
  </li>
</ol>`,
  },
  tutorial: {
    title: "TUTORIAL UJIAN UM-PTKIN 2026",
    content: `
<div className="space-y-6">
  <div>
    <h3 class="text-lg font-semibold mb-3">Video Tutorial Ujian</h3>
    <div style={{ position: 'relative', width: '100%', maxWidth: '100%', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src="https://www.youtube.com/embed/YftaRzbBaC4"
        title="Tutorial Ujian SSE UM-PTKIN"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>

  <div>
    <h3 class="text-lg font-semibold mb-3">Panduan Singkat</h3>
    <ul className="space-y-2 list-disc list-inside text-sm">
      <li>Pastikan komputer/laptop dan koneksi internet stabil sebelum ujian</li>
      <li>Login menggunakan NISN dan password yang telah terdaftar</li>
      <li>Ikuti semua instruksi yang diberikan</li>
      <li>Kerjakan soal dengan teliti dan cek kembali sebelum submit</li>
    </ul>
  </div>
</div>`,
  },
  faq: {
    title: "FAQ (Frequently Asked Questions)",
    content: `
<ol className="space-y-4 list-decimal list-inside">
  <li>
    <p><strong>Peserta yang berhak mendaftar?</strong><br/>
    Siswa pada Satuan Pendidikan MA/MAK/SMA/SMK/SPM/PDF/PKPPS/sederajat lulusan tahun 2024, 2025 dan 2026.</p>
  </li>
  <li>
    <p><strong>Perlukah Ijazah/SKL?</strong><br/>
    Peserta lulusan tahun 2024 dan 2025 wajib memiliki Ijazah/Surat Keterangan Lulus (SKL), dan Peserta lulusan 2026 wajib memiliki salah satu dari Surat Keterangan Lulus (SKL)/Pengumuman Lulus/KTP/Kartu Siswa.</p>
  </li>
  <li>
    <p><strong>Siswa Lulusan Luar Negeri?</strong><br/>
    Bagi siswa luar negeri yang berasal dari sekolah non SRI (Sekolah Rakyat Indonesia), silahkan melakukan verifikasi dan validasi NISN pada laman <a href="https://pd.data.kemdikbud.go.id/vervalLulusan/pengajuan/sekolah-ln" className="text-primary underline hover:text-primary/80">https://pd.data.kemdikbud.go.id/vervalLulusan/pengajuan/sekolah-ln</a> dengan menggunakan NPSN 69999999. Untuk pendaftaran akun UM-PTKIN, siswa harus memiliki NISN, NPSN, dan tanggal lahir yang terdaftar di DAPODIK/PUSDATIN.</p>
  </li>
  <li>
    <p><strong>Bagaimana cara mendaftar akun UM-PTKIN?</strong><br/>
    Pendaftaran akun UM-PTKIN dapat dilakukan melalui laman <a href="https://um.ptkin.ac.id" className="text-primary underline hover:text-primary/80">https://um.ptkin.ac.id</a> dengan memasukkan NISN dan tanggal lahir yang telah sesuai pada data DAPODIK/EMIS.</p>
  </li>
  <li>
    <p><strong>Bagaimana jika saya lupa email atau password?</strong><br/>
    Peserta dapat menggunakan fasilitas Lupa Password dengan mengisikan NISN, Tanggal Lahir, dan email yang benar.</p>
  </li>
  <li>
    <p><strong>Berapa biaya pendaftaran?</strong><br/>
    Biaya pendaftaran UM-PTKIN 2026 adalah Rp. 200.000 (Dua Ratus Ribu Rupiah).</p>
  </li>
  <li>
    <p><strong>Kapan Pengumuman hasil seleksi?</strong><br/>
    Pengumuman hasil seleksi UM-PTKIN 2026 akan diumumkan pada 30 Juni 2026.</p>
  </li>
  <li>
    <p><strong>Apakah ada ujian susulan?</strong><br/>
    Ujian susulan tidak ada. Peserta yang tidak hadir maka dianggap gugur.</p>
  </li>
</ol>`,
  },
};
