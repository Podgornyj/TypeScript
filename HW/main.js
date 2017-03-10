var menuList = [{
        title: 'Животные',
        items: [{
                title: 'Млекопитающие',
                items: [{
                        title: 'Коровы'
                    },
                    {
                        title: 'Ослы'
                    },
                    {
                        title: 'Собаки'
                    },
                    {
                        title: 'Тигры'
                    }
                ]
            },
            {
                title: 'Другие',
                items: [{
                        title: 'Змеи'
                    },
                    {
                        title: 'Птицы'
                    },
                    {
                        title: 'Ящерицы'
                    },
                ]
            },
        ]
    },
    {
        title: 'Рыбы',
        items: [{
                title: 'Аквариумные',
                items: [{
                        title: 'Гуппи'
                    },
                    {
                        title: 'Скалярии'
                    }
                ]
            },
            {
                title: 'Форель',
                items: [{
                        title: 'Морская форель'
                    }]
            },
        ]
    }
];
function generateMenu(list) {
    var content = "<ul>";
    for (var _i = 0; _i < list.length; _i++) {
        var i = list[_i];
        if (i.items) {
            content += "<li><a class='title'>" + i.title + "</a>" + generateMenu(i.items) + "</li>";
        }
        else {
            content += "<li><a>" + i.title + "</a></li>";
        }
    }
    content += "</ul>";
    return content;
}
var navMenuList = document.querySelector('.menu');
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick = function (ev) {
    var el = ev.target;
    var classList = el.classList;
    if (!classList.contains('title')) {
        return;
    }
    var parentLi = el.parentNode;
    parentLi.classList.toggle('menu-open');
};
