package Generics;

public class Print {

	public static void main(String[] args) {
		Integer a[]=new Integer[10];
		String s[]=new String[10];
		
		for(int i=0;i<a.length;i++) {
			a[i]=i+1;
		}
		
		for(int i=0;i<a.length;i++) {
			s[i]="abc";
		}
		
		print(a);
		print(s);
	}
	
	static <T>void print(T a[]) {
		
		for(int i=0;i<a.length;i++) {
			System.out.print(a[i]+" ");
		}
		
		System.out.println();
	}

}
