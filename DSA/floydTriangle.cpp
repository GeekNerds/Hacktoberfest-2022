#include <iostream>
using namespace std;
 
void printpattern(int row)
{
  
    int count = 1;
 
   
    for (int i = 1; i <= row; i++)
    {
      
        for (int j = 1; j <= i; j++)
        {
         
            cout << count << " ";
 
            count += 1;
        }
     
        cout << "\n";
    }
}
 
int main()
{
    int row ;
    cout<<"Enter the number of rows:";
    cin>>row;
    cout<<"The Floyd Triangle Pattern is:"<<endl;
    printpattern(row);
    return 0;
}