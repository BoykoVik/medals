import sqlite3 as lite
import sys

con = lite.connect('db.sqlite3')

with con:
    cur = con.cursor()
    cur.execute("UPDATE baseapp_product SET parameters_id=4 WHERE category_id = 4;")


