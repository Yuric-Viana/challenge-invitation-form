const presencial = document.querySelector('.personally');
const online = document.querySelector('.online');
const img = document.querySelector('.personally-img');
const onImg = document.querySelector('.online-img');

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
