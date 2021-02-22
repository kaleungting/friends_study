def caesarCipherEncryptor(string, key):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    newstr = ""

    for char in string:
        old = alpha.index(char)
        new = (old + key) % 26
        newstr += alpha[new]

    return newstr
