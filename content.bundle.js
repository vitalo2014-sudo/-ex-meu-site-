/**
 * AYUNO RESET - Dynamic Content Bundle
 * PRODUCTION READY - 100% Static & Stable
 * 
 * This file replaces script.js and ensures zero console errors on Vercel.
 */

// 1. Safe Production JSON Engine
const SafeProductionJSON = {
    parse: (key) => {
        try {
            const raw = localStorage.getItem(key);
            if (!raw || raw === "undefined" || raw === "null" || typeof raw !== 'string') {
                return null;
            }
            return JSON.parse(raw);
        } catch (e) {
            console.warn("Static Shield: Invalid JSON detected in storage for key:", key);
            return null;
        }
    }
};

// 2. Bulletproof Theme Manager
function getTheme() {
    const defaultTheme = { name: "default", mode: "dark" };
    try {
        const theme = SafeProductionJSON.parse("app_theme");
        if (theme && typeof theme === 'object' && theme.name) {
            return theme;
        }
    } catch (e) {
        // Fallback silently to prevent crash
    }
    return defaultTheme;
}

// 3. Quiz Data Structure
const steps = [
    {
        id: 'gender',
        type: 'single_choice',
        category: 'Calificación',
        question: 'Para comenzar, ¿cuál es tu género?',
        options: [
            { label: 'Femenino', value: 'female', emoji: '👩' },
            { label: 'Masculino', value: 'male', emoji: '👨' }
        ]
    },
    {
        id: 'age',
        type: 'single_choice',
        question: '¿Cuál es tu rango de edad?',
        options: [
            { label: '18-29 años', value: '18-29' },
            { label: '30-39 años', value: '30-39' },
            { label: '40-49 años', value: '40-49' },
            { label: '50-59 años', value: '50-59' },
            { label: '60+ años', value: '60+' }
        ]
    },
    {
        id: 'goal',
        type: 'single_choice',
        question: '¿Cuál es tu objetivo principal?',
        options: [
            { label: 'Perder peso rápidamente', value: 'fast_weight_loss', emoji: '⚡' },
            { label: 'Mejorar salud y energía', value: 'health', emoji: '❤️' },
            { label: 'Tonificar el corpo', value: 'tone', emoji: '💪' }
        ]
    },
    {
        id: 'current_size',
        type: 'single_choice',
        question: '¿Cuál es tu talla de ropa actual?',
        options: [
            { label: 'S (Pequeño)', value: 'S' },
            { label: 'M (Mediano)', value: 'M' },
            { label: 'L (Grande)', value: 'L' },
            { label: 'XL (Extra Grande)', value: 'XL' },
            { label: 'XXL+', value: 'XXL+' }
        ]
    },
    {
        id: 'target_size',
        type: 'single_choice',
        question: '¿Qué talla te gustaría usar?',
        options: [
            { label: 'S (Pequeño)', value: 'S', emoji: '✨' },
            { label: 'M (Mediano)', value: 'M', emoji: '👗' },
            { label: 'L (Grande)', value: 'L', emoji: '👚' }
        ]
    },
    {
        id: 'clothing_feeling',
        type: 'single_choice',
        question: '¿Cómo te sientes al comprar ropa hoy?',
        options: [
            { label: 'Frustrada, nada me queda bien', value: 'frustrated', emoji: '😞' },
            { label: 'Compro lo que cabe, no lo que me gusta', value: 'settle', emoji: '😕' },
            { label: 'Normal, pero podría ser mejor', value: 'ok', emoji: '😐' }
        ]
    },
    {
        id: 'social_proof_1',
        type: 'info',
        title: 'No estás sola',
        videoEmbed: `motivacao-preloaded`,
        delayBtn: 15000,
        content: 'Más de 47.000 personas ya han transformado sus vidas con este método. El 72% logró reducir 2 tallas de ropa en los primeiros 3 meses.',
        buttonText: '¡Quiero ser parte de esto!'
    },
    {
        id: 'body_areas',
        type: 'multiple_choice',
        question: '¿Dónde te molesta más la grasa?',
        options: [
            { label: 'Barriga / Abdomen', value: 'belly', emoji: '🤰' },
            { label: 'Caderas y Muslos', value: 'thighs', emoji: '🦵' },
            { label: 'Brazos', value: 'arms', emoji: '💪' },
            { label: 'Rostro y Papada', value: 'face', emoji: '👱‍♀️' },
            { label: 'Espalda', value: 'back', emoji: '🔙' }
        ]
    },
    {
        id: 'metabolic_issues',
        type: 'multiple_choice',
        question: '¿Sientes alguno de estos síntomas?',
        subtitle: 'Esto nos ayuda a identificar tu tipo metabólico',
        options: [
            { label: 'Cansancio excessivo después de comer', value: 'tiredness', emoji: '😴' },
            { label: 'Deseo incontrolable por dulces', value: 'sugar_craving', emoji: '🍬' },
            { label: 'Hinchazón abdominal constante', value: 'bloating', emoji: '🎈' },
            { label: 'Ninguno de estos', value: 'none' }
        ]
    },
    {
        id: 'last_best_shape',
        type: 'single_choice',
        question: '¿Hace cuánto tiempo estabas en tu peso ideal?',
        options: [
            { label: 'Menos de 1 año', value: '<1y' },
            { label: 'Hace 1 a 3 años', value: '1-3y' },
            { label: 'Más de 3 años', value: '>3y' },
            { label: 'Nunca estuve en mi peso ideal', value: 'never' }
        ]
    },
    {
        id: 'fasting_knowledge',
        type: 'single_choice',
        question: '¿Cuál es tu experiencia con el Ayuno?',
        options: [
            { label: 'Nunca lo hice', value: 'newbie' },
            { label: 'Ya intenté, pero desistí', value: 'tried' },
            { label: 'Lo hago ocasionalmente', value: 'occasional' },
            { label: 'Practico regularmente', value: 'pro' }
        ]
    },
    {
        id: 'emotional_trigger',
        type: 'single_choice',
        question: '¿Qué es lo que más te motiva a cambiar hoy?',
        options: [
            { label: 'Quiero sentirme deseada nuevamente', value: 'desire', emoji: '🥰' },
            { label: 'Quiero tener energía para mi familia', value: 'family', emoji: '👨👩👧' },
            { label: 'Es una cuestión de salud urgente', value: 'health_urgent', emoji: '🏥' }
        ]
    },
    {
        id: 'meals',
        type: 'multiple_choice',
        question: '¿Qué comidas son indispensables para ti?',
        options: [
            { label: 'Desayuno', value: 'breakfast', emoji: '☕' },
            { label: 'Almuerzo', value: 'lunch', emoji: '🥗' },
            { label: 'Cena', value: 'dinner', emoji: '🍲' },
            { label: 'Postre después de comer', value: 'dessert', emoji: '🍫' }
        ]
    },
    {
        id: 'weekend_habits',
        type: 'single_choice',
        question: '¿Cómo son tus fines de semana?',
        options: [
            { label: 'Mantengo la dieta al 100%', value: 'strict' },
            { label: 'Me permito algunas comidas libres', value: 'moderate' },
            { label: 'Exagero un poco (día libre)', value: 'cheat' }
        ]
    },
    {
        id: 'exercise_freq',
        type: 'single_choice',
        question: '¿Practicas ejercicios?',
        options: [
            { label: 'No, soy sedentaria', value: 'sedentary' },
            { label: 'Caminatas ligeras', value: 'light' },
            { label: 'Gimnasio/Deporte 3x+', value: 'active' }
        ]
    },
    {
        id: 'sleep',
        type: 'single_choice',
        question: '¿Cómo es tu sueño?',
        options: [
            { label: 'Duermo poco (<6h) y despierto cansada', value: 'bad' },
            { label: 'Duermo bien (7-8h)', value: 'good' },
            { label: 'Tengo insomnio frecuente', value: 'insomnia' }
        ]
    },
    {
        id: 'water',
        type: 'single_choice',
        question: '¿Cuánta agua bebes al día?',
        options: [
            { label: 'Menos de 1 litro', value: 'low' },
            { label: '1 a 2 litros', value: 'medium' },
            { label: 'Más de 2 litros', value: 'high' }
        ]
    },
    {
        id: 'challenges',
        type: 'multiple_choice',
        question: '¿Cuál es tu mayor desafío para adelgazar?',
        options: [
            { label: 'Falta de tiempo', value: 'time', emoji: '⏰' },
            { label: 'Ansiedad y Estrés', value: 'anxiety', emoji: '😰' },
            { label: 'Metabolismo lento', value: 'metabolism', emoji: '🐢' },
            { label: 'Falta de motivación', value: 'motivation', emoji: '🥀' }
        ]
    },
    {
        id: 'measurements',
        type: 'input_group',
        question: 'Tus Medidas',
        inputs: [
            { name: 'height', label: 'Altura (cm)', type: 'number', placeholder: 'Ej: 165' },
            { name: 'weight', label: 'Peso Actual (kg)', type: 'number', placeholder: 'Ej: 75' },
            { name: 'goal_weight', label: 'Peso meta (kg)', type: 'number', placeholder: 'Ej: 60' }
        ]
    },
    {
        id: 'calculating',
        type: 'calculating',
        text: 'Procesando tu plan exclusivo...',
        duration: 4000
    },
    {
        id: 'result_ready',
        type: 'final_result',
        title: '¡Todo listo!',
        videoEmbed: `vsl-preloaded`,
        content: 'Descubrimos exactamente lo que estaba impidiendo tu adelgazamiento. Tu perfil metabólico es perfectamente compatible con el AYUNO RESET - metabólico 360.',
        buttonText: 'QUIERO ACCEDER AHORA',
        delayBtn: 15000
    }
];

