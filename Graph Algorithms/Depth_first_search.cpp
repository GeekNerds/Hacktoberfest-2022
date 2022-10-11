// Depth First Search (DFS)

#include <iostream>
#include <vector>
using namespace std;

void dfsOfGraph(int sv, vector<int> &visited, vector<int> adj[], vector<int> &dfs)
{
    dfs.push_back(sv);
    visited[sv] = true;

    for (auto itr : adj[sv])
    {
        if (!visited[itr])
            dfsOfGraph(itr, visited, adj, dfs);
    }
}

int main()
{
    int n, m;
    cout << "Enter Number of Nodes and Edges : ";
    cin >> n >> m;

    vector<int> adj[n + 1];

    for (int i = 0; i < m; ++i)
    {
        int u, v;
        cin >> u >> v;

        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    vector<int> visited(n + 1, 0);
    vector<int> dfs;

    for (int i = 1; i <= n; ++i)
    {
        if (!visited[i])
            dfsOfGraph(i, visited, adj, dfs);
    }

    cout << "DFS" << endl;
    for (auto i : dfs)
        cout << i << " ";

    return 0;
}