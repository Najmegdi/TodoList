function createElement(html) {
    // html ro midim be in tabe. ye div misaze.
    // html ro mizare tuye div. va avvalin farzande
    // div ro barmigardune. in yeki az sade tarin
    // rah haye tabdil kardane html be element hast
    const elem = document.createElement('div');
    elem.innerHTML = html;
    return elem.firstChild;
}