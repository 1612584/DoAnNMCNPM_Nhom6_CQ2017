module.exports.get = (req, res) => {
    res.render('managers/createEsport', {
        layout: 'manager'
    });
}