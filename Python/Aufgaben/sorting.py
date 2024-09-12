from random import randrange
import time
from copy import copy

array = []


def main():
    create_array()

    print("\nBubble Sort:")
    start = time.perf_counter_ns()
    bubble_sort(copy(array))
    end = time.perf_counter_ns()
    print(f"Bubble Sort took {(end - start) // 1000}µs")

    print("\nStalin Sort:")
    start = time.perf_counter_ns()
    stalin_sort(copy(array))
    end = time.perf_counter_ns()
    print(f"Stalin sort took {(end - start) // 1000}µs")


def create_array():
    for n in range(5000):
        array.append(randrange(0, 1000))
    print(array)


def bubble_sort(arr):
    unsorted = True
    while unsorted:
        unsorted = False
        for i, element in enumerate(arr):
            if i == len(arr) - 1:
                break
            if element > arr[i + 1]:
                unsorted = True
                arr[i], arr[i + 1] = arr[i + 1], arr[i]

    print(arr)


def stalin_sort(arr):
    i = 1
    while i < len(arr):
        if arr[i] < arr[i - 1]:
            arr.pop(i)
        else:
            i += 1

    print(arr)


if __name__ == "__main__":
    main()
