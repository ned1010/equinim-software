# Review

# Variables are case sensitive
name = "Tom"
# Name = 'Tom'
# favourite_sport = 'Soccer'
# PI = 3.14

# Data types
# String
# Int -> Whole number
# Float -> Decimals
# Boolean
# List
# Dictionary

# Concatenation
# 'Hi, my name is ' + name
# f'Hi, my name is {PI}'

# Logical Operations
# > >= == != <= <
# and, or, not

# Conditionals
# if (expression):
# elif (expression):
# else:

# List
# students = ['John', 'Mary', 'Leo', 'Mary']
# print(students[2])
# students[2] = 'Abdi'
# students.append('Guy')
# students.insert(1, 'Daniel')
# print(students)
#
# students.pop(0)
# students.remove('Mary')
#
# print(students)
#
# students.clear()
# print(students)

# students_score = [['John', 'Mary'],[92, 81, [20, [10]]]]
# print(students_score[1][0])

students = ['John', 'Mary', 'Leo', 'Abdi']

# for student in students:
#     print(student)

# for i in range(len(students)):
#     print(students[i])

# i = 0
# while 5 < len(students):
#      print(students[i])
#      i += 1

# Dictionary
# Object
# JSON
# person = {
#     "name": 'Tom',
#     "occupation": 'Student',
#     "hobbies": ['Music', 'Sports'],
#     "favorite_stuff": {"movie": "Top Gun: Mavericks", "food": "Indonesian food"}
# }

# print(person.keys())

# persons =[{
#     "name": 'Tom',
#     "occupation": 'Student',
#     "hobbies": ['Music', 'Sports'],
#     "favorite_stuff": {"movie": "Top Gun: Mavericks", "food": "Indonesian food"}
# }, {
#     "name": 'John',
#     "occupation": 'Teacher',
#     "hobbies": ['Music', 'Sports'],
#     "favorite_stuff": {"song": "Beatiful Things", "movie": "Avengers", "food": "Indonesian food"}
# }]

# print(persons[1]['favorite_stuff'].items())


# Casting
# age = 30

# str(age)
# print(type(age))
# age_int = int(age)
# age_float = float(age)
# age_str = str(age)

# print(type(age_int))
# print(type(age_float))
# print(type(age_str))


# Collections
# List
# Dictionary

# Tuple
# my_tuple = ('Tom', 'Ned', 'Abdi', 'Ned')
# Not allowed: my_tuple[0] = 'Mark'
# Not allowed: my_tuple.append('Daniel')

# Set
# my_set = {'Ravi', 'Mark', 'Daniel'}
# print(my_set)
# print(my_set[0])
# print(my_set['Ravi'])

# for x in my_set:
#     print(x)

# print('Ravi' in  my_set)

# students = ['Ravi', 'Mark', 'Daniel', 'Ravi']

# new_set = set(students)
# print(new_set)


# Match
# if :
# elif :
# elif :
# elif :
# elif :
# elif :
# elif :
# else

# match expression:
#     case a:

#     case b:

#     case c:


# Function:
# def calculator(first_num, second_num, operator = 'add'):
#      if operator == 'add':
#          print(first_num + second_num)

#      elif operator == 'multiply':
#          print(first_num * second_num)

# calculator(first_num = 5, second_num = 10, operator = 'multiply')

# def passFunction():
#     pass


# def tri_recursion(k):
#     if k > 0:
#         result = k + tri_recursion(k-1)
#         print(result)
#     else:
#         result = 0
#         return result

# print("Recursion Example Results:")
# tri_recursion(6)

# def add_numbers(a:int, b:int) -> int:
#     return a+b

# add_numbers(5+'10')


# 1. Create a calculator function

# def calculator(first_number, second_number, operation):

# calculator(5, 10, 'power')

# 2. is_palindrome('Civic') -> true or false

# 3. word_count('This is first sentence. This is second sentence') -> 4
