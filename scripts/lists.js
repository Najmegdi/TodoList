// Inja code hayii ke baraye modiriat kardane in
// list ha niaz darim ro minevisim

// tu marhaleye avval bayad list ha ro az ye jaii
// bekhunim o zakhire konim behtarin gozine baraye
// in proje LocalStorage hast.
// Ya hazrate abbas. chandin sal bud theme light nadashtam XD

// ino baraye test daram minevisam. baadan avazesh mikonim
// har koodoom az in list ha bayad ye liste task dashte bashe ke baadan
// betunim tooye liste samte rast namayesh bedim
let lists = [];
try {
    lists = JSON.parse(localStorage.getItem('lists') || '[]');
} catch {
    lists = [];
}

// are. chon safeye asli nist. empty state hast. yani chizi entekhab nashode
// hanuz. vaghti chizi entekhab mishe. dige niazi nist karbar betune
// bargarde be empty state. alan man ye dokme bezaram ke betunid task ijad konid
// fekr mikonam betunid style bakhshe ziadish ro bezanid

////////////////////////////////
///////// BAD WAY //////////////
////////////////////////////////
// Ye function baraye inke liste balaii ro bebare tuye html
// function showLists() {
//     // kari ke inja kardam. baraye namayesh khube. moshkele khassi pish
//     // nemiare. vali age bekhayam click shodaneshun ro begirim kheyli kare
//     // sakhtie. baraye hamin man yekam ino taghir midam.
//
//     // BAD WAY
//     // document.querySelector('#lists').innerHTML =
//     //     lists.map((list) => {
//     //         return `<li><a><span>${list.name}</span></a></li>`
//     //     }).join('');
//
//     // GOOD WAY
//     const listsElement = document.querySelector('#lists');
//
//     // baraye inke har bar in function ro seda zadim ghablia ro nazare
//     // edameye list. bayad kollan ul ro khali konim
//     listsElement.innerHTML = '';
//     // bale. daghighan. kare ghashangi nist. behine nist aslan.
//     // vali mikham sadegi ro hefz konam. mitunim injoori anjamesh bedim
//     // mikham alan ravesho taghir bedam
//
//     lists.forEach((list) => {
//         const elem = createElement(`<li><a><span>${list.name}</span></a></li>`);
//
//         // injoori mitunim entekhab shodane list ro anjam bedim
//         elem.addEventListener('click', (e) => {
//             // vaghti yek item click mishe.
//             // ma bayad classe active behesh bedim
//
//             console.log(bale. janam)
//         });
//
//         listsElement.appendChild(elem);
//     });
// }
//
// showLists();
//
// const btnCreateList = document.querySelector('#btnCreateList');
// btnCreateList.addEventListener('click', () => {
//     // esme list ro az karbar migirim
//     const newListName = prompt('Enter your list name:');
//
//     // iteme jadid ro be lists ezafe mikonim
//     lists.push({
//         name: newListName,
//         tasks: [],
//     });
//
//     showLists();
// });

// balaii ro comment kardam ke baadan betunid bebinid

////////////////////////////////
///////// BETTER WAY ///////////
////////////////////////////////

const listsElement = document.querySelector('#lists');

// bale. alan kamelan taghir kard raveshe namayeshe list.
lists.forEach((list) => {
    createListItem(list);
});


// ye function darim ke yek list behesh midim.
// element misaze. onclick set mikone
// ezafe mikone be ul#lists
function createListItem(list) {
    const elem = createElement(`<li><a><span>${list.name}</span></a></li>`);

    // injoori mitunim entekhab shodane list ro anjam bedim
    elem.addEventListener('click', (e) => {
        // vaghti yek item click mishe.
        // ma bayad classe active behesh bedim

        // e.target bar asase chizi ke rush click shode momkene
        // natijeye motafaveti dashte bashe.
        // dar avaz e.currentTarget hamishe oon chizi ro be ma mide
        // ke event rush set shode. ke dar inja mishe tage <li>
        // ke az tarighe motoghayere elem.addEventListener evente
        // click dadim behesh

        // alan in kar mikone. classe active mide. vali classe active baghie
        // <li> a ro hazf nemikone

        // inja az listsElement ke mishe hamun <ul>. hameye
        // <li> haii ke classe active daran ro peyda mikonim.
        // baad classe active ro remove mikonim azashun.
        listsElement.querySelectorAll('li.active')
            .forEach((activeLi) => {
                activeLi.classList.remove('active');
            });

        // ke betunim be iteme jadid classe active bedim.
        e.currentTarget.classList.add('active');

        // intori ba har click. classe active hameye <li> ha ro
        // bar midarim. va be uni ke click shode classe active midim

        // hala bayad mohtaviate list ro dakhele section namayesh bedim
        showList(list);
    });

    listsElement.appendChild(elem);
}

const mainSection = document.querySelector('#mainSection');

function showList(list) {
    mainSection.innerHTML = '';

    // title ro namayesh midim
    const titleElem = createElement(`<h1>${list.name}</h1>`);

    const btnCreateTask = createElement(`<button>Create Task</button>`);

    btnCreateTask.addEventListener('click', () => {
        const taskTitle = prompt('Enter your task title:');

        list.tasks.push({
            title: taskTitle,
            done: false,
        });

        localStorage.setItem('lists', JSON.stringify(lists));

        showList(list);
    });

    // liste task ha ro namayesh midim
    const tasksList = createElement('<ul></ul>');
    list.tasks.forEach((task) => {
        const taskElem = createElement(`<li class="${task.done ? 'done' : ''}">${task.title}</li>`)

        tasksList.appendChild(taskElem);
    });

    mainSection.appendChild(titleElem);
    mainSection.appendChild(btnCreateTask);
    mainSection.appendChild(tasksList);
}

const btnCreateList = document.querySelector('#btnCreateList');
btnCreateList.addEventListener('click', () => {
    // esme list ro az karbar migirim
    const newListName = prompt('Enter your list name:');

    const newListItem = {
        name: newListName,
        tasks: [],
    };

    lists.push(newListItem);

    localStorage.setItem('lists', JSON.stringify(lists));

    createListItem(newListItem);
});


// soali hast dar morede karaii ke kardim?