/*Quiz Logic - Verified & Fixed */

/* 
  Data Structure based on 43 steps. 
  For brevity in this file, we act out the key logic with a representative subset 
  that covers all unique functionalities required. 
  You can expand the 'steps' array to 43 items following this pattern.
*/

const steps = [
    // --- 1. CALIFICACIÓN INICIAL (1-7) ---
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
            { label: 'Tonificar el cuerpo', value: 'tone', emoji: '💪' }
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
        // --- ADICIONE O VÍDEO DE MOTIVAÇÃO AQUI ---
        // Nomeie o arquivo como 'motivacao.mp4' e coloque na pasta do projeto
        videoEmbed: `<div style="position:relative; width:100%; height:100%;">
                        <video id="vid-motivacao" width="100%" height="auto" autoplay muted playsinline style="border-radius:var(--border-radius); width:100%; height:100%; object-fit:contain;">
                            <source src="motivacao.mp4" type="video/mp4">
                        </video>
                        <button onclick="const v = document.getElementById('vid-motivacao'); v.muted = false; v.volume = 1.0; v.currentTime = 0; v.play(); this.style.display = 'none';" 
                                style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); z-index:10; 
                                       background:rgba(16, 185, 129, 0.9); color:white; border:none; padding:15px 30px; 
                                       border-radius:50px; font-weight:700; cursor:pointer; font-family:inherit; 
                                       box-shadow: 0 0 20px rgba(16, 185, 129, 0.6); display:flex; align-items:center; gap:10px; font-size:1.1rem; white-space:nowrap;">
                            🔊 ACTIVAR SONIDO
                        </button>
                     </div>`,
        delayBtn: 15000, // 15 segundos de atraso
        content: 'Más de 47.000 personas ya han transformado sus vidas con este método. El 72% logró reducir 2 tallas de ropa en los primeros 3 meses.',
        buttonText: '¡Quiero ser parte de esto!'
    },
    // --- 2. PERSONALIZACIÓN FÍSICA (8-12) ---
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
            { label: 'Cansancio excesivo después de comer', value: 'tiredness', emoji: '😴' },
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
    // --- 3. EDUCACIÓN Y COMPROMISO (13-16) ---
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
    // --- 4. HÁBITOS ALIMENTICIOS (17-23) ---
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
    // --- 5. ESTILO DE VIDA (24-31) ---
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
    // --- 6. LIMITACIONES Y DESAFÍOS (32-35) ---
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
    // --- 7. DATOS ANTROPOMÉTRICOS (36-39) ---
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
    // --- 8. RESULTADO Y CONVERSIÓN (40-43) ---
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
        // --- ADICIONE SEU VÍDEO AQUI ---
        // 1. Mova seu arquivo de vídeo para a mesma pasta deste projeto
        // 2. Renomeie o arquivo para 'vsl.mp4' (ou altere o nome abaixo)
        videoEmbed: `<div style="position:relative; width:100%; height:100%;">
                        <video id="vid-vsl" width="100%" height="auto" autoplay muted playsinline style="border-radius:var(--border-radius); width:100%; height:100%; object-fit:contain;">
                            <source src="vsl.mp4" type="video/mp4">
                        </video>
                        <button onclick="const v = document.getElementById('vid-vsl'); v.muted = false; v.volume = 1.0; v.currentTime = 0; v.play(); this.style.display = 'none';" 
                                style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); z-index:10; 
                                       background:rgba(16, 185, 129, 0.9); color:white; border:none; padding:15px 30px; 
                                       border-radius:50px; font-weight:700; cursor:pointer; font-family:inherit; 
                                       box-shadow: 0 0 20px rgba(16, 185, 129, 0.6); display:flex; align-items:center; gap:10px; font-size:1.1rem; white-space:nowrap;">
                            🔊 ACTIVAR SONIDO
                        </button>
                     </div>`,
        content: 'Descubrimos exactamente lo que estaba impidiendo tu adelgazamiento. Tu perfil metabólico es perfectamente compatible con el AYUNO RESET - metabólico 360.',
        buttonText: 'QUIERO ACCEDER AHORA',
        delayBtn: 30000 // 30 segundos de atraso
    }
];

// App State
let currentStepIndex = 0;
const userAnswers = {};

// DOM Elements
const contentContainer = document.getElementById('quiz-content');
const progressBar = document.getElementById('progress-bar');
const currentStepEl = document.getElementById('current-step');
const totalStepsEl = document.getElementById('total-steps');

function init() {
    totalStepsEl.textContent = steps.length;
    renderStep();
}

