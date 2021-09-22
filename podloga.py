print("potrzebuje wymiary podlogi")
a = int(input("Podaj pierwszy wymiar podlogi"))
b = int(input("Podaj drugi wymiar podlogi"))

paczkapaneli = int(input("Podaj na ile m2 podlogi starczy paczka"))

polepodlogi = (a*b)

iloscpaczek = polepodlogi/paczkapaneli

print("Na podloge potrzebujesz ",iloscpaczek,"paczek paneli")