package Generics;

public class Main {

	public static void main(String[] args) {
		Pair<String,Integer> p=new Pair<String,Integer>("Rahul",10);
		
	//	Pair<String> obj=new Pair<Integer>(10,20);
		
	//	Pair<Character> obj1=new Pair<Character>('a','b');
		
		
		//p.setFirst(10);
		
		int a=10;
		int b=20;
		int c=30;
		
		Pair<Integer,Integer> InternalPair=new Pair<>(a,b);
		
		Pair<Pair<Integer,Integer>,Integer> p3=new Pair<>(InternalPair,c);
		System.out.println(p3.getFirst().getFirst());
		System.out.println(p3.getSecond());
	}

}
