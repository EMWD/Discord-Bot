    
from tkinter import *
import requests

# !DOC FOR USERS!
# Use short names when entering
# like en = english and ru = russian
# also you can see the full table here:
# https://yandex.ru/dev/translate/doc/dg/concepts/api-overview-docpage/

root = Tk()
 
root.geometry('400x300')
inp = Entry(width=20)
inp2 = Entry(width=20)
inp3 = Entry(width=60)
btn = Button(text="Преобразовать", fg='white', bg='black',)
label = Label(bg='white', fg='black', width=40)

def translate(event):
	firstLang = inp.get()
	secondLang =  inp2.get()
	text = inp3.get()

	#work with Yandex-API///////////////////////////////////////////////////////////////////
	token = 'trnsl.1.1.20190703T165402Z.0a3c6bb157851eaf.865546ae9a234b40d9b32b17e28d1c6354b72bc7'
	url_trans = 'https://translate.yandex.net/api/v1.5/tr.json/translate'
	trans_option = {'key':token, 'lang': firstLang+"-"+secondLang, 'text': text}
	webRequest = requests.get(url_trans, params = trans_option)
	webRequest.text
	ResText = webRequest.text
	ResText = ResText[36:(len(ResText)-3)]
	#//////////////////////////////////////////////////////////////////////////////////////

	label['text'] = ResText

btn.bind('<Button-1>', translate)
#placing widgets//////////////////////////////////
inp.pack()
inp2.pack()
inp3.pack()
btn.pack()
label.pack()
#////////////////////////////////////////////////
root.mainloop() #start main-button function