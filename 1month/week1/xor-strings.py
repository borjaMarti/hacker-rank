# XOR Strings

# Given two strings consisting of digits 0 and 1 only, find the XOR of the two
# strings.

# Debug the given function strings_xor to find the XOR of the two given strings
# appropriately.

# NOTE FROM ME: The challenge wasn't doable (the code was missing) in
# JavaScript, so I switched to Python 3 to solve it.

def strings_xor(s, t):
    res = ""
    for i in range(len(s)):
        if s[i] == t[i]: # Originally if s[i] = t[i]:
            res += '0'; # Originally res = '0';
        else:
            res += '1'; # Originally res = '1';

    return res

s = input()
t = input()
print(strings_xor(s, t))
