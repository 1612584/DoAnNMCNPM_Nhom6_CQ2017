const db = require('../utils/db');
const table = "GiaiDau";
module.exports = {
    //get list Giai dau dang dien ra
    allByActive: async()=>{
        const query = `select* from ${table} where active = true`;
        const rows = await db.load(query);
        return rows;
    },  
    //tao giai dau
    insertOne: async(giaiDau)=>{
        const {amount,btcID,detail,dieuKien,name,start_date,type} = giaiDau;
        const sql = `insert into ${table} (amount,btcID,detail,dieuKien,name,start_date,type) VALUES(${amount},${btcID},'${detail}','${dieuKien}','${name}', STR_TO_DATE('${start_date}','%d/%m/%Y'),'${type}')` 
        const result = await db.load(sql);
        return result;
    }
}