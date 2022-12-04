# with open('test.txt','r+') as f:
    
    # size_to_read = 10
    # f.seek(20)
    # content_end_of_file = f.read()
    # f.write(" TESTING WRITE IN MIDDLE OF FILE === ")
    # f.write(content_end_of_file)

with open('test.png','rb') as f:
    with open('copytest.png', 'wb') as fc:
        chunck = 4096
        f_chunck = f.read(chunck)
        while len(f_chunck) > 0:
            fc.write(f_chunck)
            f_chunck = f.read(chunck)
            print(f'next chunck size: {len(f_chunck)}')