#include<bits/stdc++.h>
using namespace std;
int main()
{
	int size;
	cin>>size;
	for (int i = 0; i < size; ++i)
	{
		int data1, data2;
		cin>>data1>>data2;
		int s = 0;
		for (int i = 0; i < data1; ++i)
		{
			int value;
			cin>>value;
			s = s + value;
		}
		if(s > 0){
			cout<<"YES"<<endl;
		}
		else{
			cout<<"NO"<<endl;
		}
	}
	

	return 0;
}