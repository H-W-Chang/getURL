if (document.getElementsByTagName("body")[0].hasAttribute('specialAttribute') === false) {
    document.getElementsByTagName("body")[0].setAttribute('specialAttribute', 'true');

    var caption = null;
    var myURL = null;
    var siteNumber = null;
    myURL = document.location.href;
    var site = [
        /^https?:\/\/(?:[^./?#]+\.)?ltn\.com/,
        /^https?:\/\/(?:[^./?#]+\.)?appledaily\.com/,
        /^https?:\/\/(?:[^./?#]+\.)?udn\.com/,
        /^https?:\/\/(?:[^./?#]+\.)?chinatimes\.com/
    ];
    for (var i = 0; i < 4; i++) {
        if (site[i].test(myURL)) {
            siteNumber = i;
            console.log(siteNumber);
            document.addEventListener('copy', function(e) {
                // alert(myURL + "\n" + caption);
                e.clipboardData.setData('text/plain', caption + "\t\t" + myURL);
                e.preventDefault();
            });
        }
    }
    // alert(siteNumber);
    switch (siteNumber) {
        case 0: //ltn
            caption = document.getElementsByTagName("H1")[0].innerHTML;
            break;
        case 1:  //apple
            caption = document.getElementById("h1").innerHTML;
            break;
        case 2:  //udn
            caption = document.getElementById("story_art_title").innerHTML;
            break;
        case 3:  //chinatimes
            caption = document.getElementsByTagName("H1")[1].innerHTML;            
            break; 
    }
}
