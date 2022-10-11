// Cycle Detection in Undirected Graph using Disjoint Set
// Not Possible in Directed Graph

#include <iostream>
#include <vector>
#include <utility>
using namespace std;

int find(int ele, vector<int> &parent)
{
    if (parent[ele] == -1)
        return ele;
    return find(parent[ele], parent);
}

bool union_(int u1, int v1, vector<int> &parent)
{
    int r1 = find(u1, parent);
    int r2 = find(v1, parent);

    if (r1 == r2)
        return true;
    parent[r1] = r2;
    return false;
}

bool detectCycle(vector<pair<int, int>> adj, int v, int e)
{
    vector<int> parent(v, -1);
    for (int i = 0; i < e; ++i)
    {
        int u1 = adj[i].first;
        int v1 = adj[i].second;

        bool check = union_(u1, v1, parent);
        if (check)
            return true;
    }
    return false;
}

int main()
{
    int v, e;
    cout << "Enter Number of Vertices and Edges : ";
    cin >> v >> e;

    vector<pair<int, int>> adj;

    for (int i = 0; i < e; ++i)
    {
        int u, v;
        cin >> u >> v;
        adj.push_back({u, v});
    }

    bool check = detectCycle(adj, v, e);

    if (check)
        cout << "Cycle Exist" << endl;
    else
        cout << "No Cycle" << endl;

    return 0;
}