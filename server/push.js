const fs = require("fs");
const urlsafebase64 = require("urlsafe-base64");
const vapid = require("./vapid.json");

const suscripciones = require("./subs-db.json");

module.exports.getKey = () => {
    return urlsafebase64.decode(vapid.publicKey);
};
 

module.exports.addSuscription = suscripcion => {
    suscripciones.push(suscripcion);
    // console.log(suscripciones);
    fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(suscripciones) );
};
