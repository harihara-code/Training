$(function(){ 
    $('#addform').toggle();

    $('#adduser').click(function() {
        $('#addform').toggle();
    });

    $('#submit-button').click(function(){
        var card = createCard();
        console.log(card);
        $('.cardArea').html(card);
    });



});



function createCard() {
    var card = '<div class="card">\
        <div class="card-header">Dummy1</div>\
        <div class="card-body">\
            <ul class="list-group">\
                <li class="list-group-item">\
                    Employee Id  - 12\
                </li>\
                <li class="list-group-item">\
                    Employee DOB  - 12\
                </li>\
                <li class="list-group-item">\
                    Employee Address\
                </li>\
            </ul>\
        </div>\
    </div>';
    return card;
}