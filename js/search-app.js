
const url = 'https://scmq7n.a.searchspring.io/api/search/search.json';

$(document).ready(function() {
    $('#searchInput').keypress(function(e) {
        if (e.which === 13) {
            $('#submitBtn').click();
        }
    });
    $('#submitBtn').click(function() {
        let search = $('#searchInput').val();
        console.log(search);
        $.get(url, {
            siteId: "scmq7n",
            q: search,
            resultsFormat: "native"
        }).done(function (data) {
            handleResponse(data)
        });
    })
});


function handleResponse(data) {
    console.log(data.results)
    let results = data.results;
    let html = '';
    results.forEach(function (result) {
        html += '<div class="shadow-lg p-3 mb-5 bg-white rounded" style="height: 32rem; width: 28rem;">';
        html += '<div class="card-body flex-column d-flex justify-content-center">';
        html += '<img class="card-img thumbnail mx-auto d-block" src=" ' + result.imageUrl + '"' + '/>';
        html += '</div>';
        html += '</div>';
    })
    $('#searchResults').html(html);
}


