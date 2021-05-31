
var x = 0; // Controls how many times the mode chane butt on is clicked


function mode_change() 
        {
            x++;
            if (x % 2 == 0) 
                {
                    dark_mode();
                    console.log("executed dark mode");
                    document.getElementById("mode_change_button").innerHTML = "LIGHT MODE";
                } 
            else 
                {
                    light_mode();
                    document.getElementById("mode_change_button").innerHTML = "DARK MODE";
                }
        }
function light_mode() 
        {
            document.querySelector("body").style.backgroundImage = "url('/images/gojo sensei.jpg')";
            document.querySelector("html").style.backgroundRepeat= "no-repeat";
            document.querySelector("html").style.backgroundSize= "cover";
            document.getElementById("mode_change_button").style.backgroundColor="black";
            document.getElementById("mode_change_button").style.color= "white";
            document.querySelector("hr").style.backgroundColor= "black";
            // document.querySelector("body > h2").style.color="black";
            var x = document.querySelectorAll("a,h1,h2,h3");
            var i;
            for (i = 0; i < x.length; i++) 
                {
                    x[i].style.color = "black";
                  
                }
       
        }

function dark_mode() 
        {
        document.querySelector("body").style.backgroundImage ="url('/images/ds wp2.jpg')";
        document.getElementById("mode_change_button").style.backgroundColor="white";
        document.querySelector("html").style.backgroundRepeat= "no-repeat";
        document.querySelector("html").style.backgroundSize= "Cover";
        document.getElementById("mode_change_button").style.color="black";
        document.getElementById("logo").style.border="solid white"
        document.querySelector("hr").style.backgroundColor= "white";
        // document.querySelector("body > h2").style.color="aqua";
        var x = document.querySelectorAll("a,h1,h2,h3");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.color = "white";
        }

        }
// document.getElementById("download_button").addEventListener("onclick",function(){alert("currently not available");} );
function alert_download()
        {
            alert("Not Available Currently")
        }
