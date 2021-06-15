#include <iostream>

double square(double x);
double cublic(double x);
double beki(double x, int n);

int main() {
  std::cout << square(2) << "\n";
  std::cout << cublic(2) << "\n";
  std::cout << beki(2, 10) << "\n";
}

double square(double x) {
  double val;
  val = x * x;
  return val;
}

double cublic(double x) {
  double val;
  val = x * x * x;
  return val;
}

double beki(double x, int n) {
  double val;
  val = 1;
  for (int i = 0; i < n; i += 1) {
    val *= x;
  }
  return val;
}