def main():
    lower_bound = 0
    upper_bound = 1000

    while upper_bound - lower_bound > 1:
        middle = (upper_bound - lower_bound) // 2 + lower_bound
        if question_user(middle):
            lower_bound = middle
        else:
            upper_bound = middle - 1

    correct = guess_number(lower_bound)
    if not correct:
        correct = guess_number(upper_bound)
    if not correct:
        print("You lied, you piece of shit!")


def guess_number(number):
    print(f"Is the number you thought of {number}?")
    answer = input("Input 'yes' or 'no': ")[0] == 'y'
    if answer:
        print("Yay, I got it")
    return answer


def question_user(number):
    print(f"Is the number bigger or equal {number}?")
    answer = input("Input 'yes' or 'no': ")[0] == 'y'
    return answer


if __name__ == '__main__':
    main()
