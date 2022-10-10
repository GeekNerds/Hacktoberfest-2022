import java.util.Arrays;

public class BubbleSort {

    public static int[] bblSort(int input[]) {
        boolean swapping = true;
        while (swapping) {
            swapping = false;
            for (int i = 0; i < input.length-1; i++) {
                if (input[i] > input[i+1]) {
                    System.out.println(String.format("Swapping pair %d, %d", input[i], input[i+1]));
                    Swap.swap(input, i, i+1);
                    System.out.println(Arrays.toString(input));
                    swapping = true;
                }
            }
        }
        return input;
    }



    public static void main(String[] args) {
        int[] count_forwards = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        bblSort(count_forwards);
        System.out.println(Arrays.toString(count_forwards));
    }
}
