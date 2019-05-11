var obj = JSON.parse(headers);
delete obj['advertisement_info'];
JSON.stringify(obj);