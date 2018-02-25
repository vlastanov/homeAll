let result = (function solve() {
    let temp = `https://judgetests.firebaseio.com/schedule/depot.json`

    let currentId = 'depot'
    let oldName = ''

    function depart() {
        let req = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`,
            success: departBus,
            error: departBusError
        }
        $.ajax(req)
    }

    function departBus(stopInfo) {
        let nextStop = stopInfo.name
        $('#info').find('span').text(`Next stop is ${nextStop}`)
        currentId = stopInfo.next
        $('#depart').prop('disabled', true)
        $('#arrive').prop('disabled', false)
        oldName = nextStop
        console.log(oldName)
    }

    function departBusError(err) {
        $('#info').find('span').text('Error')
    }

    function arrive() {
        
        $('#info').find('span').text(`Arriving at  ${oldName}`)

        $('#depart').prop('disabled', false)
        $('#arrive').prop('disabled', true)

    }

    return { depart, arrive }

})()