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
  int s;
  cin >> s;
  int h = s / 3600;
  int m = (s - 3600 * h) / 60;
  int second = s - h * 3600 - m * 60;
  cout << h << ":" << m << ":" << second;
}