txt = list(input())

zero = []
one = []

stack = []

for i in range(len(txt)):
    stack.append(txt[i])
    if len(stack)>1 and stack[-1] != stack[-2]:
        if stack[0] == '0':
            zero.append(stack[:-1])
        elif stack[0] == '1':
            one.append(stack[:-1])
        stack = stack[-1:]
    if i == len(txt)-1:
        if stack[0] == '0':
            zero.append(stack)
        elif stack[0] == '1':
            one.append(stack)

if len(zero) < len(one):
    print(len(zero))
elif len(zero) > len(one):
    print(len(one))
elif len(zero) == len(one):
    print(len(zero))