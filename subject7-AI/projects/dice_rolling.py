# A python application that rolls a random dice

import random


def roll_dice1():
    return random.randint(1, 6)


def roll_dice2():
    return random.randint(1, 6)


def roll_dice_total(first_number, second_number):
    return first_number + second_number


dice1 = roll_dice1()
dice2 = roll_dice2()
total = roll_dice_total(dice1, dice2)

# print(roll_dice1(), "+", roll_dice2())
# print(f"{roll_dice1()} + {roll_dice2()} = {roll_dice1() + roll_dice2()}")
# print(f"Total: {roll_dice_total()}")
print(f"{dice1} + {dice2} = {total}")

# if roll_dice() == 1:
#     print('You rolled 1')
# elif roll_dice() == 2:
#     print('You rolled 2')
# elif roll_dice() == 3:
#     print('You rolled 3')
# elif roll_dice() == 4:
#     print('You rolled 4')
# elif roll_dice() == 5:
#     print('You rolled 5')
# elif roll_dice() == 6:
#     print('You rolled 6')

# print("Rolling the dice...")
# print("You rolled " + roll_dice())
# print(f"You rolled {roll_dice()}")
# print(roll_dice())
