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

        let sun = $('#icon2')
        sun.addClass("fa-spin")
        sun.addClass("inverted")

        let snowflake = $('#icon8')
        snowflake.addClass("fa-spin")
        snowflake.addClass("inverted")
    })

})