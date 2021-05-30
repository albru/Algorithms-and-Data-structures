arr = [8, 23, 2, 14, 6, 9, 132]


def find_smallest(arr):
    smallest = arr[0]
    smallest_index = 0

    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i

    return smallest_index


def selection_sort(arr):
    newArr = []

    for _ in range(len(arr)):
        smallest = find_smallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr

print(selection_sort(arr))
