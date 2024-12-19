def main():
    # collections in pythons

    # array, mutable
    arr = [1, 2, 3]
    print(arr[2])

    # tuple, immutable, schneller
    tu = (4, 3, 6)
    print(tu)

    # sets, Mengen, keine Reihenfolge, keine Mehrfachen

    # dictionaries, map, key-> value, jeder key einmalig
    dictionary = {"No": "1"}
    dictionary["name"] = "Müller"
    dictionary["vorname"] = "Heinz"
    dictionary["vorname"] = "Karl"

    print(dictionary)

    for x in dictionary:
        print(x)

    for x in dictionary.keys():
        print(x)

    keys = dictionary.keys()
    print(keys)
    print(list(keys)[1])
    values = dictionary.values()
    print(values)
    items = dictionary.items()
    print(items)

    print("name" in dictionary)

    string = "Dies ist ein langer Text, der aus vielen Buchstaben besteht. Es soll gezählt werden, wie oft jeder Buchstabe vorkommt.";
    letters = {}

    for letter in string:
        letters[letter.lower()] = letters[letter.lower()] + 1 if letter.lower() in letters else 1
    print(letters)

    letters = dict(sorted(letters.items()))
    print(letters)


if __name__ == "__main__":
    main()
