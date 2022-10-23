#Q19)
import csv
stu=open("ClassXII.csv","w")
stuwriter=csv.writer(stu)
stuwriter.writerow(['Name','Stream','Class','Percentage'])
c=1
for i in range(c):
    print("Student Record",i+1)
    name=input("Enter Name:")
    stre=input("Enter Stream:")
    cla=int(input("Enter Class:"))
    per=float(input("Enter Percentage:"))
    sturec=[name, stre,cla,per]
    stuwriter.writerow(sturec)
stu.close()
