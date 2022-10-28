import java.util.*;
class fibonacci
{
    public static void main(String[] args)
    {
      Scanner sc = new Scanner(System.in);

      System.out.println("Enter the limit number");
      int n = sc.nextInt();
      System.out.println(fib(n));
    }
    public static int fib(int x)
    {
       if(x<=1)
       return x;
       else
       return fib(x-1)+fib(x-2);
    }
}