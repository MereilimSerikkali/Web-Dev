a = int(input())  # ответ в тестирующей системе
b = int(input())  # ответ школьника

if (a == 1 and b == 1) or (a != 1 and b != 1):
    print("YES")
else:
    print("NO")