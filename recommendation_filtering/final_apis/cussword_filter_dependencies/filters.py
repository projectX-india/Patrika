import re

file = open("cussword_filter_dependencies/bad_words_list.txt", "r")
data = file.read().split(',')
file.close()

def is_cussword(s) -> bool:
    if s in data:
        return True
    return False

def replace_with_strike(s) -> str:
    final_string = ""
    clean_s = s
    clean_s = re.sub(r'[^\w\s.]', ' ', s)
    clean_s = re.sub(' +', ' ',s)
    temp = clean_s.split(' ')
    for s in temp:
        if(is_cussword(s)):
            final_string += ("<<spank:"+s+">> ")
        else:
            final_string += (s+" ")
    
#     print(final_string)
    return final_string      