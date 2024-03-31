(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['main_layout'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>SimonCollinson | PageName</title>\r\n    <link rel=\"stylesheet\" href=\"css/style.css\">\r\n</head>\r\n<body class=\"bord-top\">\r\n    <div class=\"container w-11/12 mx-auto\">\r\n        <header class=\"w-full\">\r\n            <nav class=\"w-full\">\r\n                <!-- Logo and grid icons -->\r\n                <div class=\"flex justify-between w-full items-baseline py-7\">\r\n                    <div class=\"pt-5 font-sans\">\r\n                        <div><h1 class=\"text-3xl\"><a class=\"log-color hover:log-color-hover\" href=\"#\">Simon Collinson</a></h1></div>\r\n                        <div><p class=\"head-text-color italic font-semibold text-sm\"><span>Well-meaning waffle since 2003.</span></p></div>\r\n                    </div>\r\n                    <div class=\"w-10 md:hidden\">\r\n                        <ul class=\"grid grid-cols-2 grid-rows-2 gap-2\">\r\n                            <li ><a href=\"archive.html\" class=\"archive-box\">\r\n                                <svg class=\"w-4 h-4\" width=\"550px\" height=\"550px\" viewBox=\"0 0 550 550\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                                    <title>Artboard Copy 4</title>\r\n                                    <g id=\"Artboard-Copy-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                        <rect id=\"Rectangle-Copy-2\" stroke=\"#21718D\" stroke-width=\"55\" x=\"27.5\" y=\"27.5\" width=\"495\" height=\"133\" rx=\"18\"></rect>\r\n                                        <rect id=\"Rectangle-Copy-4\" stroke=\"#21718D\" stroke-width=\"55\" x=\"53.5\" y=\"160.5\" width=\"443\" height=\"362\" rx=\"18\"></rect>\r\n                                        <rect id=\"Rectangle-Copy-5\" stroke=\"#21718D\" stroke-width=\"55\" x=\"187.5\" y=\"278.5\" width=\"176\" height=\"109\" rx=\"18\"></rect>\r\n                                    </g>\r\n                                </svg>\r\n                            </a></li>\r\n                            <li><a href=\"map.html\">\r\n                                <svg class=\"w-4 h-4\" width=\"550px\" height=\"550px\" viewBox=\"0 0 550 550\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                                    <title>Artboard Copy 9</title>\r\n                                    <g id=\"Artboard-Copy-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                        <g id=\"Group\" transform=\"translate(-59.000000, 449.000000)\"></g>\r\n                                        <circle id=\"Oval\" stroke=\"#21718D\" stroke-width=\"55\" cx=\"275\" cy=\"237\" r=\"70\"></circle>\r\n                                        <path d=\"M275.5,516 C415.833333,423.509379 486,335.842712 486,253 C486,128.735931 391.75594,28 275.5,28 C159.24406,28 65,128.735931 65,253 C65,335.842712 135.166667,423.509379 275.5,516 Z\" id=\"Oval-Copy\" stroke=\"#21718D\" stroke-width=\"55\"></path>\r\n                                    </g>\r\n                                </svg>\r\n                            </a></li>\r\n                            <li><a href=\"search.html\">\r\n                                <svg class=\"w-4 h-4\" width=\"550px\" height=\"550px\" viewBox=\"0 0 550 550\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                                    <!-- Generator: Sketch 62 (91390) - https://sketch.com -->\r\n                                    <title>Artboard Copy 5</title>\r\n                                    <desc>Created with Sketch.</desc>\r\n                                    <g id=\"Artboard-Copy-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                        <g id=\"Group\" transform=\"translate(295.000000, 295.000000) scale(-1, 1) translate(-295.000000, -295.000000) translate(32.000000, 32.000000)\">\r\n                                            <circle id=\"Oval\" stroke=\"#21718D\" stroke-width=\"61.174575\" cx=\"328.464394\" cy=\"197.5\" r=\"197.5\"></circle>\r\n                                            <polygon id=\"Rectangle\" fill=\"#21718D\" transform=\"translate(129.669715, 400.497924) rotate(-44.000000) translate(-129.669715, -400.497924) \" points=\"13.1697148 367.606619 246.169715 367.606619 246.169715 433.389228 13.1697148 433.389228\"></polygon>\r\n                                            <path d=\"M47.4237716,446 C65.2732964,446 79.7431952,460.469899 79.7431952,478.319424 L79.7431952,480.463185 C79.7431952,498.31271 65.2732964,512.782609 47.4237716,512.782609 C29.5742468,512.782609 15.104348,498.31271 15.104348,480.463185 L15.104348,478.319424 C15.104348,460.469899 29.5742468,446 47.4237716,446 Z\" id=\"Rectangle\" fill=\"#21718D\" transform=\"translate(47.423772, 479.391304) rotate(44.000000) translate(-47.423772, -479.391304) \"></path>\r\n                                        </g>\r\n                                    </g>\r\n                                </svg>\r\n                            </a></li>\r\n                            <li><a href=\"contact.html\">\r\n                                <svg class=\"w-4 h-4\" width=\"550px\" height=\"550px\" viewBox=\"0 0 550 550\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                                    <!-- Generator: Sketch 62 (91390) - https://sketch.com -->\r\n                                    <title>Artboard Copy 7</title>\r\n                                    <desc>Created with Sketch.</desc>\r\n                                    <g id=\"Artboard-Copy-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                        <polygon id=\"Triangle\" stroke=\"#21718D\" stroke-width=\"55\" stroke-linejoin=\"round\" transform=\"translate(275.500000, 198.500000) scale(-1, -1) translate(-275.500000, -198.500000) \" points=\"275.5 68 525 329 26 329\"></polygon>\r\n                                        <rect id=\"Rectangle-Copy-2\" stroke=\"#21718D\" stroke-width=\"55\" x=\"27.5\" y=\"64.5\" width=\"495\" height=\"414\" rx=\"18\"></rect>\r\n                                    </g>\r\n                                </svg>\r\n                            </a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"nav-container flex justify-between border-t-2 border-gray-400 \">     \r\n                        <div class=\"w-full md:w-1/2\">\r\n                            <ul class=\"text-sm font-bold flex justify-between \">\r\n                                <li class=\"hidden md:block border-l-2 nav-border w-full\"><a class=\"pt-2 pb-3 nav-links-color hover:nav-links-hover-color flex justify-center\" href=\"index.html\">HOME</a></li>\r\n                                <li class=\"border-l-2 nav-border w-full\"><a class=\"  nav-links-color hover:nav-links-hover-color pt-2 pb-3 w-full flex justify-center\" href=\"articles.html\">ARTICLES</a></li>\r\n                                <li class=\"border-l-2 nav-border w-full\"><a class=\" nav-links-color hover:nav-links-hover-color px-1 pt-2 pb-3 flex justify-center\" href=\"stream.html\">STREAM</a></li>\r\n                                <li class=\"border-l-2 nav-border w-full\"><a class=\" nav-links-color hover:nav-links-hover-color px-1 pt-2 pb-3 flex justify-center\" href=\"work.html\">WORK</a></li>\r\n                                <li class=\"border-l-2 border-r-2  nav-border w-full\"><a class=\"nav-links-color hover:nav-links-hover-color px-1 pt-2 pb-3 flex justify-center\" href=\"about.html\">ABOUT</a></li>\r\n                            </ul>\r\n                        </div>\r\n                        \r\n                        <div>\r\n                            <ul class=\" text-sm font-bold flex justify-between \">\r\n                                <li class=\"hidden md:block border-l-2 nav-border w-full p-1\"><a href=\"archive.html\" class=\"px-1 pt-3 pb-3 flex justify-end\">\r\n                                    <svg class=\"w-4 h-4\" width=\"550px\" height=\"550px\" viewBox=\"0 0 550 550\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                                        <title>Artboard Copy 4</title>\r\n                                        <g id=\"Artboard-Copy-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                            <rect id=\"Rectangle-Copy-2\" stroke=\"#21718D\" stroke-width=\"55\" x=\"27.5\" y=\"27.5\" width=\"495\" height=\"133\" rx=\"18\"></rect>\r\n                                            <rect id=\"Rectangle-Copy-4\" stroke=\"#21718D\" stroke-width=\"55\" x=\"53.5\" y=\"160.5\" width=\"443\" height=\"362\" rx=\"18\"></rect>\r\n                                            <rect id=\"Rectangle-Copy-5\" stroke=\"#21718D\" stroke-width=\"55\" x=\"187.5\" y=\"278.5\" width=\"176\" height=\"109\" rx=\"18\"></rect>\r\n                                        </g>\r\n                                    </svg>\r\n                                </a></li>\r\n\r\n                                <li class=\"hidden md:block border-l-2 nav-border w-full p-1\"><a class=\"px-1 pt-3 pb-3 flex justify-end\" href=\"map.html\">\r\n                                    <svg class=\"w-4 h-4\" width=\"550px\" height=\"550px\" viewBox=\"0 0 550 550\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                                        <title>Artboard Copy 9</title>\r\n                                        <g id=\"Artboard-Copy-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                            <g id=\"Group\" transform=\"translate(-59.000000, 449.000000)\"></g>\r\n                                            <circle id=\"Oval\" stroke=\"#21718D\" stroke-width=\"55\" cx=\"275\" cy=\"237\" r=\"70\"></circle>\r\n                                            <path d=\"M275.5,516 C415.833333,423.509379 486,335.842712 486,253 C486,128.735931 391.75594,28 275.5,28 C159.24406,28 65,128.735931 65,253 C65,335.842712 135.166667,423.509379 275.5,516 Z\" id=\"Oval-Copy\" stroke=\"#21718D\" stroke-width=\"55\"></path>\r\n                                        </g>\r\n                                    </svg>\r\n                                </a></li>\r\n                                <li class=\"hidden md:block border-l-2 nav-border w-full p-1\"><a class=\"px-1 pt-3 pb-3 flex justify-end\" href=\"search.html\">\r\n                                    <svg class=\"w-4 h-4\" width=\"550px\" height=\"550px\" viewBox=\"0 0 550 550\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                                        <!-- Generator: Sketch 62 (91390) - https://sketch.com -->\r\n                                        <title>Artboard Copy 5</title>\r\n                                        <desc>Created with Sketch.</desc>\r\n                                        <g id=\"Artboard-Copy-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                            <g id=\"Group\" transform=\"translate(295.000000, 295.000000) scale(-1, 1) translate(-295.000000, -295.000000) translate(32.000000, 32.000000)\">\r\n                                                <circle id=\"Oval\" stroke=\"#21718D\" stroke-width=\"61.174575\" cx=\"328.464394\" cy=\"197.5\" r=\"197.5\"></circle>\r\n                                                <polygon id=\"Rectangle\" fill=\"#21718D\" transform=\"translate(129.669715, 400.497924) rotate(-44.000000) translate(-129.669715, -400.497924) \" points=\"13.1697148 367.606619 246.169715 367.606619 246.169715 433.389228 13.1697148 433.389228\"></polygon>\r\n                                                <path d=\"M47.4237716,446 C65.2732964,446 79.7431952,460.469899 79.7431952,478.319424 L79.7431952,480.463185 C79.7431952,498.31271 65.2732964,512.782609 47.4237716,512.782609 C29.5742468,512.782609 15.104348,498.31271 15.104348,480.463185 L15.104348,478.319424 C15.104348,460.469899 29.5742468,446 47.4237716,446 Z\" id=\"Rectangle\" fill=\"#21718D\" transform=\"translate(47.423772, 479.391304) rotate(44.000000) translate(-47.423772, -479.391304) \"></path>\r\n                                            </g>\r\n                                        </g>\r\n                                    </svg>\r\n                                </a></li>\r\n                                <li class=\"hidden md:block border-l-2 border-r-2 nav-border w-full p-1\"><a class=\"px-1 pt-3 pb-3 flex justify-end\" href=\"contact.html\">\r\n                                    <svg class=\"w-4 h-4\" width=\"550px\" height=\"550px\" viewBox=\"0 0 550 550\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                                        <!-- Generator: Sketch 62 (91390) - https://sketch.com -->\r\n                                        <title>Artboard Copy 7</title>\r\n                                        <desc>Created with Sketch.</desc>\r\n                                        <g id=\"Artboard-Copy-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                            <polygon id=\"Triangle\" stroke=\"#21718D\" stroke-width=\"55\" stroke-linejoin=\"round\" transform=\"translate(275.500000, 198.500000) scale(-1, -1) translate(-275.500000, -198.500000) \" points=\"275.5 68 525 329 26 329\"></polygon>\r\n                                            <rect id=\"Rectangle-Copy-2\" stroke=\"#21718D\" stroke-width=\"55\" x=\"27.5\" y=\"64.5\" width=\"495\" height=\"414\" rx=\"18\"></rect>\r\n                                        </g>\r\n                                    </svg>\r\n                                </a></li>\r\n\r\n                            </ul>\r\n                        </div>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </header>\r\n\r\n        <main class=\"w-full pb-14 font-sans\"> \r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"content"),depth0,{"name":"content","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </main>\r\n\r\n        <footer class=\"mx-auto border-t border-gray-400 px-4\">\r\n            <div class=\"w-full flex flex-col justify-start gap-5  md:flex-row text-xl font-semibold\">\r\n                <div class=\"mt-9 leading-relaxed md:w-1/3 w-full\">\r\n                    <h3 class=\"log-color\">FOLLOW ME OR EMAIL</h3>\r\n                    <p>Links for my personal accounts.</p>\r\n                    <div class=\"w-full flex justify-start gap-3 mt-7 flex-wrap\">\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/mastodon.png\" alt=\"mastodon\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/twitter.png\" alt=\"twitter\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/instagram.png\" alt=\"instagram\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/band-camp.png\" alt=\"bandcamp\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/dribble.png\" alt=\"dribble\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/linkedin.png\" alt=\"linkedin\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/circle.png\" alt=\"email\" >\r\n                            </figure>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"mt-9 leading-relaxed md:w-1/3\">\r\n                    <h3 class=\"log-color\">FOLLOW SITE NONSITE</h3>\r\n                    <p >Links for my music/art projects.</p>\r\n                    <div class=\"w-full flex justify-start gap-3 mt-7 flex-wrap\">\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/mastodon.png\" alt=\"mastodon\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/twitter.png\" alt=\"twitter\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/instagram.png\" alt=\"instagram\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/band-camp.png\" alt=\"bandcamp\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/spotify.png\" alt=\"spotify\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/apple-music-logo-clipart-playlist-3.png\" alt=\"apple music\" >\r\n                            </figure>\r\n                        </a>\r\n                        <a href=\"\">\r\n                            <figure>\r\n                                <img class=\"w-8 h-8\" src=\"./img/Soundcloud-Logo-Png-Transparent-Background.png\" alt=\"sound cloud\" >\r\n                            </figure>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"mt-9 leading-relaxed w-full md:w-1/4\">\r\n                    <h3 class=\"log-color\">SUBSCRIBE</h3>\r\n                    <p>I’ll send you something every once in a while.</p>\r\n                    <form action=\"\" class=\"form-border flex  mt-7\">\r\n                        <input type=\"email\" placeholder=\"Email address\" class=\"w-4/5 p-2\">\r\n                        <button class=\"input-color w-1/5 text-white\">\r\n                            ⟶ \r\n                        </button>\r\n                    </form>\r\n                    <p class=\" mt-2\"><a class=\"page-link\" href=\"\">Now powered by Buttondown.</a></p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"w-full border-t border-gray-400 px-4 mt-10 py-16\">\r\n                <h3 class=\"font-bold leading-loose\">MISS THE OLD SITE?</h3>\r\n                <p class=\"italic font-semibold text-lg leading-loose\">\r\n                    <a class=\"page-link\" href=\"\">V4 design is archived here.</a>\r\n                </p>\r\n                <p class=\"leading-loose italic font-semibold text-lg text-wrap\">\r\n                    <span class=\"quote-paragraph\">Don’t make that masterpiece go away. We have so little left of what was glorious.</span> <span>-</span> <span><a class=\"page-link\" href=\"\">Zeldman</a></span>\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"w-full border-t border-gray-400 px-4 mt-10 py-16 text-sm leading-loose tracking-wider\">\r\n                <p class=\"footer-copyright\">© 2003–2024 Simon Collison <span class=\"footer-bullet\">&#8226;      <span> \r\n                    <a class=\"page-link\" href=\"\">RSS feed</a> \r\n                    <span class=\"footer-bullet\">&#8226;</span>\r\n                    Built with<a class=\"page-link\" href=\"\">Kirby</a> <span class=\"footer-bullet\">&#8226;</span> Tracked with <a class=\"page-link\" href=\"\">Fathom</a>  <span class=\"footer-bullet\">&#8226;</span> Hosted by <a class=\"page-link\" href=\"\">Guru</a> <span class=\"footer-bullet\">&#8226;</span> <a class=\"page-link\" href=\"\">Buy me a coffee</a> or <a href=\"\">donate</a>  <span class=\"footer-bullet\">&#8226;</span> <a class=\"page-link\" href=\"\">Versioned with Github</a> <span class=\"footer-bullet\">&#8226;</span> Find me on <a class=\"page-link\" href=\"\">Mastodon</a>.</p>\r\n                    <p class=\"footer-info\">Books linked on my site may earn me a commission from indie-supporting bookshop.org. <a class=\"page-link\" href=\"\">Visit my book store</a>.\r\n                </p>    \r\n            </div>\r\n            \r\n        </footer>\r\n\r\n    </div>\r\n</body>\r\n</html>";
},"usePartial":true,"useData":true});
})();