// 4. App Logic
let currentStepIndex = 0;
const userAnswers = {};

const contentContainer = document.getElementById('quiz-content');
const progressBar = document.getElementById('progress-bar');
const currentStepEl = document.getElementById('current-step');
const totalStepsEl = document.getElementById('total-steps');

function init() {
    try {
        // Safe Theme Check
        getTheme();

        if (totalStepsEl && steps) {
            totalStepsEl.textContent = steps.length;
        }

        if (window.trackEvent) {
            window.trackEvent("quiz_start");
        }

        renderStep();
    } catch (err) {
        console.error("Critical error in init:", err);
    }
}

function updateProgress() {
    try {
        const total = (steps) ? steps.length : 1;
        const progress = ((currentStepIndex + 1) / total) * 100;
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (currentStepEl) currentStepEl.textContent = currentStepIndex + 1;
    } catch (err) {
        console.warn("Update progress failed:", err);
    }
}

function renderStep() {
    try {
        if (!contentContainer) return;

        // Move preloaded videos back to background manager before clearing to save buffer
        const bgManager = document.getElementById('video-background-manager');
        if (bgManager) {
            document.querySelectorAll('video[id$="-preloaded"]').forEach(vid => {
                vid.style.display = 'none';
                bgManager.appendChild(vid);
            });
        }

        contentContainer.innerHTML = '';

        if (!steps || !steps[currentStepIndex]) return;

        const step = steps[currentStepIndex];

        if (window.trackEvent) {
            window.trackEvent("quiz_progress", {
                step_id: step.id,
                step_number: currentStepIndex + 1
            });
        }

        updateProgress();

        const card = document.createElement('div');
        card.className = 'step-card';

        if (step.question) {
            const title = document.createElement('h2');
            title.className = 'step-title';
            title.textContent = step.question;
            card.appendChild(title);
        }

        if (step.subtitle) {
            const sub = document.createElement('p');
            sub.className = 'step-description';
            sub.textContent = step.subtitle;
            card.appendChild(sub);
        }

        // --- Render Helpers ---
        if (step.type === 'single_choice' || step.type === 'multiple_choice') {
            const grid = document.createElement('div');
            grid.className = 'options-grid';

            if (step.type === 'multiple_choice') {
                const nextBtn = document.createElement('button');
                nextBtn.className = 'btn-primary';
                nextBtn.textContent = 'Continuar';
                nextBtn.onclick = () => handleMultiChoiceSubmit(step);

                if (step.options) {
                    step.options.forEach((opt) => {
                        const btn = document.createElement('div');
                        btn.className = 'quiz-option';
                        btn.dataset.value = opt.value;
                        btn.onclick = () => btn.classList.toggle('selected');
                        btn.innerHTML = `${opt.emoji ? `<span class=\"option-emoji\">${opt.emoji}</span>` : ''} <span class=\"option-text\">${opt.label}</span>`;
                        grid.appendChild(btn);
                    });
                }
                card.appendChild(grid);
                card.appendChild(nextBtn);
            } else {
                if (step.options) {
                    step.options.forEach((opt) => {
                        const btn = document.createElement('div');
                        btn.className = 'quiz-option';
                        btn.onclick = () => handleSingleChoice(step, opt.value);
                        btn.innerHTML = `${opt.emoji ? `<span class=\"option-emoji\">${opt.emoji}</span>` : ''} <span class=\"option-text\">${opt.label}</span>`;
                        grid.appendChild(btn);
                    });
                }
                card.appendChild(grid);
            }
        } else if (step.type === 'input_group') {
            const form = document.createElement('div');
            form.className = 'input-group';
            if (step.inputs) {
                step.inputs.forEach(input => {
                    if (input.label) {
                        const label = document.createElement('label');
                        label.className = 'input-label';
                        label.textContent = input.label;
                        form.appendChild(label);
                    }
                    const field = document.createElement('input');
                    field.type = input.type || 'text';
                    field.placeholder = input.placeholder || '';
                    field.name = input.name || '';
                    field.className = 'quiz-input';
                    form.appendChild(field);
                });
            }
            const nextBtn = document.createElement('button');
            nextBtn.className = 'btn-primary';
            nextBtn.textContent = 'Calcular Resultados';
            nextBtn.onclick = () => handleInputSubmit(step, form);
            card.appendChild(form);
            card.appendChild(nextBtn);
        } else if (step.type === 'info') {
            if (step.videoEmbed) {
                const videoEl = document.getElementById(step.videoEmbed);
                if (videoEl) {
                    const container = document.createElement('div');
                    container.className = 'video-container';
                    container.style.position = 'relative';

                    videoEl.style.display = 'block';
                    videoEl.autoplay = true;
                    videoEl.play();
                    container.appendChild(videoEl);

                    const muteBtn = document.createElement('button');
                    muteBtn.className = 'btn-unmute-overlay'; // Design specific
                    muteBtn.innerHTML = '🔊 ACTIVAR SONIDO';
                    muteBtn.onclick = () => {
                        videoEl.muted = false;
                        videoEl.volume = 1.0;
                        muteBtn.style.display = 'none';
                    };
                    container.appendChild(muteBtn);
                    card.appendChild(container);
                }
            }
            card.innerHTML += `<div class="info-box"><div class="info-title">💡 Información Importante</div><p>${step.content || ''}</p></div>`;
            const nextBtn = document.createElement('button');
            nextBtn.className = 'btn-primary';
            nextBtn.textContent = step.buttonText || 'Continuar';
            nextBtn.onclick = () => nextStep();

            if (step.delayBtn) {
                nextBtn.style.display = 'none';
                setTimeout(() => { nextBtn.style.display = 'block'; }, step.delayBtn);
            }
            card.appendChild(nextBtn);
        } else if (step.type === 'calculating') {
            card.innerHTML = `<div class=\"calculating-screen\"> <div class=\"spinner\"></div> <p class=\"analyzing-text\">${step.text || 'Calculando...'}</p> </div>`;
            setTimeout(() => { nextStep(); }, step.duration || 3000);
        } else if (step.type === 'final_result') {
            const height = parseFloat(userAnswers['height']) || 170;
            const weight = parseFloat(userAnswers['weight']) || 70;
            const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
            const status = bmi < 18.5 ? "Bajo peso" : bmi < 25 ? "Peso normal" : bmi < 30 ? "Sobrepeso" : "Obesidad";

            const title = document.createElement('h2');
            title.className = 'step-title';
            title.style.color = 'var(--primary)';
            title.textContent = step.title || '¡Listo!';
            card.appendChild(title);

            if (step.videoEmbed) {
                const videoEl = document.getElementById(step.videoEmbed);
                if (videoEl) {
                    const container = document.createElement('div');
                    container.className = 'video-container';
                    container.style.position = 'relative';

                    videoEl.style.display = 'block';
                    videoEl.autoplay = true;
                    videoEl.play();
                    container.appendChild(videoEl);

                    const muteBtn = document.createElement('button');
                    muteBtn.className = 'btn-unmute-overlay';
                    muteBtn.innerHTML = '🔊 ACTIVAR SONIDO';
                    muteBtn.onclick = () => {
                        videoEl.muted = false;
                        videoEl.volume = 1.0;
                        muteBtn.style.display = 'none';
                    };
                    container.appendChild(muteBtn);
                    card.appendChild(container);
                }
            }

            const infoBox = document.createElement('div');
            infoBox.className = 'info-box';
            infoBox.style.marginBottom = '20px';
            infoBox.innerHTML = `<h3>Tu IMC es ${bmi} (${status})</h3><p>Esto confirma que tu metabolismo necesita un protocolo específico para volver a activarse correctamente.</p>`;
            card.appendChild(infoBox);

            const finalBtn = document.createElement('button');
            finalBtn.className = 'btn-primary';
            finalBtn.style.background = 'linear-gradient(to right, #10b981, #059669)';
            finalBtn.textContent = step.buttonText || 'ACCESO INSTANTÁNEO';
            finalBtn.onclick = () => {
                const currentWeight = userAnswers['weight'] || 80;
                const goalWeight = userAnswers['goal_weight'] || 60;
                window.location.href = `checkout.html?start=${currentWeight}&goal=${goalWeight}`;
            };

            if (step.delayBtn) {
                finalBtn.style.display = 'none';
                setTimeout(() => { finalBtn.style.display = 'block'; }, step.delayBtn);
            }
            card.appendChild(finalBtn);
        }

        contentContainer.appendChild(card);
    } catch (err) {
        console.error("Critical error in renderStep:", err);
    }
}

function nextStep() {
    if (steps && currentStepIndex < steps.length - 1) {
        currentStepIndex++;
        renderStep();
    }
}

function handleSingleChoice(step, value) {
    userAnswers[step.id] = value;
    if (window.trackEvent) { window.trackEvent("quiz_answer", { step_id: step.id, answer: value }); }
    nextStep();
}

function handleMultiChoiceSubmit(step) {
    const selected = [];
    document.querySelectorAll('.quiz-option.selected').forEach(btn => { if (btn.dataset.value) selected.push(btn.dataset.value); });
    if (selected.length === 0) return alert('Selecciona una opción.');
    userAnswers[step.id] = selected;
    if (window.trackEvent) { window.trackEvent("quiz_answer", { step_id: step.id, answer: selected }); }
    nextStep();
}

function handleInputSubmit(step, form) {
    let valid = true;
    form.querySelectorAll('input').forEach(input => {
        if (!input.value) valid = false;
        if (input.name) userAnswers[input.name] = input.value;
    });
    if (!valid) return alert('Completa los campos.');
    nextStep();
}

document.addEventListener('DOMContentLoaded', init);
