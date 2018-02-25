function attachEvents() {
    $('#refresh').click(attachRefresh)
    $('#submit').click(attachSend)

    function attachSend() {

        let messageJson = {
            "author": $('#author').val(),
            "content": $('#content').val(),
            "timestamp": Date.now()
        }

        let sendMessageReq = {
            url: `https://testproject-f7dc4.firebaseio.com/.json`,
            method: 'POST',
            data: JSON.stringify(messageJson),
            success: attachRefresh
        }

        $.ajax(sendMessageReq)
    }

    function attachRefresh() {
        $.get(`https://testproject-f7dc4.firebaseio.com/.json`)
            .then(displayMessages)
    }

    function displayMessages(messages) {
        let output = $('#messages')
        output.empty()
        let messagesStr = ''
        for (let key in messages) {
            messagesStr += `${messages[key]["author"]}:  ${messages[key]["content"]}\n`
        }

        output.text(messagesStr)
    }
}