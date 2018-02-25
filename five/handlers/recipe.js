module.exports.addGet = (req, res) => {
    res.render('recipe/add')
}

module.exports.addPost = (req, res) => {
    let data = req.body
    let file = req.file
    res.redirect('/')
}

// module.exports.contactUs = (req, res) => {
//     res.render('home/contactUs')
// }