import jwt
import requests

logged = False
loop = True

url = 'http://localhost:8080/gettoken'

token = ''


def options(opt, token):
    opt = int(opt)
    if opt == 1:
        print("Bank")
        return 1
    if opt == 2:
        print("Skat")
        return 2
    if opt == 3:
        print("Bye")
        return False
    else:
        opt = input("No choice like that. Where to? \n 1 = Bank \n 2 = SKAT \n 3 = HOME")
        options(opt)


while loop:
    while not logged:
        email = input("What is your email?")
        password = input("What is your password?")
        payload = {'email': email, 'password': password}
        r = requests.post(url, json=payload)
        print(r.text)
        if not (r.text == "Bad request"):
            logged = True
            token = r.text
    choice = input("Where would you like to go? \n 1 = Bank \n 2 = SKAT \n 3 = HOME")
    res = options(choice, token)
    if not res:
        loop = False
