let isFullscreen = false;

const ISOLanguages = [
    { code: 'zh', name: 'Chinese' },
    { code: 'nl', name: 'Dutch' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'hi', name: 'Hindi' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'es', name: 'Spanish' },
    { code: 'tr', name: 'Turkish' },
  ];

document.addEventListener('DOMContentLoaded', () => {
    cancel();
    createLanguageOptions();
});

const handleSpeak  = () => {
    cancel();
    const input = document.querySelector('#input').value;
    const utterance = new SpeechSynthesisUtterance(input);
    changeLanguage(utterance);
    window.speechSynthesis.speak(utterance);
}

const handleFullscreen = () => {
    const element = document.querySelector('.speech-card__textarea');
    element.style.transition = 'all 0.3s ease-in-out';
    toggleFullscreenIcon();

    if(!isFullscreen){
        element.style.width = 'calc(100vw - 5rem)';
        element.style.height = 'calc(100vh - 4.5rem)';
    }
    else{
        element.style.width = 'calc(350px - 4.5rem)';
        element.style.height = '275px'
    }

    isFullscreen = !isFullscreen;
    setTimeout(() => {
        element.style.transition = '';
    }, 300); 
}

const changeLanguage = (utterance) => 
    utterance.lang = document.querySelector('#language').value;

const cancel = () => 
    window.speechSynthesis.cancel();

const createLanguageOptions = () => {
    const select = document.querySelector('#language');
    ISOLanguages.forEach(language => {
        const option = document.createElement('option');
        option.value = language.code;
        option.text = language.name;
        if(option.text == 'Turkish')
            option.selected = true;
        select.appendChild(option);
    });
}

const toggleFullscreenIcon = () => {
    const fullScreenIcon = document.querySelector('#fullScreenIcon');
    const firstClass = 'fa-down-left-and-up-right-to-center';
    const secondClass = 'fa-up-right-and-down-left-from-center';

    fullScreenIcon.classList.toggle(firstClass);
    fullScreenIcon.classList.toggle(secondClass);

}
