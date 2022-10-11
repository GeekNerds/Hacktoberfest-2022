// Topological Sorting

// (Linear Ordering of vertices such that if their is a edge from u -> v , u appears before v in that ordering )

//  Topological Sort is applicable for Directed Acyclic Graph

#include <iostream>
#include <vector>
#include <stack>
using namespace std;

void findTopoSort(int sv, vector<bool> &visited, stack<int> &st, vector<int> adj[])
{
    visited[sv] = true;
    for (auto itr : adj[sv])
    {
        if (!visited[itr])
            findTopoSort(itr, visited, st, adj);
    }
    st.push(sv);
}

vector<int> topoSort(int n, vector<int> adj[])
{
    stack<int> st;
    vector<bool> visited(n, false);
    for (int i = 0; i < n; ++i)
    {
        if (!visited[i])
            findTopoSort(i, visited, st, adj);
    }
    vector<int> topo;
    while (!st.empty())
    {
        topo.push_back(st.top());
        st.pop();
    }

    return topo;
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
        cout << "Enter Vertices : ";
        cin >> u >> v;
        adj[u].push_back(v);
    }

    vector<int> ans = topoSort(n, adj);

    cout << "Topological Sort " << endl;
    for (int i : ans)
        cout << i << " ";

    return 0;
}