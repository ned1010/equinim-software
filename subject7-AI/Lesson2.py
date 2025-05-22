'''
Lesson Topic: Data Types in Python
Date: 22/05/2025
Day: Thursday

Objectives:
1. Recap - List, Nested List, and List Comprehension
2. Conditional Statements - grade checker
3. Dictionary - some exercise in dictionary (nested dictionary)
4. Functions -
'''

# List
# Array - collection of items
sports = ["Basketball", "soccer", "table tennis", "Tennis", 123, '8828182']

# counting - 1
# index - 0
print(len(sports))
print(sports[len(sports)-1])
print(sports[-1])

# slicing -
print(sports[2:4:1])
# reverse list
print(sports[::-1])

# Nested list - students with their grade
# list inside a list
grades = [['Sam', 99], ["Abdi", 92], ["Bill", 72], ["Johnson", 44]]

# print bill's mark on the terminal
print(grades[2][1])
print(grades[-1][1])
print(grades[-1][-1])
print(grades[3][1])
print(grades[len(grades)-1][-1])

# nested
units = [[], [], [], [['computer science', 'sociology', ['physical exercise']]]]
print(units[-1][-1][-1][-1])

# for loop
# print(range(0, 5, 1))
for i in range(10):
    print(i)

# list comprehension
# list of all the events - [2, 4, 6, 8]
even_numbers = []
for i in range(10):
    if i != 0 and i % 2 == 0:  # conditional statement
        even_numbers.append(i)  # add each
print(even_numbers)

# list comprehension - concise method creating a list
even_numbers_list_comprehension = [
    x for x in range(10) if x != 0 and x % 2 == 0]
print(even_numbers_list_comprehension)


# Find squares for all the even numbers up to 10 including 0
# output ->  [0, 4, 16, 36, 64]
# even_squares = [0, 4, 16, 36, 64]
even_squares = [i**2 for i in range(10) if i % 2 == 0]
print(even_squares)

# if-else statements /conditional statements
# 90 - A, 70-90 = B, 50-70 - C, below 50 - D
grade = 49
if grade > 90:
    print("You got A!")
# alternative conditions
elif grade >= 70 and grade <= 90:
    print("You got B!")
elif grade >= 50 and grade <= 70:
    print("You got C!")
else:
    print(" You got D!")

# workign with list, for loop and  conditional statement
grades = [['Sam', 99], ["Abdi", 92], ["Bill", 72], ["Johnson", 44]]

# ['Sam', 99]
# ["Abdi", 92]

for i in range(len(grades)):
    # print(grades[i])  # extract the nest list
    name, grade = grades[i][0], grades[i][1]  # unpacking the nested list
    # print(name)
    # print(grade)
    if grade > 90:
        print(f'{name}: you got A!')
    elif grade >= 70 and grade <= 90:
        print(f'{name}: you got B!')
    elif grade >= 50 and grade < 70:
        print(f'{name}: you got C!')
    else:
        print(f'{name}: you got D!')


# print(grades[0][0])
# print(grades[1][0])
# print(grades[2][0])
# print(grades[3][0])


# Dictionary - an object
# key-value pair
# JSON
my_profile = {
    "name": 'John',
    "age": 23,
    "school": 'Curtin',
    "units": ["computer science", "Sociology", "Physical Education"]
}

# extract the property (name)
print(my_profile["name"])

# extract physical education form the dictionary
print(my_profile["units"][2])

# key-value
print(my_profile.keys())  # returns the keys in the dictionary

# extract using keys
for i in my_profile.keys():
    # print(i)
    print(my_profile[i])
    # print(key)

# extract values
print(my_profile.values())  # this returns a list

for i in my_profile.values():
    print(i)

# List
flowers = ['Rose', "Daisy", "Tulip", "Orchid",
           "Blue Poppy", "Iris", "Kangaroo Paw"]

# without indexing
for flower in flowers:
    print(flower)

print("==== With using index ====")
# With index or using indexing print each flower
# print(flowers[0])
# print(flowers[1])
for i in range(len(flowers)):
    print(flowers[i])
