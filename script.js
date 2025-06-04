const presencial = document.querySelector('.personally');
const online = document.querySelector('.online');
const img = document.querySelector('.personally-img');
const onImg = document.querySelector('.online-img');
const colorPickers = document.querySelectorAll('.color-picker');
const check = document.getElementById('light');
const label = document.querySelector('.light-type');
const inputFile = document.getElementById('file');
const error = document.querySelector('.error');

function alterarImg(link, caminho) {
    link.src = `assets/icons/${caminho}`;
    link.style.width = '1.6rem'
    link.style.height = '1.6rem'
}

function resetImg(link, caminho) {
    link.src = `assets/icons/${caminho}`;
    link.style.width = '1.6rem'
    link.style.height = '1.6rem'
}

presencial.addEventListener('click', () => {
    alterarImg(img, 'building-hover.svg');
    resetImg(onImg, 'video.svg')
})

online.addEventListener('click', () => {
    alterarImg(onImg, 'video-hover.svg');
    resetImg(img, 'building-2.svg')

})

colorPickers.forEach(picker => {
    picker.addEventListener('click', () => {
        colorPickers.forEach(p => p.classList.remove('selected'));
        picker.classList.add('selected');
    })
})

check.addEventListener('change', () => {
    label.innerHTML = check.checked ? 'Claro' : 'Escuro';
})

error.style.opacity = '0';

inputFile.addEventListener('change', () => {
    const file = inputFile.files[0];
    const nameFile = document.querySelector('.file-select');
    const name = file.name;

    nameFile.innerHTML = name;

    if (file) {
    if (!file.type.match('image/png') && !file.type.match('image/jpeg')) {
        alert('Por favor, insira uma imagem PNG ou JPEG.');
        error.style.opacity = '1';
        inputFile.value = '';
        return;
    }
}
})
