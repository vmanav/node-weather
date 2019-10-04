
function createCookie(key, value, maxAgeSeconds = 15) {

    newCookie = `${key}=${value};max-age=${maxAgeSeconds}`;
    console.log("The newCookie :", newCookie)
    document.cookie = newCookie;
    console.log("The document.cookie - ", document.cookie)
}

function readCookie(name) {
    console.log("readCookie fn -->");
    let key = name + "=";
    let cookies = document.cookie.split(';');
    console.log(cookies)
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        // console.log(i + "th cookie is : " + cookie);
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(key) === 0) {
            return cookie.substring(key.length, cookie.length);
        }
    }
    return null;
}

function deleteCookie(name) {
    // just set the cookie's expiration dat in past
    createCookie(name, "", -1);
}


$(() => {

    let input = $('#input')
    let submitButton = $('submitButton')

    input.focus(() => {

        let sun = $('#icon2')
        sun.removeClass("fa-spin")
        sun.removeClass("inverted")

        let snowflake = $('#icon8')
        snowflake.removeClass("fa-spin")
        snowflake.removeClass("inverted")
    })

    input.focusout(() => {

        let cityName = input.val();
        console.log(cityName);
        alert(cityName);
        createCookie("city", cityName);
        createCookie("city1", "pehli");
        createCookie("city2", "dusri");
        console.log(readCookie("city"));
        deleteCookie("city")
        console.log(readCookie("city"));


        let sun = $('#icon2')
        sun.addClass("fa-spin")
        sun.addClass("inverted")

        let snowflake = $('#icon8')
        snowflake.addClass("fa-spin")
        snowflake.addClass("inverted")
    })

    submitButton.click(() => {
        // let cityName = input.val();
        // console.log(cityName);
        // alert(cityName);
        // createCookie("city", );
    })



})