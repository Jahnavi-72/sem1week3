const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const stepIndicator = document.querySelector('.step-indicator');
let currentStep = 0;

function showStep(step) {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });

  stepIndicator.textContent = 'Step ${currentStep + 1} of ${steps.length}';
}

nextBtns.forEach(btn => btn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}));

prevBtns.forEach(btn => btn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}));

showStep(currentStep);