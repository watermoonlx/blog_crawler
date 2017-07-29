"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var superagent = require("superagent");
var cnblog_base_url = 'https://www.cnblogs.com/#p';
var content$ = Rx.Observable.fromPromise(superagent
    .get(cnblog_base_url + "1"));
content$.subscribe(function (i) {
    console.log(i);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBQzNCLHVDQUF5QztBQUV6QyxJQUFNLGVBQWUsR0FBRyw0QkFBNEIsQ0FBQztBQUVyRCxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FDdEMsVUFBVTtLQUNMLEdBQUcsQ0FBSSxlQUFlLE1BQUcsQ0FBQyxDQUNsQyxDQUFDO0FBRUYsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNsQixDQUFDLENBQUMsQ0FBQyJ9