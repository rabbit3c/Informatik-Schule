import time


def count_down(a, b):
    i = min(a, b)

    for i in range(i, 0, -1):
        if a % i == 0 and b % i == 0:
            break

    print(i)


def difference(a, b):
    while a > 0:
        if a == b:
            break

        if a > b:
            a -= b
        else:
            b -= a

    print(a)


def rest(a, b):
    while a > 0 and b > 0:
        if a > b:
            a = a % b
        else:
            b = b % a

    print(a)


def main():
    a = int(input("a: "))
    b = int(input("b: "))
    start = time.perf_counter_ns()
    count_down(a, b)
    end = time.perf_counter_ns()
    print(f"Die Runterzählen Methode brauchte {end - start}ns")
    start = time.perf_counter_ns()
    difference(a, b)
    end = time.perf_counter_ns()
    print(f"Die Differenzbildung Methode brauchte {end - start}ns")
    start = time.perf_counter_ns()
    rest(a, b)
    end = time.perf_counter_ns()
    print(f"Die Restbildung Methode brauchte {end - start}ns")


if __name__ == "__main__":
    main()
