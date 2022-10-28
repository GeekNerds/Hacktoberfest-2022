#include <iostream>
using namespace std;

int josephus(int N, int K) {
  if (N == 1)
    return 1;
  else
    return (josephus(N - 1, K) + K - 1) % N + 1;
}

int main (){
    int a,b;
    cout<<"Enter total number of people in josephus circle ";
    cin>>a;
    cout<<"Enter position of person to be executed ";
    cin>>b;
    int c;
    c = josephus(a,b);
    cout<<"Position of person that survived is "<<c;
    return 0;
    
}