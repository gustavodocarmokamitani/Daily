$(document).ready(function() {

    let $btns = $('.project-area .button-group button');

    $btns.click(function(e) {

        $('.project-area .button-group button').removeClass("active")
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false
    });

    $('.project-area .button-group #btn1').trigger('click');

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    //Owl Carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                560: {
                    items: 2
                }
            }
        })
        // sticky navigation menu 

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed()
})



const mout = document.getElementsByClassName('mouseout')

const card = document.getElementsByClassName('experience-img')

card[0].addEventListener('mouseover', function() {
    var txt = document.querySelector('#experience-text').innerHTML = `
        <h1 style='color: black;' id='experience-text' class="text-uppercase title-text">Sobre</h1>
        HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.
        `
    mout[0].addEventListener('mouseout', function() {
        var txt = document.querySelector('#experience-text').innerHTML = `
            <p id="experience-text" class="para mt-2">* passe o curso no card para ler sobre *</p>
            `
    })

})

card[1].addEventListener('mouseover', function() {
    var txt = document.querySelector('#experience-text').innerHTML = `
        <h1 style='color: black;' id='experience-text' class="text-uppercase title-text">Sobre</h1>
        CSS é uma linguagem de folha de estilo composta por "camadas", criado com o propósito de estilizar as páginas HTML.
        `
    mout[1].addEventListener('mouseout', function() {
        var txt = document.querySelector('#experience-text').innerHTML = `
                <p id="experience-text" class="para mt-2">* passe o curso no card para ler sobre *</p>
                `
    })
})
card[2].addEventListener('mouseover', function() {
    var txt = document.querySelector('#experience-text').innerHTML = `
        <h1 style='color: black;' id='experience-text' class="text-uppercase title-text">Sobre</h1>
        Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.
        `
    mout[2].addEventListener('mouseout', function() {
        var txt = document.querySelector('#experience-text').innerHTML = `
                <p id="experience-text" class="para mt-2">* passe o curso no card para ler sobre *</p>
                `
    })
})
card[3].addEventListener('mouseover', function() {
    var txt = document.querySelector('#experience-text').innerHTML = `
        <h1 style='color: black;' id='experience-text' class="text-uppercase title-text">Sobre</h1>
        JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. 
        `
    mout[3].addEventListener('mouseout', function() {
        var txt = document.querySelector('#experience-text').innerHTML = `
                <p id="experience-text" class="para mt-2">* passe o curso no card para ler sobre *</p>
                `
    })
})
card[4].addEventListener('mouseover', function() {
    var txt = document.querySelector('#experience-text').innerHTML = `
        <h1 style='color: black;' id='experience-text' class="text-uppercase title-text">Sobre</h1>
        Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.
        `
    mout[4].addEventListener('mouseout', function() {
        var txt = document.querySelector('#experience-text').innerHTML = `
                <p id="experience-text" class="para mt-2">* passe o curso no card para ler sobre *</p>
                `
    })
})
card[5].addEventListener('mouseover', function() {
    var txt = document.querySelector('#experience-text').innerHTML = `
        <h1 style='color: black;' id='experience-text' class="text-uppercase title-text">Sobre</h1>
        O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.
        `
    mout[5].addEventListener('mouseout', function() {
        var txt = document.querySelector('#experience-text').innerHTML = `
                <p id="experience-text" class="para mt-2">* passe o curso no card para ler sobre *</p>
                `
    })
})
card[6].addEventListener('mouseover', function() {
    var txt = document.querySelector('#experience-text').innerHTML = `
        <h1 style='color: black;' id='experience-text' class="text-uppercase title-text">Sobre</h1>
        Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
        `
    mout[6].addEventListener('mouseout', function() {
        var txt = document.querySelector('#experience-text').innerHTML = `
                <p id="experience-text" class="para mt-2">* passe o curso no card para ler sobre *</p>
                `
    })
})
card[7].addEventListener('mouseover', function() {
    var txt = document.querySelector('#experience-text').innerHTML = `
        <h1 style='color: black;' id='experience-text' class="text-uppercase title-text">Sobre</h1>
        GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.
     `
    mout[7].addEventListener('mouseout', function() {
        var txt = document.querySelector('#experience-text').innerHTML = `
                <p id="experience-text" class="para mt-2">* passe o curso no card para ler sobre *</p>
                `
    })
})
card[8].addEventListener('mouseover', function() {
    var txt = document.querySelector('#experience-text').innerHTML = `
        <h1 style='color: black;' id='experience-text' class="text-uppercase title-text">Sobre</h1>
        Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.
         `
    mout[8].addEventListener('mouseout', function() {
        var txt = document.querySelector('#experience-text').innerHTML = `
                <p id="experience-text" class="para mt-2">* passe o curso no card para ler sobre *</p>
                `
    })
})