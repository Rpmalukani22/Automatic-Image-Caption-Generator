import os
import pickle

import numpy as np
from keras import backend as K
from keras.applications.inception_v3 import preprocess_input
from keras.models import load_model
from keras.preprocessing import image
from keras.preprocessing.sequence import pad_sequences

model_new=None
max_length=49
model=None
wordtoix=None
ixtoword=None

def predict(photo):
  in_text = 'startseq'
  for i in range(max_length):
    sequence = [wordtoix[w] for w in in_text.split() if w in wordtoix]
    sequence = pad_sequences([sequence], maxlen=max_length)
    yhat = model.predict([photo, sequence], verbose=0)
    yhat = np.argmax(yhat)
    word = ixtoword[yhat]
    in_text += ' ' + word
    if word == 'endseq':
      break
  final = in_text.split()
  final = final[1:-1]
  final = ' '.join(final)
  return final


def preprocess(image_path):
  # Convert all the images to size 299x299 as expected by the inception v3 model
  img = image.load_img(image_path, target_size=(299, 299))
  # Convert PIL image to numpy array of 3-dimensions
  x = image.img_to_array(img)
  # Add one more dimension
  x = np.expand_dims(x, axis=0)
  # preprocess the images using preprocess_input() from inception module
  x = preprocess_input(x)
  return x


def encode(image):
  image = preprocess(image)  # preprocess the image
  fea_vec = model_new.predict(image)  # Get the encoding vector for the image
  fea_vec = np.reshape(fea_vec, fea_vec.shape[1])  # reshape from (1, 2048) to (2048, )
  return fea_vec

def make_prediction(image_name):
  K.clear_session()
  global model_new,max_length,model,wordtoix,ixtoword
  wordtoix = pickle.load(open('./Model/wordtoix_final.pkl', 'rb'))
  ixtoword = pickle.load(open('./Model/ixtoword_final.pkl', 'rb'))

  # wordtoixf = open('./Model/wordtoix.pickle', 'wb')
  # ixtowordf = open('./Model/ixtoword.pickle', 'wb')
  # pickle.dump(wordtoix, wordtoixf)
  # pickle.dump(ixtoword, ixtowordf)
  max_length = 49

  model_new=pickle.load(open('./Model/model_new.pickle','rb'))
  loaded_model=load_model('Model/model_final.h5')
  model=loaded_model

  ipath = os.path.join('.','uploads',image_name)

  en=encode(ipath).reshape(1,-1)
  res=predict(en)
  # x=plt.imread(ipath)
  # plt.figure(figsize = (10,10))
  # plt.imshow(x)
  # plt.show()
  K.clear_session()
  return res


