#include<iostream>
#include<vector>
#include<cmath>
#include<algorithm>
#include<queue>
#include<stack>
#include<set>
#include<map>
#include<numeric>
using namespace std;

int main() {
#ifdef DEBUG
    freopen("input", "r", stdin);
#endif
    int a, b;
    cin >> a >> b;
    if (a == 0)
        cout << "Silver";
    else if (b == 0)
        cout << "Gold";
    else
        cout << "Alloy";
}