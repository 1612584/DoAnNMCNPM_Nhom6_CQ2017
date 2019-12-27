module.exports.get = (req, res) => {
    res.render('managers/inputMatchResult', {
        layout: 'manager'
    });
}