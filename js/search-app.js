const url = 'https://scmq7n.a.searchspring.io/api/search/search.json';


$(document).ready(function () {
    $('#searchInput').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            $('#submitBtn').click();
            return false;
        }
    });
    $('#submitBtn').on('click', function () {
        $('#myPager, #btmPager').empty();
        let search = $('#searchInput').val();
        $('#searchedItem').html("You searched for '" + search + "'");
        $.get(url, {
            siteId: "scmq7n",
            q: search,
            page: 2,
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
        html += '<div class="card card-div p-3 mb-5 bg-white" style="height: 34rem; width: 20rem;">';
        html += '<div class="card-body card-img-container flex-column d-flex">';
        html += '<img class="card-img mx-auto" src=" ' + result.imageUrl + '"' + '/>';
        html += '<p class="name">' + result.name + '</p>';
        html += '<div class="row">';
        if (result.msrp !== null && result.msrp > result.price) {
            html += '<p class="pricing sale">$' + result.msrp + '.00</p>';
        }
        html += '<p class="pricing">$' + result.price + '.00</p>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    })
    $('#searchResults').html(html).pageMe({
        pagerSelector: '#myPager, #btmPager'
    });
}


$('#searchResults').pageMe({
    pagerSelector: '#myPager, #btmPager',
    activeColor: 'lightgrey',
    perPage: 9,
    showPrevNext: false,
    nextText: '',
    prevText: '',
    hidePageNumbers: false
});


