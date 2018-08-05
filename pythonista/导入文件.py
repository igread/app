import os,sys
import appex
import zipfile
import console
console.clear()
 
	
if not appex.is_running_extension():
	print('请在"Run Pythonista Script"中使用！')
else:
	try:
		mmsg=0
		_要导入的文件=appex.get_attachments()[0]
		_文件名=_要导入的文件.replace(os.path.dirname(_要导入的文件)+'/','
		_目录名=hml()+'导入的文件/'
		expath=_目录名+_文件名[0:_文件名.rfind('.')]
		if not os.path.exists(_目录名):
			os.mkdir(_目录名)
		filetype=str.lower(_文件名[_文件名.rfind('.'):])
		def cfile():
				_文件=open(_要导入的文件,'rb')
				zwxm=open(_目录名+_文件名,'wb')
				zwxm.write(_文件.read())
				zwxm.close()
				_文件.close()			
				
		if os.path.exists(_目录名+_文件名):
			console.clear()
			console.set_font('',5)
			img = console.alert('提示', '文件已存在', '覆盖','取消',hide_cancel_button=True)
			if img==1:
				cfile()			
			elif img==2:
				mmsg=1
				raise							
		else:
			cfile()	
			
	except:
		if not mmsg==1:
			console.hud_alert('文件导入失败！')
		else:
			console.hud_alert('已取消！','success',0.8)
	else:
		console.hud_alert('导入成功！','success',0.5)

