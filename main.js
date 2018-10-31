$(document).ready(function () {
    $('#log_out').on("click",function (e) {
        e.preventDefault();
        $.ajax({
            url: 'http://localhost:6969/api/auth/logout',
            method: 'DELETE',
            // data: {username: name, password: pass},
            success: function () {
                window.location.href = './index.html';
            },
            error: function (result) {
                $('#out_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                `)
            }
        });
    });

    $('#sending_mail').on('submit', function (e) {
        e.preventDefault();
        let mailx = $('#mail').val();
        let mailContentx = $('#mail_content').val();
        $.ajax({
            url: 'https://svflirt.herokuapp.com/api/sending'||'http://localhost:6969/api/sending',
            method: 'POST',
            data: {mail: mailx,mailContent: mailContentx},
            success: function() {
                alert("Success");
            },
            error: function (result) {
                $('#sending_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                    `);
            }
        });
    });
});