document.querySelector('.menu-icon').addEventListener('click', function (event) {
    event.stopPropagation();
    document.querySelector('.menu-dialog').showModal();
});

document.querySelector('.menu-dialog .close-btn').addEventListener('click', function () {
    document.querySelector('.menu-dialog').close();
});

document.querySelector('.menu-dialog').addEventListener('click', function (event) {
    if (event.target === this) {
        this.close();
    }
});

document.getElementById('report-issue-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('languageModal').showModal();
});

document.querySelector('.report-dialog .close-btn').addEventListener('click', function () {
    document.querySelector('.report-dialog').close();
});

document.querySelector('.report-dialog').addEventListener('click', function (event) {
    if (event.target === this) {
        this.close();
    }
});

document.getElementById('languageModal').addEventListener('click', function (event) {
    if (event.target === this) {
        selectLanguage('id');
        this.close();
    }
});

document.getElementById('search-input').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const appCards = document.querySelectorAll('.app-card');

    appCards.forEach(card => {
        const appName = card.getAttribute('data-name').toLowerCase();
        if (appName.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('active');
        }, index * 100);
    });

    const player = document.getElementById('musicPlayer');
    player.src = 'bidzz1.mp3';
});

document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('click', function (event) {
        event.preventDefault();
        const path = this.getAttribute('data-path');
        if (path) {
            window.location.href = path;
        }
    });
});

const formSection = document.getElementById('formSection');
const aboutSection = document.getElementById('aboutSection');
const formLink = document.getElementById('formLink');
const aboutLink = document.getElementById('aboutLink');
const indicator = document.querySelector('.nav-container .indicator');
const requestForm = document.getElementById('requestForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const requestInput = document.getElementById('request');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const requestError = document.getElementById('requestError');
const content = document.getElementById('content');
const languageModal = document.getElementById('languageModal');

const BOT_TOKEN = '6998178034:AAEtu1Cux0tYA8xi0QHsK7BPeQB2K3f4Qps';
const CHAT_ID_1 = '-1002684590116';
const CHAT_ID_2 = '-1002358173918';

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

let currentLanguage = 'id';

function updateIndicator(target) {
    const rect = target.getBoundingClientRect();
    const containerRect = document.querySelector('.nav-container').getBoundingClientRect();
    indicator.style.width = `${rect.width}px`;
    indicator.style.left = `${rect.left - containerRect.left}px`;
}

function showForm() {
    formSection.style.display = 'flex';
    aboutSection.style.display = 'none';
    formLink.classList.add('active');
    aboutLink.classList.remove('active');
    updateIndicator(formLink);
}

function showAbout() {
    formSection.style.display = 'none';
    aboutSection.style.display = 'block';
    formLink.classList.remove('active');
    aboutLink.classList.add('active');
    updateIndicator(aboutLink);
}

function selectLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    document.documentElement.lang = lang;
    formLink.textContent = t.formLink;
    aboutLink.textContent = t.aboutLink;
    document.getElementById('formTitle').textContent = t.formTitle;
    document.getElementById('aboutTitle').textContent = t.aboutTitle;
    document.getElementById('nameLabel').textContent = t.nameLabel;
    document.getElementById('nameError').textContent = t.nameError;
    document.getElementById('emailLabel').textContent = t.emailLabel;
    document.getElementById('emailError').textContent = t.emailError;
    document.getElementById('requestLabel').textContent = t.requestLabel;
    document.getElementById('requestError').textContent = t.requestError;
    document.getElementById('linksLabel').textContent = t.linksLabel;
    document.getElementById('submitButton').textContent = t.submitButton;

    const instructionsList = document.getElementById('formInstructions');
    instructionsList.innerHTML = '';
    t.formInstructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    languageModal.close();
    document.querySelector('.report-dialog').showModal();
    showForm();
}

function selectLoginLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    document.getElementById('loginGoogleContent').innerHTML = t.loginGoogleContent;
    document.getElementById('loginGoogleTitle').textContent = t.loginGoogleTitle;

    document.querySelectorAll('#loginGoogleModal .lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(lang === 'id' ? 'indonesia' : 'inggris')) {
            btn.classList.add('active');
        }
    });
}

function selectMusicLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    document.getElementById('musicPlayerTitle').textContent = t.musicPlayerTitle;
    updateCurrentTrack();

    document.querySelectorAll('#musicPlayerModal .lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(lang === 'id' ? 'indonesia' : 'inggris')) {
            btn.classList.add('active');
        }
    });
}

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
        console.log(`Respons dari Telegram untuk ${chatId}:`, data);
        if (!response.ok) {
            throw new Error(`Telegram API error: ${data.description || 'Unknown error'}`);
        }
        console.log(`Pesan berhasil dikirim ke ${chatId}`);
        return true;
    } catch (error) {
        console.error(`Gagal mengirim ke ${chatId}:`, error.message);
        return false;
    }
}

formLink.addEventListener('click', function (e) {
    e.preventDefault();
    showForm();
});

aboutLink.addEventListener('click', function (e) {
    e.preventDefault();
    showAbout();
});

requestForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    let isValid = true;

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    requestError.style.display = 'none';

    if (!nameInput.value.trim()) {
        nameError.style.display = 'block';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    if (!requestInput.value.trim()) {
        requestError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        const name = nameInput.value;
        const email = emailInput.value;
        const request = requestInput.value;
        const links = document.getElementById('links').value || (currentLanguage === 'id' ? 'Tidak ada link disertakan' : 'No links provided');
        
        const fullMessage = translations[currentLanguage].telegramMessageFull(name, email, request, links);
        const publicMessage = translations[currentLanguage].telegramMessagePublic(name, request, links);

        const responseDiv = document.getElementById('response');
        const sentToBidzz = await sendToTelegram(CHAT_ID_1, fullMessage);
        const sentToMembers = await sendToTelegram(CHAT_ID_2, publicMessage);
        
        if (sentToBidzz && sentToMembers) {
            responseDiv.textContent = translations[currentLanguage].successMessage(name, email);
            responseDiv.className = 'success';
        } else {
            responseDiv.textContent = `Gagal mengirim laporan: ${!sentToBidzz ? 'Gagal ke grup privat' : ''} ${!sentToMembers ? 'Gagal ke grup publik' : ''}`;
            responseDiv.className = 'error';
        }
        responseDiv.style.display = 'block';
        
        this.reset();
    }
});

window.addEventListener('resize', () => {
    if (formLink.classList.contains('active')) {
        updateIndicator(formLink);
    } else {
        updateIndicator(aboutLink);
    }
});

document.querySelector('#languageModal .close-btn').addEventListener('click', function () {
    selectLanguage('id');
    languageModal.close();
});

document.getElementById('login-google-link').addEventListener('click', function (event) {
    event.preventDefault();
    selectLoginLanguage(currentLanguage);
    document.getElementById('loginGoogleModal').showModal();
});

document.querySelector('#loginGoogleModal .close-btn').addEventListener('click', function () {
    document.getElementById('loginGoogleModal').close();
});

document.getElementById('loginGoogleModal').addEventListener('click', function (event) {
    if (event.target === this) {
        this.close();
    }
});

document.getElementById('music-player-link').addEventListener('click', function (event) {
    event.preventDefault();
    selectMusicLanguage(currentLanguage);
    document.getElementById('musicPlayerModal').showModal();
});

document.querySelector('#musicPlayerModal .close-btn').addEventListener('click', function () {
    document.getElementById('musicPlayerModal').close();
});

document.getElementById('musicPlayerModal').addEventListener('click', function (event) {
    if (event.target === this) {
        this.close();
    }
});

const player = document.getElementById('musicPlayer');
const playPauseBtn = document.getElementById('playPause');
const prevTrackBtn = document.getElementById('prevTrack');
const nextTrackBtn = document.getElementById('nextTrack');
const trackSelector = document.getElementById('trackSelector');
const currentTrackDisplay = document.getElementById('currentTrack');
let currentTrackIndex = 0;
const tracks = Array.from({length: 10}, (_, i) => `bidzz${i + 1}.mp3`);

function updateCurrentTrack() {
    currentTrackDisplay.textContent = translations[currentLanguage].currentTrack.replace('{n}', currentTrackIndex + 1);
}

function playTrack(index) {
    currentTrackIndex = index;
    player.src = tracks[currentTrackIndex];
    trackSelector.value = tracks[currentTrackIndex];
    player.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    updateCurrentTrack();
}

playPauseBtn.addEventListener('click', function () {
    if (player.paused) {
        player.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        player.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

prevTrackBtn.addEventListener('click', function () {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playTrack(currentTrackIndex);
});

nextTrackBtn.addEventListener('click', function () {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
});

trackSelector.addEventListener('change', function () {
    currentTrackIndex = tracks.indexOf(this.value);
    playTrack(currentTrackIndex);
});

player.addEventListener('ended', function () {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
});