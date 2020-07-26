import caption_generator
print(caption_generator.make_prediction('DSC00246.JPG'))
# import h5py
# f = h5py.File('./Model/model_num.hdf5','r+')
# data_p = f.attrs['training_config']
# data_p = data_p.decode().replace("learning_rate","lr").encode()
# f.attrs['training_config'] = data_p
# f.close()