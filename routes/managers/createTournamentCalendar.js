module.exports.get = (req, res) => {
    res.render('managers/createTournamentCalendar', {
        layout: 'manager'
    });
}