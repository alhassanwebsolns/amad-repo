 $(function() {
     setTimeout(function() {
         $.notify({
             // options
             icon: '',
             title: "<a href=\"subs/affiliate-disclosure.html\"><h4>READ FAIR USAGE DISCLAIMER</h4>",
             message: "<figure><img src=\"assets/images/others/notify.png\"></figure><p>We take great care to ensure that all images used on our website...</a> "
         }, {
             // settings
             icon_type: 'image',
             type: 'info',
             delay: 500,
             timer: 3000,
             z_index: 9999,
             showProgressbar: false,
             placement: {
                 from: "bottom",
                 align: "right"
             },
             animate: {
                 enter: 'animated bounceInUp',
                 exit: 'animated bounceOutDown'
             },
         });
     }, 5000); // change the start delay
 });