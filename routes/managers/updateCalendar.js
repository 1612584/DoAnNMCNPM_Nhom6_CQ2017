module.exports.get = (req, res) => {
    res.render('managers/updateCalendar', {
        layout: 'manager'
    });
}