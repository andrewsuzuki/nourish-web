angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("hall.html","<h1>{{ hall.title }}</h1>\n\n<tabset type=\"pills\">\n    <tab ng-repeat=\"day in hall.days\" heading=\"{{ day.title }}\" active=\"day.active\" disabled=\"day.disabled\">\n        <br />\n        <tabset>\n            <tab ng-repeat=\"meal in day.meals\" heading=\"{{ meal.title }}\" active=\"meal.active\" disabled=\"meal.disabled\">\n                <ul>\n                    <li ng-repeat=\"item in meal.items\"></li>\n                </ul>\n            </tab>\n        </tabset>\n    </tab>\n</tabset>\n");
$templateCache.put("today.html","<div class=\"jumbotron\">\n    <h1>Nourish</h1>\n    <p>Track and manage your UConn dining experience. Available on iOS, Android, and the web.</p>\n    <p><a class=\"btn btn-primary btn-lg\">Learn more</a></p>\n</div>\n\n<h1>Today</h1>\n\n");}]);