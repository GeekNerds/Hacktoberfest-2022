// Cycle Detection in an Undirected Graph using DFS

#include<bits/stdc++.h>
using namespace std;

bool dfsCycleDetection( unordered_map<int, list<int>> &adjList,  unordered_map<int, bool> &visited, int parent, int node){
   
   visited[node]=1;
   
   for(auto i:adjList[node]){
       if(!visited[i]){
           bool cycleDetected = dfsCycleDetection(adjList,visited,node,i);
           if(cycleDetected==1){
               return true;
           }
       }
       else if(i!=parent){
           return true;
       }
   }
   return false;
}
string cycleDetection (vector<vector<int>>& edges, int n, int m)
{
   unordered_map<int, list<int>> adjList;
   
   for(int i=0;i<edges.size();i++){
       int u=edges[i][0];
       int v= edges[i][1];
       
       adjList[u].push_back(v);
       adjList[v].push_back(u);
   }
   
   //create visited
   unordered_map<int,bool> visited;
   
   //create to track parent
   unordered_map<int,int> parent;
 
   for(int i=0;i<n;i++){
       if(!visited[i]){
           bool ans= dfsCycleDetection(adjList, visited, -1, i);
           if(ans==1){
               return "Yes";
           }
       }
   }
   return "No";
}

int main()
{
    int n,m;
    cin>>n>>m;
    vector<vector<int>>edges;
    for(int i=0;i<m;i++)
    {
        int u,v;
        cin>>u>>v;
        edges.push_back({u,v});
    }
    cout<< cycleDetection(edges,n,m);
}