const {MongoClient} = require('mongodb');
const Url = "mongodb+srv://vinayakdige:vinayakdige123@cluster0.smbqghb.mongodb.net/?retryWrites=true&w=majority";

const connection = async ()=>{
    const client = await MongoClient.connect(Url);
const db = client.db("blog");

    return  { db };

};

module.exports = {connection};  