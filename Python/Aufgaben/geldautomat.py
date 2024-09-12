options = [1000, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05]
amount_of_options = []


def main():
    print("Choose the amount of money you want to retrieve")
    amount = float(input("Amount: "))

    for option in options:
        amount = number_of(option, amount)

    print_output()


def print_output():
    output = "You will get"
    for i, amount_of_option in enumerate(amount_of_options):
        if amount_of_option == 0:
            continue
        output = f"{output}, {int(amount_of_option)} times a {options[i]}"
    print(output)


def number_of(option, number):
    global amount_of_options
    n = number // option
    amount_of_options.append(n)
    return number - n * option


if __name__ == '__main__':
    main()
