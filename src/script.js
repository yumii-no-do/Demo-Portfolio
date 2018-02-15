var model = {
    pages: (function() {
        return document.getElementById('pages').children;
    })(),
    pageCount: 0,

    nextPage: function() {
        this.goToPage(this.pageCount + 1);
    },

    previousPage: function() {
        this.goToPage(this.pageCount - 1);
    },

    goToPage: function(n) {

        this.pageCount = (n + this.pages.length) % this.pages.length;

    }

};


var view = {


    Menu: function() {
        var menu = document.getElementById("menuButton");
        var menuBlock = document.getElementById("menuBlock");
        var controls = document.getElementsByClassName('controls')[0];
        var body = document.body;
        if (menu.dataChecked == 0) {
            if (body.clientWidth < 800) {
                controls.style.display = 'none';
                menu.style.backgroundImage = "url(img/menu_w.svg)";

            } else {
                menu.style.backgroundImage = "url(img/menu.svg)";
                controls.style.display = 'block';
            }
            menuBlock.style.animation = 'fadeOutUp .3s';
            menuBlock.style.opasity = 0;
            menu.style.backgroundPosition = "center center";
            menu.style.backgroundSize = "100% 100%";


            menu.dataChecked = 1;
            setTimeout(function() {
                menuBlock.style.display = 'none';
            }, 200);

        } else {
            if (body.clientWidth < 800) {
                controls.style.display = 'none';

            } else {
                menu.style.backgroundImage = "url(img/menu_w.svg)";
                controls.style.display = 'block';
            }
            menuBlock.style.animation = 'fadeInDown .3s';
            menuBlock.style.opasity = 1;
            menuBlock.style.display = 'flex';
            controls.style.display = 'none';
            menu.dataChecked = 0;
            menu.style.backgroundImage = "url(img/close.png)";
            menu.style.backgroundPosition = "center center";
            menu.style.backgroundSize = "100% 100%";


        }

    },
    Pages: function(number) {

        var pages = document.getElementById('pages');
        var pageArr = pages.children;
        for (var index = 0; index < pageArr.length; index++) {
            var element = pageArr[index];

            element.style.transition = '0.5s'

            element.style.opacity = '0';

        };

        pageArr[number].style.opacity = '1';

        element.style.transition = '0.5s'
    },

    Counter: function(n) {
        var counter = document.getElementById('counter');
        counter.textContent = n > 9 ? (n + 1) : "0" + (n + 1);
    },
    PagesInit: function() {
        var pages = document.getElementById('pages');
        var pageArr = pages.children;

        pageArr[0].style.opacity = '1';
        pageArr[0].style.transition = '0.5s'
    },
    Gallery: function(n) {
        var gallery = document.getElementsByClassName('gallery')[n];
        var galleryBox = document.getElementsByClassName('galleryBox')[n];

        if (gallery.dataChecked == 0) {
            galleryBox.style.animation = 'fadeOutDown .3s';
            galleryBox.style.opasity = 0;

            galleryBox.style.zIndex = '';
            gallery.style.zIndex = '';
            gallery.dataChecked = 1;
            gallery.style.backgroundImage = "url(img/gallery.png)";
            gallery.style.backgroundColor = "#333333";
            setTimeout(function() {
                galleryBox.style.display = 'none';
            }, 200);
        } else {
            galleryBox.style.animation = 'fadeInUp .3s';
            galleryBox.style.opasity = 0;

            galleryBox.style.display = 'flex';
            galleryBox.style.zIndex = 7;
            gallery.style.zIndex = 8;
            gallery.dataChecked = 0;
            gallery.style.backgroundImage = "url(img/close.png)";
            gallery.style.backgroundColor = "#ffffff";
        }
    },
    Des: function(n) {
        var description = document.getElementsByClassName('description')[n];
        var descriptionBox = document.getElementsByClassName('descriptionBox')[n];

        if (description.dataChecked == 0) {
            descriptionBox.style.animation = 'fadeOutDown .3s';
            descriptionBox.style.opasity = 0;


            descriptionBox.style.zIndex = '';
            description.style.zIndex = '';
            description.dataChecked = 1;

            description.style.backgroundImage = "url(img/more.png)";
            description.style.backgroundColor = "#333333";
            setTimeout(function() {
                descriptionBox.style.display = 'none';
            }, 200);
        } else {
            descriptionBox.style.animation = 'fadeInUp .3s';
            descriptionBox.style.opasity = 0;

            descriptionBox.style.display = 'flex';
            descriptionBox.style.zIndex = 7;
            description.style.zIndex = 8;
            description.dataChecked = 0;
            description.style.backgroundImage = "url(img/close.png)";
            description.style.backgroundColor = "#ffffff";


        }
    },
    About: function() {
        var about = document.getElementsByClassName('about')[0];
        var aboutBox = document.getElementsByClassName('aboutBox')[0];

        if (about.dataChecked == 0) {
            aboutBox.style.animation = 'fadeOutUp .3s';
            aboutBox.style.opasity = 0;

            aboutBox.style.zIndex = '';
            about.style.zIndex = '';
            about.dataChecked = 1;
            about.style.backgroundImage = "url(img/about.png)";
            about.style.backgroundColor = "#333333";
            setTimeout(function() {
                aboutBox.style.display = 'none';
            }, 200);

        } else {
            aboutBox.style.animation = 'fadeInDown .3s';
            aboutBox.style.opasity = 1;
            aboutBox.style.display = 'flex';
            aboutBox.style.zIndex = 7;
            about.style.zIndex = 8;
            about.style.backgroundImage = "url(img/close.png)";
            about.style.backgroundColor = "#ffffff";
            about.dataChecked = 0;

        }
    },
    onReady: function() {
        document.getElementsByTagName('body')[0].style.opacity = '1';
    },
    resize: function(e) {
        var target = e.target;
        console.log(target);


        var img = document.createElement("div");
        img.style.backgroundImage = target.style.backgroundImage;
        img.style.backgroundColor = "rgba(0, 0, 0, 0.24)";
        img.style.width = "100vw";
        img.id = 'newImg'
        img.style.height = "100vh";
        img.style.backgroundSize = "contein";
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.backgroundPosition = "center center";
        img.style.backgroundRepeat = "no-repeat no-repeat";
        img.style.left = "0";
        img.style.zIndex = 100;
        img.style.cursor = "zoom-out";
        if (document.body.clientWidth < 800) {
            img.style.backgroundSize = "100%";
        }
        document.body.appendChild(img);
        img.onclick = function() {
            document.body.removeChild(img);
        }
    }
};


