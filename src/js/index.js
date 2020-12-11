$('.hamburguer').click(() => {
    $('.menu-mobile').toggleClass('openMenu');
    $('.hamburguer').toggleClass('animateOpemMenu')
})

$('header a').click(() => {
    $('.menu-mobile').toggleClass('openMenu');
    $('.hamburguer').toggleClass('animateOpemMenu')
})


$(window).scroll(() => {
    if ($(window).scrollTop() > 150) {
        $('header').addClass('bg-Theme2')
    } else {
        $('header').removeClass('bg-Theme2')
    }
})


// formatação de numeros com pontuação até "999.999.999", importante ser string.
function formatNumber(num) {
    const countNum = num.length;

    let result = '';
    let param1 = countNum - 3;
    let param2 = countNum - 6;

    if (countNum >= 7) { // 7 digitos para cima até 9
        let float1 = num.slice(0, param2)
        let float2 = num.slice(param2, param1)
        let float3 = num.slice(param1, countNum)
        result = float1 + '.' + float2 + '.' + float3
    } else if(countNum >= 4 && countNum < 7){  // de 4 até 6 digitos
        let float1 = num.slice(0, param1)
        let float2 = num.slice(param1, countNum)
        result = float1 + '.' + float2
    }else{ // a baixo de 3
        result = ''
    }

    return result
}

async function printDataCovid() {

    const { data } = await respConvidAPI();

    $('#mortes').text(formatNumber(data.deaths.toString()))
    $('#recuperados').text(formatNumber(data.recovered.toString()))
    $('#casos').text(formatNumber(data.cases.toString()))
}

function init() {
    printDataCovid();
}

init();



