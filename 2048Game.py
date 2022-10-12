import random

#The size defines the size of the grid 
#Even if we change the size we can get the output as per our conditions
size=4 

#The value we need to reach for winning
total=2048

# new_grid() is called to create a grid of given size 
#Everytime after making a particular move we use the new_grid() function to store the updated values and then again replace with the original gird value. 
def new_grid(empty=False):
    new = []
    if empty:
        for i in range(0,size):
            new.append([])
    else:
        for i in range(0,size):
            new.append([0]*size)
    return new
    

# add_new() is called to randomly initialize the values on the grid to start our game 
# So after every move, we need to insert a value at an empty location.
#So add_new() function does the process for us.
def add_new():
    get = False
    # we are randomly initializing the value to grid
    while not get:
        row , col = random.randrange(0,size) , random.randrange(0,size)
        if sqr[row][col] == 0:
            sqr[row][col] = 2
            get = True


#when move() is called all the values in the grid moved to a particular direction.   
# We store our updated values in a new grid of defined size and again change them.
def move():
    new = new_grid()
    for u in range(0,size):
        count = 0
        for v in range(0,size):
            if sqr[u][v] != 0:
                new[u][count] = sqr[u][v]
                count += 1
    return new

# the reverse() function is used to reverse the particular row or column of the grid to calculate the sum.
# While moving our grid to right or down , if we reverse the grid then it makes our process easy for calculation
# Hence we use this function for reversing the values in a grid.
def reverse():
    new = new_grid(True)
    for u in range(0,size):
        for v in range(0,size):
            new[u].append(sqr[u][size-1-v])
    return new


# the traverse() function is called to convert all the row elements to columns elements and vice versa.
#This function is mainly used if we need to move to upwards which makes us easy to update the values without changing the original grid.
def transverse():
    new = new_grid(True)
    for u in range(0,size):
        for v in range(0,size):
            new[u].append(sqr[v][u])
    return new


#when we make a move , 
#we need to double the elements that are adjacent and no elements are in between them unless empty ones.
def addValuesGrid():
    for u in range(0,size):
        for v in range(0,size-1):
            # this is the case where we check whether the elements are adjacent with equal or not.
            if sqr[u][v] == sqr[u][v+1]:
                sqr[u][v] *= 2
                sqr[u][v+1] = 0


# after every move that we make we need to check for a condition that 
# is there still posibilities for us to make a move 
# the  checkForGameOver() function is called to check whether we 
# are having move or not.
def checkForGameOver():
    for u in range(0,size):
        for v in range(0,size-1):
            if sqr[u][v] == sqr[u][v+1]:
                return True


#also we need to search is there any grid element with a NULL
# if there is a NULL then still we have the possibility for making a move 
# The is_any_empty() assures us that condition and does for us.
def is_any_empty():
    for u in range(0,size):
        for v in range(0,size):
            # if in the grid if any of the grid value is NULL then we return True to indicate there is a move.
            if sqr[u][v] == 0:
                return True


# if any of the condition of is_any_empty() or checkForGameOver() return False then
# it indicates that our game was completed due to no move.
# we return False to say the game was over.
def game_over_check():
    if not is_any_empty():
        if checkForGameOver():
            return False
        else:
            return True
    else:
        return False


# If the game was played good and none of the function violates
# if any of the grid value equals to the given size(2048) then we return True 
# the win_check() function checks for this condition after every move 
def win_check():
    for u in range(0,size):
        for v in range(0,size):
            if sqr[u][v] == total:
                return True

# if we want to move our screen to left then we call the left() function
def left():
    global sqr
    sqr = move()
    addValuesGrid()
    sqr = move()
    add_new()

# if we want to move our screen to right then we call the right() function
def right():
    global sqr
    sqr = reverse()
    sqr = move()
    addValuesGrid()
    sqr = move()
    sqr = reverse()
    add_new()

# if we want to move our screen to up then we call the up() function
def up():
    global sqr
    sqr = transverse()
    sqr = move()
    addValuesGrid()
    sqr = move()
    sqr = transverse()
    add_new()

# if we want to move our screen down then we call the down() function
def down():
    global sqr
    sqr = transverse()
    sqr = reverse()
    sqr = move()
    addValuesGrid()
    sqr = move()
    sqr = reverse()
    sqr = transverse()
    add_new()


# From here our main function starts 
# We go on an infinite loop till we win game or lose the  game.
running = True
while running:
    global sqr
    sqr = new_grid()
    sqr[3][2] = 2
    sqr[3][0] = 2
    print("\n\t\t\t\tINSTRUCTIONS\n\t\t\t1)Use 1 to move left\n\t\t\t2)Use 2 to move right\n\t\t\t3)Use 3 to move up\n\t\t\t4)Use 4 to move down")
    print("\n\t\tTO win you have to make 2048 in any cell\n")
    play = True
    while play:
        for i in range(0,size):
            print(sqr[i])
        comnd = input("Enter the following key:")
        # 
        if comnd == "1":
            left()
        elif comnd == "2":
            right()
        elif comnd == "3":
            up()
        elif comnd == "4":
            down()
        else:
            print("\n\t\t\t\t\t WRONG Input")

        if win_check() == True:
            print("You win")
            play = False
        
        elif game_over_check() == True:
            print("Game over")
            play = False
            running = False
