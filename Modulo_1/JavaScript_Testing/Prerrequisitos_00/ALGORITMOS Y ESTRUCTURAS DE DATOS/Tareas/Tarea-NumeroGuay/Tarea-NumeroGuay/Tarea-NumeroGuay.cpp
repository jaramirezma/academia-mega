// Tarea-NumeroGuay.cpp 
// Author: Javier Agustin Ramirez Martinez
//

#include <iostream>
using namespace std;

bool isGuay(int n) {
    int suma = 0, k = 1;

    while (suma < n) {
        suma += k;
        if (suma == n) return true;
        k++;
    }

    return false;
}

int main() {
    int numerosPrueba[] = { 7, 10, 15, 21, 28, 8, 9, 55 };
    int size = sizeof(numerosPrueba) / sizeof(numerosPrueba[0]);

    for (int i = 0; i < size; i++) {
        cout << numerosPrueba[i] << " is guay: " << (isGuay(numerosPrueba[i]) ? "Yes" : "No") << endl;
    }

    return 0;
}


//Código Maestro Curso
//void main() {
//
//
//
//    int number = 15;
//
//    int value = 0;
//
//    bool guay = false;
//
//
//
//    for (int i = 1; i < number && guay == false; i++) {
//
//        value += i;
//
//        if (value == number) guay = true;
//
//    }
//
//
//
//    if (guay) cout << number << " is a guay number";
//
//    else cout << number << " is not a guay number";
//
//}