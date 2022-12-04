class Animal:
    def __init__(self, type, name, sound):
        self._type = type
        self._name = name
        self._sound = sound

    def type(self):
        return self._type

    def name(self):
        return self._name

    def sound(self):
        return self._sound

def print_animal(o):
    if not isinstance(o, Animal):
        raise TypeError('print_animal(): requires an Animal')
    print(f'The {o.type()} is name {o.name()} and says {o.sound()} ')

def main():
    a0 = Animal('kitten', 'fluffy', 'rwar')
    a1 = Animal('duck', 'donald', 'quack')
    a3 = ('horse','named','hinhin')
    print_animal(a0)
    print_animal(a1)
    print_animal(a3)
    print_animal(Animal('valiciraptor','veronica', 'hello'))

if __name__ == '__main__': main()