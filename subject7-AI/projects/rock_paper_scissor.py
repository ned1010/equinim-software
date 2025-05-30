import random

rps = ["rock", "paper", "scissor"]

computer_choice = random.choice(rps)
# print(computer_choice)

user_choice = input("Pick rock, paper, or scissor: ")

if user_choice != "rock" or user_choice != "paper" or user_choice != "scissor":
    print("Invalid Response")
else:
    if user_choice == computer_choice:
        print("Draw!")
    elif (
        (user_choice == "paper" and computer_choice == "rock")
        or (user_choice == "scissor" and computer_choice == "paper")
        or (user_choice == "rock" and computer_choice == "scissor")
    ):
        print("You're a big winner!")
    elif (
        (computer_choice == "paper" and user_choice == "rock")
        or (computer_choice == "scissor" and user_choice == "paper")
        or (computer_choice == "rock" and user_choice == "scissor")
    ):
        print("You're a big loser!")
    else:
        print("Invalid Response")


# if user_choice == computer_choice:
#     print("Draw!")
# elif user_choice == "paper" and computer_choice == "scissor":
#     print("You're a big loser!")
# elif user_choice == "paper" and computer_choice == "rock":
#     print("You're a big winner!")
# elif user_choice == "scissor" and computer_choice == "rock":
#     print("You're a big loser!")
