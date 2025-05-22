''' 
Lesson Topic: Introduction to Python and Syntax
Date: 19/05/2025
Day: Monday

Objectives:
1 What is Python?
2. Python Syntax
3. Variables - case censitive and naming 
4. Data Types
    1. Numbers
    2. Strings and methods
'''

print("This is first class in Python")

# comment in python -
"""
Learning python
"""

# declare block in python
if 5 > 2:
    print("Five is greater than two")


# Variables - store a value temporarily
# Dynamically typed language
name = "John"
x = 5
subjects = ["math", "science", "english"]

# variable naming convention
first_name = "John"  # snake case
print(first_name)

second_name = 'Doe'

# case-sensitive
age = 25
Age = 30
print(age)
print(Age)

# declaring multiple variables in one line
name, age, city = "Daniel", '25', "New York"

# String literals - template literals
print("I am", name, "and I am ", age, "year old")  # 1st method
# f-sttring method
print(f"I am {name} and I am {age} years old, and I live in {city}.")

# Math operations
print(5 + 2)
print(5 - 2)
print(5*2)
print(5/2)
print(5**2)
print(5 % 2)

# comparison operators
# == equal
print(5 == 2)
print(5 != '5')
print(10 != 10)
print(-20 > -10)

# Logical operators -and, or, not
print(5 > 2 and 5 > 10 and 5 == 5)
print(5 > 2 or 5 > 10 or 5 == 5)
print(not (5 > 2 and 5 > 10 and 5 == 5))


# Data types
# Numbers - int, float (decimal)
age = 25
print(type(age))

height = 5.10
print(type(height))


# Strings - sequenc of characters
book = "Pride and Prejudice"
print(type(book))
print(book)

# String methods - slicing and indexing
print(book[0])  # first character
print(book[1])
print(book[-1])

# slicing - [start:end:step]
college = "Equinim"
print(college[0:3])
print(college[0:7:2])  # even indexed characters
# even indexed characters without defnind start and end index
print(college[::2])
print(college[::-1])  # reverse a string

# immutable  - you cannot change the value of a string

# Array - list of ordered/index values
# mutable data type
fruits = ['apple', 'banana', 'orange', 'grape', 'cherry']
# mutable
fruits[0] = 'kiwi'  # change the item in the list
print(fruits)
fruits[2] = 'mango'
print(fruits)

# add a item to the list
fruits.append("watermelon")
print(fruits)

# add a aother item to the list
fruits.insert(2, "plum")
print(fruits)

# remove
fruits.remove("grape")
print("Grape is removed", fruits)


# for loop
for i in range(10):
    print(i)  # indented

print("This for while loop")
# while loop
i = 0
while i < 10:
    print(i)
    i = i + 1

# conditional statements

age = 18
if age < 18:
    print("You are not eligible to vote and drink")
elif 18 < age < 21:
    print("you are eligible to vote but not drink")
else:
    print("You are eligible to vote and drink")


# fizzbuzz
number = 30
if number % 3 == 0 and number % 5 == 0:
    print('FizzBuzz')
elif number % 5 == 0:
    print('Buzz')
elif number % 3 == 0:
    print("Fizz")
else:
    print("Not divisible")
