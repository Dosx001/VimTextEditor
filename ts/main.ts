document.querySelectorAll('input').forEach(ele => {
    ele.addEventListener('focus', e => {
        let ele = <HTMLInputElement>e.target;
        if (['text', 'email', 'url'].includes(ele.type)) {
            console.log(ele);
            let stl = document.createElement('div');
            stl.style.position = 'absolute';
            stl.style.bottom = '0';
            stl.style.left = '49%';
            stl.style.zIndex = '999999';
            stl.style.margin = 'auto';
            stl.style.color = 'black';
            stl.style.fontSize = '25px';
            stl.style.background = 'green';
            stl.innerHTML = '&nbsp;Normal&nbsp;';
            stl.id = 'stl';
            document.body.append(stl);
            ele.addEventListener('keydown', vim);
        }
    })
})

function vim(this: any, e: KeyboardEvent) {
    e.preventDefault();
    let stl = document.getElementById('stl')!;
    switch(e.key) {
        case "i":
            stl.style.background = 'red';
            stl.innerHTML = '&nbsp;Insert&nbsp;';
            break;
        case "v":
            stl.style.background = 'blue';
            stl.innerHTML = '&nbsp;Visual&nbsp;';
            break;
        case "r":
            stl.style.background = 'orange';
            stl.innerHTML = '&nbsp;Replace&nbsp;';
            break;
        case "Alt":
            if (e.ctrlKey) {
                stl.style.background = 'green';
                stl.innerHTML = '&nbsp;Normal&nbsp;';
            }
            break;
        case "Escape":
            stl.remove();
            this.removeEventListener('keydown', vim);
            break;
    }
    console.log(e)
}
