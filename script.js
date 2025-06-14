// Konfigurasi Telegram
const BOT_TOKEN = '6998178034:AAEtu1Cux0tYA8xi0QHsK7BPeQB2K3f4Qps';
const CHAT_ID_1 = '-1002684590116';
const CHAT_ID_2 = '-1002358173918';

// Objek terjemahan
const translations = {
    id: {
        formLink: "Formulir",
        aboutLink: "Cara Mengisi",
        formTitle: "Formulir Laporan",
        aboutTitle: "Cara Mengisi Formulir",
        nameLabel: "Nama Lengkap:",
        nameError: "Nama wajib diisi",
        emailLabel: "Email:",
        emailError: "Email wajib diisi dengan format yang benar",
        requestLabel: "Deskripsi Laporan",
        requestError: "Deskripsi wajib diisi",
        linksLabel: "Links Example (opsional):",
        submitButton: "Kirim Laporan",
        formInstructions: [
            "Masukkan nama lengkap Anda pada kolom \"Nama Lengkap\".",
            "Isi alamat email yang valid pada kolom \"Email\" untuk menerima konfirmasi.",
            "Jelaskan masalah atau laporan Anda secara rinci pada kolom \"Deskripsi Laporan\".",
            "(Opsional) Tambahkan tautan pendukung, seperti tangkapan layar, pada kolom \"Links Example\".",
            "Klik tombol \"Kirim Laporan\" untuk mengirim laporan Anda ke admin."
        ],
        successMessage: (name, email) => `Terima kasih ${name}! Laporan Anda telah dikirim ke admin via Telegram. Jika disetujui, Anda akan menerima konfirmasi melalui email ${email}.`,
        errorMessage: "Gagal mengirim laporan. Silakan coba lagi nanti.",
        telegramMessageFull: (name, email, request, links) =>
            `⚠️ Laporan Baru ⚠️\n👤 Nama: ${name}\n📧 Email: ${email}\n📝 Deskripsi: ${request}\n🔗 Link: ${links}`,
        telegramMessagePublic: (name, request, links) =>
            `⚠️ Laporan Baru ⚠️\n👤 Nama: ${name}\n📝 Deskripsi: ${request}\n🔗 Link: ${links}`,
        telegramLink: "Lihat Semua Permintaan di Channel Telegram",
        loginGoogleTitle: "Panduan Login Google",
        loginGoogleContent: `
            <p><strong>Panduan Jika Kalian Ingin Login Akun Lewat Google Untuk Aplikasi MOD</strong></p>
            <ol>
                <li>Install aplikasi original.</li>
                <li>Jika sudah pernah login di aplikasi original, lakukan logout terlebih dahulu.</li>
                <li>Login kembali ke aplikasi original.</li>
                <li>Setelah berhasil login, uninstall aplikasi original.</li>
                <li>Install aplikasi mod.</li>
                <li>Login di aplikasi mod.</li>
            </ol>
            <p><em>"Mungkin Cara Ini Bisa Juga Untuk Aplikasi MOD Lainnya Yang Jika Kalian Ingin Login Akun Google"</em></p>
            <h3>▲ Catatan Penting:</h3>
            <p>Pastikan melakukan langkah-langkah di atas dengan cepat! Semisalkan login masih gagal, coba lakukan hal berikut:</p>
            <ul>
                <li>Paksa berhenti atau hapus data Google Play Services / Layanan Google Play.</li>
                <li>Kemudian, ulangi proses dari langkah 1.</li>
            </ul>
            <p><strong>Semoga berhasil!</strong></p>
        `,
        musicPlayerTitle: "Pemutar Musik",
        currentTrack: "Sedang Diputar: Music {n}"
    },
    en: {
        formLink: "Form",
        aboutLink: "How to Fill",
        formTitle: "Report Form",
        aboutTitle: "How to Fill the Form",
        nameLabel: "Full Name:",
        nameError: "Name is required",
        emailLabel: "Email:",
        emailError: "Email is required and must be in a valid format",
        requestLabel: "Report Description",
        requestError: "Description is required",
        linksLabel: "Example Links (optional):",
        submitButton: "Submit Report",
        formInstructions: [
            "Enter your full name in the \"Full Name\" field.",
            "Provide a valid email address in the \"Email\" field to receive confirmation.",
            "Describe your issue or report in detail in the \"Report Description\" field.",
            "(Optional) Add supporting links, such as screenshots, in the \"Example Links\" field.",
            "Click the \"Submit Report\" button to send your report to the admin."
        ],
        successMessage: (name, email) => `Thank you ${name}! Your report has been sent to the admin via Telegram. If approved, you will receive a confirmation via email at ${email}.`,
        errorMessage: "Failed to send request. Please try again later.",
        telegramMessageFull: (name, email, request, links) =>
            `⚠️ New Report ⚠️\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Description: ${request}\n🔗 Link: ${links}`,
        telegramMessagePublic: (name, request, links) =>
            `⚠️ New Report ⚠️\n👤 Name: ${name}\n📝 Description: ${request}\n🔗 Link: ${links}`,
        telegramLink: "View All Requests on Telegram Channel",
        loginGoogleTitle: "Google Login Guide",
        loginGoogleContent: `
            <p><strong>Guide for Logging into MOD Apps Using Google</strong></p>
            <ol>
                <li>Install the original app.</li>
                <li>If you have previously logged in to the original app, log out first.</li>
                <li>Log back into the original app.</li>
                <li>After successfully logging in, uninstall the original app.</li>
                <li>Install the modded app.</li>
                <li>Log in to the modded app.</li>
            </ol>
            <p><em>"This method might also work for other MOD apps if you want to log in with a Google account."</em></p>
            <h3>▲ Important Note:</h3>
            <p>Ensure you follow the steps above quickly! If the login still fails, try the following:</p>
            <ul>
                <li>Force stop or clear data for Google Play Services.</li>
                <li>Then, repeat the process from step 1.</li>
            </ul>
            <p><strong>Good luck!</strong></p>
        `,
        musicPlayerTitle: "Music Player",
        currentTrack: "Now Playing: Music {n}"
    }
};

