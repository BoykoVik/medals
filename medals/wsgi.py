import os
import sys
import platform

#путь к проекту
sys.path.insert(0, '/home/c/ck97689/django_cz9k2/public_html')
#путь к фреймворку
sys.path.insert(0, '/home/c/ck97689/django_cz9k2/public_html/medals')
#путь к виртуальному окружению
sys.path.insert(0, '/home/c/ck97689/django_cz9k2/django/lib/python{0}/site-packages'.format(platform.python_version()[0:3]))
os.environ["DJANGO_SETTINGS_MODULE"] = "medals.settings"

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()