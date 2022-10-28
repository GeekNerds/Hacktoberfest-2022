#Q25)
#Program to DELETE a record
import mysql.connector as msql
mcon=msql.connect(host="localhost",user="root", passwd="radhey99", database="outfit")
if mcon.is_connected():
    print("Sucessfully connected")
curs=mcon.cursor()
s=input("Enter price:")
query="delete from outfits where price='{}'".format(s)
curs.execute(query)
mcon.commit()
print("Row updated successfully...")


