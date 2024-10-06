const popularServiceTitle = document.querySelector('.popular-services-content__title');
const popularServiceMainText = document.querySelector('.popular-services-content__main-text');
const popularServiceImage = document.querySelector('.popular-services-content__main-img');
const fullScreenSlider = document.querySelector('.slider-full-screen');
const fullScreenImage = document.querySelector('.slider-full-screen__content');
const closeBtn = document.querySelector('.slider-full-screen__close');
let changingNow = false;
let slideNumber = 0;
let startSlidingX = 0;
let endSlidingX = 0;
const textForPopularServices = {
    0: {
        title: "Кузовной ремонт",
        mainText: "Работы по восстановлению геометрии направлены на возврат первоначальных, максимально приближенных к заводским, параметров. Для определения имеющихся дефектов мастера проводят диагностику, которая состоит из нескольких этапов: Визуальное обследование, в которое входит: оценка внешних поверхностей, сварных границ и соединений; осмотр внутреннего пространства салона, моторного отсека и багажника; оценка состояния днища и других элементов на подъемнике. Замер симметричности колес. Специалисты оценивают расположение колес по отношению друг к другу, замеряют промежуток между передними и задними колесами. Тестирование контрольных точек. Осуществляется на подъемнике или стапеле с помощью специальных компьютерных программ. После выявления неточностей в правильности общей геометрии, начинается непосредственно сам ремонт автомобиля. Для этого используется стапель, обладающий сложной системой креплений. Он позволяет проводить самую жесткую «перетяжку» и воздействовать на нужные точки. Силу и время воздействия определяет компьютерная программа. Восстановление геометрии кузова завершается, когда контрольные точки занимают указанные программой координаты. Мы производим кузовной ремонт различных марок Acura, Alfa Romeo, Aston Martin, Audi, Bentley, BMW, Brilliance, Buick, Cadillac, Chery, Chevrolet, Chrysler, Citroen, Dacia, Daewoo, Daihatsu, Datsun, Dodge, Fiat, Ford, Geely, GMC, Great Wall, Hafei, Honda, Hummer, Hyundai, Infiniti, Iran Khodro, Isuzu, JAC, Jaguar, Jeep, Kia, Lada (ВАЗ), Lancia, Land Rover, Lexus. Lifan, Lincoln, Maserati, Mazda, Mercedes-Benz, Mercury, MG, Mini, Mitsubishi, Nissan, Opel, Peugeot, Plymouth, Pontiac, Porsche, Renault, Rover, Saab, Seat, Skoda, Smart, SsangYong, Subaru, Suzuki, Tesla, Toyota, Volkswagen, Volvo и другие.",
        img: "./img/bodyRepair.jpg"
    },
    1: {
        title: "Сварочные работы",
        mainText: "Чаще всего в них нуждаются колесные крылья, пороги, пол, днище. Для автосварки потребуется качественное оборудование, с которым можно работать даже на участках кузова в труднодоступном месте, и при этом создавать крепкие и надежные швы. Для этих целей чаще всего используют углекислотный полуавтомат и инвертор. Они работают при помощи тока повышенной частоты и обеспечивают быструю и качественную сварку необходимых элементов.",
        img: "./img/bodyRepair.jpg"
    },
    2: {
        title: "Окрас переходом",
        mainText: "Прежде всего следует определить, в каком месте будет располагаться граница перехода по лаку. Во-первых, она всегда должна быть дальше, чем переход по базе (это понятно). Во-вторых, для перехода по лаку лучше всего выбирать те участки детали, которые меньше всего бросаются в глаза. Например: наиболее узкие участки детали (сужение крыла на стойке, над колесной аркой и т.д.); рельефные и фактурные элементы (линия молдинга, различные углубления, границы и изгибы). Если нет возможности сделать переход по лаку в незаметном месте — лучше покрывать лаком всю деталь, поскольку выполнение перехода на «видном месте» и его дальнейшая полировка — процесс более трудоемкий и дорогостоящий, чем лакировка всего элемента. К тому же нет никаких гарантий, что в процессе дальнейшей эксплуатации, например, после нескольких механических моек, не проявится видимая граница, «ступенька» между старым и новым лаком. Со временем такое вполне может случиться. Связано это тем, что любое ЛКП обладает максимальной прочностью в своей верхней части, в то время как в глубину прочность слоя становится ниже. Именно из-за этого обстоятельства каждая последующая «глубокая» полировка ЛКП получается все менее долговечной. Точно так же при полировке зоны перехода, когда мы спиливаем самую прочную «верхушку», увеличивается риск того, что дальнейшие механические воздействия на оставшееся покрытие проявят видимую границу ремонта. Однако в определенных случаях лакировка всей детали не имеет абсолютно никакого смысла. Например, при устранении небольшой царапины на бампере. Или, как в нашем случае с крылом, которое не имеет выраженной границы со стойкой и крышей. Лакировать два задних крыла, стойки и крышу — роскошь непозволительная даже для такого роскошного авто, как наш «немец», поэтому переход по лаку в таком случае выполнять не можно, а нужно: риск окупается большой экономией. И идеальное место для перехода в данном случае — сужение на стойке.",
        img: "./img/bodyRepair.jpg"
    },
    3: {
        title: "Полная покраска авто",
        mainText: "Хорошее оснащение малярного участка автосервиса, высокая квалификация специалистов и строгое соблюдение технологической дисциплины позволяют на профессиональном уровне проводить полную покраску автомобилей в Минске. Обращаясь к нам, вы можете быть спокойны за качество , поскольку покраска Вашего авто будет выполнена в сушильно-малярной камере TROMMELBERG с использованием высококачественных лакокрасочных материалов. В точном соответствии с инструкцией изготовителя для автопокраски, наши мастера последовательно проведут нанесение слоев грунта, краски и защитного лака. Для подготовки поверхности перед покраской авто, будет использовано шлифовальное оборудование Mirka,Rupes.",
        img: "./img/bodyRepair.jpg"
    },
    4: {
        title: "Ремонт и окраска деталей",
        mainText: "Бампер – это та деталь автомобиля, которая наиболее подвержена повреждениям. В современных машинах ее выполняют из пластика, поэтому при аварии бампер может получить значительные повреждения. В этом случае выполняются замена или ремонт с целью восстановления геометрии, а затем – окраска бампера. Данная деталь автомобиля довольно дорогостоящая, поэтому мы считаем, что ремонт экономически выгоден для автовладельцев. Для этого автосервис «AutoGuru» использует несколько технологических приемов: — Вмятины и деформированные участки подвергают нагреву и выпрямлению. — Трещины устраняются путем сварки с использованием специального инструмента и пластикового электрода при армировании сеткой. — Для некоторых видов пластиков недопустим нагрев, поэтому применяется склеивание эпоксидиановым составом. В ходе ремонта бампера могут быть восстановлены утраченные фрагменты и крепления. Перед окраской бампера для улучшения адгезии специалисты «AutoGuru» произведут шлифовку поверхности до нужной степени шероховатости.",
        img: "./img/bodyRepair.jpg"
    }
}

