#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include<string>
#include<list>
using namespace std;


vector<string> a[100];
char str[100007];
int n,i,j,x;

int main() {
   
    
    
    cin>>n;
    for(i=0;i<n/2;i++)
    {
        cin>>x;
        cin>>str;
        a[x].push_back("-");
    
    }
    
    for(;i<n;i++)
    {
        cin>>x;
        cin>>str;
        a[x].push_back(str);
    
    }
    
    for(i=0;i<100;i++)
    {
        x=a[i].size();
        for(j=0;j<x;j++)
            cout<<a[i][j]<<" ";    
    }
    return 0;

}
ś
