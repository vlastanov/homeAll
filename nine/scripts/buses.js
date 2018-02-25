


function getInfo() {
    let stopId = $('#stopId').val()

    let getReq = {
        method: 'GET',
        url: `https://judgetests.firebaseio.com/businfo/${stopId}.json`,
        success: displayBusstopInfo,
        error: displayError
    }
    $.ajax(getReq)

    // $.get(`https://judgetests.firebaseio.com/businfo/${stopId}.json`)
    // .then(displayBusstopInfo)
    // .catch(displayError)

    function displayBusstopInfo(bustopInfo) {
        $('#stopName').text(bustopInfo.name)

        let list = $('#buses')
        list.empty()
        let buses = bustopInfo.buses
        for (let busNumber in buses) {
            let busMinutes = buses[busNumber]
            let liItem = $('<li>')
            liItem.text(`Bus ${busNumber} arrives in ${busMinutes}`)
            list.append(liItem)
            // console.log(liItem)
        }
    }

    function displayError(err) {
        console.dir(err)
        $('#stopName').text(err.statusText)
    }
}
