
#include <iostream>
using namespace std;

int main()
{

	int n , rows = 1, columns;
cout<<"Enter the number of stars";
cin>>n;


	while (rows <= n) {
		columns = n;


		while (columns > rows) {
			cout << " ";
			columns--;
		}

		cout << "*";
		columns = 1;
		while (columns < (rows - 1) * 2) {
		   
			cout << " ";
			columns++;
		}
		if (rows == 1) {
			cout << "\n";
		}
		else {
			cout << "*\n";
		}
		rows++;
	}
	
	rows = n - 1;
	while (rows >= 1) {
		columns = n;
	
		while (columns > rows) {
			cout << " ";
			columns--;
		}
	
		cout << "*";
		columns = 1;
		while (columns < (rows - 1) * 2) {
			cout << " ";
			columns++;
		}
		if (rows == 1) {
			cout << "\n";
		}
		else {
			cout << "*\n";
		}
		rows--;
	}
	return 0;
}
