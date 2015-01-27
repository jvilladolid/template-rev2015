$(function(){ 
    //open external links and PDF files in new tabs
    $("a.external, a[href$='.pdf']").click(function(e){
        window.open(this.href);
        e.preventDefault();
    });

    //mobile navigation toggle button
    $(".nav-menu-button").click(function(e){
        $("#nav-under").slideToggle();
        e.preventDefault();
    });

    //It's On Us Campaign button
    $("#sub_footer").css("position", "relative").css("min-height", "95px").append('<a href="http://cares.sdes.ucf.edu/itsonus"><img class="iou" src="http://cares.sdes.ucf.edu/images/iou.png"/></a>');
    $("head").append("<style> .iou{ width: 180px; position: absolute; left: 66%; margin: -0.5em 0 0 0.75em; padding-bottom: 1em; } @media only screen and (max-width: 945px){ .iou{ position: relative; left: 0; margin: 1em 0; } } </style>");
});