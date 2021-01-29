$(document).ready(function() {
    
    
    $(".btn").css({
        'margin': '10px',
        'color': 'rgb(0, 170, 192)',
        'padding': '10px 20px',
        'color': 'white',
        'color':' wheat',
        'border-style': 'solid',
        'border-radius': '16px',
        'border-width': '1px',
        'font-size': '14px',
        
        'font-weight': '100',
        'background-color': '#861657',
        'background-image': 'linear-gradient(175deg, #2574A9 28%, #2574A9 85%)',
    });
    $(".heading").css({
        'margin': '0',
        'padding': '10',
        'position': 'absolute',
        'color': '#ffffff',
        'letter-spacing': '2px',
        'border-width': '4px',
        'font-size': '27px',
        'font-family': 'Helvetica',
        'font-weight': '200',
        'text-transform': 'uppercase',
        'background-color':  'rgb(0 0 0 / 60%)',
        'border-radius':'9px'

     
    });
    
    $(".filterbtn").css({
        'background-color': '#861657',
        'background-image': 'linear-gradient(175deg, #2574A9 28%, #2574A9 85%)',
        'color': 'white',
        'color':' wheat',
        'font-size': '16px',
        'font-weight': '100',
        'max-width': '180px',
        'letter-spacing': '1px',
        'left': '50%',
        'transform': 'translateX(-50%)'
        
    });
        });

        $(document).ready(function () {
            var maxLength = 300;
            $(".show-read-more").each(function () {
                var myStr = $(this).text();
                if ($.trim(myStr).length > maxLength) {
                    var newStr = myStr.substring(0, maxLength);
                    var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
                    $(this).empty().html(newStr);
                    $(this).append(' <a href="javascript:void(0);" class="read-more">read more...</a>');
                    $(this).append('<span class="more-text">' + removedStr + '</span>');
                }
            });
            $(".read-more").click(function () {
                $(this).siblings(".more-text").contents().unwrap();
                $(this).remove();
            });
        });
