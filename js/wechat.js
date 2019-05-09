var obj = JSON.parse(body);
delete obj['advertisement_info'];
JSON.stringify(obj);