from flask import Flask, render_template
from flask_frozen import Freezer

app = Flask(__name__)

# Create a Freezer instance
freezer = Freezer(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/research.html')
def research():
    return render_template('research.html')

@app.route('/resources.html')
def resources():
    return render_template('resources.html')

@app.route('/people.html')
def people():
    return render_template('people.html')

@app.route('/news.html')
def news():
    return render_template('news.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')
    

if __name__ == '__main__':
    # Run the app normally or freeze the app depending on the command
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == 'freeze':
        freezer.freeze()
    else:
        app.run(debug=True)
