$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        let nomeTarefa = $('#tarefa').val()
        let lista = $('<li></li>')
        $(`<li id="listajs" style="display: ;" >${nomeTarefa}</li>`).appendTo(lista)
        $(lista).appendTo('ul')
        $('#tarefa').val('')
    })

    $(document).on('click', '#lista li', function () {
        $(this).toggleClass('riscar')
    })
})