var controller = {


    menu: function() {
        view.Menu();
    },
    nextPage: function(e) {
        model.nextPage();
        view.Counter(model.pageCount);
        view.Pages(model.pageCount)
    },
    pageN: function(e) {
        model.goToPage(parseInt(e.target.dataset.href));
        console.log(e);
        view.Counter(model.pageCount);
        view.Pages(model.pageCount);
        view.Menu();
    },
    previewPage: function(e) {
        model.previousPage();
        view.Counter(model.pageCount);
        view.Pages(model.pageCount)
    },
    init: function() {
        view.PagesInit();
    },
    gallery: function() {
        view.Gallery(model.pageCount);

    },
    desc: function() {
        view.Des(model.pageCount);
    },
    about: function() {
        view.About(model.pageCount);
    },
    onReady: function() {
        view.onReady();
    },
    resize: function(e) {
        view.resize(e);
    }

};



(function() {

    var app = {

        init: function() {
            this.main();
            this.event();
        },

        main: function() {
            controller.init();
        },

        event: function() {


            window.addEventListener('keydown', controller.page);
            document.getElementById('previewPage').addEventListener('click', controller.previewPage);
            document.getElementById('nextPage').addEventListener('click', controller.nextPage);
            document.querySelectorAll('.next').forEach(function(elem) {
                elem.addEventListener('click', controller.nextPage);
            });
            document.querySelectorAll('.preview').forEach(function(elem) {
                elem.addEventListener('click', controller.previewPage);
            });

            document.getElementById('menuButton').addEventListener('click', controller.menu);
            document.querySelectorAll('.gallery').forEach(function(elem) {
                elem.addEventListener('click', controller.gallery);
            });
            document.querySelectorAll('.description').forEach(function(elem) {
                elem.addEventListener('click', controller.desc);
            });
            document.querySelectorAll('.g1').forEach(function(elem) {
                elem.addEventListener('click', controller.resize);
            });

            document.querySelectorAll('.g2-1').forEach(function(elem) {
                elem.addEventListener('click', controller.resize);
            });
            document.querySelectorAll('.g2-2').forEach(function(elem) {
                elem.addEventListener('click', controller.resize);
            });
            document.querySelectorAll('.g3').forEach(function(elem) {
                elem.addEventListener('click', controller.resize);
            });
            document.getElementsByClassName("about")[0].addEventListener('click', controller.about);

            document.querySelectorAll('.links a').forEach(function(elem) {
                elem.addEventListener('click', controller.pageN);
            });
            window.addEventListener('load', controller.onReady);
            window.addEventListener('DOMContentLoaded', controller.onReady);
        }

    }
    app.init();

})();