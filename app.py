from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def copy():
    return render_template('copy.html')

@app.route('/<text>')
def paste(text):
    return render_template('paste.html', **locals())