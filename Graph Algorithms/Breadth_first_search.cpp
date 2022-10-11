// BFS (Breadth First Search)

#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> bfsOfGraph(int n, vector<int> adj[])
{
    vector<int> bfs;
    vector<int> visited(n + 1, 0);

    for (int i = 1; i <= n; ++i)
    {
        if (!visited[i])
        {
            queue<int> q;
            q.push(i);
            visited[i] = true;

            while (!q.empty())
            {
                int curr = q.front();
                q.pop();

                bfs.push_back(curr);

                for (auto it : adj[curr])
                {
                    if (!visited[it])
                    {
                        q.push(it);
                        visited[it] = true;
                    }
                }
            }
        }
    }
    return bfs;
}

int main()
{
    int n, m;
    cout << "Enter Number of Nodes and Edges ";
    cin >> n >> m;

    vector<int> adj[n + 1];

    for (int i = 0; i < m; ++i)
    {
        int u, v;
        cin >> u >> v;

        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    vector<int> ans = bfsOfGraph(n, adj);

    cout << "BFS" << endl;
    for (auto i : ans)
        cout << i << " ";

    return 0;
}