// State bahasa saat ini
let currentLanguage = 'id';

// IntersectionObserver untuk animasi elemen saat masuk ke viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Inisialisasi saat dokumen dimuat
document.addEventListener('DOMContentLoaded', function () {
    const formLink = document.getElementById('formLink');
    const aboutLink = document.getElementById('aboutLink');
    const formSection = document.getElementById('formSection');
    const aboutSection = document.getElementById('aboutSection');
    const indicator = document.querySelector('.nav-container .indicator');

    // Periksa elemen kritis
    if (!formSection || !aboutSection || !formLink || !aboutLink) {
        console.error('Salah satu elemen kritis tidak ditemukan:', {
            formSection: !!formSection,
            aboutSection: !!aboutSection,
            formLink: !!formLink,
            aboutLink: !!aboutLink
        });
        return;
    }

    // Animasi untuk app-card
    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach(card => {
        observer.observe(card);
    });

    // Inisialisasi music player
    const player = document.getElementById('musicPlayer');
    if (player) {
        player.src = 'bidzz1.mp3';
        updateCurrentTrack();
    } else {
        console.warn('Elemen #musicPlayer tidak ditemukan di DOM');
    }

    // Inisialisasi konten login Google
    selectLoginLanguage(currentLanguage);

    // Set indikator awal untuk navigasi report dialog
    if (formLink && formLink.classList.contains('active')) {
        showForm();
    }

    // Pastikan event listener untuk modal terikat
    setupModalLinks();

    // Event listener untuk tab navigasi
    formLink.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Form Link clicked');
        showForm();
    });

    aboutLink.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('About Link clicked');
        showAbout();
    });
});

