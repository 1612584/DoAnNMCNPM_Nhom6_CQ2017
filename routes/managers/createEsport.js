//const mGiaiDau = require('../../models/GiaiDau');
module.exports = {
    get: (req, res) => {
        res.render('managers/createEsport', {
            layout: 'manager'
        });
    },
    post: async (req, res) => {
        //body  values (${giaiDau.name},${giaiDau.btcID},${giaiDau.type},${giaiDau.detail},
        //${giaiDau.amount},${giaiDau.start_date},${giaiDau.condition})`;
        // let {name,type,detail,amount,start_date,age,sex} = req.body;
        // let giaiDau = req.body;
        // giaiDau.condition = `Độ tuổi từ ${age}, `.concat(`giới tính ${sex}`);
        // giaiDau.btcID = 1;
        // console.log(giaiDau);
        //call


        // console.log(result);
        // //response with message
        // res.json(result);
        //err
    }
}