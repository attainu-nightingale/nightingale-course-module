// alert("JavaScript is working from an external file!");

// $('body').css('backgroundColor', 'tomato');

$.ajax({
    url: 'https://api.github.com/users',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        $('body').append('<ul></ul>');
        for(var i=0; i<data.length; i++) {
            $('ul').append('<li>'+data[i].login+'</li>');
            // $.ajax({
            //     url: 'https://api.github.com/users/' + data[i].login + '/followers',
            //     type: 'GET',
            //     dataType: 'json',
            //     success: function(followers) {
            //         for (var i = 0; i < data.length; i++) {
            //             $('li:contains("' + data[i].login + '")').append(followers[i].login);
            //         }
            //     }
            // });
        }
    }
});