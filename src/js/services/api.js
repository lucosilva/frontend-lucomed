fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
    .then((resp) => {
        return resp.json();
    }).then(({ data }) => {

        $('#mortes').text(data.deaths)
        $('#recuperados').text(data.recovered)
        $('#casos').text(data.cases)
    })
