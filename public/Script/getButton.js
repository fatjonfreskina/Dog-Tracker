var text = document.getElementById('text')
const getBtn = document.getElementById('getData')
const baseUrl = 'http://localhost:8383/data'

getBtn.addEventListener('click', getInfo);
async function getInfo(e) {
  e.preventDefault();
  var res = await fetch(baseUrl,
    {
      method: 'GET'
    })
  console.log(res)
  var data = await res.json();
  text.innerHTML = "Heartrate: " + data.heartrate + "; Timestamp: " + data.timestamp;
}