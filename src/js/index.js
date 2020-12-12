$('.hamburguer').click(() => {
    $('.menu-mobile').toggleClass('openMenu');
    $('.hamburguer').toggleClass('animateOpemMenu')
})

$('header a').click(() => {
    $('.menu-mobile').toggleClass('openMenu');
    $('.hamburguer').toggleClass('animateOpemMenu')
})


$(window).scroll(() => {
    if ($(window).scrollTop() > 300) {
        $('header').addClass('bg-Theme2')        
        $('.targe-container').addClass('targe-position')
        $('.btn-up').removeClass('btn-up-none')
    } else {
        $('header').removeClass('bg-Theme2')        
        $('.targe-container').removeClass('targe-position')
        $('.btn-up').addClass('btn-up-none')
    }
})


$('.btn-up').click(()=>{
    $(window).scrollTop(0);  
})

// formatação de numeros com pontuação até "999.999.999", importante ser string.
function formatNumber(num) {
    num = num.toString();
    
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

    function reverseDate(s){
        var dateString = s.toString();
        dateString = dateString.slice(0,10);

        const day = dateString.slice(8,10)
        const mth = dateString.slice(5,7)
        const yr = dateString.slice(0,4)

        return `${day}/${mth}/${yr}`;
    }

    const { data } = await respConvidAPI();

    const totalCase = data.deaths + data.recovered + data.cases;
    const dataUpdate = reverseDate(data.updated_at);
        
    $('#mortes').text(formatNumber(data.deaths))
    $('#recuperados').text(formatNumber(data.recovered))
    $('#casos').text(formatNumber(totalCase))
    $('.dateUpdate').text(`(ultima atualização em: ${dataUpdate})`)
}

function init() {
    printDataCovid();
}

init();



