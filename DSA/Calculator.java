import java.util.*;
class calculator
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the two numbers respectively");
        int x = sc.nextInt();
        int y = sc.nextInt();
        System.out.println("Addition of numbers is = "+ (x+y));
        System.out.println("Subtraction of numbers is = " +(x-y));
        System.out.println("Multipication of numbers is = " +(x*y));
        System.out.println("Division of numbers is = " +(x/y));
        sc.close();
    }
}