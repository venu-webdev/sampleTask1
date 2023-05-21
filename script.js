// alert("hello");
// (1°C × 9/5) + 32 = 33.8°F
// (1°F − 32) × 5/9 = -17.22°C
// (4°F − 32) × 5/9 + 273.15
// 4K − 273.15
let inputTemp = $('.input-temp-input').val();
let outputTemp = $('.output-temp-output').val();
let inputTempTag = $('.input-temp-input');
let outputTempTag = $('.output-temp-output');
// console.log(inputTemp);
console.log("before");

// $('.input-temp-input').on('input', '.input-temp-input', function () {
//     let tempInType = $('.temp-btn.intemp.i-active');
//     $(this).val();
//     // console.log(tempInType);
// });

function calculate(inputTempValue) {

    // if (inputTempValue === "") {
    //     $('.input-temp-input').val("0");
    // }
    console.log("---inside the cal function");
    console.log(inputTempValue);
    inputTextLength = inputTempValue.length;

    if (inputTextLength < 10) {
        inputTempTag.css("fontSize", `80px`);
        outputTempTag.css("fontSize", `80px`);
    }
    else if (inputTextLength === 10) {
        inputTempTag.css("fontSize", `75px`);
        outputTempTag.css("fontSize", `75px`);
    }
    else if (inputTextLength === 11) {
        inputTempTag.css("fontSize", `70px`);
        outputTempTag.css("fontSize", `70px`);
    }

    else if (inputTextLength === 12) {
        inputTempTag.css("fontSize", `65px`);
        outputTempTag.css("fontSize", `65px`);
    } else if (inputTextLength === 13) {
        inputTempTag.css("fontSize", `60px`);
        outputTempTag.css("fontSize", `60px`);
    }
    else if (inputTextLength === 14) {
        inputTempTag.css("fontSize", `55px`);
        outputTempTag.css("fontSize", `55px`);
    }
    else if (inputTextLength === 15) {
        inputTempTag.css("fontSize", `50px`);
        outputTempTag.css("fontSize", `50px`);
    }
    else if (inputTextLength === 16) {
        inputTempTag.css("fontSize", `45px`);
        outputTempTag.css("fontSize", `45px`);
    }
    else if (inputTextLength === 17) {
        inputTempTag.css("fontSize", `40px`);
        outputTempTag.css("fontSize", `40px`);
    }
    // 12 - 65px
    let currentFontSize = inputTempTag.css("fontSize");
    if (inputTextLength > 8 && inputTextLength < 18) {
        if (currentFontSize.replace("px", "") >= 40) {
            console.log(inputTempTag);
            console.log(currentFontSize, typeof (currentFontSize));
            let nextFontSize = (1 * currentFontSize.replace("px", "")) - 5;
            console.log(nextFontSize, typeof (nextFontSize));
            inputTempTag.css("fontSize", `${nextFontSize}px`);
            outputTempTag.css("fontSize", `${nextFontSize}px`);
            console.log(currentFontSize, typeof (currentFontSize));
        }
    }

    let inputTempType = $('.temp-btn.intemp.i-active').text();
    let outputTempType = $('.temp-btn.outtemp.o-active').text();
    console.log(inputTempType, "input temp type");
    console.log(outputTempType, "output temp type");
    let outputTempValue;
    if (inputTempType === "°C") {
        if (outputTempType === "°F") {
            outputTempValue = (inputTempValue * 9 / 5) + 32;
        }
        else {
            outputTempValue = (inputTempValue * 1) + 273.15;
        }
    } else if (inputTempType === "°F") {
        if (outputTempType === "°C") {
            outputTempValue = (inputTempValue - 32) * 5 / 9;
        }
        else {
            outputTempValue = (1 * inputTempValue - 32) * 5 / 9 + 273.15;
        }
    }
    else if (inputTempType === "°K") {
        if (outputTempType === "°C") {
            outputTempValue = 1 * inputTempValue - 273.15;
        }
        else {
            outputTempValue = (1 * inputTempValue - 273.15) * 9 / 5 + 32;
        }
    }
    let footerText = `${inputTempValue} ${inputTempType} = ${outputTempValue.toFixed(4).replace(/\.?0+$/, '')} ${outputTempType}`;
    $(".content-footer-content").text(footerText);
    // console.log("TempType: ", inputTempType);
    $('.output-temp-output').val(outputTempValue.toFixed(4).replace(/\.?0+$/, ''));
}

console.log("after");

$('.temp-btn.intemp').click(function () {
    console.log("---inside the .temp-btn.intemp");
    let tempInActive = $('.i-active');
    tempInActive.addClass('i-disabled');
    tempInActive.removeClass('i-active');

    $(this).addClass('i-active');
    $(this).removeClass('i-disabled');
    let tempText = $(this).text();
    // console.log($(this).text());

    $(`.temp-btn.outtemp`).removeClass('strikeout');
    $(`.temp-btn.outtemp`).addClass('o-disabled');


    if (tempText === "°F") {
        $(`.temp-btn.outtemp:contains("°C")`).removeClass('o-disabled').addClass('o-active');
        $(`.temp-btn.outtemp:contains("°K")`).removeClass('o-active').addClass('o-disabled');
    } else if (tempText === "°C") {
        $(`.temp-btn.outtemp:contains("°F")`).removeClass('o-disabled').addClass('o-active');
        $(`.temp-btn.outtemp:contains("°K")`).removeClass('o-active').addClass('o-disabled');
    } else if (tempText === "°K") {
        $(`.temp-btn.outtemp:contains("°C")`).removeClass('o-disabled').addClass('o-active');
        $(`.temp-btn.outtemp:contains("°F")`).removeClass('o-active').addClass('o-disabled');
    }
    $(`.temp-btn.outtemp:contains("${tempText}")`).addClass('strikeout').removeClass('o-active');
    $(`.temp-btn.outtemp:contains("${tempText}")`).attr('disabled', true);
    calculate(+$('.input-temp-input').val());
});

$('.temp-btn.outtemp').click(function () {
    console.log("---inside the .temp-btn.outtemp");
    let tempOutActive = $('.o-active');
    tempOutActive.removeClass('o-active');
    tempOutActive.addClass('o-disabled');

    $(this).addClass('o-active');
    $(this).removeClass('o-disabled');
    console.log("changed");
    // console.log(typeof ();
    calculate(+$('.input-temp-input').val());
});



