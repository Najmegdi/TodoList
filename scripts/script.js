document.querySelector('#theme-switch')
    .addEventListener('change', (e) => {
        if (e.target.checked) {
            // document.documentElement = <html>
            trans();
            document.documentElement.classList.add('dark');
        } else {
            trans();
            document.documentElement.classList.remove('dark');
        }
    });
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(()=> {
        document.documentElement.classList.remove('transition')
    } , 1000)
}