// Fungsi untuk mengatur event listener modal
function setupModalLinks() {
    const reportIssueLink = document.getElementById('report-issue-link');
    const loginGoogleLink = document.getElementById('login-google-link');
    const musicPlayerLink = document.getElementById('music-player-link');

    if (reportIssueLink) {
        reportIssueLink.addEventListener('click', function (event) {
            event.preventDefault();
            const languageModal = document.getElementById('languageModal');
            if (languageModal) {
                languageModal.showModal();
            } else {
                console.error('Elemen #languageModal tidak ditemukan');
            }
        });
    } else {
        console.warn('Elemen #report-issue-link tidak ditemukan');
    }

    if (loginGoogleLink) {
        loginGoogleLink.addEventListener('click', function (event) {
            event.preventDefault();
            selectLoginLanguage(currentLanguage);
            const loginGoogleModal = document.getElementById('loginGoogleModal');
            if (loginGoogleModal) {
                const loginGoogleContent = document.getElementById('loginGoogleContent');
                if (loginGoogleContent) {
                    loginGoogleContent.style.display = 'block';
                    loginGoogleContent.style.opacity = '1';
                }
                loginGoogleModal.showModal();
            } else {
                console.error('Elemen #loginGoogleModal tidak ditemukan');
            }
        });
    } else {
        console.warn('Elemen #login-google-link tidak ditemukan');
    }

    if (musicPlayerLink) {
        musicPlayerLink.addEventListener('click', function (event) {
            event.preventDefault();
            selectMusicLanguage(currentLanguage);
            const musicPlayerModal = document.getElementById('musicPlayerModal');
            if (musicPlayerModal) {
                const musicPlayerContent = document.getElementById('musicPlayerContent');
                if (musicPlayerContent) {
                    musicPlayerContent.style.display = 'block';
                    musicPlayerContent.style.opacity = '1';
                }
                musicPlayerModal.showModal();
            } else {
                console.error('Elemen #musicPlayerModal tidak ditemukan');
            }
        });
    } else {
        console.warn('Elemen #music-player-link tidak ditemukan');
    }

    // Event listener untuk semua dialog (termasuk close button)
    document.querySelectorAll('.menu-dialog, .report-dialog, #languageModal, #loginGoogleModal, #musicPlayerModal').forEach(dialog => {
        dialog.addEventListener('click', function (event) {
            if (event.target === this) {
                this.close();
            }
        });
        const closeBtn = dialog.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                dialog.close();
                console.log(`Dialog closed: ${dialog.id}`);
            });
        } else {
            console.warn(`Close button not found for dialog: ${dialog.id}`);
        }
    });

    // Event listener spesifik untuk loginGoogleModal
    const loginGoogleModal = document.getElementById('loginGoogleModal');
    const loginGoogleCloseBtn = loginGoogleModal?.querySelector('.close-btn');
    if (loginGoogleCloseBtn) {
        loginGoogleCloseBtn.addEventListener('click', function (event) {
            event.stopPropagation();
            loginGoogleModal.close();
            console.log('Login Google Modal closed');
        });
    } else {
        console.warn('Close button for loginGoogleModal not found');
    }
}

// Transisi halaman
document.querySelectorAll('.app-card, .menu-item a').forEach(link => {
    link.addEventListener('click', function (event) {
        const path = this.getAttribute('data-path') || this.getAttribute('href');
        if (path && path !== '#' && !path.startsWith('http')) {
            event.preventDefault();
            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = path;
            }, 300);
        }
    });
});

// Handler untuk menu dialog
document.querySelector('.menu-icon')?.addEventListener('click', function (event) {
    event.stopPropagation();
    const menuDialog = document.querySelector('.menu-dialog');
    if (menuDialog) {
        menuDialog.showModal();
        const menuItems = menuDialog.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('active');
        });
    } else {
        console.error('Elemen .menu-dialog tidak ditemukan');
    }
});

// Reset modal saat ditutup
document.querySelectorAll('#loginGoogleModal, #musicPlayerModal').forEach(dialog => {
    dialog.addEventListener('close', function () {
        const content = this.querySelector('#loginGoogleContent, #musicPlayerContent');
        if (content) {
            content.style.display = 'none';
            content.style.opacity = '0';
        }
        if (this.id === 'musicPlayerModal' && player) {
            player.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
});

// Pencarian aplikasi
document.getElementById('search-input')?.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const appCards = document.querySelectorAll('.app-card');

    appCards.forEach((card, index) => {
        const appName = card.getAttribute('data-name').toLowerCase();
        if (appName.includes(searchTerm)) {
            card.classList.remove('hidden');
            setTimeout(() => {
                card.classList.add('active');
            }, index * 50);
        } else {
            card.classList.add('hidden');
            card.classList.remove('active');
        }
    });
});

// Navigasi report dialog
const formSection = document.getElementById('formSection');
const aboutSection = document.getElementById('aboutSection');
const formLink = document.getElementById('formLink');
const aboutLink = document.getElementById('aboutLink');
const indicator = document.querySelector('.nav-container .indicator');

function updateIndicator(target) {
    if (target && indicator) {
        const rect = target.getBoundingClientRect();
        const containerRect = document.querySelector('.nav-container').getBoundingClientRect();
        indicator.style.width = `${rect.width}px`;
        indicator.style.left = `${rect.left - containerRect.left}px`;
    }
}

function showForm() {
    if (formSection && aboutSection && formLink && aboutLink) {
        formSection.classList.add('active');
        aboutSection.classList.remove('active');
        formLink.classList.add('active');
        aboutLink.classList.remove('active');
        updateIndicator(formLink);
        formSection.style.display = 'flex';
        aboutSection.style.display = 'none';
        const formGroups = formSection.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            setTimeout(() => {
                group.classList.add('active');
            }, index * 100);
        });
    } else {
        console.warn('Elemen formSection, aboutSection, formLink, atau aboutLink tidak ditemukan');
    }
}

