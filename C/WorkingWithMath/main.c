#include <stdio.h>
#include <math.h>

int main() {

    float x = 3.14;

    int y = pow(x, 2);
    printf("pow(x, 2): %d\n", y);

    x = round(x);
    printf("round(x): %f\n", x);

    x = ceil(x);
    printf("ceil(x): %f\n", x);

    x = floor(x);
    printf("floor(x): %f\n", x);

    return 0;
}