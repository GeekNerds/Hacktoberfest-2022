import pyttsx3
import datetime
import wikipedia
import webbrowser
import speech_recognition as sr
import os
import smtplib

engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')

engine.setProperty('voice', voices[0].id)

webbrowser.register('chrome',
                    None,
                    webbrowser.BackgroundBrowser("C:\Program Files\Google\Chrome\Application\chrome.exe"))

# using male voice


def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def takeCommand():
    # it takes microphone input from user and returns string output
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening .....")
        r.pause_threshold = 1
        r.energy_threshold = 300
        # increase to exclude constant noise / equivalent to mic threshold

        audio = r.listen(source)

        try:
            print("Recognizing .....")
            query = r.recognize_google(audio, language='en-in')
            print(f"User said : {query}\n")

        except Exception as e:
            # print(e)
            print("Say that again please .....")
            return "None"
        return query


def wishme():
    hour = int(datetime.datetime.now().hour)
    if 2 < hour <= 12:
        speak("Good Morning")
    elif 12 < hour <= 17:
        speak("Good Afternoon")
    else:
        speak("Good Evening")


def sendEmail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login('YOUR MAIL ID', 'MAIL PASSWORD')
    server.sendmail('YOUR MAIL ID', to, content)
    server.close()


# 'enable the less secure apps' feature in your Gmail account


if __name__ == '__main__':
    wishme()
    speak("hi my name is Vox")
    while True:
        query = takeCommand().lower()

        if "wikipedia" in query:
            speak("Searching wikipedia .....")
            query = query.replace("wikipedia", "")
            result = wikipedia.summary(query, sentences=2)
            speak("According to wikipedia ...")
            print(result)
            speak(result)

        elif "open youtube" in query:
            webbrowser.get('chrome').open("youtube.com")

        elif "open google" in query:
            webbrowser.get('chrome').open("google.com")

        elif "open github" in query:
            webbrowser.get('chrome').open("github.com")

        elif 'play music' in query:
            music_dir = 'C:\\Users\\Rounak Hazra\\Music'
            # put the location of your music folder here
            songs = os.listdir(music_dir)
            print(f"Playing : {songs[0]}")
            os.startfile(os.path.join(music_dir, songs[0]))

        elif 'the time' in query:
            strTime = datetime.datetime.now().strftime("%H:%M:%S")
            speak(f"Sir, the time is {strTime}")

        elif 'open valorant' in query:
            codePath = "C:\Riot Games\Riot Client\RiotClientServices.exe"
            os.startfile(codePath)

        elif 'send email' in query:
            try:
                speak("What should I say?")
                content = takeCommand()
                speak("Whom do you want to send? Type the email address to which you want to send.")
                to = input("Enter the email address:")
                sendEmail(to, content)
                speak("Email has been sent!")
            except Exception as e:
                print(e)
                speak("Sorry. I am unable to send this email")
                print("Sorry. I am unable to send this email")

        elif "can you do" in query:
            speak("I can search up anything on wikipedia for you."
                  " I can play music from ur local directory."
                  " I can open valorant."
                  " I can tell you the present time."
                  " I can open youtube, github and google for you."
                  " I can even send email to anyone you want."
                  )
        elif "you can leave now" in query or "exit now" in query:
            speak("Bye, sir")
            break
