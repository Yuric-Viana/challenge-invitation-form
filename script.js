const presencial = document.querySelector('.personally');
const online = document.querySelector('.online');
const img = document.querySelector('.personally-img');
const onImg = document.querySelector('.online-img');
const colorPickers = document.querySelectorAll('.color-picker');
const check = document.getElementById('light');
const label = document.querySelector('.light-type');
const inputFile = document.getElementById('file');
const form = document.querySelector('form');
let error = document.querySelector('.error-file');
const errorInputs = form.querySelectorAll('input[required], textarea[required], select[required]');


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
    

    if (file) {
        if (!file.type.match('image/png') && !file.type.match('image/jpeg')) {
            alert('Por favor, insira uma imagem PNG ou JPEG.');
            error.style.opacity = '1';
            inputFile.value = '';
            nameFile.innerHTML = `<p class="file-select">Nenhum arquivo selecionado</p>`
            return;
        } else {
            nameFile.innerHTML = name;
            error.style.opacity = '0';
        }
    }
})
