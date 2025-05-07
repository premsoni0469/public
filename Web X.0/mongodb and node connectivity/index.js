const MongoClient = require('mongodb').MongoClient

const uri = "mongodb://localhost:27017"

const client = new MongoClient(uri)

async function run(){
    try{
        await client.connect()

        const database = client.db('tp_2_college')
        const students = database.collection('tp_2_college')

        const doc = {
            roll_no: 1,
            name: "Prem Soni",
            cgpa: 9.87
        }

        // const result1 = await students.insertOne(doc)
        // console.log(result1)

        const bulkData = [
            {
                roll_no: 2,
                name: "ABC",
                cgpa:8.00
            },
            {
                roll_no: 3,
                name: "DEF",
                cgpa:8.20
            },
            {
                roll_no: 4,
                name: "GHI",
                cgpa:8.50
            }
        ]

        // const result2 = await students.insertMany(bulkData)
        // console.log(result2)

        // const result3 = await students.find().toArray()
        // console.log(result3)

        // const result4 = await students.find({name: "Prem Soni"}).toArray()
        // console.log(result4);
        
        // const result5 = await students.updateOne({name: "Prem Soni"}, {$set: {name: "Prem"}})
        // console.log(result5)

        // const result6 = await students.deleteOne({roll_no: 3})
        // console.log(result6);
        
    }
    finally{
        await client.close()
    }
}
run().catch(console.dir)