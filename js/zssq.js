/* (追书神器)
[URL]
^https?:\/\/api.*\.zhuishushenqi\.com\/user\/info
[HOST]
api*.zhuishushenqi.com
*/

var obj = JSON.parse(body)

if (url.indexOf("/user/detail-info?") != -1)
{
	obj["vipLv"] = 1;
	obj["exp"] = 99999;
	obj["lv"] = 5;
}
else if (url.indexOf("/user/account") != -1) 
{
	obj["isNewUser"] = true;
	obj["time"] = 1590050350;
	obj["freeTime"] = 1590050350;
}
else if (url.indexOf("/user/info") != -1)
{
	obj["exp"] = 99999;
	obj["lv"] = 5;
	obj["grouping"]["level5_group_id"] = 1;
}
else if (url.indexOf("/user/newUserOpenWelfare") != -1) 
{
	obj=JSON.stringify(obj)
	obj=obj.replace(/\d+\.\d+/g,"71.76")
	obj=JSON.parse(obj)
}
else
{
}

JSON.stringify(obj)