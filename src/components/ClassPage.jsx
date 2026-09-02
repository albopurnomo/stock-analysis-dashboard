import React from 'react';
import './ClassPage.css';

const ClassPage = () => {
    return (
        <div className="class-page-wrapper">
            {/* ════════════════════════════════════════════════════════════════════════
                 SECTION 1 — HERO
            ════════════════════════════════════════════════════════════════════════ */}
            <section className="hero">
                <div className="hero-eyebrow">GaleriSaham.com</div>
                <h1>Fundamental Analysis<br /><span>Masterclass</span></h1>
                <p className="hero-sub">
                    Panduan komprehensif memahami bisnis, laporan keuangan, dan valuasi saham —
                    dari fondasi mindset hingga cara baca pergerakan smart money.
                </p>
                <div className="schedules">
                    <div className="schedule-pill b1">
                        <div className="batch-label">Week 1</div>
                        <div className="dates">14, 15, 16, 17 September</div>
                        <div className="time">19.00 – 21.00 WIB · via Zoom</div>
                    </div>
                    <div className="schedule-pill b2">
                        <div className="batch-label">Week 2</div>
                        <div className="dates">21, 22, 23, 24 September</div>
                        <div className="time">19.00 – 21.00 WIB · via Zoom</div>
                    </div>
                </div>
            </section>
            <div className="hero-bar">
                <div className="dot"></div>
                <span>8 Sesi Online</span>
                <div className="dot"></div>
                <span>Setiap malam 19.00–21.00 WIB</span>
                <div className="dot"></div>
                <span>via Zoom · Private &amp; Limited</span>
            </div>

            {/* ════════════════════════════════════════════════════════════════════════
                 SECTION 2 — THE UGLY TRUTH
            ════════════════════════════════════════════════════════════════════════ */}
            <section className="ugly-truth">
                <div className="inner">
                    <div className="ut-left">
                        <div className="ut-label">The Ugly Truth</div>
                        <h2>Dikira Akumulasi,<br />Malah jadi<br />Exit Liquidity</h2>
                        <p>
                            Sekarang, sangat berisiko jika kita terlalu percaya rekomendasi orang lain
                            membuat kita <strong>membeli di harga tinggi</strong>, menambah
                            <strong>posisi terlalu berlebihan</strong>, hingga
                            <strong>average down terus menerus</strong>. Kita mau
                            <strong>cari duit, jadinya nyumbang duit</strong>.
                            Ini adalah '<strong>the ugly truth</strong>', namun semuanya tinggal menunggu waktu.
                        </p>
                    </div>
                    <div className="ut-right">
                        <h3>Nyangkut</h3>
                        <h4>Berkepanjangan</h4>
                        <p>
                            Kebanyakan trader &amp; investor membeli di harga tinggi karena optimisme.
                            Namun tidak memiliki risk management yang konsisten. Risk management semata-mata
                            mengandalkan feeling, membuat portfolio berisi banyak saham 'nyangkut'.
                        </p>
                    </div>
                </div>
            </section>
            <div className="ut-bottom">
                <div className="inner">
                    <div className="ut-col">
                        <h3>Average<br />Down</h3>
                        <h4>Terlalu Berlebihan</h4>
                        <p>
                            'Sudah terlanjur kecebur, sekalian saja minum airnya.' Ini adalah sebuah psikologis
                            yang terjadi ketika kita sudah berada dalam posisi merugi. Mencari berita yang bagus,
                            mencari analisa yang mendukung posisi, dan alhasil portfolio kita berantakan karena
                            tidak objektif.
                        </p>
                    </div>
                    <div className="ut-col">
                        <h3>'All in'<br />Semuanya</h3>
                        <h4>Saya Percaya...</h4>
                        <p>
                            Banyak pelaku pasar yang sangat optimis dengan posisinya, analisanya, dan tokoh
                            panutannya. Semua harus dianalisa dengan kritis, karena pasar modal itu penuh intrik.
                            Jika lalai, jika bukan di saham sekarang, bisa jadi di 'saham selanjutnya' yang
                            memakan korban.
                        </p>
                    </div>
                    <div className="ut-col">
                        <div style={{ height: '180px', background: 'rgba(33,159,218,.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                            <span style={{ fontSize: '48px' }}>📊</span>
                        </div>
                        <p style={{ color: '#94A3B8', fontSize: '13px', lineHeight: '1.65' }}>
                            Ini adalah realita yang dialami banyak investor ritel. Tapi ada cara yang lebih baik —
                            dan itu dimulai dari pemahaman yang benar.
                        </p>
                    </div>
                </div>
            </div>

            {/* ════════════════════════════════════════════════════════════════════════
                 SECTION 3 — TIGA IMPIAN TERBAIK
            ════════════════════════════════════════════════════════════════════════ */}
            <section className="pain">
                <div className="inner">
                    <div className="pain-left">
                        <div className="pain-label">Menjadi Investor 'Pintar'</div>
                        <h2>Tiga<br />Impian<br />Terbaik</h2>
                        <p className="tagline"><strong>Benar + All in + Segera naik.</strong><br />Siapa yang tidak mau seperti ini?</p>
                        <p>
                            Namun untuk bisa meraih ketiga hal ini, kita harus memahami
                            <strong>bagaimana pasar bekerja</strong>, dan yang lebih penting,
                            <strong>memahami bagaimana big money (institutional) berpikir dan take action</strong>,
                            mulai dari <strong>analisa saham</strong> yang potensial, melakukan
                            <strong>akumulasi</strong>, hingga <strong>distribusinya</strong>.
                        </p>
                        <p>
                            Penyusunan portfolio pun menjadi bagian terpenting dan kunci sukses mereka,
                            namun jarang trader &amp; investor ritel menjalankannya.
                        </p>
                    </div>
                    <div className="pain-right">
                        <div className="pain-item">
                            <div className="pain-item-icon">🧑‍💼</div>
                            <div>
                                <h3>Analisanya 'Benar'</h3>
                                <p>Namun seberapa luas data dan fakta yang dimiliki dan seberapa dalam analisanya?</p>
                            </div>
                        </div>
                        <div className="pain-item">
                            <div className="pain-item-icon">💰</div>
                            <div>
                                <h3>Beli Saham 'all-in'</h3>
                                <p>Dengan beli 'all-in' berharap jadi kaya raya. Entah jadi cacing atau jadi naga. Ini berjudi?</p>
                            </div>
                        </div>
                        <div className="pain-item">
                            <div className="pain-item-icon">🚀</div>
                            <div>
                                <h3>Sahamnya Langsung Naik</h3>
                                <p>Tidak sabaran membuat trader &amp; investor menjadi terburu-buru dan over-trade.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
                 SECTION 4 — PROGRAM & TARGET AUDIENCE
            ════════════════════════════════════════════════════════════════════════ */}
            <section className="program-intro">
                <div className="inner">
                    <div className="pi-left">
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '12px' }}>Private &amp; Limited Event</p>
                        <p style={{ fontSize: 'clamp(28px,5vw,42px)', fontWeight: 900, color: 'var(--white)', lineHeight: 1.1, marginBottom: '6px' }}>Kami Punya<br />Program Terbaik<br />untuk Anda</p>
                        <div className="private-tag">
                            <div className="pt-label">Private &amp; Limited Event</div>
                            <ul>
                                <li>Merangkum hal-hal tersembunyi yang ada di pasar</li>
                                <li>Penjelasan fase pergerakan harga dari awal hingga akhir</li>
                                <li>Pengalaman dari episentrum pasar modal Indonesia, seperti fund manager, institutional stock broker, dan market maker</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pi-right">
                        <h2>Semua<br /><span>bisa ikut!</span></h2>
                        <div className="audience-grid">
                            <div className="audience-item">
                                <div className="ai-label">Investor Pemula (&lt;1 tahun)</div>
                                <p>Langsung <strong style={{ color: 'var(--yellow)' }}>ambil shortcut</strong> dengan ikut program ini. Pahami pasar dengan lebih cepat dan pasti. <strong style={{ color: 'var(--yellow)' }}>Jangan terlanjur terjebak</strong> di market dan berakhir dalam posisi tidak sesuai harapan awal.</p>
                            </div>
                            <div className="audience-item">
                                <div className="ai-label">Investor Berpengalaman (1–5+ tahun)</div>
                                <p>Anda pasti sudah banyak pengalaman di pasar, namun <strong style={{ color: 'var(--yellow)' }}>ingin merangkum semuanya</strong> menjadi <strong style={{ color: 'var(--yellow)' }}>satu kesatuan cerita</strong> dan <strong style={{ color: 'var(--yellow)' }}>memahami flow pasar secara komplit</strong> mulai dari fase akumulasi, partisipasi publik, hingga distribusi.</p>
                            </div>
                            <div className="audience-item">
                                <div className="ai-label">Professional</div>
                                <p><strong style={{ color: 'var(--yellow)' }}>Strategic Valuation Method for Institutional Investor</strong> menjadi pintu Anda melakukan analisa fundamental sebagai <strong style={{ color: 'var(--yellow)' }}>analis professional</strong> untuk memahami analisa yang <strong style={{ color: 'var(--yellow)' }}>pro kepada big money</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
                 SECTION 5 — POV / YANG AKAN DIKUASAI
            ════════════════════════════════════════════════════════════════════════ */}
            <section className="pov-section">
                <div className="inner">
                    <div className="sec-title">Cocok untuk Anda yang Ingin Menguasai:</div>
                    <h2>6 Sudut Pandang yang Akan Kamu Kuasai</h2>
                    <div className="pov-grid">
                        <div className="pov-card">
                            <h3>Point of View (POV) Big Money</h3>
                            <p>Memahami pasar harus dari sudut pandang Big Money, dan ini bukan dari indikator teknikal. POV ini tidak pernah tersebar dan tertutup rapat.</p>
                        </div>
                        <div className="pov-card">
                            <h3>Sisi 'Buy Side' Bekerja</h3>
                            <p>Pahami para pelaku pasar dari sisi fund manager bekerja, mulai dari awal sampai penyusunan strategi khusus dalam portfolio mereka.</p>
                        </div>
                        <div className="pov-card">
                            <h3>Sisi 'Sell Side' Bekerja</h3>
                            <p>Pahami para pelaku pasar dari sisi broker dan analis-analis bekerja. Bagaimana order-order big money disalurkan ke market dan mencapai tujuan utamanya.</p>
                        </div>
                        <div className="pov-card">
                            <h3>Market Liquidity Provider</h3>
                            <p>Pergerakan harga di pasar apa di-Bandar-in? Pahami semua konsep pergerakan harga saham dengan netral &amp; apa adanya untuk keuntungan Anda.</p>
                        </div>
                        <div className="pov-card">
                            <h3>Portfolio &amp; Risk Management</h3>
                            <p>Portfolio dan risk management big money berbeda dengan ritel. Strategi mereka menentukan arah pergerakan harga saham yang kita (dan mereka) miliki.</p>
                        </div>
                        <div className="pov-card">
                            <h3>Menguasai A.I. dalam Analisa</h3>
                            <p>Manfaatkan AI untuk melakukan analisa fundamental ala Big Money. Teknologi yang sudah ada ini bisa menjadi asisten Anda dalam mencari fakta.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
                 SECTION 6 — 3 MAIN FRAMEWORKS
            ════════════════════════════════════════════════════════════════════════ */}
            <section className="frameworks">
                <div className="inner">
                    <h2>3 Main Framework</h2>
                    <p className="fw-sub">
                        Workshop ini akan mengubah cara pandang, cara analisa, dan cara transaksi Anda menjadi lebih baik
                        setara dengan big money maupun institutional investor. <strong>Apapun metode analisa harga saham
                        yang Anda pakai</strong>, semua akan bergantung pada mereka.
                    </p>
                    <div className="fw-grid">
                        <div className="fw-card">
                            <div className="fw-num">1</div>
                            <h3>The 'Insider Stories' of Market Making</h3>
                            <p>
                                Bagaimana <strong style={{ color: 'var(--yellow)' }}>3 elemen terpenting di pasar bekerja</strong>,
                                mulai dari Agenda, Proses, hingga Media-nya. Anda akan belajar pergerakan harga dari fase
                                akumulasi hingga distribusi secara komplit.
                            </p>
                            <ul className="fw-items">
                                <li>Three Element of Market Making</li>
                                <li>Three Factors of Money Flows</li>
                                <li>Sensitive Corporate Actions</li>
                                <li>Portfolio Management</li>
                            </ul>
                        </div>
                        <div className="fw-card">
                            <div className="fw-num">2</div>
                            <h3>Big Money Investment &amp; Trading Strategies</h3>
                            <p>
                                Smart money, big money, institutional investor menjadi penggerak pasar. Anda akan belajar
                                dan mencontoh bagaimana strategi big money dalam mengelola dana dari proses funding hingga
                                value creation kepada investor.
                            </p>
                            <ul className="fw-items">
                                <li>Seeking Alpha Stocks</li>
                                <li>Main Goal of Institutional Investment</li>
                                <li>Relationship between Institutional Action &amp; Price Analysis</li>
                            </ul>
                        </div>
                        <div className="fw-card">
                            <div className="fw-num">3</div>
                            <h3>How to Find Hidden Gems for Trading &amp; Investing</h3>
                            <p>
                                Pahami proses analisa dan valuasi yang dilakukan oleh smart money. Anda akan belajar
                                kemampuan analisa setara institutional investor secara praktis — memilih saham lebih baik
                                dan lebih kritis ke analis.
                            </p>
                            <ul className="fw-items">
                                <li>Finding Alpha Stocks</li>
                                <li>Key Financial Ratios</li>
                                <li>Institutional Valuation Concept</li>
                                <li>Market Timing Strategies</li>
                                <li>Investment Strategies</li>
                                <li>Trading Strategies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
                 BRIDGE — WHAT YOU'LL LEARN
            ════════════════════════════════════════════════════════════════════════ */}
            <div className="bridge">
                <div className="bridge-label">Rencana Materi Per Pertemuan</div>
                <h2>Nggak Perlu Bingung Baca Laporan Keuangan,<br />Mari Belajar Bareng Sampai Lancar</h2>
                <p>
                    Ketiga framework di atas disampaikan dalam 8 sesi online yang terstruktur —
                    dari fondasi mindset hingga cara membaca pergerakan smart money di chart.
                    Setiap sesi dirancang praktis, interaktif, dan langsung bisa diterapkan.
                </p>
                <div className="bridge-note">
                    📅 &nbsp;8 Pertemuan · 2 jam per sesi · Grup diskusi alumni aktif
                </div>
            </div>

            {/* ════════════════════════════════════════════════════════════════════════
                 SECTION 7 — 8 SESI SYLLABUS CARDS
            ════════════════════════════════════════════════════════════════════════ */}
            <section className="syllabus">
                <div className="inner">
                    <div className="syl-intro">
                        <h2>Detail Materi 8 Sesi</h2>
                        <p>Paham dari dasar sampai bisa lihat gambaran besarnya · Sesi praktik langsung &amp; grup diskusi alumni interaktif</p>
                    </div>

                    {/* ── WEEK 1 ── */}
                    <div className="week-divider">
                        <div className="week-badge">Week 1: 14–17 Sept</div>
                        <div className="week-line"></div>
                        <div className="week-dates">Sesi 1 – 4</div>
                    </div>

                    <div className="card-grid">
                        {/* SESI 1 */}
                        <div className="session-card">
                            <div className="card-topbar" style={{ background: '#219FDA' }}></div>
                            <div className="card-header">
                                <div className="session-icon" style={{ background: '#EBF8FF' }}>🧭</div>
                                <div className="card-meta">
                                    <div className="meta-top">
                                        <span className="sesi-badge" style={{ background: '#219FDA' }}>Sesi 1</span>
                                        <span className="tgl-badge">📅 14 Sept</span>
                                    </div>
                                    <div className="card-title">Mindset Investasi:<br />Sebuah Fondasi</div>
                                    <div className="card-subtitle">Membangun cara pandang yang benar sebelum analisa apapun dimulai</div>
                                </div>
                            </div>
                            <div className="hook-section">
                                <div className="hook-label">The Ugly Truth</div>
                                <div className="hook-text" style={{ borderColor: '#219FDA', color: '#1B3A5C' }}>
                                    Kebanyakan orang mengabaikan analisis sebelum membeli saham — dan itulah akar dari sebagian besar kerugian yang terjadi. Investasi yang benar dimulai dari mindset yang tepat.
                                </div>
                            </div>
                            <div className="body-section">
                                <div className="body-text">
                                    Sebelum angka, sebelum grafik, sebelum valuasi — ada satu hal yang menentukan nasib portofoliomu: <strong>cara kamu memandang perusahaan</strong>. Di sesi pembuka ini, kita bangun fondasi berpikir seperti seorang investor sejati, bukan spekulan. Karena tanpa mindset yang benar, tools analisa apapun tidak akan cukup.
                                </div>
                            </div>
                            <div className="topics-section">
                                <span className="topic-pill" style={{ color: '#219FDA', borderColor: '#BEE3F8', background: '#EBF8FF' }}>Dividen vs. Capital Gain</span>
                                <span className="topic-pill" style={{ color: '#219FDA', borderColor: '#BEE3F8', background: '#EBF8FF' }}>3 Pilar Value Investing</span>
                                <span className="topic-pill" style={{ color: '#219FDA', borderColor: '#BEE3F8', background: '#EBF8FF' }}>Perusahaan sebagai Mesin Uang</span>
                                <span className="topic-pill" style={{ color: '#219FDA', borderColor: '#BEE3F8', background: '#EBF8FF' }}>Conviction &amp; Patience</span>
                            </div>
                        </div>

                        {/* SESI 2 */}
                        <div className="session-card">
                            <div className="card-topbar" style={{ background: '#92400E' }}></div>
                            <div className="card-header">
                                <div className="session-icon" style={{ background: '#FEF3C7' }}>🎮</div>
                                <div className="card-meta">
                                    <div className="meta-top">
                                        <span className="sesi-badge" style={{ background: '#92400E' }}>Sesi 2</span>
                                        <span className="tgl-badge">📅 15 Sept</span>
                                    </div>
                                    <div className="card-title">Market Mechanics &amp;<br />Corporate Action</div>
                                    <div className="card-subtitle">Mengapa fundamental bagus tidak selalu cukup — dan siapa yang sebenarnya menggerakkan harga</div>
                                </div>
                            </div>
                            <div className="hook-section">
                                <div className="hook-label">The Ugly Truth</div>
                                <div className="hook-text" style={{ borderColor: '#92400E', color: '#1B3A5C' }}>
                                    Kamu sudah analisa dengan benar, valuasinya murah, tapi harganya tidak juga bergerak. Ini yang sebenarnya terjadi di balik layar.
                                </div>
                            </div>
                            <div className="body-section">
                                <div className="body-text">
                                    Pasar tidak selalu rasional — dan memahami <strong>mengapa harga bisa jauh dari nilai wajarnya</strong> dalam jangka pendek adalah perbedaan antara investor yang tenang dan yang panik. Di sesi ini kita buka mekanisme pasar yang jarang diajarkan: bagaimana narasi membentuk harga, bagaimana big money bergerak, dan bagaimana corporate action seperti dividen, buyback, rights issue, atau M&amp;A bisa menjadi katalis — atau jebakan.
                                </div>
                            </div>
                            <div className="topics-section">
                                <span className="topic-pill" style={{ color: '#92400E', borderColor: '#FDE68A', background: '#FEF3C7' }}>Mr. Market &amp; Narasi</span>
                                <span className="topic-pill" style={{ color: '#92400E', borderColor: '#FDE68A', background: '#FEF3C7' }}>Money Flow</span>
                                <span className="topic-pill" style={{ color: '#92400E', borderColor: '#FDE68A', background: '#FEF3C7' }}>Market Making &amp; Insider Perspective</span>
                                <span className="topic-pill" style={{ color: '#92400E', borderColor: '#FDE68A', background: '#FEF3C7' }}>Dividen &amp; Buyback</span>
                                <span className="topic-pill" style={{ color: '#92400E', borderColor: '#FDE68A', background: '#FEF3C7' }}>Rights Issue &amp; M&amp;A</span>
                            </div>
                        </div>

                        {/* SESI 3 */}
                        <div className="session-card">
                            <div className="card-topbar" style={{ background: '#7C3AED' }}></div>
                            <div className="card-header">
                                <div className="session-icon" style={{ background: '#F5F3FF' }}>🏢</div>
                                <div className="card-meta">
                                    <div className="meta-top">
                                        <span className="sesi-badge" style={{ background: '#7C3AED' }}>Sesi 3</span>
                                        <span className="tgl-badge">📅 16 Sept</span>
                                    </div>
                                    <div className="card-title">Memahami Model Bisnis<br />Emiten</div>
                                    <div className="card-subtitle">Baca bisnis seperti pebisnis — bukan sekadar lihat nama sahamnya</div>
                                </div>
                            </div>
                            <div className="hook-section">
                                <div className="hook-label">The Ugly Truth</div>
                                <div className="hook-text" style={{ borderColor: '#7C3AED', color: '#1B3A5C' }}>
                                    Saham yang sedang ramai dibicarakan bukan berarti pasti bagus. Memahami model bisnis emiten adalah satu hal yang wajib dilakukan.
                                </div>
                            </div>
                            <div className="body-section">
                                <div className="body-text">
                                    Sebelum buka laporan keuangan, kamu harus paham dulu <strong>bagaimana perusahaan itu menghasilkan uang</strong> — dari mana pendapatannya, apa cost driver-nya, dan apa yang membuat bisnis ini sulit ditiru. Di sesi ini kita bedah model bisnis emiten dan belajar identifikasi <em>economic moat</em> — perbedaan antara bisnis yang tahan lama dan yang sekadar "lagi hype".
                                </div>
                            </div>
                            <div className="topics-section">
                                <span className="topic-pill" style={{ color: '#7C3AED', borderColor: '#DDD6FE', background: '#F5F3FF' }}>Revenue &amp; Cost Structure</span>
                                <span className="topic-pill" style={{ color: '#7C3AED', borderColor: '#DDD6FE', background: '#F5F3FF' }}>Economic Moat</span>
                                <span className="topic-pill" style={{ color: '#7C3AED', borderColor: '#DDD6FE', background: '#F5F3FF' }}>Wonderful Companies</span>
                                <span className="topic-pill" style={{ color: '#7C3AED', borderColor: '#DDD6FE', background: '#F5F3FF' }}>Klasifikasi Saham</span>
                                <span className="topic-pill" style={{ color: '#7C3AED', borderColor: '#DDD6FE', background: '#F5F3FF' }}>Kualitas Manajemen</span>
                            </div>
                        </div>

                        {/* SESI 4 */}
                        <div className="session-card">
                            <div className="card-topbar" style={{ background: '#16A34A' }}></div>
                            <div className="card-header">
                                <div className="session-icon" style={{ background: '#DCFCE7' }}>📋</div>
                                <div className="card-meta">
                                    <div className="meta-top">
                                        <span className="sesi-badge" style={{ background: '#16A34A' }}>Sesi 4</span>
                                        <span className="tgl-badge">📅 17 Sept</span>
                                    </div>
                                    <div className="card-title">Analisis Laporan<br />Keuangan Emiten</div>
                                    <div className="card-subtitle">Baca 3 laporan yang menentukan nasib investasimu — dari angka ke insight</div>
                                </div>
                            </div>
                            <div className="hook-section">
                                <div className="hook-label">The Ugly Truth</div>
                                <div className="hook-text" style={{ borderColor: '#16A34A', color: '#1B3A5C' }}>
                                    Ada 3 dokumen publik yang berisi semua rahasia keuangan sebuah perusahaan. Sebagian besar investor tidak pernah membacanya dengan benar.
                                </div>
                            </div>
                            <div className="body-section">
                                <div className="body-text">
                                    Income Statement, Balance Sheet, Cash Flow Statement — bukan sekadar tiga tabel angka. Ketiganya adalah <strong>satu kesatuan cerita</strong> tentang kesehatan bisnis sebuah emiten. Di sesi ini kita pelajari cara membacanya secara terstruktur: apa yang harus dicari, apa yang sering diabaikan, dan bagaimana ketiga laporan saling terhubung untuk membentuk gambaran lengkap.
                                </div>
                            </div>
                            <div className="topics-section">
                                <span className="topic-pill" style={{ color: '#16A34A', borderColor: '#BBF7D0', background: '#DCFCE7' }}>Income Statement</span>
                                <span className="topic-pill" style={{ color: '#16A34A', borderColor: '#BBF7D0', background: '#DCFCE7' }}>Balance Sheet</span>
                                <span className="topic-pill" style={{ color: '#16A34A', borderColor: '#BBF7D0', background: '#DCFCE7' }}>Cash Flow Statement</span>
                                <span className="topic-pill" style={{ color: '#16A34A', borderColor: '#BBF7D0', background: '#DCFCE7' }}>Interkoneksi 3 Laporan</span>
                                <span className="topic-pill" style={{ color: '#16A34A', borderColor: '#BBF7D0', background: '#DCFCE7' }}>CALK &amp; Catatan Kaki</span>
                            </div>
                        </div>
                    </div>

                    {/* ── WEEK 2 ── */}
                    <div className="week-divider">
                        <div className="week-badge">Week 2: 21–24 Sept</div>
                        <div className="week-line"></div>
                        <div className="week-dates">Sesi 5 – 8</div>
                    </div>

                    <div className="card-grid">
                        {/* SESI 5 */}
                        <div className="session-card">
                            <div className="card-topbar" style={{ background: '#EA580C' }}></div>
                            <div className="card-header">
                                <div className="session-icon" style={{ background: '#FFF7ED' }}>📊</div>
                                <div className="card-meta">
                                    <div className="meta-top">
                                        <span className="sesi-badge" style={{ background: '#EA580C' }}>Sesi 5</span>
                                        <span className="tgl-badge">📅 21 Sept</span>
                                    </div>
                                    <div className="card-title">Analisis Rasio &amp;<br />Kinerja Keuangan Emiten</div>
                                    <div className="card-subtitle">Dari angka mentah ke kesimpulan investasi yang tajam dan terukur</div>
                                </div>
                            </div>
                            <div className="hook-section">
                                <div className="hook-label">The Ugly Truth</div>
                                <div className="hook-text" style={{ borderColor: '#EA580C', color: '#1B3A5C' }}>
                                    Laba bersih bisa saja dipoles — tapi seberapa meyakinkan angka tersebut? Di sinilah kita bicara kualitas laba: apakah yang tercetak di laporan keuangan mencerminkan value yang solid?
                                </div>
                            </div>
                            <div className="body-section">
                                <div className="body-text">
                                    Laporan keuangan hanya berguna kalau kamu tahu <strong>rasio apa yang harus dihitung</strong> dan <strong>apa artinya dalam konteks bisnis</strong>. Di sesi ini kita masuk ke analisis empat penjuru: profitabilitas, efisiensi, likuiditas, dan solvabilitas — plus cara membedakan perusahaan yang benar-benar sehat dari yang sekadar terlihat bagus di permukaan.
                                </div>
                            </div>
                            <div className="topics-section">
                                <span className="topic-pill" style={{ color: '#EA580C', borderColor: '#FED7AA', background: '#FFF7ED' }}>Profitabilitas &amp; Margin</span>
                                <span className="topic-pill" style={{ color: '#EA580C', borderColor: '#FED7AA', background: '#FFF7ED' }}>Efisiensi Operasional</span>
                                <span className="topic-pill" style={{ color: '#EA580C', borderColor: '#FED7AA', background: '#FFF7ED' }}>Likuiditas &amp; Solvabilitas</span>
                                <span className="topic-pill" style={{ color: '#EA580C', borderColor: '#FED7AA', background: '#FFF7ED' }}>Red Flags Keuangan</span>
                                <span className="topic-pill" style={{ color: '#EA580C', borderColor: '#FED7AA', background: '#FFF7ED' }}>Governance &amp; Manajemen</span>
                            </div>
                        </div>

                        {/* SESI 6 */}
                        <div className="session-card">
                            <div className="card-topbar" style={{ background: '#0369A1' }}></div>
                            <div className="card-header">
                                <div className="session-icon" style={{ background: '#E0F2FE' }}>🏷️</div>
                                <div className="card-meta">
                                    <div className="meta-top">
                                        <span className="sesi-badge" style={{ background: '#0369A1' }}>Sesi 6</span>
                                        <span className="tgl-badge">📅 22 Sept</span>
                                    </div>
                                    <div className="card-title">Valuasi 1: DCF &amp;<br />Intrinsic Value</div>
                                    <div className="card-subtitle">Cara menghitung berapa nilai wajar sebuah saham — sebelum memutuskan beli</div>
                                </div>
                            </div>
                            <div className="hook-section">
                                <div className="hook-label">The Ugly Truth</div>
                                <div className="hook-text" style={{ borderColor: '#0369A1', color: '#1B3A5C' }}>
                                    Harga saham memang ditentukan pasar, tapi nilai wajar sebuah bisnis bisa kamu hitung sendiri dengan metodologi yang sama yang dipakai analis dan fund manager profesional.
                                </div>
                            </div>
                            <div className="body-section">
                                <div className="body-text">
                                    DCF (Discounted Cash Flow) bukan sekadar rumus — ini adalah cara berpikir tentang <strong>nilai uang di masa depan</strong>. Di sesi ini kita bedah bagaimana institutional investor menghitung nilai intrinsik sebuah perusahaan, memahami asumsi-asumsi kritis di baliknya, dan menentukan berapa <em>margin of safety</em> yang layak sebelum memutuskan untuk beli.
                                </div>
                            </div>
                            <div className="topics-section">
                                <span className="topic-pill" style={{ color: '#0369A1', borderColor: '#BAE6FD', background: '#E0F2FE' }}>Risk-Return Framework</span>
                                <span className="topic-pill" style={{ color: '#0369A1', borderColor: '#BAE6FD', background: '#E0F2FE' }}>Discounted Cash Flow</span>
                                <span className="topic-pill" style={{ color: '#0369A1', borderColor: '#BAE6FD', background: '#E0F2FE' }}>Enterprise vs. Equity Value</span>
                                <span className="topic-pill" style={{ color: '#0369A1', borderColor: '#BAE6FD', background: '#E0F2FE' }}>WACC &amp; Terminal Value</span>
                                <span className="topic-pill" style={{ color: '#0369A1', borderColor: '#BAE6FD', background: '#E0F2FE' }}>Margin of Safety</span>
                            </div>
                        </div>

                        {/* SESI 7 */}
                        <div className="session-card">
                            <div className="card-topbar" style={{ background: '#DC2626' }}></div>
                            <div className="card-header">
                                <div className="session-icon" style={{ background: '#FEF2F2' }}>📏</div>
                                <div className="card-meta">
                                    <div className="meta-top">
                                        <span className="sesi-badge" style={{ background: '#DC2626' }}>Sesi 7</span>
                                        <span className="tgl-badge">📅 23 Sept</span>
                                    </div>
                                    <div className="card-title">Valuasi 2:<br />Relative Valuation</div>
                                    <div className="card-subtitle">PER, PBV, EV/EBITDA — cara cepat menilai apakah saham mahal atau murah vs. peers-nya</div>
                                </div>
                            </div>
                            <div className="hook-section">
                                <div className="hook-label">The Ugly Truth</div>
                                <div className="hook-text" style={{ borderColor: '#DC2626', color: '#1B3A5C' }}>
                                    PER rendah belum tentu murah. PER tinggi belum tentu mahal. Ini cara bacanya yang benar.
                                </div>
                            </div>
                            <div className="body-section">
                                <div className="body-text">
                                    Relative valuation bukan pelengkap — ini cara tercepat untuk tahu apakah pasar menghargai sebuah emiten secara <strong>terlalu mahal, terlalu murah, atau wajar</strong> dibanding kompetitornya. Di sesi ini kita pelajari kapan pakai PER, kapan pakai PBV, kapan EV/EBITDA lebih relevan — dan yang paling penting: bagaimana menghindari <em>value trap</em> yang sering menjerumuskan investor.
                                </div>
                            </div>
                            <div className="topics-section">
                                <span className="topic-pill" style={{ color: '#DC2626', borderColor: '#FECACA', background: '#FEF2F2' }}>PER &amp; Earnings Yield</span>
                                <span className="topic-pill" style={{ color: '#DC2626', borderColor: '#FECACA', background: '#FEF2F2' }}>PBV</span>
                                <span className="topic-pill" style={{ color: '#DC2626', borderColor: '#FECACA', background: '#FEF2F2' }}>Dividend Yield</span>
                                <span className="topic-pill" style={{ color: '#DC2626', borderColor: '#FECACA', background: '#FEF2F2' }}>Value Trap</span>
                                <span className="topic-pill" style={{ color: '#DC2626', borderColor: '#FECACA', background: '#FEF2F2' }}>Kapan Jual Saham</span>
                            </div>
                        </div>

                        {/* SESI 8 */}
                        <div className="session-card">
                            <div className="card-topbar" style={{ background: '#065F46' }}></div>
                            <div className="card-header">
                                <div className="session-icon" style={{ background: '#D1FAE5' }}>📈</div>
                                <div className="card-meta">
                                    <div className="meta-top">
                                        <span className="sesi-badge" style={{ background: '#065F46' }}>Sesi 8</span>
                                        <span className="tgl-badge">📅 24 Sept</span>
                                    </div>
                                    <div className="card-title">Big Picture &amp;<br />Smart Money Analysis</div>
                                    <div className="card-subtitle">Menyatukan seluruh kerangka analisa — dari laporan keuangan hingga timing pasar</div>
                                </div>
                            </div>
                            <div className="hook-section">
                                <div className="hook-label">The Ugly Truth</div>
                                <div className="hook-text" style={{ borderColor: '#065F46', color: '#1B3A5C' }}>
                                    Membaca pergerakan harga dari sudut pandang smart money — bagaimana akumulasi terbaca di chart, dan bagaimana analisis fundamental bertemu dengan situasi pasar yang mendukung.
                                </div>
                            </div>
                            <div className="body-section">
                                <div className="body-text">
                                    Di sesi penutup ini, semua yang sudah dipelajari disatukan menjadi satu framework yang utuh. Kita masuk ke peran <strong>technical analysis sebagai alat deteksi momentum</strong> — bukan pengganti fundamental — dan belajar membaca VWAP serta pola konsolidasi sebagai konfirmasi akumulasi institusional.
                                </div>
                            </div>
                            <div className="topics-section">
                                <span className="topic-pill" style={{ color: '#065F46', borderColor: '#A7F3D0', background: '#D1FAE5' }}>Investment Momentum</span>
                                <span className="topic-pill" style={{ color: '#065F46', borderColor: '#A7F3D0', background: '#D1FAE5' }}>VWAP Analysis</span>
                                <span className="topic-pill" style={{ color: '#065F46', borderColor: '#A7F3D0', background: '#D1FAE5' }}>Consolidation Patterns</span>
                                <span className="topic-pill" style={{ color: '#065F46', borderColor: '#A7F3D0', background: '#D1FAE5' }}>Akumulasi Institusional</span>
                                <span className="topic-pill" style={{ color: '#065F46', borderColor: '#A7F3D0', background: '#D1FAE5' }}>Grand Synthesis FA + TA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
                 SECTION 8 — PRICING
            ════════════════════════════════════════════════════════════════════════ */}
            <section className="pricing">
                <div className="inner">
                    <div className="pricing-left">
                        <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 900, color: 'var(--black)', marginBottom: '20px' }}>
                            Inside the Smart Money:<br />
                            <span style={{ color: 'var(--blue)' }}>a Guide to Institutional<br />Investment Strategies</span>
                        </h2>
                        <p style={{ fontSize: '12px', color: '#555', marginBottom: '20px' }}>Bridging the Gap of Fundamental, Insider, &amp; Technical Analysis</p>

                        <div className="fw-price-card">
                            <div className="fpc-header">
                                <div>
                                    <div className="fpc-label">Framework 1</div>
                                    <div className="fpc-title">The Insider Stories of Market Making</div>
                                </div>
                                <div className="fpc-price">Rp 20.000.000</div>
                            </div>
                            <div className="fpc-body">
                                <ul>
                                    <li>Three Element of Market Making</li>
                                    <li>Three Factors of Money Flows</li>
                                    <li>Sensitive Corporate Actions</li>
                                    <li>Portfolio Management</li>
                                </ul>
                            </div>
                        </div>

                        <div className="fw-price-card">
                            <div className="fpc-header">
                                <div>
                                    <div className="fpc-label">Framework 2</div>
                                    <div className="fpc-title">Big Money Investment Strategies</div>
                                </div>
                                <div className="fpc-price">Rp 10.000.000</div>
                            </div>
                            <div className="fpc-body">
                                <ul>
                                    <li>Alpha Stocks</li>
                                    <li>Main Goal of Institutional Investment</li>
                                    <li>Relationship between Institutional Action &amp; Price Analysis</li>
                                </ul>
                            </div>
                        </div>

                        <div className="fw-price-card">
                            <div className="fpc-header">
                                <div>
                                    <div className="fpc-label">Framework 3</div>
                                    <div className="fpc-title">How to Find Hidden Gems for Investing &amp; Trading</div>
                                </div>
                                <div className="fpc-price">Rp 10.000.000</div>
                            </div>
                            <div className="fpc-body">
                                <ul>
                                    <li>Finding Alpha Stocks</li>
                                    <li>Understanding the Institutional Valuation Concept</li>
                                    <li>Mastering the Key Financial Ratios</li>
                                    <li>Market Timing Strategy</li>
                                    <li>Investment Strategy</li>
                                    <li>Trading Strategy</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-right">
                        <h2>Fundamental Analysis<br />Masterclass</h2>
                        <div className="benefit-value">
                            Total Benefit Value<br />
                            <span>Rp 40.000.000,-</span>
                        </div>
                        <div className="price-box">
                            <div className="pb-label">Special Price</div>
                            <div className="pb-strikethrough">Rp 40.000.000,-</div>
                            <div className="pb-price">Rp 4.999.000,-</div>
                            <div className="pb-sub">
                                8 sesi online · 2 jam per sesi<br />
                                Grup diskusi alumni · Tools interaktif<br />
                            </div>
                        </div>
                        <a href="https://wa.me/6285890006618" target="_blank" rel="noopener noreferrer" className="cta-btn">Daftar Sekarang →</a>
                        <p className="pricing-note">
                            Private &amp; Limited Event · Tempat terbatas<br />
                            Hubungi admin untuk informasi pendaftaran
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
                 FOOTER
            ════════════════════════════════════════════════════════════════════════ */}
            <footer className="site-footer">
                <div className="brand"><span>Galeri</span>Saham.com</div>
                <div className="tagline">Your No.1 Learning Partner in Financial Market · Building A Better Investment Society</div>
            </footer>
        </div>
    );
};

export default ClassPage;
