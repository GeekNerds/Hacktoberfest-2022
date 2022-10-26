#include <iostream>
using namespace std;
int TOH(int n, char from_, char to_ ,char aux_){
    if(n>0){
        TOH(n-1,from_,aux_,to_);
        printf("Move disk %d from %c to %c\n",n,from_,to_);
        TOH(n-1,aux_,to_,from_);
    }
}
int main(){
    int num;
    cin>>num;
    cout<<TOH(num,'A','B','C');
    return 0;
}
