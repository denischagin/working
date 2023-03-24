const regButton = document.querySelector('.reg')
const modalWindow = document.querySelector('.modal')

const toggleModal = () => modalWindow.classList.toggle('active')

regButton.onclick = toggleModal

modalWindow.addEventListener('click', e => {
    if (e.target.classList.contains('modal__reg-button') || 
        e.target.classList.contains('modal')) toggleModal()
    if (e.target.classList.contains('modal__reg-button')) alert('Регистрация прошла успешно ')
})