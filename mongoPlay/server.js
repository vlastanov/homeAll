const { MongoClient } = require('mongodb');
const connectionString = 'mongodb://admin:admin@ds135817.mlab.com:35817/baza1';


MongoClient.connect(connectionString)
    .then((db) => {
        return db.collection('inventory');
    })
    .then((collection) => {
        // collection.deleteOne();
        // collection.deleteMany({});
        return collection;
    })
    .then((collection) => {

        // collection.insert(
        //     [
        //         {
        //             item: "journal",
        //             instock: [
        //                 { warehouse: "A", qty: 5 },
        //                 { warehouse: "C", qty: 15 }]
        //         },
        //         {
        //             item: "notebook",
        //             instock: [
        //                 { warehouse: "C", qty: 5 }]
        //         },
        //         {
        //             item: "paper",
        //             instock: [
        //                 { warehouse: "A", qty: 60 },
        //                 { warehouse: "B", qty: 15 }]
        //         },
        //         {
        //             item: "planner",
        //             instock: [
        //                 { warehouse: "A", qty: 40 },
        //                 { warehouse: "B", qty: 5 }]
        //         },
        //         {
        //             item: "postcard",
        //             instock: [
        //                 { warehouse: "B", qty: 15 },
        //                 { warehouse: "C", qty: 35 }]
        //         }
        //     ]

        // );


        return collection;
    })
    .then(async (collection) => {
        const all = await collection.find(
            {
                instock: { warehouse: "A", qty: 5 }
            }


        ).toArray();
        console.log(all);
    })