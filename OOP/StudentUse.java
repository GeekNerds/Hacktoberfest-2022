package classes_and_objects;
import java.util.Scanner;

public class Studentuse {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		
		Student s1=new Student("Rahul",22);
		s1.print();
		
		Student s2=new Student("Jai",23);
		s2.print();
		System.out.println(Student.getNumStudent());
	}

}
