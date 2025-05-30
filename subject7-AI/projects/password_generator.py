import random

length = int(input("Enter password length: "))
alphabet = "abcdefghijklmnopqrstuvwxyz"

password = ""

for i in range(length):
    random_letter = random.choice(alphabet)
    password += random_letter

print(password)
