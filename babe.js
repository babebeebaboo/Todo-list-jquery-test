$(document).ready(function() {
    $('#btn1').click(function() {
        var button='<button class="itembtn">' + "Complete" + '</button>' ;
        $('.list').append(button);
        var textadd='<p class="item">' + $('input[name=checkListItem]').val()+'</p><br/><br/>';
        $('.list').append(textadd);
        $('.list').addClass(abc);
        $(document).on('click', '.itembtn', function() {
            $(this).nextUntil("button").remove();
            $(this).remove();
        });

    });
});