(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['archive_layout'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div> \r\n    <h2 class=\"text-4xl font-semibold mt-14 mb-16 log-color\">Archive</h2>\r\n</div>\r\n<div class=\"w-full flex flex-col sm:flex-row sm:justify-start sm:gap-4\">\r\n    <div class=\"sm:w-1/5 h-fit sm:border-l sm:border-t sm:border-b border-gray-400 sm:pl-10 sm:pt-10 pb-16\">\r\n        <h3 class=\"log-color font-semibold text-xl mb-4\">\r\n            Year\r\n        </h3>\r\n        <ul class=\"archive-yrs grid sm:grid-cols-1 gap-2 grid-cols-4\">\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2024</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2023</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2022</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2021</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2020</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2019</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2018</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2017</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2016</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2015</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2014</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2013</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2012</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2011</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2010</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2009</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2008</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2007</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2006</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2005</a></li>\r\n            <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">2004</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\" w-full h-fit flex flex-col-reverse sm:flex-row sm:justify-start sm:gap-4\">\r\n        <div class=\"filter-by sm:w-1/3 h-auto sm:border-l sm:border-t sm:border-b border-gray-400 sm:pl-10 sm:pt-10 sm:pb-16\">\r\n            <h3 class=\"log-color font-semibold text-xl mb-4\">\r\n                Filter by tag\r\n            </h3>\r\n\r\n            <h2 class=\"log-color font-bold mt-5 mb-3\">\r\n                Faves and examples\r\n            </h2>\r\n            <ul class=\"flex justify-start gap-2 flex-wrap w-full  text-sm font-semibold\">\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Design</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Year In Music</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Music</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Japan</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">New Adventures</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Iceland</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Setlist</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Art</a></li>\r\n            </ul>\r\n\r\n            <h2 class=\"log-color font-bold mt-5 mb-3\">\r\n                Content types\r\n            </h2>\r\n            <ul class=\"flex justify-start gap-2 flex-wrap w-full  text-sm font-semibold\">\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Essay</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Review</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Audio</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Video</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">List</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Notes</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Photos</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Instagram</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Setlist</a></li>\r\n            </ul>\r\n\r\n            <h2 class=\"log-color font-bold mt-5 mb-3\">\r\n                News\r\n            </h2>\r\n            <ul class=\"flex justify-start gap-2 flex-wrap w-full  text-sm font-semibold\">\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Personal</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Events</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Writing</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Speaking</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Interview</a></li>\r\n            </ul>\r\n\r\n            <h2 class=\"log-color font-bold mt-5 mb-3\">\r\n                Culture & humanities\r\n            </h2>\r\n            <ul class=\"flex justify-start gap-2 flex-wrap w-full  text-sm font-semibold\">\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Design</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Music</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Art</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Books</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Film & TV</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Web</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Games</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Philosophy</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Psychology</a></li>\r\n            </ul>\r\n\r\n            <h2 class=\"log-color font-bold mt-5 mb-3\">\r\n                Science, tech, world\r\n            </h2>\r\n            <ul class=\"flex justify-start gap-2 flex-wrap w-full  text-sm font-semibold\">\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Environment</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Ecology</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Nature</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Politics</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Ethics</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Technology</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Future</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Society</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Science</a></li>\r\n            </ul>\r\n\r\n            <h2 class=\"log-color font-bold mt-5 mb-3\">\r\n                Lifestyle\r\n            </h2>\r\n            <ul class=\"flex justify-start gap-2 flex-wrap w-full  text-sm font-semibold\">\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Travel</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Outdoors</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Sport</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Health & Fitness</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Food & Drink</a></li>\r\n                <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Home</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"w-full h-fit sm:border-l sm:border-t sm:border-b border-gray-400 sm:lst-pad sm:pt-10 sm:pb-16\">\r\n            <h3 class=\"log-color font-semibold text-xl mb-4\">\r\n                Entries from 2024\r\n            </h3>\r\n\r\n            <ul class=\"sm:list-disc sm:list-outside  text-2xl text-gray-400 \">\r\n                <li class=\"text-gray-400 mb-16\">\r\n                    <div class=\"log-color\">\r\n                        <span class=\"block text-xl mb-4\">March</span>\r\n                        <span class=\"block text-xl font-bold mb-4\"><a class=\"page-link\" href=\"\">Patricia Joan Collison</a></span>\r\n                        <span class=\"block text-sm mb-4\">1944–2024.</span>\r\n                        <span class=\"block mb-4\"><a class=\"page-link\" href=\"\">Electronic Sound review</a></span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"text-gray-400 mb-16\">\r\n                    <div class=\"log-color\">\r\n                        <span class=\"block text-xl mb-4\">February</span>\r\n                        <span class=\"block mb-4\"><a class=\"page-link\" href=\"\">Back to life</a></span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"text-gray-400\">\r\n                    <div class=\"log-color\">\r\n                        <span class=\"block text-xl mb-4\">January</span>\r\n                        <span class=\"block text-sm tracking-wide\"><a class=\"page-link\" href=\"\">Good evening, Wembl... err, Witney!</a> <span class=\"footer-bullet\">&#8226;</span> <a class=\"page-link\" href=\"\">Remixed</a> <span class=\"footer-bullet\">&#8226;</span> <a class=\"page-link\" href=\"\">Flying Air Canada with a guitar</a></span>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();