from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    a = 5
    b = 7
    c = a+b
    print(a)
    return "dh"

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)