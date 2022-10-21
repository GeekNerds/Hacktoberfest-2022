import java.util.Scanner;
public class JavaApplication3 {
 private int min;
 private int max;
 public int getMin() {
 return min;
 }
 public int getMax() {
 return max;
 }
 public void setMin(int min) {
 this.min = min;
 }
 public void setMax(int max) {
 this.max = max;
 }
 public static void main(String[] args) {
 JavaApplication3 JavaApplication3 = new JavaApplication3();
 int numberOfItems = 0;
 Scanner scanner = new Scanner(System.in);

while (numberOfItems <= 0) {
 System.out.println("Enter the number of numbers in sequence = ");
 numberOfItems = scanner.nextInt();
 if (numberOfItems <= 0) {
 System.out.println("Error!....number of numbers in sequence must be >0 ");
 }
 }
 int arr[] = new int[numberOfItems];
 System.out.println("\n");
 for (int i = 0; i < numberOfItems; i++) {
 System.out.println("Enter number "+(i + 1)+" in sequence = ");
 arr[i] = scanner.nextInt();
 }
 System.out.print("\n***sequence = ");
 for (int i = 0; i < numberOfItems; i++) {
 System.out.print(arr[i] + ", ");
 }
 System.out.println();
 JavaApplication3.checkMaxMin(arr);
 System.out.println("Max of the sequence = " + JavaApplication3.getMax() + "\nMin of the sequence = " +
JavaApplication3.getMin());
 }
 void checkMaxMin(int arr[]) {
 int numberOfItems = arr.length;
 setMin(arr[0]);
 setMax(arr[0]);

for (int i = 0; i < numberOfItems; i++) {
 if (getMax() < arr[i]) {
 setMax(arr[i]);
 } else if (getMin() > arr[i]) {
 setMin(arr[i]);
 }
 }
 }
}
