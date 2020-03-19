import sys
def testpy(name):
    print("hello" +name+ "inside")

a=sys.argv[1]

if a =='testpy':
    testpy(sys.argv[2])


