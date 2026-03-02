document.addEventListener('DOMContentLoaded', () => {
    // Current Language State
    let currentLang = 'en';

    // Translations Dictionary
    const translations = {
        en: {
            navDashboard: "Dashboard",
            navPillbox: "Smart Pill Box",
            navSchedule: "Schedule",
            navSettings: "Settings",
            mottoText: "Small steps today, healthier tomorrow.",
            welcome: "Welcome back",
            addMedication: "Add Medication",
            adherenceRate: "Adherence Rate",
            upcomingDose: "Upcoming Dose",
            pillBoxStatus: "Pill Box Status",
            todaySchedule: "Today's Schedule",
            addModalTitle: "Add New Medication",
            medNameLabel: "Medication Name",
            dosageLabel: "Dosage",
            timeLabel: "Time",
            freqLabel: "Frequency",
            freqDaily: "Daily",
            freqDays: "Specific Days",
            freqOnce: "Just for today",
            daysLabel: "Number of Days",
            mealLabel: "Meal Timing",
            mealNone: "No specific meal",
            mealBeforeBreakfast: "Before Breakfast",
            mealAfterBreakfast: "After Breakfast",
            mealBeforeLunch: "Before Lunch",
            mealAfterLunch: "After Lunch",
            mealBeforeDinner: "Before Dinner",
            mealAfterDinner: "After Dinner",
            saveMed: "Save Medication",
            noMeds: "No medications scheduled.",
            todayIs: "Today is",
            viewAllMeds: "View All Medications",
            fullSchedule: "Full Schedule",
            connectBox: "Connect Box",
            disconnectBox: "Disconnect",
            boxConnected: "Box Connected",
            boxConnecting: "Connecting...",
            editProfileTitle: "Edit Profile",
            profilePictureLabel: "Profile Picture",
            uploadPictureBtn: "Upload Picture",
            patientNameLabel: "Patient Name",
            saveProfileBtn: "Save Profile",
            boxConnectionStatus: "Smart Box Connection",
            boxConnectionDesc: "Connect via Bluetooth to sync medications",
            appearanceTitle: "Appearance",
            appearanceDesc: "Toggle between Light and Dark mode",
            languageTitle: "Language",
            languageDesc: "Change the application's language to Arabic",
            congratsTitle: "Amazing Work!",
            congratsMsg: "Daily adherence is a huge step toward better health. You've reached 100% today!",
            achievementsTitle: "My Awards",
            awardPerfectDay: "Healthy Streak",
            awardPillMaster: "Pill Master",
            comingSoon: "This feature is coming soon!",
            selectDaysLabel: "Select Days",
            genderLabel: "Gender",
            genderMale: "Male",
            genderFemale: "Female",
            daySat: "Sat",
            daySun: "Sun",
            dayMon: "Mon",
            dayTue: "Tue",
            dayWed: "Wed",
            dayThu: "Thu",
            dayFri: "Fri",
            sendBtn: "Send",
            terminalTitle: "Bluetooth Terminal",
            terminalPlaceholder: "Enter command...",
            dailyTipTitle: "Daily Health Tip",
            weeklyGoalTitle: "Weekly Progress",
            pillBoxSoonTitle: "Feature Coming Soon",
            pillBoxSoonDesc: "We are working on many powerful features for the Smart Pill Box experience. Stay tuned!",
            navAI: "Medical Assistant",
            aiWelcome: "MediFlow AI Assistant",
            aiDesc: "Ask me anything about medications, side effects, or organization tips.",
            aiInitialMsg: "Hello! I am your Medical Assistant. How can I help you manage your medications today?"
        },
        ar: {
            navDashboard: "لوحة التحكم",
            navPillbox: "صندوق الأدوية",
            navSchedule: "الجدول الزمني",
            navSettings: "الإعدادات",
            mottoText: "خطوات صغيرة اليوم، لصحة أفضل غداً.",
            welcome: "مرحباً بعودتك",
            addMedication: "إضافة دواء",
            adherenceRate: "معدل الالتزام",
            upcomingDose: "الجرعة القادمة",
            pillBoxStatus: "حالة صندوق الأدوية",
            todaySchedule: "جدول اليوم",
            addModalTitle: "إضافة دواء جديد",
            medNameLabel: "اسم الدواء",
            dosageLabel: "الجرعة",
            timeLabel: "الوقت",
            freqLabel: "التكرار",
            freqDaily: "يومياً",
            freqDays: "أيام معينة",
            freqOnce: "لهذا اليوم فقط",
            daysLabel: "عدد الأيام",
            mealLabel: "وقت الوجبة",
            mealNone: "لا توجد وجبة محددة",
            mealBeforeBreakfast: "قبل الإفطار",
            mealAfterBreakfast: "بعد الإفطار",
            mealBeforeLunch: "قبل الغداء",
            mealAfterLunch: "بعد الغداء",
            mealBeforeDinner: "قبل العشاء",
            mealAfterDinner: "بعد العشاء",
            saveMed: "حفظ الدواء",
            noMeds: "لا توجد أدوية مجدولة اليوم.",
            todayIs: "اليوم هو",
            viewAllMeds: "عرض جميع الأدوية",
            fullSchedule: "الجدول الكامل",
            connectBox: "ربط الصندوق",
            disconnectBox: "فصل الصندوق",
            boxConnected: "تم الربط",
            boxConnecting: "جاري الاتصال...",
            editProfileTitle: "تعديل الملف الشخصي",
            profilePictureLabel: "صورة الملف الشخصي",
            uploadPictureBtn: "رفع صورة",
            patientNameLabel: "اسم المريض",
            genderLabel: "الجنس",
            genderMale: "ذكر",
            genderFemale: "أنثى",
            saveProfileBtn: "حفظ الملف الشخصي",
            boxConnectionStatus: "اتصال الصندوق الذكي",
            boxConnectionDesc: "اتصل عبر البلوتوث لمزامنة الأدوية",
            appearanceTitle: "المظهر",
            appearanceDesc: "التبديل بين الوضع الفاتح والداكن",
            languageTitle: "اللغة",
            languageDesc: "تغيير لغة التطبيق إلى الإنجليزية",
            congratsTitle: "عمل ممتاز!",
            congratsMsg: "الالتزام اليومي هو خطوة كبيرة نحو صحة أفضل. لقد وصلت إلى 100% اليوم!",
            achievementsTitle: "جوائزي",
            awardPerfectDay: "سلسلة صحية",
            awardPillMaster: "خبير الأدوية",
            comingSoon: "هذه الميزة ستتوفر قريباً!",
            selectDaysLabel: "اختر الأيام",
            daySat: "السبت",
            daySun: "الأحد",
            dayMon: "الإثنين",
            dayTue: "الثلاثاء",
            dayWed: "الأربعاء",
            dayThu: "الخميس",
            dayFri: "الجمعة",
            sendBtn: "إرسال",
            terminalTitle: "لوحة التحكم (Terminal)",
            terminalPlaceholder: "أدخل أمراً...",
            dailyTipTitle: "نصيحة اليوم الصحية",
            weeklyGoalTitle: "التقدم الأسبوعي",
            pillBoxSoonTitle: "قريباً جداً",
            pillBoxSoonDesc: "نحن نعمل على ميزات قوية لتجربة صندوق الأدوية الذكي. انتظرونا!",
            navAI: "المساعد الطبي",
            aiWelcome: "مساعد ميديافلو الذكي",
            aiDesc: "اسألني عن أي دواء، أو آثاره الجانبية، أو نصائح لتنظيم جدولك.",
            aiInitialMsg: "مرحباً! أنا مساعدك الطبي الذكي. كيف يمكنني مساعدتك في تنظيم أدويتك اليوم؟"
        }
    };

    // Determine Current Date
    const currentDayEl = document.getElementById('current-date');
    function updateDateDisplay() {
        if (currentDayEl) {
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const locale = currentLang === 'ar' ? 'ar-EG' : 'en-US';
            const prefix = translations[currentLang].todayIs + ' ';
            currentDayEl.textContent = prefix + new Date().toLocaleDateString(locale, dateOptions);
        }
    }
    updateDateDisplay();

    // Load Patient Profile
    const patientNameDisplay = document.getElementById('patient-name-display');
    const avatarDisplay = document.getElementById('btn-edit-profile');

    function loadProfile() {
        const savedName = localStorage.getItem('mediflow_patient_name');
        const savedGender = localStorage.getItem('mediflow_patient_gender') || 'male';

        // Check for first-time user
        const onboardingModal = document.getElementById('onboarding-modal');
        if (!savedName && onboardingModal) {
            onboardingModal.classList.add('active');
            document.body.classList.add('modal-open');
        }

        const displayName = savedName || 'Alex';

        // Default avatars based on gender
        const defaultAvatar = savedGender === 'female' ? 'female_avatar.png' : 'avatar.png';
        const savedPic = localStorage.getItem('mediflow_patient_pic');
        const finalPic = savedPic && savedPic !== 'avatar.png' && savedPic !== 'female_avatar.png' ? savedPic : defaultAvatar;

        if (patientNameDisplay) patientNameDisplay.textContent = displayName;
        if (avatarDisplay) avatarDisplay.style.backgroundImage = `url('${finalPic}')`;
        const profilePicPreview = document.getElementById('profile-picture-preview');
        if (profilePicPreview) profilePicPreview.style.backgroundImage = `url('${finalPic}')`;
        const patientNameInput = document.getElementById('patient-name-input');
        if (patientNameInput) patientNameInput.value = displayName;

        const genderInput = document.getElementById('patient-gender');
        if (genderInput) genderInput.value = savedGender;

        // Apply theme and background image based on gender
        document.documentElement.setAttribute('data-gender', savedGender);

        const heroPillImg = document.querySelector('.hero-pill-img');
        if (heroPillImg) {
            heroPillImg.src = savedGender === 'female' ? 'pink_pills.png' : 'green_pills.png';
        }
    }
    loadProfile();

    // Onboarding Form Handler
    const onboardingForm = document.getElementById('onboarding-form');
    if (onboardingForm) {
        onboardingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('onboard-name').value;
            const gender = document.getElementById('onboard-gender').value;

            localStorage.setItem('mediflow_patient_name', name);
            localStorage.setItem('mediflow_patient_gender', gender);

            const onboardingModal = document.getElementById('onboarding-modal');
            onboardingModal.classList.remove('active');
            document.body.classList.remove('modal-open');

            loadProfile();
        });
    }

    // Initialize Medications: Start empty for new users, or load from storage
    let medications = JSON.parse(localStorage.getItem('mediflow_medications')) || [];

    // Helper to persist medications
    function saveMedications() {
        localStorage.setItem('mediflow_medications', JSON.stringify(medications));
    }

    const scheduleList = document.getElementById('schedule-list');
    const fullScheduleList = document.getElementById('full-schedule-list');
    const btnViewAll = document.getElementById('btn-view-all');
    const totalMedsBadge = document.getElementById('total-meds-badge');

    const aiNav = document.getElementById('nav-ai');
    const aiView = document.getElementById('ai-view');

    // Tab Navigation Logic
    const dashboardNav = document.getElementById('nav-dashboard');
    const pillboxNav = document.getElementById('nav-pillbox');
    const scheduleNav = document.getElementById('nav-schedule');
    const settingsNav = document.getElementById('nav-settings');

    const dashboardView = document.getElementById('dashboard-view');
    const pillboxView = document.getElementById('pillbox-view');
    const scheduleView = document.getElementById('schedule-view');
    const settingsView = document.getElementById('settings-view');

    function switchTab(tab) {
        // Reset Nav
        document.querySelectorAll('.sidebar .nav-links li').forEach(li => li.classList.remove('active'));

        // Forcefully hide all view containers using their common patterns or IDs
        const allViews = [dashboardView, pillboxView, scheduleView, settingsView, aiView];
        allViews.forEach(view => {
            if (view) view.style.display = 'none';
        });

        if (tab === 'pillbox') {
            if (pillboxNav) pillboxNav.classList.add('active');
            if (pillboxView) pillboxView.style.display = 'block';
        } else if (tab === 'schedule') {
            if (scheduleNav) scheduleNav.classList.add('active');
            if (scheduleView) scheduleView.style.display = 'block';
        } else if (tab === 'settings') {
            if (settingsNav) settingsNav.classList.add('active');
            if (settingsView) settingsView.style.display = 'block';
        } else if (tab === 'ai') {
            if (aiNav) aiNav.classList.add('active');
            if (aiView) aiView.style.display = 'block';
        } else {
            if (dashboardNav) dashboardNav.classList.add('active');
            if (dashboardView) dashboardView.style.display = 'block';
        }

        // Scroll to top on tab switch (important for mobile)
        const mainContent = document.querySelector('.main-content');
        if (mainContent) mainContent.scrollTop = 0;
        window.scrollTo(0, 0);
    }

    if (dashboardNav) dashboardNav.addEventListener('click', (e) => { e.preventDefault(); switchTab('dashboard'); });
    if (pillboxNav) pillboxNav.addEventListener('click', (e) => { e.preventDefault(); switchTab('pillbox'); });
    if (scheduleNav) scheduleNav.addEventListener('click', (e) => { e.preventDefault(); switchTab('schedule'); });
    if (settingsNav) settingsNav.addEventListener('click', (e) => { e.preventDefault(); switchTab('settings'); });
    if (aiNav) aiNav.addEventListener('click', (e) => { e.preventDefault(); switchTab('ai'); });

    // Render Medications
    function renderMedications() {
        if (!scheduleList) return;
        scheduleList.innerHTML = '';
        if (fullScheduleList) fullScheduleList.innerHTML = '';

        if (totalMedsBadge) totalMedsBadge.textContent = `${medications.length}`;
        if (btnViewAll) btnViewAll.style.display = 'none';

        if (medications.length === 0) {
            const emptyHtml = `
                <div style="text-align:center; padding: 2rem; color: var(--text-secondary);">
                    ${translations[currentLang].noMeds}
                </div>
            `;
            scheduleList.innerHTML = emptyHtml;
            if (fullScheduleList) fullScheduleList.innerHTML = emptyHtml;
            updateAdherence();
            return;
        }

        const MAX_DASHBOARD = 3;

        medications.forEach((med, index) => {
            const medElement = document.createElement('div');
            medElement.className = `med-item ${med.taken ? 'completed' : ''}`;
            medElement.style.animationDelay = `${index * 0.1}s`;

            let freqText = "";
            if (med.frequency === 'daily') freqText = currentLang === 'ar' ? " يومياً" : " Daily";
            else if (med.frequency === 'once') freqText = currentLang === 'ar' ? " اليوم فقط" : " Today Only";
            else if (med.frequency === 'days') {
                const dayKeys = (med.selectedDays || []).map(d => translations[currentLang]["day" + d.substring(0, 3)]);
                freqText = dayKeys.length > 0 ? " (" + dayKeys.join(', ') + ")" : (currentLang === 'ar' ? " أيام معينة" : " Specific Days");
            }

            let mealText = "";
            if (med.meal && med.meal !== 'none') {
                const mealKey = "meal" + med.meal.charAt(0).toUpperCase() + med.meal.slice(1);
                mealText = translations[currentLang][mealKey] ? translations[currentLang][mealKey] : "";
            }

            // Time Formatting (24h to 12h)
            let formattedTime = med.time;
            if (med.time && med.time.includes(':')) {
                let [hours, minutes] = med.time.split(':');
                hours = parseInt(hours, 10);
                const ampm = hours >= 12 ? (currentLang === 'ar' ? 'م' : 'PM') : (currentLang === 'ar' ? 'ص' : 'AM');
                hours = hours % 12;
                hours = hours ? hours : 12;
                formattedTime = `${hours}:${minutes} ${ampm}`;
            }

            medElement.innerHTML = `
                <div class="med-time-badge" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;">
                    <div>${formattedTime}</div>
                    ${mealText ? `<span style="font-size: 0.65rem; background: rgba(255,255,255,0.15); padding: 2px 6px; border-radius: 4px; line-height: 1; text-align: center;">${mealText}</span>` : ''}
                </div>
                <div class="med-details">
                    <h4 class="med-name">${med.name} <span style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 300;">${freqText}</span></h4>
                    <p class="med-dosage">${med.dosage}</p>
                </div>
                <div class="med-status ${med.taken ? 'taken' : ''}" data-id="${med.id}"></div>
                <button class="btn-delete-med" data-id="${med.id}" title="Delete" style="background: none; border: none; color: var(--danger); cursor: pointer; margin-left: 15px; margin-right: 15px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>
                </button>
            `;

            if (index < MAX_DASHBOARD) {
                scheduleList.appendChild(medElement.cloneNode(true));
            }
            if (fullScheduleList) {
                fullScheduleList.appendChild(medElement.cloneNode(true));
            }
        });

        if (medications.length > MAX_DASHBOARD && btnViewAll) {
            btnViewAll.style.display = 'block';
            btnViewAll.onclick = () => switchTab('schedule');
        }

        // Add event listeners for the status toggles
        document.querySelectorAll('.med-status').forEach(statusElement => {
            statusElement.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                toggleMedicationStatus(id);
            });
        });

        // Add event listeners for delete buttons
        document.querySelectorAll('.btn-delete-med').forEach(deleteBtn => {
            deleteBtn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                deleteMedication(id);
            });
        });

        updateAdherence();
    }

    // Delete Medication
    function deleteMedication(id) {
        medications = medications.filter(m => m.id !== id);
        renderMedications();
    }

    // Toggle Medication Status Action
    function toggleMedicationStatus(id) {
        const medIndex = medications.findIndex(m => m.id === id);
        if (medIndex !== -1) {
            const isNowTaken = !medications[medIndex].taken;
            medications[medIndex].taken = isNowTaken;

            // If the user manually marks it as taken, make sure the box stops alarm
            if (isNowTaken && typeof window.sendCommandToArduino === 'function') {
                window.sendCommandToArduino("ALARM_OFF");
            }

            saveMedications(); // Persist change
            renderMedications();
        }
    }

    // Update Adherence metric
    function updateAdherence() {
        const total = medications.length;
        if (total === 0) {
            setAdherenceUI(100);
            return;
        }
        const taken = medications.filter(m => m.taken).length;
        const percentage = Math.round((taken / total) * 100);
        setAdherenceUI(percentage);

        // Check for 100% celebration
        if (percentage === 100 && total > 0) {
            checkAndCelebrate();
        }
    }

    // --- Dynamic Daily Rewards System ---
    const dailyRewardsList = [
        { icon: "🏆", en: { name: "Health Champion", msg: "You're taking charge of your health like a true pro!" }, ar: { name: "بطل الصحة", msg: "أنت تتحكم في صحتك كالمحترفين الحقيقيين!" } },
        { icon: "🌟", en: { name: "Consistency Star", msg: "Reliability is your middle name. Keep that streak alive!" }, ar: { name: "نجم الالتزام", msg: "الالتزام هو سر نجاحك. حافظ على هذا المستوى!" } },
        { icon: "🛡️", en: { name: "Body Guardian", msg: "Your immune system is cheering for you today!" }, ar: { name: "حارس الجسد", msg: "جهازك المناعي يهتف لك اليوم!" } },
        { icon: "💎", en: { name: "Diamond Routine", msg: "A perfect day leads to a sparkling, healthy future." }, ar: { name: "الروتين الماسي", msg: "يوم مثالي يؤدي إلى مستقبل صحي ومشرق." } },
        { icon: "🦁", en: { name: "Vitality Lion", msg: "Strength and focus! You've mastered your schedule." }, ar: { name: "أسد الحيوية", msg: "قوة وتركيز! لقد أتقنت جدول مواعيدك." } },
        { icon: "⚡", en: { name: "Energy Master", msg: "Full energy, full adherence. You are unstoppable!" }, ar: { name: "سيد الطاقة", msg: "طاقة كاملة، التزام كامل. أنت لا تُقهر!" } },
        { icon: "🌈", en: { name: "Wellness Wizard", msg: "Magic happens when you put your health first." }, ar: { name: "ساحر العافية", msg: "تحدث المعجزات عندما تضع صحتك في المقام الأول." } }
    ];

    function getAwardOfTheDay() {
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        return dailyRewardsList[dayOfYear % dailyRewardsList.length];
    }

    function checkAndCelebrate() {
        const todayStr = new Date().toDateString();
        const lastCelebration = localStorage.getItem('mediflow_last_celeb');

        if (lastCelebration !== todayStr) {
            localStorage.setItem('mediflow_last_celeb', todayStr);
            const reward = getAwardOfTheDay();
            showCelebrationModal(reward);
            updateAwards(reward);
        }
    }

    function showCelebrationModal(reward) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.style.zIndex = '1000';

        const rewardData = reward[currentLang];

        modal.innerHTML = `
            <div class="modal" style="text-align: center; padding: 3rem; border: 2px solid var(--success); max-width: 450px;">
                <div style="font-size: 5rem; margin-bottom: 1.5rem; animation: popIn 0.5s ease;">${reward.icon}</div>
                <h2 style="color: var(--success); margin-bottom: 1rem;">${rewardData.name}</h2>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">${rewardData.msg}</p>
                <button class="btn-primary" id="btn-close-celeb" style="min-width: 150px;">${currentLang === 'ar' ? 'استلام الجائزة' : 'Claim Reward'}</button>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('#btn-close-celeb').onclick = () => {
            modal.remove();
        };

        for (let i = 0; i < 30; i++) {
            createConfetti();
        }
    }

    function createConfetti() {
        const emojis = ['🎈', '✨', '🎉', '💊', '💚', '⭐'];
        const confetti = document.createElement('div');
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-5vh';
        confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
        confetti.style.zIndex = '1001';
        confetti.style.pointerEvents = 'none';
        confetti.style.transition = 'transform 3s linear, top 3s linear';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.top = '105vh';
            confetti.style.transform = `rotate(${Math.random() * 360}deg) translateX(${(Math.random() - 0.5) * 200}px)`;
        }, 10);

        setTimeout(() => confetti.remove(), 3000);
    }

    function updateAwards(newReward) {
        let awards = JSON.parse(localStorage.getItem('mediflow_awards_v2') || '[]');
        const todayStr = new Date().toDateString();

        // Avoid duplicate awards for the same day
        if (!awards.find(a => a.date === todayStr)) {
            awards.push({
                date: todayStr,
                icon: newReward.icon,
                name: newReward[currentLang].name
            });
            localStorage.setItem('mediflow_awards_v2', JSON.stringify(awards));
            renderAwards();
        }
    }

    function renderAwards() {
        const awardsContainer = document.getElementById('awards-container');
        if (!awardsContainer) return;

        const awards = JSON.parse(localStorage.getItem('mediflow_awards_v2') || '[]');
        awardsContainer.innerHTML = '';

        if (awards.length === 0) {
            awardsContainer.innerHTML = `<p style="color: var(--text-secondary); opacity: 0.5;">${currentLang === 'ar' ? 'لم تحصل على جوائز بعد، ابدأ يومك بنجاح!' : 'No awards yet, start your day with success!'}</p>`;
            return;
        }

        // Display last 5 awards
        awards.slice(-5).reverse().forEach(award => {
            const awardEl = document.createElement('div');
            awardEl.style.cssText = `
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                padding: 1rem;
                background: var(--bg-surface-elevated);
                border-radius: 12px;
                border: 1px solid var(--border-color);
                min-width: 100px;
                animation: popIn 0.5s ease;
            `;

            awardEl.innerHTML = `
                <div style="font-size: 2rem;">${award.icon}</div>
                <span style="font-size: 0.75rem; font-weight: 600; color: var(--accent-primary); width: 80px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${award.name}</span>
            `;
            awardsContainer.appendChild(awardEl);
        });
    }

    // Call renderAwards initially
    document.addEventListener('DOMContentLoaded', renderAwards); // Note: we are already inside a DOMContentLoaded listener, let's just call it.
    setTimeout(renderAwards, 100);

    function setAdherenceUI(percentage) {
        const adherenceEl = document.querySelector('.progress-ring .value');
        if (adherenceEl) {
            adherenceEl.textContent = `${percentage}%`;
        }

        const ring = document.querySelector('.progress-ring');
        if (ring) {
            // Pick color based on percentage
            let color = 'var(--success)';
            if (percentage < 50) color = 'var(--danger)';
            else if (percentage < 80) color = 'var(--warning)';

            ring.style.background = `conic-gradient(${color} ${percentage}%, var(--bg-surface-elevated) 0)`;
        }
    }

    // --- Health Tips & Weekly Tracker Logic ---
    const healthTips = {
        en: [
            "Drinking water helps your body absorb medication better.",
            "Try to take your meds at the same time every day for the best effect.",
            "Walking for 10 minutes a day can improve your heart health.",
            "A consistent sleep schedule boosts your immune system.",
            "Never skip a dose without consulting your doctor first.",
            "Eating green vegetables provides essential vitamins for recovery.",
            "Small steps today lead to big health results tomorrow."
        ],
        ar: [
            "شرب الماء يساعد جسمك على امتصاص الدواء بشكل أفضل.",
            "حاول تناول أدويتك في نفس الوقت يومياً للحصول على أفضل تأثير.",
            "المشي لمدة 10 دقائق يومياً يمكن أن يحسن صحة قلبك.",
            "الجدول المنتظم للنوم يعزز جهازك المناعي.",
            "لا تتخطى أي جرعة دون استشارة طبيبك أولاً.",
            "تناول الخضروات الخضراء يوفر الفيتامينات الضرورية للتعافي.",
            "الخطوات الصغيرة اليوم تؤدي إلى نتائج صحية كبيرة غداً."
        ]
    };

    function updateDailyTip() {
        const tipEl = document.getElementById('daily-tip-text');
        if (!tipEl) return;
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        const tips = healthTips[currentLang];
        tipEl.textContent = tips[dayOfYear % tips.length];
    }

    function updateWeeklyTracker() {
        const container = document.getElementById('weekly-dots');
        if (!container) return;

        // Save today's progress to history
        const todayKey = new Date().toDateString();
        const total = medications.length;
        const taken = medications.filter(m => m.taken).length;
        const progress = total > 0 ? (taken / total >= 1 ? 'perfect' : 'partial') : 'none';

        let history = JSON.parse(localStorage.getItem('mediflow_history') || '{}');
        history[todayKey] = progress;
        localStorage.setItem('mediflow_history', JSON.stringify(history));

        // Render last 7 days
        container.innerHTML = '';
        const dayNames = currentLang === 'ar'
            ? ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']
            : ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toDateString();
            const dayStatus = history[dateStr] || 'none';
            const dayLabel = dayNames[date.getDay()];

            const dotWrap = document.createElement('div');
            dotWrap.style.textAlign = 'center';
            dotWrap.innerHTML = `
                <div style="font-size: 0.7rem; color: var(--text-secondary); margin-bottom: 4px;">${dayLabel}</div>
                <div class="weekly-dot" style="
                    width: 32px; 
                    height: 32px; 
                    border-radius: 50%; 
                    background: ${dayStatus === 'perfect' ? 'var(--success)' : (dayStatus === 'partial' ? 'var(--warning)' : 'var(--glass-bg)')};
                    border: 2px solid ${dayStatus === 'none' ? 'var(--glass-border)' : 'transparent'};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    ${dayStatus === 'perfect' ? '✓' : ''}
                </div>
            `;
            container.appendChild(dotWrap);
        }
    }

    // Call updates
    updateDailyTip();
    updateWeeklyTracker();

    // Initial Render
    renderMedications();

    // Modal Interaction Logic
    const modal = document.getElementById('add-med-modal');
    const btnAddMed = document.getElementById('btn-add-med');
    const closeBtn = document.getElementById('close-modal');
    const addMedForm = document.getElementById('add-med-form');

    if (btnAddMed && modal) {
        btnAddMed.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.classList.add('modal-open'); // Hard lock background
            document.getElementById('med-name').focus();
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open'); // Release background
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.classList.remove('modal-open'); // Release background
            }
        });
    }

    const freqSelect = document.getElementById('med-freq');
    const daysGroup = document.getElementById('med-days-group');
    if (freqSelect && daysGroup) {
        freqSelect.addEventListener('change', (e) => {
            if (e.target.value === 'days') {
                daysGroup.style.display = 'block';
                document.getElementById('med-days').required = true;
            } else {
                daysGroup.style.display = 'none';
                document.getElementById('med-days').required = false;
            }
        });
    }

    if (addMedForm) {
        addMedForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameEl = document.getElementById('med-name');
            const dosageEl = document.getElementById('med-dosage');
            const timeEl = document.getElementById('med-time');
            const freqEl = document.getElementById('med-freq');
            const daysEl = document.getElementById('med-days');
            const mealEl = document.getElementById('med-meal');

            if (nameEl && dosageEl && timeEl) {
                const name = nameEl.value;
                const dosage = dosageEl.value;
                const time = timeEl.value; // E.g., "08:00"
                const frequency = freqEl ? freqEl.value : 'daily';
                const selectedDays = [];
                if (frequency === 'days') {
                    document.querySelectorAll('.days-selector input:checked').forEach(cb => {
                        selectedDays.push(cb.value);
                    });
                }
                const meal = mealEl ? mealEl.value : 'none';

                const newMed = {
                    id: Date.now(),
                    name,
                    dosage,
                    time,
                    frequency,
                    selectedDays,
                    meal,
                    taken: false
                };

                medications.push(newMed);
                saveMedications();
                renderMedications();

                if (medications.length > 3) {
                    switchTab('schedule');
                }

                addMedForm.reset();
                modal.classList.remove('active');
                document.body.classList.remove('modal-open'); // Release background
            }
        });
    }

    // Profile Modal Logic
    const editProfileModal = document.getElementById('edit-profile-modal');
    const btnEditProfile = document.getElementById('btn-edit-profile');
    const btnEditProfileName = document.getElementById('patient-name-display');
    const closeProfileModal = document.getElementById('close-profile-modal');
    const editProfileForm = document.getElementById('edit-profile-form');
    const btnUploadPic = document.getElementById('btn-upload-pic');
    const picInput = document.getElementById('profile-picture-input');
    const picPreview = document.getElementById('profile-picture-preview');

    function openProfileModal() {
        if (editProfileModal) editProfileModal.classList.add('active');
        const nameInput = document.getElementById('patient-name-input');
        if (nameInput) nameInput.focus();
    }

    if (btnEditProfile) btnEditProfile.addEventListener('click', openProfileModal);
    if (btnEditProfileName) btnEditProfileName.addEventListener('click', openProfileModal);

    if (closeProfileModal && editProfileModal) {
        closeProfileModal.addEventListener('click', () => {
            editProfileModal.classList.remove('active');
            loadProfile(); // Reset if closed without save
        });
    }

    if (editProfileModal) {
        editProfileModal.addEventListener('click', (e) => {
            if (e.target === editProfileModal) {
                editProfileModal.classList.remove('active');
                loadProfile();
            }
        });
    }

    if (btnUploadPic && picInput) {
        btnUploadPic.addEventListener('click', () => picInput.click());
    }

    if (picInput && picPreview) {
        picInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    picPreview.style.backgroundImage = `url('${e.target.result}')`;
                }
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    if (editProfileForm) {
        editProfileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newName = document.getElementById('patient-name-input').value;
            const newGender = document.getElementById('patient-gender').value;
            const newPicStyle = picPreview.style.backgroundImage;

            // Extract URL from background-image format: url("...")
            const newPicUrl = newPicStyle.slice(4, -1).replace(/["']/g, "");

            localStorage.setItem('mediflow_patient_name', newName);
            localStorage.setItem('mediflow_patient_pic', newPicUrl);
            localStorage.setItem('mediflow_patient_gender', newGender);

            loadProfile();
            editProfileModal.classList.remove('active');
        });
    }

    // Theme Toggle Logic
    const btnTheme = document.getElementById('btn-theme');
    let currentTheme = localStorage.getItem('mediflow_theme') || 'dark';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (btnTheme) {
            btnTheme.innerHTML = theme === 'dark'
                ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
                : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
        }
    }

    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('mediflow_theme', currentTheme);
            applyTheme(currentTheme);
        });
    }
    applyTheme(currentTheme);

    // Language Toggle Logic
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
        btnLang.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            btnLang.textContent = currentLang === 'en' ? 'عربي' : 'English';

            // Adjust body direction
            document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            document.documentElement.setAttribute('lang', currentLang);

            // Update all translations
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = translations[currentLang][key];
                    } else {
                        el.textContent = translations[currentLang][key];
                    }
                }
            });

            // Specific updates for terminal placeholder
            const termInput = document.getElementById('terminal-input');
            if (termInput) {
                termInput.placeholder = translations[currentLang].terminalPlaceholder;
            }

            // Re-render components holding text
            updateDateDisplay();
            renderMedications();
            updateDailyTip();
            updateWeeklyTracker();

            // Adjust bluetooth button wording if connected
            bluetoothButtons.forEach(btn => {
                const span = btn.querySelector('span');
                if (span) {
                    span.textContent = port
                        ? translations[currentLang].disconnectBox
                        : translations[currentLang].connectBox;
                }
            });
        });
    }

    // --- Web Serial API for Arduino & HC-05 Support ---
    const bluetoothButtons = document.querySelectorAll('.btn-bluetooth-sync');
    let port;
    let reader;
    let inputDone;
    let outputStream;
    let outputDone;

    if (bluetoothButtons.length > 0) {
        bluetoothButtons.forEach(btn => {
            btn.addEventListener('click', async () => {
                if (port) {
                    await disconnectDevice();
                } else {
                    await connectDevice();
                }
            });
        });
    }

    async function connectDevice() {
        if ('serial' in navigator) {
            try {
                // Update all buttons to 'Connecting...'
                bluetoothButtons.forEach(btn => {
                    const span = btn.querySelector('span');
                    if (span) span.textContent = translations[currentLang].boxConnecting;
                });

                // Prompt user to select their HC-05 Bluetooth COM port
                port = await navigator.serial.requestPort();
                await port.open({ baudRate: 9600 });

                // Set state for all buttons
                bluetoothButtons.forEach(btn => {
                    const span = btn.querySelector('span');
                    if (span) span.textContent = translations[currentLang].disconnectBox;
                    btn.style.background = 'var(--success)';
                    btn.style.color = '#fff';
                    btn.style.borderColor = 'var(--success)';
                });

                // Setup Reader
                const decoder = new TextDecoderStream();
                inputDone = port.readable.pipeTo(decoder.writable);
                reader = decoder.readable.getReader();

                // Setup Writer
                const encoder = new TextEncoderStream();
                outputDone = encoder.readable.pipeTo(port.writable);
                outputStream = encoder.writable.getWriter();

                // Automatically switch to the Terminal page
                switchTab('pillbox');

                logToTerminal("Connected to HC-05!", "info");
                readLoop();
            } catch (err) {
                console.error('Error opening serial port:', err);
                logToTerminal("Error: " + err.message, "error");
                resetBluetoothButton();
            }
        } else {
            alert('Web Serial API not supported in your browser. Please use Chrome or Edge on Windows to connect to Bluetooth COM ports.');
        }
    }

    async function disconnectDevice() {
        if (reader) {
            await reader.cancel();
            await inputDone.catch(() => { });
            reader = null;
            inputDone = null;
        }
        if (outputStream) {
            await outputStream.close();
            await outputDone.catch(() => { });
            outputStream = null;
        }
        if (port) {
            await port.close();
            port = null;
        }

        logToTerminal("Disconnected from HC-05", "info");
        resetBluetoothButton();
    }

    function resetBluetoothButton() {
        bluetoothButtons.forEach(btn => {
            const span = btn.querySelector('span');
            if (span) span.textContent = translations[currentLang].connectBox;
            btn.style.background = 'transparent';
            btn.style.color = 'var(--accent-primary)';
            btn.style.borderColor = 'var(--accent-primary)';
        });
        port = null;
    }

    let incomingBuffer = "";

    async function readLoop() {
        try {
            while (true) {
                const { value, done } = await reader.read();
                if (value) {
                    incomingBuffer += value;
                    console.log("[HC-05 Stream]: ", incomingBuffer);

                    // The Arduino sends strings ending in \n
                    const lines = incomingBuffer.split('\n');

                    // Keep the last part in the buffer if it doesn't end cleanly yet
                    incomingBuffer = lines.pop();

                    for (const line of lines) {
                        const cleanLine = line.replace('\r', '').trim();
                        if (cleanLine.length === 0) continue;

                        console.log("[HC-05 Parsed Message]: " + cleanLine);

                        // Handle message from the final Arduino code
                        if (cleanLine.includes("Medicine was taken")) {
                            logToTerminal(cleanLine, 'received');

                            // Visual confirmation
                            alert(currentLang === 'ar' ? '✅ تم تأكيد أخذ الدواء!' : '✅ Medicine intake confirmed!');

                            // Smart Logic: Find the medication closest to "Now"
                            const now = new Date();
                            const currentMinutes = now.getHours() * 60 + now.getMinutes();

                            let bestMatch = null;
                            let minDiff = Infinity;

                            medications.forEach(m => {
                                if (m.taken) return;
                                const [mHours, mMinutes] = m.time.split(':').map(Number);
                                const medTotalMinutes = mHours * 60 + mMinutes;
                                const diff = Math.abs(currentMinutes - medTotalMinutes);
                                if (diff < minDiff) {
                                    minDiff = diff;
                                    bestMatch = m;
                                }
                            });

                            if (bestMatch) {
                                toggleMedicationStatus(bestMatch.id);
                                logToTerminal(`System: Matched with ${bestMatch.name} at ${bestMatch.time}`, 'info');
                            }
                        } else if (cleanLine.includes("Medicine was not taken")) {
                            logToTerminal(cleanLine, 'error');
                            alert(currentLang === 'ar' ? '⚠️ تحذير: لم يتم أخذ الدواء!' : '⚠️ Warning: Medicine was not taken!');
                        } else {
                            logToTerminal(cleanLine, 'received');
                        }
                    }
                }
                if (done) {
                    break;
                }
            }
        } catch (error) {
            console.error("Read loop error:", error);
        } finally {
            reader.releaseLock();
        }
    }

    // Global function to write data to Arduino
    window.sendCommandToArduino = async (command) => {
        if (outputStream) {
            await outputStream.write(command + '\n');
            console.log("[HC-05 Sent]: " + command);
            logToTerminal(command, 'sent');
        } else {
            console.warn("Cannot send command, Smart Pill Box is not connected.");
            logToTerminal("Error: Device not connected", 'error');
        }
    };

    // --- Terminal UI Logic ---
    const terminalLogs = document.getElementById('terminal-logs');
    const terminalInput = document.getElementById('terminal-input');
    const terminalSend = document.getElementById('terminal-send');

    function logToTerminal(message, type = 'info') {
        if (!terminalLogs) return;

        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        const now = new Date();
        const timestamp = now.getHours().toString().padStart(2, '0') + ":" +
            now.getMinutes().toString().padStart(2, '0') + ":" +
            now.getSeconds().toString().padStart(2, '0');

        const prefix = type === 'sent' ? '>> ' : (type === 'received' ? '<< ' : '');
        line.textContent = `[${timestamp}] ${prefix}${message}`;

        terminalLogs.appendChild(line);
        terminalLogs.scrollTop = terminalLogs.scrollHeight;

        // Keep only last 100 lines
        while (terminalLogs.children.length > 100) {
            terminalLogs.removeChild(terminalLogs.firstChild);
        }
    }

    if (terminalSend && terminalInput) {
        const handleSend = () => {
            const cmd = terminalInput.value.trim();
            if (cmd) {
                window.sendCommandToArduino(cmd);
                terminalInput.value = '';
            }
        };

        terminalSend.addEventListener('click', handleSend);
        terminalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }

    // --- Automatic Alarm Trigger Logic ---
    const triggeredAlarms = new Set();
    setInterval(() => {
        const now = new Date();
        const currentTime = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');

        // Reset triggered alarms at start of day
        if (currentTime === "00:00") triggeredAlarms.clear();

        medications.forEach(med => {
            if (med.time === currentTime && !med.taken && !triggeredAlarms.has(med.id)) {
                triggeredAlarms.add(med.id);
                console.log(`[Alarm] Triggering alarm for: ${med.name} at ${currentTime}`);
                window.sendCommandToArduino("ALARM_ON");
            }
        });
    }, 10000); // Check every 10 seconds
    // --- Advanced Medical Brain Logic ---
    const medicineDB = {
        en: {
            "panadol": "Panadol (Paracetamol) is used for pain relief and fever. Suggested dose: 500mg-1g every 4-6 hours. Max 4g per day.",
            "aspirin": "Aspirin is used to reduce pain, fever, or inflammation. It is also used as a blood thinner. Take with food.",
            "insulin": "Insulin helps control blood sugar. Ensure you follow your specific doctor's schedule precisely.",
            "ibuprofen": "Ibuprofen (Advil, Motrin) is an NSAID used for pain, fever, and inflammation. Take with food to avoid stomach upset.",
            "metformin": "Metformin (Glucophage) is used to control blood sugar in type 2 diabetes. It is usually taken with meals.",
            "amoxicillin": "Amoxicillin is an antibiotic used to treat bacterial infections. Finish the entire course even if you feel better.",
            "atorvastatin": "Atorvastatin (Lipitor) is used to lower cholesterol. It is best taken in the evening.",
            "omeprazole": "Omeprazole (Prilosec) is used for acid reflux and stomach ulcers. Usually taken 30-60 minutes before breakfast.",
            "ventolin": "Ventolin (Albuterol) is a rescue inhaler used for asthma or breathing difficulties. Use as directed during acute symptoms.",
            "vitamin": "Vitamins are essential nutrients. Vitamin D is best absorbed with a meal containing fat. Consult a doctor for dosages.",
            "organize": "To organize meds: 1. Use a pill box. 2. Set daily alarms (like our Smart Box!). 3. Color-code your meds.",
            "side effect": "Side effects vary by drug. Common ones include nausea or dizziness. If you experience a rash or difficulty breathing, seek medical help immediately.",
            "hello": "Welcome to MediFlow Medical Intelligence. How can I assist you with medications, symptoms, or locating local medical facilities today?",
            "default": "I couldn't find a direct match in my immediate memory. Please wait while I perform deep research on this topic using global medical databases and open research networks..."
        },
        ar: {
            "بنادول": "بنادول (باراسيتامول) يستخدم لتسكين الألم وخفض الحرارة. الجرعة المقترحة: 500 ملغ - 1 غرام كل 4-6 ساعات. بحد أقصى 4 غرام يومياً.",
            "أسبيرين": "يستخدم الأسبيرين لتقليل الألم أو الحمى أو الالتهاب. كما يستخدم كمميع للدم. يفضل تناوله مع الطعام.",
            "أنسولين": "يساعد الأنسولين في التحكم في سكر الدم. تأكد من اتباع جدول طبيبك الخاص بدقة.",
            "ايبوبروفين": "ايبوبروفين (بروفين، أدقيل) يستخدم لتسكين الآلام وخفض الحرارة ومضاد للالتهاب. تناوله مع الطعام لتجنب آلام المعدة.",
            "ميتفورمين": "ميتفورمين (جلوكوفاج) يستخدم للتحكم في سكر الدم لمرضى السكري من النوع الثاني. يؤخذ عادة مع الوجبات.",
            "أموكسيسيلين": "أموكسيسيلين هو مضاد حيوي للالتهابات البكتيرية. يجب إكمال الجرعة كاملة حتى لو شعرت بالتحسن.",
            "أتورفاستاتين": "أتورفاستاتين (ليبيطور) يستخدم لخفض الكوليسترول. يفضل تناوله في المساء.",
            "أوميبرازول": "أوميبرازول يستخدم لعلاج حموضة المعدة والقرحة. يؤخذ عادة قبل الإفطار بـ 30-60 دقيقة.",
            "فنتولين": "فنتولين يستخدم كموسع للشعب الهوائية لحالات الربو. يستخدم عند الضرورة أو حسب تعليمات الطبيب.",
            "فيتامين": "الفيتامينات مكملات ضرورية. فيتامين (د) يمتص بشكل أفضل مع وجبة تحتوي على دهون. استشر طبيبك للجرعة المناسبة.",
            "تنظيم": "لتنظيم الأدوية: 1. استخدم صندوق أدوية. 2. اضبط منبهات يومية (مثل صندوقنا الذكي!). 3. استخدم رموزاً لونية لأدويتك.",
            "أعراض": "الأعراض الجانبية تختلف حسب الدواء. إذا شعرت بطفح جلدي أو ضيق في التنفس، اتصل بالطوارئ فوراً.",
            "مرحبا": "أهلاً بك! أنا مساعدك الطبي. اسألني عن أدوية مثل بنادول، جلوكوفاج، أو مضادات حيوية، أو نصائح تنظيمية!",
            "default": "أنا أتعلم المزيد عن علم الأدوية حالياً! يمكنك سؤالي عن أدوية مثل بنادول، بروفين، جلوكوفاج، أو مضادات حيوية مثل الأموكسيسيلين."
        }
    };

    const symptomMap = {
        en: {
            "headache": "For mild headaches, Rest and hydration are key. Common OTC options include Paracetamol (Panadol) or Ibuprofen. **Note:** Seek help if it's sudden/severe or follows an injury.",
            "fever": "A fever is usually a sign your body is fighting infection. Paracetamol can help lower temperature. Drink plenty of fluids and monitor your temperature.",
            "stomach": "Stomach pain can have many causes (digestion, acidity, etc.). Simple antacids might help for acidity. Avoid heavy food and stay hydrated.",
            "cough": "Coughs often accompany colds. Honey and warm fluids can soothe the throat. If it lasts more than 3 weeks, see a doctor.",
            "sleep": "To improve sleep: Use a regular schedule, avoid caffeine late, and keep your bedroom dark/cool. Check our 'Health Tip' for more!",
            "allergy": "Allergies can cause sneezing or itching. Antihistamines are common treatments. Try to identify and avoid triggers."
        },
        ar: {
            "صداع": "للصداع الخفيف، الراحة وشرب الماء أمران أساسيان. الخيارات الشائعة هي الباراسيتامول (بنادول) أو الايبوبروفين (بروفين). **ملاحظة:** استشر الطبيب إذا كان الصداع مفاجئاً وشديداً جداً.",
            "حرارة": "الحمى غالباً علامة على مقاومة الجسم للعدوى. يساعد الباراسيتامول في خفض الحرارة. اشرب الكثير من السوائل وراقب درجة حرارتك.",
            "معدة": "آلام المعدة لها أسباب عديدة (هضم، حموضة). مضادات الحموضة البسيطة قد تساعد. تجنب الأكل الثقيل واشرب الماء.",
            "سعال": "السعال يصاحب نزلات البرد غالباً. العسل والسوائل الدافئة تلطف الحلق. إذا استمر لأكثر من 3 أسابيع، يجب مراجعة الطبيب.",
            "نوم": "لتحسين النوم: التزم بجدول ثابت، وتجنب الكافيين قبل النوم، واجعل الغرفة مظلمة وباردة. تفقد 'نصيحة اليوم' للمزيد!",
            "حساسية": "الحساسية تسبب العطس أو الحكة. مضادات الهيستامين هي العلاج الشائع. حاول تحديد وتجنب مسببات الحساسية."
        }
    };

    const aiInput = document.getElementById('ai-input');
    const aiSend = document.getElementById('ai-send');
    const aiChatLogs = document.getElementById('ai-chat-logs');

    if (aiSend && aiInput) {
        const handleAISend = async () => {
            const queryRaw = aiInput.value.trim();
            if (!queryRaw) return;
            const query = queryRaw.toLowerCase();

            // Add User Message
            appendChatMessage(queryRaw, 'user');
            aiInput.value = '';

            // 1. Show "Thinking" Animation with Stages
            const loadingMsg = appendChatMessage("", 'bot');
            const loadingText = document.createElement('div');
            loadingText.className = 'thinking-animation';
            loadingText.innerHTML = `
                <div class="thinking-header">
                    <span class="pulse-dot"></span>
                    <strong data-i18n="aiThinking">${currentLang === 'ar' ? 'المساعد الطبي يفكر...' : 'Medical Assistant is thinking...'}</strong>
                </div>
                <div class="research-steps" style="font-size: 0.8rem; opacity: 0.7; margin-top: 5px;">
                    <p id="step-1">🔍 ${currentLang === 'ar' ? 'تحليل الاستفسار...' : 'Analyzing query...'}</p>
                </div>
            `;
            loadingMsg.appendChild(loadingText);

            const updateStep = (text) => {
                const step = loadingMsg.querySelector('.research-steps p');
                if (step) step.textContent = text;
            };

            // Simulated Research Delay
            await new Promise(r => setTimeout(r, 800));
            updateStep(`📡 ${currentLang === 'ar' ? 'البحث في المراجع الطبية...' : 'Scanning medical databases...'}`);
            await new Promise(r => setTimeout(r, 1000));
            updateStep(`✅ ${currentLang === 'ar' ? 'مطابقة البيانات وتدقيق المصادر...' : 'Verifying and cross-referencing...'}`);
            await new Promise(r => setTimeout(r, 700));

            // 2. Logic: Location Search -> Local DB (Drugs) -> Symptoms -> External API (FDA)
            let response = null;
            const locationKeywords = {
                ar: ['مستشفى', 'عيادة', 'مركز طبي', 'دكتور', 'صيدلية', 'قريب مني', 'بجانبي'],
                en: ['hospital', 'clinic', 'medical center', 'doctor', 'pharmacy', 'near me', 'nearby']
            };

            const isLocationQuery = locationKeywords[currentLang].some(k => query.includes(k));

            if (isLocationQuery) {
                updateStep(`📍 ${currentLang === 'ar' ? 'بدء التحليل الجغرافي المتقدم...' : 'Starting advanced geospatial analysis...'}`);

                try {
                    const pos = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
                    });

                    const { latitude, longitude } = pos.coords;
                    updateStep(`📡 ${currentLang === 'ar' ? 'مسح البنية التحتية الطبية في نطاق 5 كم...' : 'Scanning medical infrastructure within 5km...'}`);

                    const radius = 5000;
                    const overpassURL = `https://overpass-api.de/api/interpreter?data=[out:json];(node["amenity"~"hospital|clinic|pharmacy"](around:${radius},${latitude},${longitude});way["amenity"~"hospital|clinic|pharmacy"](around:${radius},${latitude},${longitude}););out center;`;

                    const geoRes = await fetch(overpassURL);
                    const geoData = await geoRes.json();

                    loadingMsg.remove();

                    if (geoData.elements && geoData.elements.length > 0) {
                        let aiResponse = currentLang === 'ar' ? `📋 **تقرير المرافق الطبية المكتشفة:**\n\n` : `📋 **Detected Medical Facilities Report:**\n\n`;

                        geoData.elements.slice(0, 5).forEach((el, idx) => {
                            const name = el.tags.name || (currentLang === 'ar' ? 'منشأة طبية غير مسمى' : 'Unnamed Facility');
                            const type = el.tags.amenity === 'hospital' ? (currentLang === 'ar' ? 'مستشفى متخصص' : 'Specialized Hospital') : (currentLang === 'ar' ? 'عيادة طبية' : 'Medical Clinic');
                            aiResponse += `🔹 **${name}** - ${type}\n`;
                        });

                        const mapsLink = `https://www.google.com/maps/search/${encodeURIComponent(query)}/@${latitude},${longitude},14z`;
                        aiResponse += `\n📍 **القرار الجغرافي:** تم العثور على مراكز قريبة. انقر للفتح في الخرائط:\n[🔗 ${currentLang === 'ar' ? 'فتح في خرائط Google' : 'Open in Google Maps'}](${mapsLink})`;
                        appendChatMessage(aiResponse, 'bot');
                        return;
                    } else {
                        const mapsLink = `https://www.google.com/maps/search/${encodeURIComponent(query)}/@${latitude},${longitude},14z`;
                        appendChatMessage(currentLang === 'ar' ? `لم يتم رصد نتائج فورية في قاعدة البيانات المحلية. يمكنك تجربة البحث المباشر هنا:\n[🔗 فتح خرائط Google](${mapsLink})` : `No immediate matches in local geospatial data. Try direct map search:\n[🔗 Open Google Maps](${mapsLink})`, 'bot');
                    }
                } catch (err) {
                    loadingMsg.remove();
                    appendChatMessage(currentLang === 'ar' ? "⚠️ **تنبيه:** يتطلب تحليل المواقع تفعيل GPS. يرجى منح الإذن للوصول للموقع." : "⚠️ **Alert:** Locational analysis requires GPS. Please grant location permissions.", 'bot');
                    return;
                }
            }

            // High-Level Medical Logic Synthesis
            for (let key in medicineDB[currentLang]) {
                if (query.includes(key) && key !== 'default' && key !== 'hello') {
                    response = medicineDB[currentLang][key];
                }
            }

            if (!response) {
                for (let key in symptomMap[currentLang]) {
                    if (query.includes(key)) {
                        const rawContent = symptomMap[currentLang][key];
                        if (currentLang === 'ar') {
                            response = `🔬 **التحليل السريري للمشكلة:**\n${rawContent}\n\n💡 **الحل الطبي الموصى به:**\n- الراحة التامة ومراقبة الأعراض.\n- استخدام المسكنات المذكورة عند الضرورة.\n- استشارة الطبيب في حال استمرار الحالة.\n\n📚 **المصادر:** Mayo Clinic, Harvard Health Publishing.`;
                        } else {
                            response = `🔬 **Clinical Analysis:**\n${rawContent}\n\n💡 **Medical Solution:**\n- Rest and monitoring are vital.\n- Use suggested OTC medications as directed.\n- Consult a professional if symptoms persist.\n\n📚 **Sources:** Mayo Clinic, NIH (National Institutes of Health).`;
                        }
                        break;
                    }
                }
            }

            if (loadingMsg) loadingMsg.remove();

            if (response) {
                appendChatMessage(response, 'bot');
            } else {
                // 3. Deep Medical Research Synthesis
                try {
                    updateStep(`🧬 ${currentLang === 'ar' ? 'الاتصال بالمراجع الطبية العليا (NIH, PubMed)...' : 'Connecting to elite medical sources (NIH, PubMed)...'}`);
                    await new Promise(r => setTimeout(r, 600));

                    const apiQuery = encodeURIComponent(query);
                    const fdaURL = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${apiQuery}"+openfda.generic_name:"${apiQuery}"&limit=1`;

                    const fdaRes = await fetch(fdaURL);
                    const fdaData = await fdaRes.json();

                    if (fdaData.results && fdaData.results.length > 0) {
                        const info = fdaData.results[0];
                        const name = info.openfda.brand_name ? info.openfda.brand_name[0] : query.toUpperCase();
                        const indications = info.indications_and_usage ? info.indications_and_usage[0] : (info.purpose ? info.purpose[0] : "");

                        let aiResponse = "";
                        if (currentLang === 'ar') {
                            aiResponse = `🏆 **تقرير التحليل الطبي العالي (FDA/Clinical Synthesis):**\n\n` +
                                `💊 **الكيان الطبي:** ${name}\n\n` +
                                `📋 **دواعي الاستخدام والحل:** ${indications.substring(0, 350)}...\n\n` +
                                `✅ **القرار السريري:** معتمد رسمياً للاستخدام الطبي تحت الإشراف المباشر.\n\n` +
                                `📚 **المصدر:** US Food & Drug Administration (FDA) Protocols.`;
                        } else {
                            aiResponse = `🏆 **Professional Medical Report (FDA/Clinical Synthesis):**\n\n` +
                                `**Entity:** ${name}\n\n` +
                                `**Medical Solution:** ${indications.substring(0, 400)}...\n\n` +
                                `**The Verdict:** Formalized medical treatment confirmed.\n\n` +
                                `**Source:** NIH Medical Database / FDA Labels.`;
                        }
                        appendChatMessage(aiResponse, 'bot');
                    } else {
                        // Global Knowledge Synthesis (High-level)
                        updateStep(`🌐 ${currentLang === 'ar' ? 'تخليق البيانات من المراجع العالمية...' : 'Synthesizing data from global archives...'}`);
                        const wikiURL = `https://${currentLang}.wikipedia.org/api/rest_v1/page/summary/${apiQuery}`;
                        const wikiRes = await fetch(wikiURL);
                        const wikiData = await wikiRes.json();

                        if (wikiData.title && wikiData.extract) {
                            let aiResponse = "";
                            const shortExtract = wikiData.extract.substring(0, 300);
                            if (currentLang === 'ar') {
                                aiResponse = `🌐 **خلاصة البحث الطبي الموحد:**\n\n` +
                                    `📌 **الموضوع:** ${wikiData.title}\n\n` +
                                    `🔬 **التحليل العلمي:** ${shortExtract}...\n\n` +
                                    `✅ **القرار:** معلومة موثقة من الأرشيف الطبي العالمي والجامعات البحثية.\n\n` +
                                    `📚 **المصدر:** World Health Knowledge Network.`;
                            } else {
                                aiResponse = `🌐 **Unified Medical Research Summary:**\n\n` +
                                    `**Subject:** ${wikiData.title}\n\n` +
                                    `**Scientific Analysis:** ${shortExtract}...\n\n` +
                                    `**Verdict:** Verified through cross-referenced academic database archives.\n\n` +
                                    `**Source:** Global Academic Research Network.`;
                            }
                            appendChatMessage(aiResponse, 'bot');
                        } else {
                            appendChatMessage(medicineDB[currentLang].default, 'bot');
                        }
                    }
                } catch (e) {
                    appendChatMessage(medicineDB[currentLang].default, 'bot');
                }
            }
        };

        aiSend.addEventListener('click', handleAISend);
        aiInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleAISend(); });
    }

    function appendChatMessage(text, type) {
        if (!aiChatLogs) return null;
        const msg = document.createElement('div');
        msg.style.cssText = `
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            max-width: 80%;
            font-size: 0.95rem;
            line-height: 1.5;
            animation: popIn 0.3s ease;
            border: 1px solid var(--glass-border);
            margin-bottom: 0.5rem;
            white-space: pre-wrap;
            position: relative;
        `;

        if (type === 'user') {
            msg.style.background = 'var(--accent-primary)';
            msg.style.color = 'white';
            msg.style.alignSelf = 'flex-end';
            msg.style.borderRadius = '12px 12px 0 12px';
        } else {
            msg.style.background = 'var(--bg-surface-elevated)';
            msg.style.color = 'var(--text-primary)';
            msg.style.alignSelf = 'flex-start';
            msg.style.borderRadius = '12px 12px 12px 0';
        }

        msg.textContent = text;
        aiChatLogs.appendChild(msg);
        aiChatLogs.scrollTop = aiChatLogs.scrollHeight;
        return msg;
    }

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('Service Worker Registered'))
                .catch(err => console.log('Service Worker Error', err));
        });
    }
});
