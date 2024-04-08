while True:
    try:
        user_input = float(input("Please enter a number: "))
        print("You entered:", user_input)
        break  # Exit the loop if the input is a float
    except ValueError:
        print("That's not a number. Please try again.")