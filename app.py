import os
import caption_generator
from flask import Flask, flash, request, redirect, render_template, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
# from threading import  Thread
UPLOAD_FOLDER = './uploads'
# ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])



def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


app = Flask(__name__, static_folder='./static', template_folder='./static')
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy dog'
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})

'''
def print_caption(filename):
    global finished,caption
    try:
        caption=caption_generator.make_prediction('csi.jpg')
        print(caption)
    except Exception as e:
        print(e)
        caption='error....'
    finished=True
'''

@app.route('/')
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def index():
    return redirect('/static/')


@app.route('/static/')
@app.route('/static/caption_generator')
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def hello_world():
    return render_template('index.html')

finished=False
caption=''
@app.route('/static/uploads/', methods=['POST', 'GET', 'OPTIONS'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def upload_file():
    global finished
    # check if the post request has the file part
    if 'files[]' not in request.files:
        resp = jsonify({'message': 'No file part in the request'})
        resp.status_code = 400
        return resp

    files = request.files.getlist('files[]')

    errors = {}
    success = False

    for file in files:
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            finished=False
            # th=Thread(target=print_caption(filename))
            # th.start()
            success = True
        else:
            errors[file.filename] = 'File type is not allowed'

    if success and errors:
        errors['message'] = 'File(s) successfully uploaded'
        resp = jsonify(errors)
        resp.status_code = 206
        return resp
    if success:
        resp = jsonify({'message': caption_generator.make_prediction(filename).capitalize()+'.'})
        resp.status_code = 201
        return resp
    else:
        resp = jsonify(errors)
        resp.status_code = 400
        return resp

# @app.route('/static/results/')
# @cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
# def thread_status():
#     return jsonify(dict(status=('finished' if finished else 'runnig'),caption=caption))

if __name__ == '__main__':
    app.debug = True
    app.run()
