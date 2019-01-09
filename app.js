$(function () {
    $('.select-div').on('change', 'select', function (e) {//use on to delegate
        var v = $(e.target).val(), t = $(e.target).find(':selected').text(), p = $(e.target).closest('.select-div');
        if (v) {
            var c = (function(t) {
                switch(t) {
                    case '11111' : return 'Web Dev';

                    case '22222' : return 'Math';

                    case '33333' : return 'English';

                    case '44444' : return 'Psychology';
                }
            })(t);
            p.find('[name="coursename"]').val(c);
            p.find('[name="prerequesite"]').val('None');
            p.find('[name="units"]').val('3');
        }
    });
});
