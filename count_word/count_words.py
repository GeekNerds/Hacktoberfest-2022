'''Q13)Write a function in PYTHON that counts the number of “Me” or “My” words present in a
text file “DIARY.TXT”.'''
def MeMycount():
    f=open("DIARY.txt","r")
    c=0
    x=f.read()
    s=x.split()
    for i in s:
        if i=="Me" or i=="My":
            c+=1
    print("Count of Me/My in file:",c)
MeMycount()
            