document.querySelector('.gallery-slider-slide__back').addEventListener('click', function () {
    changeSlide(slideNumber - 1);
});

document.querySelector('.gallery-slider-slide__next').addEventListener('click', function () {
    changeSlide(slideNumber + 1);
});

if (window.innerWidth < 600)
    document.querySelector('.popular-services-content-mobile0').appendChild(document.querySelector('.popular-services-content'));

document.querySelectorAll('.popular-services-menu-item').forEach((item, index) => {
    item.addEventListener('click', function () {
        changePopularServiceContent(index);
        if (window.innerWidth < 600)
            document.querySelector('.popular-services-content-mobile' + index).appendChild(document.querySelector('.popular-services-content'));

        document.querySelectorAll('.popular-services-menu-item-active').forEach(element => {
            element.classList.remove('popular-services-menu-item-active');
        });

        item.classList.add('popular-services-menu-item-active');
    });
});

document.querySelector('.gallery-slider').addEventListener('touchstart', (event) => {
    startSlidingX = event.touches[0].clientX;
});

document.querySelector('.gallery-slider').addEventListener('touchend', (event) => {
    if (changingNow) return;
    
    endSlidingX = event.changedTouches[0].clientX;

    if (Math.abs(startSlidingX - endSlidingX) > 50) {
        if (startSlidingX > endSlidingX) {
            changeSlide(slideNumber + 1);
        } else {
            changeSlide(slideNumber - 1);
        }
    }
});

document.querySelectorAll('.gallery-slider-slide__img img').forEach(img => {
    img.addEventListener('click', function () {
        fullScreenSlider.style.display = "flex";
        fullScreenImage.src = this.src;
    });
});

closeBtn.addEventListener('click', () => {
    fullScreenSlider.style.display = "none";
});

fullScreenSlider.addEventListener("click", (event) => {
    if (event.target === fullScreenSlider) {
        fullScreenSlider.style.display = "none";
    }
});

function changeSlide(index) {
    if (changingNow) return;

    changingNow = true;

    const allSlides = document.querySelectorAll('.gallery-slider-slide__img');
    const quallitySlides = allSlides.length;

    if (window.innerWidth < 600) {
        if (index >= quallitySlides) {
            slideNumber = 0;
        } else if (index < 0) {
            slideNumber = quallitySlides - 1;
        } else {
            slideNumber = index;
        }
    } else {
        if (index + 3 > quallitySlides) {
            slideNumber = 0;
        } else if (index < 0) {
            slideNumber = quallitySlides - 3;
        } else {
            slideNumber = index;
        }
    }

    let movingTo;

    if (window.innerWidth < 600)
        movingTo = -slideNumber * (100 + (10 / (window.innerWidth / 100)));
    else
        movingTo = -slideNumber * (100 / 3) - (slideNumber * (10 / (window.innerWidth / 100)));

    document.querySelector('.gallery-slider-slide').style.transform = `translateX(${movingTo}%)`;


    setTimeout(() => {
        changingNow = false;
    }, 300);
}

function changePopularServiceContent(index) {
    popularServiceTitle.innerHTML = textForPopularServices[index].title;
    popularServiceMainText.innerHTML = textForPopularServices[index].mainText;
    popularServiceImage.src = textForPopularServices[index].img;
}