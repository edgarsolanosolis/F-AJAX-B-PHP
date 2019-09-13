$(document).ready(function() {
    $('#task-result').hide();
    fetchTasks();

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

    $('#task-form').submit(function(e){
        const postData = {
            name: $('#name').val(),
            description: $('#description').val()
        };
        $.post('task-add.php', postData, function (response){
            fetchTasks();

            $('#task-form').trigger('reset');
        });
        e.preventDefault();
    });

    function fetchTasks(){
        $.ajax({
            url: 'task-list.php',
            type: 'GET',
            success: function (response){
                let tasks = JSON.parse(response);
                let template = '';
                tasks.forEach(task => {
                    template += `
                        <tr>
                            <td>${task.id}</td>
                            <td>${task.name}</td>
                            <td>${task.description}</td>
                        </tr>
                    `
                });
                $('#tasks').html(template);
            }
        });
    }
});