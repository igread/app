/* (网易云阅读)
[url]
^https?:\/\/easyread\.163\.com\/sns\/user\/getUserInfo\.atom
[host]
easyread.163.com
*/

let path = '/getUserInfo\.atom';
var obj = JSON.parse(body)
if (obj["userInfo"]["userId"] != undefined) {
   obj["userInfo"]["levelInfo"]["info"]["common"]["masterLevel"] = 1;
   obj["userInfo"]["levelInfo"]["info"]["common"]["level"] = 8;
   obj["userInfo"]["levelInfo"]["info"]["common"]["nextLevel"] = 9;
   obj["userInfo"]["levelInfo"]["info"]["common"]["money"] = 8888;

}
 
JSON.stringify(obj)
