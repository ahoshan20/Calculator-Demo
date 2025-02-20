$(document).ready(function(){
    $('.btn').click(function(){
        var value = $(this).val();
        $('#result').val($('#result').val()+value);
    });
});
