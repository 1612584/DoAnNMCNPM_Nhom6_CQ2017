module.exports.get = (req, res) => {
    res.render('managers/inputPlayer', {
        layout: 'manager'
    });
}