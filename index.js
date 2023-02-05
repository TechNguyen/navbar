const allList = document.querySelectorAll('.list-item');
const lighter = document.querySelector('.lighter')
function transformlighter(e) {
    if(e.className.includes('c1')) {
        lighter.className = ''
        lighter.classList.add('leftChild1')
        lighter.classList.add('lighter')
    }
    else if(e.className.includes('c2')) {
        lighter.className = ''
        lighter.classList.add('leftChild2')
        lighter.classList.add('lighter')
    }
    else if(e.className.includes('c3')) {
        lighter.className = ''
        lighter.classList.add('leftChild3')
        lighter.classList.add('lighter')
    }
    else if(e.className.includes('c4')) {
        lighter.className = ''
        lighter.classList.add('leftChild4')
        lighter.classList.add('lighter')
    }
    else {
        lighter.className = ''
        lighter.classList.add('leftChild5')
        lighter.classList.add('lighter')
    }
}
allList.forEach(item => {
    item.addEventListener('click', function () {
        allList.forEach((e) => {
            e.classList.remove('active')
        })
        item.classList.add('active')
        transformlighter(item)
    })
})

