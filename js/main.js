"use strict";
document.querySelectorAll('input').forEach(ele => {
    ele.addEventListener('focus', e => {
        let ele = e.target;
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
    });
});
function vim(e) {
    let stl = document.getElementById('stl');
    let keyEvent;
    switch (e.key) {
        case "i":
            e.preventDefault();
            stl.style.background = 'red';
            stl.innerHTML = '&nbsp;Insert&nbsp;';
            break;
        case "v":
            e.preventDefault();
            stl.style.background = 'blue';
            stl.innerHTML = '&nbsp;Visual&nbsp;';
            break;
        case "r":
            e.preventDefault();
            stl.style.background = 'orange';
            stl.innerHTML = '&nbsp;Replace&nbsp;';
            break;
        case "Alt":
            e.preventDefault();
            if (e.ctrlKey) {
                stl.style.background = 'green';
                stl.innerHTML = '&nbsp;Normal&nbsp;';
            }
            break;
        case "h":
            e.preventDefault();
            let press = {};
            press.key = "ArrowLeft";
            press.keyCode = press.key.charCodeAt(0);
            press.which = press.keyCode;
            press.altKey = false;
            press.ctrlKey = false;
            press.shiftKey = false;
            press.metaKey = false;
            press.bubbles = true;
            press.isTrusted = true;
            keyEvent = new KeyboardEvent("keydown", press);
            e.target.dispatchEvent(keyEvent);
            break;
        case "k":
            e.preventDefault();
            keyEvent = new KeyboardEvent("keydown", { 'key': 'ArrowUp', 'keyCode': 38 });
            e.target.dispatchEvent(keyEvent);
            break;
        case "l":
            e.preventDefault();
            keyEvent = new KeyboardEvent("keydown", { 'key': 'ArrowRight', 'keyCode': 39 });
            e.target.dispatchEvent(keyEvent);
            break;
        case "j":
            e.preventDefault();
            keyEvent = new KeyboardEvent("keydown", { 'key': 'ArrowDown', 'keyCode': 40 });
            e.target.dispatchEvent(keyEvent);
            break;
        case "Escape":
            stl.remove();
            this.removeEventListener('keydown', vim);
            break;
    }
    console.log('final', e);
}
