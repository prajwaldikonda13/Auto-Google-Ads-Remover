//$(document).ready(function () {
    setInterval(function () {
        
            //alert("Signal received")
            $("iframe").remove()
            $iframes = $("iframe")
            $scripts = $("script")
            $adsbygoogle = $(".adsbygoogle")
            $adsbygoogle.remove()
            $iframes.attr("sandbox", "")
            $iframes.each(function () {
                var srcIframes = $(this).attr("src")
                if (srcIframes !== undefined) {
                    if (srcIframes.includes("google") || srcIframes.includes("pagead"))
                        $(this).remove()
                }
            })


            $scripts.each(function () {
                var srcScript = $(this).attr("src")
                if (srcScript !== undefined) {
                    if (srcScript.includes("google") || srcScript.includes("pagead"))
                        $(this).remove()
                }
            })
            //window.alert("Google ads removed successfully")
          
        
    }, 1000)
    console.log("something happening from the extension");
//});