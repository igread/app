/*=====================================
[url]
^https?:\/\/api.*\.zhuishushenqi\.com\/user\/
[host]
api*.zhuishushenqi.com
=====================================*/
var obj = JSON.parse(body)

if (url.indexOf("/user/detail-info?") != -1)
{
	obj["vipLv"] = 1;
  obj["vipExp"] = 99;
	obj["exp"] = 9999;
	obj["lv"] = 8;
}else if (url.indexOf("/user/account?token") != -1) 
{
	obj["isNewUser"] = true;
	obj["time"] = 1590050350;
	obj["freeTime"] = 1590050350;
	obj["monthly"] = 1;
	obj["isMonthly"] = true;
}else if (url.indexOf("/user/account?vip?") != -1) 
{
	obj["vipExpire"] = "2022-05-19T14:21:04.682Z"

}else if (url.indexOf("/user/info") != -1)
{
	obj["exp"] = 99999;
	obj["lv"] = 8;
	obj["grouping"]["level5_group_id"] = 1;
}else if (url.indexOf("/user/newUserOpenWelfare") != -1) 
{
	
	obj["welfare"]["freeTime"]=698.4;
	
}else if (url.indexOf("/user/monthly/info") != -1) 
{
  obj["user"]["isMonthly"]=true;
  obj["user"]["monthly"]=1;      
}

JSON.stringify(obj)
