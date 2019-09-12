$(document).ready(function() {


    $('#search').keyup(function(e){
        let search = $('#search').val();
        $.ajax({
            url: 'task-search.php',
            type: 'POST',
            data: { search },
            success: function(response){
                console.log(response);
            }
        })
    })

});