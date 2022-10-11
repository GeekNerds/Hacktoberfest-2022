# Function for Bubble Sort
def bubbleSort(arr):
    n=len(arr)
    for i in range(0,n-1):
        swapped=False
        for j in range(0,n-i-1):
            if arr[j]>arr[j+1]:
                arr[j],arr[j+1] = arr[j+1],arr[j]
                swapped=True
        # Loop will break if no two elements are swapped by inner loop
        if swapped==0:
            break

n=int(input("Enter size of array: "))
l=[]
for i in range(0,n):
    temp = int(input(f"Enter {i+1}th number: "))
    l.append(temp)

print(f"List before sorting: {l}")
bubbleSort(l)
print(f"List after sorting: {l}")