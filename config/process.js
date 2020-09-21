//
const devConfig = {
    PORT: process.env.PORT || 4000,
    localdb: 'mongodb://localhost/adminform',
    onlinedb: 'mongodb+srv://medical:express@medicalexpresscluster-hkv5p.mongodb.net/asasadb?retryWrites=true&w=majority',
    secretKey: 'asasa-admin'
}
module.exports = devConfig;