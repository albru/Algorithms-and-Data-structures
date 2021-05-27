sequence = range(4000000000)

def binary_search(list, item):
    low = 0
    high = len(list) - 1
    attempts = 0

    while low <= high:
        mid = int((low + high) / 2)
        guess = list[mid]
        attempts = attempts + 1

        if guess == item:
            print('attempts: ', attempts)
            print('item: ', item)
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None

print(binary_search(sequence, 1728382782))
