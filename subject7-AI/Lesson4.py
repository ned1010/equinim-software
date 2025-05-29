'''
Lesson Topic: Functions and 
Date: 26/05/2025
Day: Monday

Objectives:
1. Recap - Nested List, List Comprehension, Dictionary,
2. For Loop and break 
3. Functions 
    - Functional Programming
4. Scope
5. Class Activity - 
'''

# Nested list - list inside a list
# nested list - A, B, C
neighbours = [[0, 1, 0], [0, 0, 1], [1, 1, 0]]  # nested list

# how to extract the 0 from the last list

for i in range(len(neighbours)):  # row index
    # print("I", neighbours[i])
    for j in range(len(neighbours[i])):  # column index
        # print(neighbours[i])
        # pass
        print(neighbours[i][j])


# list comprehension - concise way of creating list

# create list of all the multiples of 7 upto 100
multi_seven = list()  # list
for i in range(100):
    if i % 7 == 0:
        multi_seven.append(i)
print(multi_seven)

# Using list comprehension
multiple_seven = [x for x in range(100) if x % 7 == 0]
print(multiple_seven)


# dictionary
user_details = {
    'name': "Daniel",
    "age": 23,
    "courses": [
        'Science', "computer science", "Maths"
    ],
    'grades': {
        'science': 75,
        'computer science': 48,
        'Maths': 88
    }
}

# keys-values
# nested dictionary
print((user_details['grades']['science'] + user_details['grades']
      ['computer science'] + user_details['grades']['Maths'])/len(user_details['grades'].keys()))
# another way of
print(sum(user_details['grades'].values()) /
      len(user_details['grades'].values()))

# functions - reusable block of used to perform specific task


def add_numbers(num1, num2):
    return num1 + num2


# invoke the functions
added_numbers = add_numbers(10, 15)
print(added_numbers)
print(add_numbers(20, 10))

# scope - defines where teh variables are accessible
bike = 'trek'  # global variable


def get_bike_name():
    # call the variable inside the fuction
    # print(f'hey I am using the this bike from {bike}')
    bike = "Merida"  # local variable
    print(bike)  # Merida
    return bike


bike = get_bike_name()
print(bike)  # what is the output of this line? merida


# build a calculator using Python that takes two numbers and an operator
# it then returns the value
# division, zero-division error
# operators +,-, /, *, **, %


def calculator(num1, num2, operator):
    if operator == "-":
        return num1 - num2
    elif operator == "+":
        return num1 + num2
    elif operator == "*":
        return num1 * num2
    elif operator == "/":
        return num1/num2
    elif operator == "**":
        return num1 ** num2
    elif operator == '%':
        return num1 % num2
    else:
        return "Invalid operator"


num1 = int(input("Enter the number 1: "))  # enter number from your terminal
num2 = int(input("Enter a nubmer 2: "))
operator = input("Enter the operator: ")
print(calculator(num1, num2, operator))


# output
# addition You sum of num1 + num2 = 10
# quotient the quotient of num1/num2 =
print(f'')  # f-string method
