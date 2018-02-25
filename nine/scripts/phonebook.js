$(() => {
    const baseUrl = `https://testproject-f7dc4.firebaseio.com/phonebook`
    const output = $('#phonebook')
    $('#btnCreate').click(createContact)
    loadContacts()

    function loadContacts() {
        output.empty()

        let req = {
            url: baseUrl + `.json`,
            success: displayContacts
        }
        $.ajax(req)
    }

    function createContact() {
        let person = $('#person').val()
        let phone = $('#phone').val()

        let contact = {
            name: person,
            phone: phone
        }

        let getReq = {
            method: 'POST',
            url: baseUrl + `.json`,
            contentType: 'application/json',
            data: JSON.stringify(contact),
            success: loadContacts,
            error: displayError
        }

        $.ajax(getReq)
    }

    function displayError() {
    }

    function displayContacts(contacts) {

        for (let key in contacts) {
            let contact = contacts[key]
            let liItem = $('<li>')
            liItem.text(`${contacts[key].name}: ${contacts[key].phone}`)
            liItem.append($('<button>Delete</button>').click(() => deleteItem(key)))
            output.append(liItem)
        }
    }

    function deleteItem(key) {
        console.log(key)
        let req = {
            url: baseUrl + `/${key}.json`,
            method: 'DELETE',
            success: loadContacts
        }
        $.ajax(req)
    }
})