#Q23)
#Program to insert a record
import mysql.connector as msql
mcon=msql.connect(host="localhost",user="root", passwd="radhey99", database="outfit")
if mcon.is_connected():
    print("Sucessfully connected")
curs=mcon.cursor()
query="select*from outfits"
curs.execute(query)
data=curs.fetchall()
for i in data:
    print(i)
c=input("Enter Code:")
d=input("Enter Description:")
s=input("Enter Size:")
l=int(input("Input Qty:"))
p=int(input("Enter Price:"))
query="insert into outfits values('{}','{}','{}',{},{})".format(c,d,s,l,p)
curs.execute(query)
mcon.commit()
query="select*from outfits"
curs.execute(query)
data=curs.fetchall()
for i in data:
      print(i)
