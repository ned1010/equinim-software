'''
Lesson Topic: Functions and 
Date: 29/05/2025
Day: Thursday

Objectives:
1. Functions 
    - Functional Programming
2. Class - 
3. Packages - 
4. Google Colab -  
Announcements
'''

# function
# make perform task
# sum of the all the numbers in a list


def calculate(array):
    # array - find the sume
    sum = 0
    for i in range(len(array)):
        sum = sum + array[i]
    print(sum)


# sum of ages
ages = [89, 78, 10, 25, 10, 7, 100, 28, 32]
# print(sum(ages))  # using inbuilt functions
calculate(ages)

# find the mininum number form a list


def find_minimum_number(array):
    # set the minimum number
    minimum = float('inf')  # float
    for i in range(len(array)):
        if minimum > array[i]:
            minimum = array[i]
    return minimum


minumum_numbers = [100, -20, 10, 15, 20, 16]  # -20
print(find_minimum_number(minumum_numbers))  # -100


# Object oriented Programming
# Classes - template for object
class Car:
    # constructor - initialise all the attributes
    def __init__(self, make, model, year, color, type):
        self.make = make
        self.model = model
        self.year = year
        self.color = color
        self.type = type

    # define a method here
    def turn_on_radio(self):
        return "Playing radio now!"


# instantiate - creating an object
car1 = Car('Mazda', 'i30', 2009, 'red', 'hatch')  # instance of that car
car2 = Car('Porsche', '911', 1998, 'Black', "Sedan")
print(car1.make)
print(car1.year)
print(car1.turn_on_radio())

# Calculator


class Calculator:

    # constructor or initialisation
    ''' 
        take arguments - num1 and num2
        operator
    '''

    def __init__(self, num1, num2, op):
        self.num1 = num1
        self.num2 = num2
        self.op = op

    # all methods
    def add(self):
        return self.num1 + self.num2

    def subtract(self):
        return self.num1 - self.num2

    def divide(self):
        return self.num1/self.num2

    def multiply(self):
        return self.num1 * self.num2

    # method that checks what operation to do
    def calculate(self):
        if self.op == "+":
            return self.add()
        elif self.op == '-':
            return self.subtract()
        elif self.op == '*':
            return self.multiply()
        elif self.op == '/':
            if self.num2 == 0:
                return 'Invalid num'
            return self.divide()
        else:
            return "Invalid operator"


# instantiate class
cal1 = Calculator(10, 50, "-")  # instiated
print(cal1.calculate())

cal2 = Calculator(20, 50, "/")
print(cal2.calculate())

# inbuilt packages
