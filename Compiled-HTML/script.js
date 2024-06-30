// заміна кольру svg
document.querySelectorAll('.section__li').forEach((item) => {
    const img = item.querySelector('.section__li_img')
    const originalSrc = img.src
    const hoverSrc = img.dataset.hoverSrc

    item.addEventListener('mouseover', () => {
        img.src = hoverSrc
    })

    item.addEventListener('mouseout', () => {
        img.src = originalSrc
    })
})

// зміна кнопки при натиску
document.querySelectorAll('.button').forEach((btn) => {
    btn.addEventListener('click', function () {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active')
            btn.classList.add('inactives')
            btn.textContent = 'Inactive'
        } else {
            btn.classList.remove('inactives')
            btn.classList.add('active')
            btn.textContent = 'Active'
        }
    })
})
