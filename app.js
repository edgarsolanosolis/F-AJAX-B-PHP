$(document).ready(function() {
    $('#task-result').hide();

    $('#search').keyup(function(e){
        if($('#search').val()){
            let search = $('#search').val();
            $.ajax({
            url: 'task-search.php',
            type: 'POST',
            data: { search },
            success: function(response){
            //    console.log(response); es para ver en consola el arreglo del json que hago en el backend
            let tasks = JSON.parse(response);
            let template = '';

                tasks.forEach(task => {
                template += `<li>
                    ${task.name}
                </li>`
                });

                $('#container').html(template);
                $('#task-result').show();
            }
        });
        }
    });

});