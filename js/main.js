function initPage() {
    /* Create the elements to hold data */
    $(".container").append("<div class=\"loader\"></div>");
    $(".container").append("<div class=\"home\"></div>");
    $(".container .home").append("<div class=\"top-nav\"></div>");
    $(".container .home .top-nav").append("<div class=\"menu\"></div>");
    $(".container .home .top-nav").append("<div class=\"profile\"></div>");
    $(".container .home .top-nav .profile").append("<div class=\"image\" style=\"background-image: url('assets/placeholders/logo.png');\"></div>");
    $(".container .home").append("<div class=\"message\">Welcome\nThomas</div>");
    $(".container .home").append("<div class=\"content\"></div>");
    $(".container .home .content").append("<div class=\"search\"></div>");
    $(".container .home .content .search").append("<div class=\"term\"></div>");
    $(".container .home .content").append("<div class=\"activeJourney\"></div>");
    $(".container .home .content").append("<div class=\"updateJourney\"></div>");
    $(".container .home .content").append("<div class=\"active\"></div>");
    $(".container .home .content").append("<div class=\"to-use\"></div>");
    $(".container .home").append("<div class=\"buttons\"></div>");

    /* Show a CityWide 7-Day ticket that expires Monday at 4am */
    $(".container .home .content .activeJourney").append("<div class=\"info\">Your journey to 'Chesterfield':</div>");

    /* Show a CityWide 7-Day ticket that expires Monday at 4am */
    $(".container .home .content .activeJourney").append("<div class=\"ticket\" id=\"curtik1\"></div>");
    $(".container .home .content .activeJourney .ticket#curtik1").append("<div class=\"name\">Tram only 1-day</div>");
    $(".container .home .content .activeJourney .ticket#curtik1").append("<div class=\"info\">Tram to Sheffield Station</div>");

    /* Show a GetAbout+ 1-Day ticket that expires tomorrow at 4am */
    $(".container .home .content .activeJourney").append("<div class=\"ticket\" id=\"curtik2\"></div>");
    $(".container .home .content .activeJourney .ticket#curtik2").append("<div class=\"name\">Sheffield - Chesterfield return</div>");
    $(".container .home .content .activeJourney .ticket#curtik2").append("<div class=\"info\">'EMR' off-peak services</div>");

    /* Show a GetAbout+ 1-Day ticket that must be used by Friday */
    $(".container .home .content .updateJourney").append("<div class=\"ticket\"></div>");
    $(".container .home .content .updateJourney .ticket").append("<div class=\"name\">Delays on your 'EMR' ticket to 'Chesterfield'</div>");

    /* Show a CityWide 7-Day ticket that expires Monday at 4am */
    $(".container .home .content .active").append("<div class=\"ticket\" id=\"tik1\"></div>");
    $(".container .home .content .active .ticket#tik1").append("<div class=\"name\">CityWide 7-Day</div>");
    $(".container .home .content .active .ticket#tik1").append("<div class=\"info\">Monday at 4am</div>");

    /* Show a GetAbout+ 1-Day ticket that expires tomorrow at 4am */
    $(".container .home .content .active").append("<div class=\"ticket\" id=\"tik2\"></div>");
    $(".container .home .content .active .ticket#tik2").append("<div class=\"name\">GetAbout+ 1-Day</div>");
    $(".container .home .content .active .ticket#tik2").append("<div class=\"info\">Tomorrow at 4am</div>");

    /* Show a GetAbout+ 1-Day ticket that must be used by Friday */
    $(".container .home .content .to-use").append("<div class=\"ticket\" id=\"tik3\"></div>");
    $(".container .home .content .to-use .ticket#tik3").append("<div class=\"name\">GetAbout+ 1-Day</div>");
    $(".container .home .content .to-use .ticket#tik3").append("<div class=\"info\">Friday</div>");

    /* Show a button for recent activity (searches, purchases etc.) */
    $(".container .home .buttons").append("<div class=\"button\" id=\"but1\"></div>");
    $(".container .home .buttons .button#but1").append("<div class=\"icon\" style=\"background-image: url('assets/icons/recent.svg');\"></div>");
    $(".container .home .buttons .button#but1").append("<div class=\"text\">Recent</div>");

    /* Show a button to show all tickets on the account/device */
    $(".container .home .buttons").append("<div class=\"button\" id=\"but2\"></div>");
    $(".container .home .buttons .button#but2").append("<div class=\"icon\" style=\"background-image: url('assets/icons/wallet.svg');\"></div>");
    $(".container .home .buttons .button#but2").append("<div class=\"text\">My Tickets</div>");

    /* Array storing all search suggestions */
    let searchTermsArray = [
        "'Arena - Olympic Legacy Park'",
        "'Meadowhall Shopping'",
        "'London St Pancras'",
        "'Sheffield Station'",
        "'Manchester Picadilly'",
        "'Liverpool Lime Street'",
        "'Chesterfield'",
        "'West Street'",
        "'Fitzalan Square/Ponds Forge'",
        "'Malin Bridge'",
        "'Middlewood'",
        "'Granville Road'",
        "'Halfway'",
        "'Fox House'",
        "'Bakewell'",
        "'Matlock'",
        "'Matlock Bath'",
        "'Derby'",
        "'Manchester Airport'",
        "'Doncaster Sheffield Airport'",

        "'CityWide'",
        "'CityBus'",
        "'GetAbout'",
        "'SYConnect'",
        "'Tram only'",

        "'Buses for Sheffield'",
        "'Stagecoach Bus'",
        "'Stagecoach Supertram'",
        "'TM Travel'",

        "'Blue - Halfway'",
        "'Blue - Malin Bridge'",
        "'Yellow - Meadowhall Interchange'",
        "'Yellow - Middlewood'",
        "'Purple - Herdings Park'",
        "'Purple - Cathedral'",
        "'Tram Train - Rotherham Parkgate'",
        "'Tram Train - Cathedral'",

        "'X17 - Matlock'",
        "'X17 - Barnsley'",
        "'X17 - Chesterfield'",
        "'50 - Chesterfield'",
        "'50a - Chesterfield'",
        "'50b - Chesterfield'",
        "'50 - Sheffield'",
        "'50a - Sheffield'",
        "'50b - Sheffield'",
        "'8 - Ecclesfield'",
        "'8a - Ecclesfield'",
        "'8 - Crystal Peaks'",
        "'8a - Crystal Peaks'",
        "'7 - Woodhouse'",
        "'7a - Woodhouse'",
        "'7 - Ecclesfield'",
        "'7a - Ecclesfield'",
        "'120 - Fulwood'",
        "'120 - Halfway'",
        "'120 - Crystal Peaks'",

        "for a destination...",
        "for interchanges...",
        "for a ticket...",
        "for bus routes...",
        "for tram routes..."
    ];

    /* Declare the array to store the index of already shown values */
    let lastRandomIntsArray = [];
    var animateSearchSuggestionsPaused = false;

    /* Change and animate the search suggestion displayed to the user */
    function animateSearchSuggestions() {
        if(animateSearchSuggestionsPaused == false) {
            let randomInt = Math.floor(Math.random() * searchTermsArray.length);
            /* Prevent the same string showing more than once in 10 times */
            while (lastRandomIntsArray.includes(randomInt)) {
                randomInt = Math.floor(Math.random() * searchTermsArray.length);
            };
            /* Change the search suggestion */
            $(".container .home .content .search .term").html("Search " + searchTermsArray[randomInt]);
            /* Fade the search suggestion into view */
            $(".container .home .content .search .term").fadeIn("slow");
            /* Allow showing the same result after 10 other results */
            if (lastRandomIntsArray.length > 10) lastRandomIntsArray.length = 10;
            lastRandomIntsArray.unshift(randomInt);
            /* Fade the search suggestion out of view before next term */
            setTimeout(function() {
                $(".container .home .content .search .term").fadeOut("slow");
            }, 9500);
        }
    };
    animateSearchSuggestions();

    /* Change the search suggestion every ten seconds */
    let searchTermInterval = setInterval(animateSearchSuggestions, 10000);

    function showSearchPopup() {

    }

    /* When the device is a mobile phone make the site fullscreen if possible */
    if (!window.matchMedia('(min-width: 768px)').matches) {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            if (!document.fullscreenElement) {
                setTimeout(function() { $(".container .loader").addClass("doFullscreen"); }, 900);
                $(".container .loader").click(function() {
                    document.documentElement.requestFullscreen();
                    setTimeout(function() {
                        if (!document.fullscreenElement) {
                            console.log("Fullscreen not supported...");
                        }
                        /* Hide the loader displaying the app beneath */
                        $(".container .loader").fadeOut("slow");
                    }, 1750);
                });
            } else {
                /* Hide the loader after one second, displaying the app beneath */
                setTimeout(function() { $(".container .loader").fadeOut("slow"); }, 1000);
            }
        } else {
            setTimeout(function() { $(".container .loader").fadeOut("slow"); }, 1000);
        }
    } else {
        /* Hide the loader after one second, displaying the app beneath */
        setTimeout(function() { $(".container .loader").fadeOut("slow"); }, 1000);
    }
}

/* After the page is loaded begin page initialisation */
$(document).ready(initPage);