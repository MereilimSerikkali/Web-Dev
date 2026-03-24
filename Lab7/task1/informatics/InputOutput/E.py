v = int(input())
t = int(input())

position = (v * t) % 109

if position < 0:
    position += 109

print(position)