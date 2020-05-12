<script type="text/javascript">
    function bottone_mail() {
        var mailString;
        function updateMailString() {
            mailString = '&body=' + encodeURIComponent($('#message').val());
            $('#mail-link').attr('href',  'mailto:alessandro.lazzaretti1@gmail.com' + mailString);
        }
        $( "#message" ).focusout(function() { updateMailString(); });
        updateMailString();
    }
</script>


<!-- not working , lo faccio con mailto per adesso, ho trovaot un modo per farlo funzionare>