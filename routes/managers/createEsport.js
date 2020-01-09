const GiaiDau = require('../../models/GiaiDau');
module.exports = {
    get: (req, res) => {
        res.render('managers/createEsport', {
            layout: 'manager',
            title: 'Tạo giải đấu',
            result: false,
            message: ''
        });
    },
    post: async (req, res) => {
        //body  values (${giaiDau.name},${giaiDau.btcID},${giaiDau.type},${giaiDau.detail},
        //${giaiDau.amount},${giaiDau.start_date},${giaiDau.condition})`;
        let {
            name,
            type,
            detail,
            amount,
            start_date,
            age,
            sex
        } = req.body;
        let giaiDau = req.body;
        giaiDau.start_date = start_date;
        giaiDau.dieuKien = `Độ tuổi từ ${age}, `.concat(`giới tính ${sex}`);
        giaiDau.btcID = 1;
        console.log(giaiDau);
        //call
        GiaiDau.insertOne(giaiDau).then(result => {
            if (result.affectedRows > 0) {
                console.log('ok');
                res.json({
                    title: 'Tạo giải đấu',
                    result: true,
                    message: 'Tạo giải đấu thành công'
                })
            } else {
                console.log('not ok');
                res.json({
                    title: 'Tạo giải đấu',
                    result: false,
                    message: 'Tạo giải đấu thất bại, vui lòng thử lại'
                })
            }
        }).catch(err => res.json(err));

        // console.log(result);
        // //response with message
        // res.json(result);
        //err
    }
}