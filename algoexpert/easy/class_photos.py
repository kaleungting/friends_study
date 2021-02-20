def classPhotos(redShirtHeights, blueShirtHeights):
    redShirtHeights.sort()
    blueShirtHeights.sort()
    firstRed = redShirtHeights[0]
    firstBlue = blueShirtHeights[0]

    front = redShirtHeights if firstRed < firstBlue else blueShirtHeights
    back = redShirtHeights if firstRed > firstBlue else blueShirtHeights

    for i, student in enumerate(back):
        if student <= front[i]:
            return False

    return True


"""
have a variable True or False

first compare the taller student of the two rows, then you can see which is back or front row

r[0] = 5
b[0] = 6

back = b
front = r

for i, student in enumerate(back):
	if student < front[i]:
		return False
return True
	
"""
