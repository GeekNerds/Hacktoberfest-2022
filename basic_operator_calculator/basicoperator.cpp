#include<iostream>
using namespace std;
int main()
{
    int a,b,c,sub,mul,div;
    cout<<"\t\t\t\t Welcome to this program \t\t\t\t";
    cout<<"\n\t\t\t\t1.add 2.subtract 3.multipy 4.divide\t\t\t\t";
    cout<<"\n Enter First Number:";
    cin>>a;
    cout<<"\n Enter second Number:";
    cin>>b;
    cout<<"\n Now enter your choice:\n";
    cin>>c;
    if(c==1)
    {
        int sum=a+b;
        cout<<"sum of given numbers:"<<sum;
    }
    if(c==2)
    {
        sub=a-b;
        cout<<"Difference of given numbers:"<<sub;
    }
    if(c==3)
    {
        mul=a*b;
        cout<<"The product of given numbers:"<<mul;
    }
    if(c==4)
    {
        div=a/b;
        cout<<"The quotient of given numbers:"<<div;
    }
    
    return 0;
}