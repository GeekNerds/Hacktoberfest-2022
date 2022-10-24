// Cycle Detection in an Undirected Graph using BFS

#include <bits/stdc++.h>
using namespace std;

bool checkForCycle(int s, int V, vector<int> adj[], vector<int>& visited) {
    vector<int> parent(V, -1);

    queue<pair<int, int>> q;

    visited[s] = true;
    q.push({s, -1});

    while (!q.empty()) {
        int node = q.front().first;
        int par = q.front().second;
        q.pop();

        for (auto it : adj[node]) {
            if (!visited[it]) {
                visited[it] = true;
                q.push({it, node});
            } else if (par != it)
                return true;
        }
    }
    return false;
}

bool detectCycle(int V, vector<int> adj[]) {
    vector<int> vis(V+1, 0);
    for (int i = 0; i <= V; i++) {
        if (!vis[i])
            if (checkForCycle(i, V, adj, vis)) return true;
    }

    return false;
}

string cycleDetection (vector<vector<int>>& edges, int n, int m)
{
    vector<int> adj[n+1];
    for (auto x:edges) {
        adj[x[0]].push_back(x[1]);
        adj[x[1]].push_back(x[0]);
    }
    bool flag=false;
    if(detectCycle(n, adj))
        flag=true;
    
    if(flag)
        return "Yes";
    
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