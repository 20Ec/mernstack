    def reverse_array(arr):
    start, end = 0, len(arr)-1
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1
    return arr



    def is_sorted(arr):
    for i in range(len(arr)-1):
        if arr[i] > arr[i+1]:
            return False
    return True




    def second_largest(arr):
    if len(arr) < 2:
        return None
    first = second = float('-inf')
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num
    return second



    def remove_duplicates(arr):
    if not arr:
        return 0
    write_index = 1
    for i in range(1, len(arr)):
        if arr[i] != arr[i-1]:
            arr[write_index] = arr[i]
            write_index += 1
    return write_index







 def mystery(x):
    return x + 2 if x > 0 else x - 2

print(mystery(-3), mystery(3))






String str = null;
if (str != null) {   // Avoid NPE
    System.out.println(str.length());
}