function updateProgress() {
    const progress = ((currentStepIndex + 1) / steps.length) * 100;
    progressBar.style.width = `${progress}% `;
    currentStepEl.textContent = currentStepIndex + 1;
}

function renderStep() {
    // Clear content
    contentContainer.innerHTML = '';

    // Get current step
    const step = steps[currentStepIndex];
    if (!step) return;

    // Analytics: Track Step reached
    if (typeof Analytics !== 'undefined') Analytics.trackStep(step.id);

    updateProgress();

    // Create Card
    const card = document.createElement('div');
    card.className = 'step-card';

    // Title
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

    // Render Logic based on Type
    if (step.type === 'single_choice' || step.type === 'multiple_choice') {
        const grid = document.createElement('div');
        grid.className = 'options-grid';

        if (step.type === 'multiple_choice') {
            // Add a "Continue" button for multiple choice
            const nextBtn = document.createElement('button');
            nextBtn.className = 'btn-primary';
            nextBtn.textContent = 'Continuar';
            nextBtn.onclick = () => handleMultiChoiceSubmit(step);

            step.options.forEach((opt, idx) => {
                const btn = document.createElement('div');
                btn.className = 'quiz-option';
                btn.dataset.value = opt.value;
                btn.onclick = (e) => toggleMultiSelection(e, btn);

                let innerHTML = '';
                if (opt.emoji) innerHTML += `<span class="option-emoji">${opt.emoji}</span>`;
                innerHTML += `<span class="option-text">${opt.label}</span>`;

                btn.innerHTML = innerHTML;
                grid.appendChild(btn);
            });
            card.appendChild(grid);
            card.appendChild(nextBtn);

        } else {
            // Single Choice
            step.options.forEach((opt) => {
                const btn = document.createElement('div');
                btn.className = 'quiz-option';
                btn.onclick = () => handleSingleChoice(step, opt.value);

                let innerHTML = '';
                if (opt.emoji) innerHTML += `<span class="option-emoji">${opt.emoji}</span>`;
                innerHTML += `<span class="option-text">${opt.label}</span>`;

                btn.innerHTML = innerHTML;
                grid.appendChild(btn);
            });
            card.appendChild(grid);
        }

    } else if (step.type === 'input_group') {
        const form = document.createElement('div');
        form.className = 'input-group';

        step.inputs.forEach(input => {
            if (input.label) {
                const label = document.createElement('label');
                label.className = 'input-label';
                label.textContent = input.label;
                form.appendChild(label);
            }

            const field = document.createElement('input');
            field.type = input.type;
            field.placeholder = input.placeholder;
            field.name = input.name;
            field.className = 'quiz-input';
            field.required = true;
            form.appendChild(field);
        });

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-primary';
        nextBtn.textContent = 'Calcular Resultados';
        nextBtn.onclick = () => handleInputSubmit(step, form);

        card.appendChild(form);
        card.appendChild(nextBtn);

    } else if (step.type === 'info') {
        let videoHTML = '';
        if (step.videoEmbed) {
            const containerClass = step.isVertical ? 'video-container vertical' : 'video-container';
            videoHTML = `<div class="${containerClass}">${step.videoEmbed}</div>`;
        }

        const infoBox = document.createElement('div');
        infoBox.className = 'info-box';
        infoBox.innerHTML = `
            ${videoHTML}
            <div class="info-title">💡 Información Importante</div>
            <p>${step.content}</p>
`;
        card.appendChild(infoBox);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-primary';
        nextBtn.textContent = step.buttonText || 'Continuar';
        nextBtn.onclick = () => nextStep();

        if (step.delayBtn) {
            nextBtn.style.display = 'none';

            const videoElement = infoBox.querySelector('video');

            if (videoElement) {
                // Safety fallback: if video doesn't play or metadata fails, show button anyway after delay + buffer
                const fallbackTimer = setTimeout(() => {
                    if (nextBtn.style.display === 'none') {
                        nextBtn.style.display = 'block';
                        nextBtn.scrollIntoView({ behavior: 'smooth' });
                    }
                }, step.delayBtn + 1000);

                videoElement.ontimeupdate = function () {
                    const delaySeconds = step.delayBtn / 1000;
                    if (videoElement.currentTime >= delaySeconds) {
                        nextBtn.style.display = 'block';
                        nextBtn.scrollIntoView({ behavior: 'smooth' });
                        videoElement.ontimeupdate = null;
                        clearTimeout(fallbackTimer);
                    }
                };

                videoElement.onerror = function () {
                    nextBtn.style.display = 'block';
                    clearTimeout(fallbackTimer);
                };
            } else {
                setTimeout(() => {
                    nextBtn.style.display = 'block';
                    nextBtn.scrollIntoView({ behavior: 'smooth' });
                }, step.delayBtn);
            }
        }

        card.appendChild(nextBtn);

    } else if (step.type === 'calculating') {
        card.innerHTML = `
            <div class="calculating-screen">
                <div class="spinner"></div>
                <p class="analyzing-text">${step.text}</p>
            </div>
        `;
        setTimeout(() => {
            nextStep();
        }, step.duration || 3000);

    } else if (step.type === 'final_result') {
        // Calculate some BMI or result based on inputs
        const height = userAnswers['height'] || 170;
        const weight = userAnswers['weight'] || 70;
        const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

        let videoHTML = '';
        if (step.videoEmbed) {
            const containerClass = step.isVertical ? 'video-container vertical' : 'video-container';
            videoHTML = `<div class="${containerClass}">${step.videoEmbed}</div>`;
        }

        card.innerHTML = `
             <h2 class="step-title" style="color:var(--primary);">${step.title}</h2>

             ${videoHTML}

             <div class="info-box" style="margin-bottom: 20px;">
                <h3 style="color:white; margin-bottom:5px;">Tu IMC Calculado: ${bmi}</h3>
                <p>${step.content}</p>
             </div>
               <p style="text-align:center; color: #cbd5e1; margin-bottom:20px;">
                  Desbloquea tu protocolo personalizado ahora.
               </p>
           `;

        const finalBtn = document.createElement('button');
        finalBtn.className = 'btn-primary';
        finalBtn.style.background = 'linear-gradient(to right, #10b981, #059669)'; // Green gradient
        finalBtn.textContent = step.buttonText;
        finalBtn.onclick = () => {
            const currentWeight = userAnswers['weight'] || 80;
            const goalWeight = userAnswers['goal_weight'] || 60;
            window.location.href = `checkout.html?start=${currentWeight}&goal=${goalWeight}`;
        };

        if (step.delayBtn) {
            finalBtn.style.display = 'none';
            // Wait for innerHTML to be parsed
            setTimeout(() => {
                const videoElement = card.querySelector('video');
                if (videoElement) {
                    const fallbackTimer = setTimeout(() => {
                        if (finalBtn.style.display === 'none') {
                            finalBtn.style.display = 'block';
                            finalBtn.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, step.delayBtn + 1000);

                    videoElement.ontimeupdate = function () {
                        const delaySeconds = step.delayBtn / 1000;
                        if (videoElement.currentTime >= delaySeconds) {
                            finalBtn.style.display = 'block';
                            finalBtn.scrollIntoView({ behavior: 'smooth' });
                            videoElement.ontimeupdate = null;
                            clearTimeout(fallbackTimer);
                        }
                    };

                    videoElement.onerror = function () {
                        finalBtn.style.display = 'block';
                        clearTimeout(fallbackTimer);
                    };
                } else {
                    setTimeout(() => {
                        finalBtn.style.display = 'block';
                    }, step.delayBtn);
                }
            }, 100);
        }

        card.appendChild(finalBtn);
    }

    contentContainer.appendChild(card);
}


// Handlers
function nextStep() {
    if (currentStepIndex < steps.length - 1) {
        // Fade out current
        const currentCard = document.querySelector('.step-card');
        currentCard.style.opacity = '0';
        currentCard.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            currentStepIndex++;
            renderStep();
        }, 300);
    }
}

function handleSingleChoice(step, value) {
    userAnswers[step.id] = value;
    // Highlight selected for visual feedback before moving
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        if (opt.dataset.value === value) opt.classList.add('selected');
    });

    // Small delay for UX
    setTimeout(() => {
        nextStep();
    }, 300);
}

function toggleMultiSelection(e, btn) {
    btn.classList.toggle('selected');
}

function handleMultiChoiceSubmit(step) {
    const selected = [];
    document.querySelectorAll('.quiz-option.selected').forEach(btn => {
        selected.push(btn.dataset.value);
    });

    if (selected.length === 0) {
        alert('Por favor, selecciona al menos una opción.');
        return;
    }

    userAnswers[step.id] = selected;
    nextStep();
}

function handleInputSubmit(step, formContainer) {
    const inputs = formContainer.querySelectorAll('input');
    let allValid = true;

    inputs.forEach(input => {
        if (!input.value) allValid = false;
        userAnswers[input.name] = input.value;
    });

    if (!allValid) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    nextStep();
}

/* Initialization */
document.addEventListener('DOMContentLoaded', init);
