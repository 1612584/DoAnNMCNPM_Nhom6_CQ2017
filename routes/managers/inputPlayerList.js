module.exports.get = (req, res) => {
    res.render('managers/inputPlayerList', {
        layout: 'manager'
    });
}