function showAbout() {
    if (formSection && aboutSection && formLink && aboutLink) {
        console.log('Showing About Section');
        formSection.classList.remove('active');
        aboutSection.classList.add('active');
        formLink.classList.remove('active');
        aboutLink.classList.add('active');
        updateIndicator(aboutLink);
        formSection.style.display = 'none';
        aboutSection.style.display = 'flex';
        const listItems = aboutSection.querySelectorAll('li');
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
            }, index * 100);
        });
    } else {
        console.warn('Elemen formSection, aboutSection, formLink, atau aboutLink tidak ditemukan');
    }
}

// Pengiriman form
const requestForm = document.getElementById('requestForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const requestInput = document.getElementById('request');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const requestError = document.getElementById('requestError');
const responseDiv = document.getElementById('response');

async function sendToTelegram(chatId, message) {
    if (encodeURIComponent(message).length > 4096) {
        console.error(`Pesan ke ${chatId} terlalu panjang`);
        return false;
    }
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Telegram API error: ${data.description || 'Unknown error'}`);
        }
        return true;
    } catch (error) {
        console.error(`Gagal mengirim ke ${chatId}:`, error.message);
        return false;
    }
}

if (requestForm) {
    requestForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        let isValid = true;

        if (nameError) nameError.style.display = 'none';
        if (emailError) emailError.style.display = 'none';
        if (requestError) requestError.style.display = 'none';

        if (!nameInput?.value.trim()) {
            if (nameError) nameError.style.display = 'block';
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput?.value.trim() || !emailPattern.test(emailInput.value)) {
            if (emailError) emailError.style.display = 'block';
            isValid = false;
        }

        if (!requestInput?.value.trim()) {
            if (requestError) requestError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const request = requestInput.value.trim();
            const links = document.getElementById('links')?.value.trim() || translations[currentLanguage].linksLabel;

            const fullMessage = translations[currentLanguage].telegramMessageFull(name, email, request, links);
            const publicMessage = translations[currentLanguage].telegramMessagePublic(name, request, links);

            if (responseDiv) {
                responseDiv.classList.remove('active');
                const sentToBidzz = await sendToTelegram(CHAT_ID_1, fullMessage);
                const sentToMembers = await sendToTelegram(CHAT_ID_2, publicMessage);

                if (sentToBidzz) {
                    responseDiv.textContent = translations[currentLanguage].successMessage(name, email);
                    responseDiv.className = 'success';
                } else {
                    responseDiv.textContent = translations[currentLanguage].errorMessage;
                    responseDiv.className = 'error';
                }
                responseDiv.style.display = 'block';
                setTimeout(() => {
                    responseDiv.classList.add('active');
                }, 50);
            }

            requestForm.reset();
        }
    });
}

// Seleksi bahasa
const languageModal = document.getElementById('languageModal');

function selectLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    document.documentElement.lang = lang;

    if (formLink) formLink.textContent = t.formLink;
    if (aboutLink) aboutLink.textContent = t.aboutLink;
    if (document.getElementById('formTitle')) document.getElementById('formTitle').textContent = t.formTitle;
    if (document.getElementById('aboutTitle')) document.getElementById('aboutTitle').textContent = t.aboutTitle;
    if (document.getElementById('nameLabel')) document.getElementById('nameLabel').textContent = t.nameLabel;
    if (document.getElementById('nameError')) document.getElementById('nameError').textContent = t.nameError;
    if (document.getElementById('emailLabel')) document.getElementById('emailLabel').textContent = t.emailLabel;
    if (document.getElementById('emailError')) document.getElementById('emailError').textContent = t.emailError;
    if (document.getElementById('requestLabel')) document.getElementById('requestLabel').textContent = t.requestLabel;
    if (document.getElementById('requestError')) document.getElementById('requestError').textContent = t.requestError;
    if (document.getElementById('linksLabel')) document.getElementById('linksLabel').textContent = t.linksLabel;
    if (document.getElementById('submitButton')) document.getElementById('submitButton').textContent = t.submitButton;

    const instructionsList = document.getElementById('formInstructions');
    if (instructionsList) {
        instructionsList.innerHTML = '';
        t.formInstructions.forEach((instruction, index) => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
            setTimeout(() => {
                li.classList.add('active');
            }, index * 100);
        });
    }

    if (languageModal) {
        languageModal.close();
    }
    const reportDialog = document.querySelector('.report-dialog');
    if (reportDialog) {
        reportDialog.showModal();
        showForm();
    }
}

function selectLoginLanguage(lang) {
    console.log('selectLoginLanguage called with lang:', lang);
    currentLanguage = lang;
    const t = translations[lang];
    const loginGoogleContent = document.getElementById('loginGoogleContent');
    const loginGoogleTitle = document.getElementById('loginGoogleTitle');

    if (loginGoogleContent && loginGoogleTitle) {
        console.log('Setting loginGoogleContent:', t.loginGoogleContent);
        loginGoogleContent.innerHTML = t.loginGoogleContent;
        loginGoogleTitle.textContent = t.loginGoogleTitle;
        loginGoogleContent.classList.remove('active');
        setTimeout(() => {
            loginGoogleContent.classList.add('active');
        }, 50);
    } else {
        console.error('Elemen #loginGoogleContent atau #loginGoogleTitle tidak ditemukan');
    }

    const langButtons = document.querySelectorAll('#loginGoogleModal .lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(lang === 'id' ? 'indonesia' : 'inggris')) {
            btn.classList.add('active');
        }
    });
}

function selectMusicLanguage(lang) {
    console.log('selectMusicLanguage called with lang:', lang);
    currentLanguage = lang;
    const t = translations[lang];
    const musicPlayerTitle = document.getElementById('musicPlayerTitle');
    const musicPlayerContent = document.getElementById('musicPlayerContent');

    if (musicPlayerTitle && musicPlayerContent) {
        console.log('Setting musicPlayerTitle:', t.musicPlayerTitle);
        musicPlayerTitle.textContent = t.musicPlayerTitle;
        musicPlayerContent.style.display = 'block';
        musicPlayerContent.style.opacity = '1';
        musicPlayerContent.classList.remove('active');
        setTimeout(() => {
            musicPlayerContent.classList.add('active');
        }, 50);
        updateCurrentTrack();
    } else {
        console.error('Elemen #musicPlayerTitle atau #musicPlayerContent tidak ditemukan');
    }

    const langButtons = document.querySelectorAll('#musicPlayerModal .lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(lang === 'id' ? 'indonesia' : 'inggris')) {
            btn.classList.add('active');
        }
    });
}

// Kontrol music player
const player = document.getElementById('musicPlayer');
const playPauseBtn = document.getElementById('playPause');
const prevTrackBtn = document.getElementById('prevTrack');
const nextTrackBtn = document.getElementById('nextTrack');
const trackSelector = document.getElementById('trackSelector');
const currentTrackDisplay = document.getElementById('currentTrack');
let currentTrackIndex = 0;
const tracks = Array.from({length: 10}, (_, i) => `bidzz${i + 1}.mp3`);

function updateCurrentTrack() {
    if (currentTrackDisplay) {
        currentTrackDisplay.textContent = translations[currentLanguage].currentTrack.replace('{n}', currentTrackIndex + 1);
        currentTrackDisplay.classList.remove('active');
        setTimeout(() => {
            currentTrackDisplay.classList.add('active');
        }, 50);
    } else {
        console.warn('Elemen #currentTrack tidak ditemukan');
    }
}

function playTrack(index) {
    currentTrackIndex = index;
    if (player && trackSelector) {
        player.src = tracks[currentTrackIndex];
        trackSelector.value = tracks[currentTrackIndex];
        player.play().catch(error => {
            console.error('Gagal memutar audio:', error);
        });
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        updateCurrentTrack();
    } else {
        console.error('Elemen #musicPlayer atau #trackSelector tidak ditemukan');
    }
}

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', function () {
        if (player) {
            if (player.paused) {
                player.play().catch(error => {
                    console.error('Gagal memutar audio:', error);
                });
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                player.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        }
    });
}

if (prevTrackBtn) {
    prevTrackBtn.addEventListener('click', function () {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    });
}

if (nextTrackBtn) {
    nextTrackBtn.addEventListener('click', function () {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    });
}

if (trackSelector) {
    trackSelector.addEventListener('change', function () {
        currentTrackIndex = tracks.indexOf(this.value);
        playTrack(currentTrackIndex);
    });
}

if (player) {
    player.addEventListener('ended', function () {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    });
}

// Handler resize untuk indikator
window.addEventListener('resize', () => {
    if (formLink && formLink.classList.contains('active')) {
        updateIndicator(formLink);
    } else if (aboutLink) {
        updateIndicator(aboutLink);
    }
});

// Reduced motion untuk aksesibilitas
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.transition = 'none';
        el.style.animation = 'none';
    });
}