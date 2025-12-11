export default function Subscription() {
  return (
    <div className="p-6 min-h-screen bg-bg">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-text mb-6">Paket Berlangganan</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Growing Company Card */}
          <section className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {/* sprout icon */}
                <svg className="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.686 2 6 4.686 6 8c0 2.21 1 4 3 5 0 0-1 4-1 6 0 1 1 1 2 1s2 0 2-1c0-2-1-6-1-6 2.0-1.0 3-2.79 3-5 0-3.314-2.686-6-6-6z" />
                </svg>
                Growing Company
              </h2>
              <p className="text-sm text-muted mb-4">Cocok untuk perusahaan yang sedang tumbuh dan ingin memulai pengukuran dampak lingkungan.</p>

              <h3 className="font-medium mt-2">Kriteria</h3>
              <ul className="list-disc list-inside text-sm ml-2 mb-4">
                <li>Tim kecil (1-50 karyawan)</li>
                <li>Proses pengukuran sebagian</li>
                <li>Anggaran terbatas untuk inisiatif lingkungan</li>
                <li>Butuh integrasi dasar dan pelaporan sederhana</li>
              </ul>

              <h3 className="font-medium mt-2">Manfaat</h3>
              <ul className="list-disc list-inside text-sm ml-2 mb-4">
                <li>Akses ke fitur inti platform</li>
                <li>Dasbor ringkasan emisi</li>
                <li>Dukungan onboarding standar</li>
              </ul>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-lg font-bold">Rp 25.000.000</div>
              <button className="px-4 py-2 bg-primary text-white rounded-full font-semibold">Pilih</button>
            </div>
          </section>

          {/* Mature Company Card */}
          <section className="bg-white rounded-xl shadow p-6 flex flex-col justify-between border-2 border-primary">
            <div>
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {/* building/trophy icon for mature */}
                <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V9a2 2 0 012-2h10a2 2 0 012 2v12M9 21V12h6v9M12 7v4" />
                </svg>
                Mature Company
              </h2>
              <p className="text-sm text-muted mb-4">Untuk perusahaan mapan yang ingin memperdalam manajemen ESG dan target net-zero.</p>

              <h3 className="font-medium mt-2">Kriteria</h3>
              <ul className="list-disc list-inside text-sm ml-2 mb-4">
                <li>Perusahaan besar (50+ karyawan)</li>
                <li>Proses pengukuran terstandarisasi</li>
                <li>Terdapat tim internal untuk ESG atau sustainability</li>
                <li>Memerlukan integrasi lanjutan dan audit</li>
              </ul>

              <h3 className="font-medium mt-2">Manfaat</h3>
              <ul className="list-disc list-inside text-sm ml-2 mb-4">
                <li>Semua manfaat paket Growing</li>
                <li>Integrasi data lanjutan (ERP/HR/energy meters)</li>
                <li>Laporan audit-ready dan export CSV/PDF</li>
                <li>Konsultasi ahli ESG dan sesi strategi (bulanan)</li>
                <li>Dukungan prioritas 24/7</li>
                <li>Custom KPIs dan dashboard enterprise</li>
              </ul>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-lg font-bold">Rp 70.000.000</div>
              <button className="px-4 py-2 bg-primary text-white rounded-full font-semibold">Pilih</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
