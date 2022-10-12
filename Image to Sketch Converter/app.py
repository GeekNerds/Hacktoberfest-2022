import cv2;
image = cv2.imread("./Assets/demo.jpg")

grey_filter = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
cv2.imwrite("graysacle.jpg",grey_filter)

invert = cv2.bitwise_not(grey_filter)
cv2.imwrite("invert.jpg",invert)

blur = cv2.GaussianBlur(invert,(21,21),0)
cv2.imwrite("blur.jpg",blur)

invertedBlur = cv2.bitwise_not(blur)
cv2.imwrite("invBlur.jpg",invertedBlur)

sketch = cv2.divide(grey_filter,invertedBlur,scale=256.0)
cv2.imwrite("sketch.jpg",sketch)