
	 public class ComplexNumbers {
	 int real;
	 int imag;
	
	public ComplexNumbers(int real,int imag) {
		this.real=real;
		this.imag=imag;
	}
	
	public void plus(ComplexNumbers c) {
		int real=this.real + c.real;
		int imag=this.imag+c.imag;
		this.real=real;
		this.imag=imag;
	}
	public void multiply(ComplexNumbers c) {
		int real= this.real * c.real - this.imag * c.imag;
		int imag= this.real * c.imag + c.real * this.imag;
		this.real=real;
		this.imag=imag;
	}
	public void print() {
		System.out.println(this.real + " + i"+ this.imag);
	}
}


