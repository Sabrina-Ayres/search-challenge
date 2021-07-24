
const url = 'https://scmq7n.a.searchspring.io/api/search/search.json';

search();

function search() {
    $.get(url, {
        siteId: "scmq7n",
        q: "dress",
        resultsFormat: "native"
    }).done(function (data) {
        handleResponse(data)
    });
}

function handleResponse(data) {
    console.log(data)
}
