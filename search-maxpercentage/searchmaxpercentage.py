# importing the csv module 
import csv 

def WriteFile():
    Heading = ['Name', 'Stream', 'Class', 'Percentage'] 

    # data rows of csv file 
    rows = [ ['Amit', 'Science', '12', 93.0], 
		['Sam', 'Commerce', '12', 89.1], 
		['Aditi', 'Humanities', '12', 79.3], 
		['Sapna', 'Science', '12', 78], 
		['Prashant', 'Science', '12', 97.8], 
		['John','Commerce', '12', 79.1]] 


    # writing to csv file 
    with open("Classxii", 'w',newline='') as f1:
        cw = csv.writer(f1)
        cw.writerow(Heading)
        cw.writerows(rows)
        print("Rows Inserted")

def Readfile():
    with open("Classxii", 'r') as f:
        csvread=csv.reader(f)
        
        for i in csvread:
            print(i)

def Searchmax():
        with open("Classxii", 'r') as f:
            csvread=csv.reader(f)
            next(csvread)
            Max=0
            rec=[]
            for i in csvread:
                if (float(i[3]))>Max:
                    Max=float((i[3]))
                    rec=i
            print(rec)

while True:
    print("1. Write, 2.Search Max  3. Display All 4, Exit")
    ch=int(input("enter choice"))
    if ch==1:
          WriteFile()
    elif ch==2:
        Searchmax()
    elif ch==3:
        Readfile()
    elif ch ==4:
        break
    else:
        print("Invalid Choice")
        
