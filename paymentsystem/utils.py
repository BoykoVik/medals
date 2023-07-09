from datetime import datetime
from os.path import splitext

def get_rename(instance, filename):#создание имен для изображений
    return 'photoorders/%s%s' % (datetime.now().timestamp(), splitext(str(filename).encode('utf-8')) [1])