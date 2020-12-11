
async function respConvidAPI(){
    try {
        const response = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)     
    }
}