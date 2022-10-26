# Algorithm

# Initialize last[c] for each c in p 

# Single scan, rightmost value is recorded 
# Nested loop, compare each segment t[i:i+len(p)] with p 

# If p matches, record and shift by 1 

# We find a mismatch at t[i+j] 

# If j > last[t[i+j]], shift by j - last[t[i+j]] 

# If last[t[i+j]] > j, shift by 1 

# Should not shift p to left! 
# If t[i+j] not in p, shift by j+1

# Implimentation
def boyer_moore(t,p):
    # Preprocess
    last = {} 
    for i in range(len(p)):
        last[p[i]] = i
    position_list=[]
    i = 0
    while i <= (len(t)-len(p)):
        matched,j = True,len(p)-1
        while j >= 0 and matched:
            if t[i+j] != p[j]:
                matched = False
            j = j - 1
        if matched:
            position_list.append(i)
            i = i + 1
        else:
            j = j + 1
            if t[i+j] in last.keys():
                i = i + max(j-last[t[i+j]],1)
            else:
                i = i + j + 1
    return(position_list)
print(boyer_moore('abcaaacabc','abc'))

# Output
# [0, 7]

# Complexity for a text string t of length n A pattern string p of length m 
# Worst case O(nm)
# If t = aaa...a, p = baaa
