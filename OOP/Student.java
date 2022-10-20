package classes_and_objects;

public class Student {
	public String name;
	private final int rollNumber;
	private static int numstudent;
	
	public Student(String name,int rollNumber){
		this.name=name;
		this.rollNumber=rollNumber;
		numstudent++;
	}
	
//	public Student(String s){
//		name=s;
//	}
	
//	public void setRollnumber(int rn) {
//		if(rn<=0) {
//			return;
//		}
//		rollNumber=rn;
//	}
	
	public static int getNumStudent() {
		return numstudent; 
	}
	
	public int getRollnumber() {
		return rollNumber;
	}
	
	public void print() {
		System.out.println(name+' '+rollNumber);
	}
}
