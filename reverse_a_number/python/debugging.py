def multiply(*list):
    total=1
    for num in list:
        total *= num
    return total


print("start")
print(multiply(2,3,4,5,6))


