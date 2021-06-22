// adding footer and header
$(function() {
    $("#header").load("../header.html");
    $("#category-page").load("../category.html");
    $("#footer").load("../footer.html");
});

// Scroll to top after reload
history.scrollRestoration = "manual";
$(window).on('onload', function() {
    $(window).scrollTop(0);
});


// Data AOS initialyzing
$(function() {
    AOS.init({
        duration: 2000,
        once: true
    });
});

// Visit counter
var counter = document.getElementsByClassName("visitors-count")[0];

function visitCounter() {
    fetch("https://api.countapi.xyz/update/grammobarta.com/grammobartaPageViews/?amount=1").then(res => res.json())
        .then(data => counter.innerHTML = data.value)
}
visitCounter();

// Get the modal
var modal = document.getElementById("myModal");
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function() {
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});
var span = document.getElementsByClassName("close")[0];
$(span).click(function() {
    modal.style.display = "none";
});

// Type Writer effect
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
}

// Current date in English
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date();
var date = today.toLocaleDateString("en-US", options);
document.getElementById("topbar-eng-date").innerHTML = date;

// Current time
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("topbar-time").innerText = time;
    document.getElementById("topbar-time").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();

//English to Bengali Date Conversion
function bangla_date() {
    const monthName = [
        'বৈশাখ', //0
        'জ্যৈষ্ঠ ', //1
        'আষাঢ় ', //2
        'শ্রাবণ ', //3
        'ভাদ্র', //4
        'আশ্বিন ', //5
        'কার্তিক ', //6
        'অগ্রহায়ণ ', //7
        'পৌষ ', //8
        'মাঘ', //9
        'ফাল্গুন ', //10
        'চৈত্র ' //11
    ];
    const dayName = [
        'রবিবার',
        'সোমবার',
        'মঙ্গলবার',
        'বুধবার',
        'বৃহস্পতিবার',
        'শুক্রবার',
        'শনিবার',
    ];

    let dateObj = new Date();
    let engWeekDay = dateObj.getDay();
    let engDay = dateObj.getDate();
    let engMonth = dateObj.getMonth() + 1;
    let engYear = dateObj.getFullYear();

    let variableDayL;
    let variableDayH;
    let variableEngDay;
    let variableMonth = 03;
    let variableYear = 593;

    if (engMonth == 4) {
        variableEngDay = 15;
        variableDayL = 14;
        variableDayH = 14;
    } else if (engMonth == 5 || engMonth == 6) {
        variableEngDay = 16;
        variableDayL = 15;
        variableDayH = 15;
    } else if (engMonth == 7) {
        variableEngDay = 18;
        variableDayL = 16;
        variableDayH = 17;
    } else if (engMonth == 8 || engMonth == 9) {
        variableEngDay = 18;
        variableDayL = 17;
        variableDayH = 17;
    } else if (engMonth == 10) {
        variableEngDay = 19;
        variableDayL = 18;
        variableDayH = 18;
    } else if (engMonth == 11) {
        variableEngDay = 18;
        variableDayL = 18;
        variableDayH = 17;
    } else if (engMonth == 12) {
        variableEngDay = 17;
        variableDayL = 18;
        variableDayH = 16;
    } else if (engMonth == 1) {
        variableEngDay = 15;
        variableDayL = 16;
        variableDayH = 14;
    } else if (engMonth == 2) {
        variableEngDay = 14;
        variableDayL = 14;
        variableDayH = 13;
    } else if (engMonth == 3) {
        variableEngDay = 16;
        variableDayL = 16;
        variableDayH = 15;
    }

    var banglaDay;
    var banglaMonth;
    var banglaYear;

    var finalEnlishToBanglaNumber = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };

    String.prototype.getDigitBanglaFromEnglish = function() {
        var retStr = this;
        for (var x in finalEnlishToBanglaNumber) {
            retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
        }
        return retStr;
    };

    if (engDay < variableEngDay) {
        engDay = engDay + 31;
        banglaDay = (engDay - variableDayL).toLocaleString().getDigitBanglaFromEnglish();
        variableMonth = variableMonth + 1;
        if (engMonth <= variableMonth) {
            engMonth = engMonth + 12;
            banglaMonth = (engMonth - variableMonth).toLocaleString();
            variableYear = variableYear + 1;
            banglaYear = (engYear - variableYear).toLocaleString().getDigitBanglaFromEnglish().replace(",", "");
        } else {
            banglaMonth = (engMonth - variableMonth).toLocaleString();
            banglaYear = (engYear - variableYear).toLocaleString().getDigitBanglaFromEnglish().replace(",", "");
        }
    } else {
        banglaDay = (engDay - variableDayH).toLocaleString().getDigitBanglaFromEnglish();
        if (engMonth <= variableMonth) {
            engMonth = engMonth + 12;
            banglaMonth = (engMonth - variableMonth).toLocaleString();
            variableYear = variableYear + 1;
            banglaYear = (engYear - variableYear).toLocaleString().getDigitBanglaFromEnglish().replace(",", "");
        } else {
            banglaMonth = (engMonth - variableMonth).toLocaleString();
            banglaYear = (engYear - variableYear).toLocaleString().getDigitBanglaFromEnglish().replace(",", "");
        }
    }

    document.getElementById('topbar-bangla-date').innerHTML = dayName[engWeekDay] + ", " + banglaDay + " " + monthName[banglaMonth - 1] + ", " + banglaYear;

}
bangla_date();

// Date toggle 
const chk = document.getElementById('flexSwitchCheckDefault');
chk.addEventListener('change', () => {
    if (document.getElementById('flexSwitchCheckDefault').checked) {
        document.getElementById("topbar-eng-date").style.display = "none";
        document.getElementById("topbar-bangla-date").style.display = "block";
        document.getElementById("topbar-bangla-date").style.paddingRight = "25px";
        document.getElementById("english").style.display = "none";
        document.getElementById("bangla").style.display = "block";
    } else {
        document.getElementById("topbar-eng-date").style.display = "block";
        document.getElementById("topbar-bangla-date").style.display = "none";
        document.getElementById("bangla").style.display = "none";
        document.getElementById("english").style.display = "block";
    }
});

// Scroll to top
var btn = $('#scroll-to-top');
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// Single Page Latest Posts Slider
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500);
}
showSlides();