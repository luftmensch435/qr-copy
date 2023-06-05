import shutil
import os
from flask_frozen import Freezer
from app import app

def move():
    src = "build"
    dst = "docs"
    try:
        # if path already exists, remove it before copying with copytree()
        if os.path.exists(dst):
            shutil.rmtree(dst)
            shutil.copytree(src, dst)
    except Exception as e:
        print('Directory not copied. Error: %s' % e)


freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()
    move()
