import datetime
from random import randint
import pyttsx3
import speech_recognition as sr
import wikipedia
import webbrowser
import os
import smtplib
import pywhatkit as kit
import requests
import randfacts
from pyjokes import *


engine= pyttsx3.init()
voices=engine.getProperty('voices')
engine.setProperty('voices',voices[1].id)
engine.setProperty('rate',170)

def speak(audio):
    engine.say(audio)
    engine.runAndWait()
    engine.stop()

def wishMe():
    '''
    wish the user according to time
    '''
    hour= int(datetime.datetime.now().hour)
    if hour>=0 and hour<12:
        speak("Good Morning !")
    elif hour>=12 and hour<18:
        speak("Good Afternoon !")
    else:
        speak("Good Evening !")
    speak("I am Jarvis your voice assistant. How are you?")
    q=takeCommand()
    if "what" and "about" and "you" in q:
        speak("I am also having a good day ma'am. What can i do for you?")

def takeCommand():
    '''
    it takes microphone input from the user and returns the string output
    '''
    r=sr.Recognizer()
    with sr.Microphone() as source:
        r.energy_threshold=10000
        print("Listening.....")
        r.pause_threshold==1   # seconds of non-speaking audio before a phrase is considered complete(gap between the phrases)
        audio=r.listen(source)

        '''
        energy_threshold to change the input voice volume
        '''
    try:
        print('Recognizing.....')
        query=r.recognize_google(audio,language='en-in')
        print(f"user said:{query}\n")

        '''
        Python f-string is the newest Python syntax to do string formatting. 
        It is available since Python 3.6. 
        Python f-strings provide a faster, more readable, more concise, and less error prone way of formatting strings in Python.
        '''
    except Exception as e:
        print(e)  #can be skipped cause it'll print the error occured
        print("Say that again please....")

        return "None" #????
    return query

def sendEmail(to,content):
    server=smtplib.SMTP("smtp.gmail.com", 587)
    server.ehlo()
    server.starttls()
    print("Sending mail.....")
    server.login('prernarath1002@gmail.com','Prerna-124')
    '''
    store your password in a text file so that no one can acess using ctrl
    '''
    server.sendemail('prernarath1002@gmail.com',to,content)
    server.close()

def news():
    ar=[]
    for i in range(3):
        ar.append("Number "+str(i+1)+","+json_data["articles"][i]["title"]+".")
    return ar

if __name__=="__main__":
    wishMe()
    #logic for executing tasks based on query

    while True:
        query=takeCommand().lower()
        if 'information' in query:
            speak("You want information related to which topic : ")
            query=takeCommand().lower()
            speak('Searching Wikipedia')
            query=query.replace('wikipedia','')
            search=wikipedia.WikipediaPage
            results=wikipedia.summary(query,sentences=2)
            speak("According to Wikipedia")
            print(results)
            speak(results)

        elif 'open youtube' in query:
            webbrowser.open("youtube.com")
        elif 'open google' in query:
            webbrowser.open("google.com")
        elif 'open stackoverflow' in query:
            webbrowser.open("stackoverflow.com")
        elif'play music'in query:
            music_dir='E:\\PRERNA\\music'
            songs = os.listdir(music_dir)
            print(songs)
            os.startfile(os.path.join(music_dir,songs[0]))
        elif 'the time' in query:
            strtime=datetime.datetime.now().strftime("%H:%M:%S")

            speak(f"ma'am, the time is {strtime}")
        elif 'open code' in query:
            codepath="C:\\Users\\admin\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"
            os.startfile(codepath)

        elif 'play video' in query:
            speak("What do you want me to play - ")
            vdo=takeCommand()
            webbrowser.open("youtube.com")
            kit.playonyt(vdo)
        elif "whatsapp" in query:
            speak("Whom you want to send message please give me the number")
            number=takeCommand()

            speak("What you want to say")
            msg=takeCommand()
            try:
                kit.sendwhatmsg_instantly("+91"+number,msg, 15, False, 3)
            except Exception as e:
                print (e)
                speak("Sorry I am not able to send the message.")

        elif 'news' in query:
            speak("Sure ma'am I will read the news for you")
            file=open("D:\\vscode\\python\\apikey.txt",'r')
            key=file.read()
            file.close()
            api_add1="https://newsapi.org/v2/top-headlines?country=in&apiKey="+key
            api_add2="https://newsapi.org/v2/top-headlines?country=us&apiKey="+key
            json_data= requests.get(api_add1).json()
            arr=news()
            print("India's top headlines")
            for i in arr:
                print(i)
            speak("India's top headlines")
            speak(arr)
            
            json_data= requests.get(api_add2).json()
            arr=news()
            print("US's top headlines")
            for i in arr:
                print(i)
            speak("U S's top headlines")
            speak(arr)

        elif "fact" in query:
            speak("sure ma'am,")
            x=randfacts.getFact()
            print(x)
            speak("Did you know that,"+x)
