// Use case of Polymorphism in JAVA

class classPoly {
 
    // Method with 2 integer parameters
    static int Multiply(int a, int b)
    {
        return a * b;
    }
 
    // Method 2
    // With same name but with 1 double parameters
    static double Multiply(int a, double b)
    {
        return a * b;
    }
}

// Main class
class main {
 
    // Main driver method
    public static void main(String[] args)
    {
        System.out.println(classPoly.Multiply(2, 4));
        System.out.println(classPoly.Multiply(5.5, 6.3));
    }
}
