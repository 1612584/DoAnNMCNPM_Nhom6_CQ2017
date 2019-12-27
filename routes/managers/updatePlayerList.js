module.exports.get = (req, res) => {
    res.render('managers/updatePlayerList', {
        layout: 'manager'
    });
}