import java.util.*;

class calculator {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Operations :");
        System.out.println("1 : Addition");
        System.out.println("2 : Subtraction");
        System.out.println("3 : Multiplication");
        System.out.println("4 : Division");
        System.out.println("5 : Modulus");
        System.out.println("6 : Exponent / Power");

        System.out.println("\nChoose an operation");
        int operation = sc.nextInt();

        System.out.println("Choose the first operand");
        int x = sc.nextInt();

        System.out.println("Choose the second operand");
        int y = sc.nextInt();

        switch (operation) {

            case 1:
                System.out.println(x + " + " + y + " = " + (x + y));
                break;

            case 2:
                System.out.println(x + " - " + y + " = " + (x - y));
                break;

            case 3:
                System.out.println(x + " * " + y + " = " + (x * y));
                break;

            case 4:
                System.out.println(x + " / " + y + " = " + ((x * 1.0) / y));
                break;

            case 5:
                System.out.println(x + " % " + y + " = " + (x % y));
                break;

            case 6:
                System.out.println(x + " to the power of  " + y + " is " + Math.pow(x, y));
                break;
        }

        sc.close();
    }
}
