// $(function () {
//     let topics = ["shark", "whale", "man-of-war", "jelly-fish", "seal", "orca", "starfish", "sting ray", "dolphin"]
//     let search
//     let num = 10

//     if (localStorage.getItem('theTopics')) {
//         topics = JSON.parse(localStorage.getItem('theTopics'))
//     }

//     let renderButtons = () => {
//         $(".btn-div").empty()

//         for (let i = 0; i < topics.length; i++) {
//             $(".btn-div").append($("<button>").attr("data-name", topics[i]).addClass("btn btn-outline-secondary stuff").text(topics[i]))
//         }
//     }

//     //create new btn
//     $("#submit").on("click", function (event) {
//         event.preventDefault()

//         let thisSearch = $("#search-input").val().trim()
//         topics.push(thisSearch)

//         localStorage.clear()
//         localStorage.setItem('theTopics', JSON.stringify(topics))

//         renderButtons()
//         $("#search-input").val("")
//     })

