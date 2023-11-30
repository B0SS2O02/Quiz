import os


dirName='node_modules/'

def edit(path,name):
    oldFile=''
    update=False
    for i in open(path,'r'):
        if('= require(' in i):
            update=True
            oldFile+=i
        else:
            oldFile+=i

    if(update):
        print('---------------------------------',name)
        print(oldFile)






def scan (path):
    try:
        for i in os.scandir(path=path):
            if(i.is_file() ):
                if('.js' in i.name):
                    edit(i.path,i.name)
            else:
                scan(i.path)

    except Exception as e:
        print("An error occurred:", e)  

    



print(scan(dirName))
