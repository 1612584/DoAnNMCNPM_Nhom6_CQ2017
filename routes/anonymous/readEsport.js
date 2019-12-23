module.exports.read = (req,res)=>{
    const active = req.query.active || 1;
    const tourTitle = (active==1)?"Các giải đấu đang diễn ra":"Các giải đấu đã kết thúc"
    const tournamentList =[{
        image: "1.jpg",
        id: "1",
        name: "Liên Minh Huyền Thoại lần 1"
    },{
        image: "1.jpg",
        id: "1",
        name: "Liên Minh Huyền Thoại lần 2"
    },{
        image: "1.jpg",
        id: "1",
        name: "Liên Minh Huyền Thoại lần 3"
    }]
    res.render('anonymous/readEsport',{
        title: 'Danh sách giải đấu',
        tournamentList: tournamentList,
        tourTitle: tourTitle
    })
}
module.exports.readById = (req,res)=>{
    const giaiDauId = req.params.id || 1;
    const tournament = {
        id: 1,
        name: "Liên minh huyền thoại 1",
        startDate: "12/03/2019",
        amount: 32,
        condition: "Trên 18 tuổi",
        img: "1.jpg",
        detail: "Liên Minh Huyền Thoại (viết tắt: LMHT, tiếng Anh: League of Legends, viết tắt tiếng Anh: LOL) là một trò chơi video đấu trường trận chiến trực tuyến nhiều người chơi (MOBA - Multiplayer Online Battlefield Arena) được Riot Games phát triển và phát hành đa nền tảng: PlayStation 3, Xbox 360, PlayStation 4, Xbox One, Android, IOS lấy cảm hứng từ bản mod Defense of the Ancients cho trò chơi video Warcraft III: Frozen Throne."
    }
    res.render('anonymous/readDetailEsport',{
        title: 'Thông tin giải đấu',
        tournament: tournament
    })
}