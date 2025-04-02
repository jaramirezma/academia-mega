
#include <iostream>
using namespace std;

//Lecci�n "Desarrollo de L�gica de Programaci�n"
int subAlg(int a, int b) {
    int value = 0;
    while (a > b) {
        b++;
        value++;
    }
    return value;
}

//Lecci�n "Ejercicios (incluye consejos de Buenas Pr�cticas)"
int mulAlg(int a, int b) {
    int value = 0;
    while (a) {
        a--;
        value += b;
    }
    return value;
}

//Lecci�n "Ejercicios (incluye consejos sobre C�mo aprender de otros)"
int divAlg(int a, int b) {
    int value = 0;
    while (a >= b) {
        value ++;
        a -= b;
    }
    cout << "7 / 3 = " << value << "(" << a << ")" << endl;
    return value;
}

//Lecci�n "Ejercicios"
int powAlg(int a, int b) {
    int value = 1;
    while (b) {
        value *= a;
        b--;
    }
    return value;
}

int facAlg(int a) {
    int value = 1;
    for (int i = 1; i <= a; i++) {
        value *= i;
    }
    return value;
}

//Lecci�n "Optimizaci�n de un Algoritmo"
void verifyPrime(int number) {
    bool prime = true;

    for (int i = 2; i < number/2 && prime; i++) {
        if (number % i == 0) prime = false;
    }

    if(prime) cout << number << " is prime " << endl;
    else cout << number << " is not prime " << endl;
}

//Lecci�n "Algoritmo para Numeros Perfectos"
void verifyPerfect(int number) {
    int value = 0;

    for (int i = 1; i < number; i++) {
        if (number % i == 0) value += i;
    }

    if (value == number) cout << number << " is perfect " << endl;
    else cout << number << " is not perfect " << endl;
}

//Lecci�n "Como depurar un algoritmo (Debugging)"
void verifyFriends(int a, int b) {
    int sumA = 0;

    for (int i = 1; i <= a/2; i++) {
        if (a % i == 0) 
            sumA += i;
    }

    int sumB = 0;

    for (int i = 1; i <= b/2; i++) {
        if (b % i == 0) 
            sumB += i;
    }

    if ((a == sumB) && (b==sumA)) cout << a << " and " << b << " are friends " << endl;
    else cout << a << " and " << b << " are not friends " << endl;
}

int main(){
    cout << "5 - 1 = " << subAlg(5, 1) << endl;
    cout << "5 x 3 = " << mulAlg(5, 3) << endl;
    divAlg(15, 3);
    cout << "2 ^ 3 = " << powAlg(2, 3) << endl;
    cout << "!5 = " << facAlg(5) << endl;
    verifyPrime(100);
    verifyPerfect(29);
    verifyFriends(1184, 1210);
}

