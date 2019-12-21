$(window).on("load", async function () {
    // do something

});
const agv = [0, 2, 1];
$(document).on('click', 'button', changeImage);
function changeImage(event) {
    console.log('click on button');
    event.preventDefault();
    const data_id = $(event.target).closest('button').data('id');
    console.log(`click on data-id = ${data_id}`);
    const image = `index${data_id}.jpg`;

    doChangeImage(data_id, agv[parseInt(data_id)]);
}
function doChangeImage(data_id, data_img) {
    $('.row2').empty();
    $('.row2').append(`
        <div class="col-md-2">
            <button data-id="${data_img}" class="offset-md-8"><i class="fas fa-backward"></i></button>
        </div>
        <div class="col-md-8"> <img src="/images/index${data_id}.jpg" width="100%" class="img-fluid" alt="Responsive image"></div>
        <div class="col-md-2">
            <button data-id="${data_img}"><i class="fas fa-forward"></i></button>
        </div>
    `)
}