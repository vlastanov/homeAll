// const model = require('./models')
const database = require('./database')
const instanodeDb = require('./instanode-bd')



// let owner = new model.Owner({
//     firstname: 'Shefa2',
//     lastname: 'dawe'
// })

// let cat = new model.Cat({
//     name: 'Bai Ivan3',
//     age: 140,
//     birthday: new Date(),
//     owner: owner._id
// })


database().then(() => {
    // instanodeDb
    //     .saveImage({
    //         url: 'https://fthmb.tqn.com/cgQkjtW2GM6KFCv5UeWnavnOSds=/768x0/filters:no_upscale()/103919224-56a2896d3df78cf7727748c8.jpg',
    //         description: 'such cat much wo',
    //         tags: ['cat', 'kitty', 'kote']
    //     })

    // instanodeDb
    //     .findByTag('kote')
    //     .then((imgs) => {
    //         for (let im of imgs) {
    //             console.log(im.description)
    //         }
    //     })

    instanodeDb
        .filter('','','')
        .then((imgs) => {
            for (let im of imgs) {
                console.log(im.description)
            }
        })


    // model.Cat
    //     .find()
    //     .where('age').gt(14)
    //     .limit(5)
    //     .sort('-age name')
    //     .select('age')
    //     .then((cats) => {
    //         for (let cat of cats) {
    //             console.log(cat.toString()) 
    //         }
    //     }).catch(console.log)

    //    // owner
    //     //     .save()
    //     //     .then((owner) => {
    //     //         console.log(owner.fullname)
    //     //         cat.save()
    //     //     })
    //     //     .catch(err => {
    //     //         let props = err.errors
    //     //         for (prop in props) {
    //     //             console.log(props[prop].message)
    //     //         }
    //     //     })

    //     // Cat
    //     //     .findByIdAndUpdate('5a59021a6dfdbd22e8753070', {
    //     //         $set: { name: "update2" }
    //     //     })
    //     //     .exec()

    //     // Cat
    //     //     .findById('5a59021a6dfdbd22e8753070')
    //     //     .then((cat) => {
    //     //         // for (cat of cats) {
    //     //         // cat.name = 'vankataUpdated'
    //     //         // cat.save()
    //     //         console.log(cat.toString())
    //     //         // }
    //     //     })

    //     // Cat
    //     //     .remove({ age: 60 })
    //     //     .exec()

    //     // Cat
    //     //     .count({ $or: [{ age: { $gt: 16 } }, { name: 'Bai Ivan' }] })
    //     //     .exec()
    //     //     .then(console.log)

    //     // Owner.find({})
    //     //     // .exec()
    //     //     .then((owners) => {
    //     //         for (let owner of owners) {
    //     //             Cat.find({ owner: owner._id }).then((cats) => {
    //     //                 console.log(cats[0].toString())
    //     //             })
    //     //         }
    //     //     })
})