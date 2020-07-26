import {Component, OnInit, AfterViewInit} from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {FormBuilder, FormGroup} from '@angular/forms';
import $ from 'jquery';
import {FormBuilder} from '@angular/forms';
import {NarrationDetailsService} from "../../narration-details.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit, AfterViewInit {
  // private SERVER_URL = 'http://127.0.0.1:5000/static/uploads';
  // selectedFile: File;
  // private uploadForm: FormGroup;
  // res;
public imageUrl: any = null;

constructor(private _narration:NarrationDetailsService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
ngOnInit(): void {
    // this.uploadForm = this.formBuilder.group({
    //   profile: ['']
    // });
  }

  // onFileSelected(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.uploadForm.get('profile').setValue(file);
  //   }
  // }
  //
  // private onUpload() {
  //   // const fd = new FormData();
  //   // fd.append('imageFile', this.selectedFile, this.selectedFile.name);
  //   // this.http.post('http://localhost:5000/static/uploads/', fd)
  //   //   .subscribe(x => console.log('success', x));
  //   const formData = new FormData();
  //   formData.append('file', this.uploadForm.get('profile').value);
  //
  //   this.httpClient.post<any>(this.SERVER_URL, formData,{
  //     headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  //       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  //   })})
  // .subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //   );
  // }
ngAfterViewInit() {
    $(document).ready((e) => {
       var reader = new FileReader();

    reader.onload = (e)=> {
      console.log('onload called');
      $('#showimg').attr('src', e.target.result);
    };

      $('#upload').on('click', () => {
        $('#msg').text('Your image is being processed please wait...');
        $('#loading').css('display','block');
        $('#msg').css('font-weight','normal');
        const form_data = new FormData();
        const ins = (document.getElementById('multiFiles') as HTMLInputElement).files.length;
        // const baseurl='http://localhost:5000/';
        // tslint:disable-next-line:indent
        const baseurl = 'http://localhost:5000/';
        if (ins == 0) {
          $('#msg').html('<span style="color:red">Please select file first</span>');
          $('#loading').css('display','none');
          return;
        }

        for (let x = 0; x < ins; x++) {
          let files=(document.getElementById('multiFiles') as HTMLInputElement).files[x];
          form_data.append('files[]', files);
          this.imageUrl=files;
          reader.readAsDataURL(files);

        }




        $.ajax({
          url: baseurl + 'static/uploads/', // point to server-side URL
          dataType: 'json', // what to expect back from server
          cache: false,
          contentType: false,
          processData: false,
          data: form_data,
          type: 'post',
          success:(response) =>{ // display success response
            $('#msg').html('');
            $.each(response, (key, data) => {
              if (key !== 'message') {
                $('#msg').append(key + ' -> ' + data + '<br/>');
              } else {
                // let counter = 0;
                // const refresh_id = setInterval(()=> {
                //   $.get(baseurl + 'static/results/', (data)=> {
                //     console.log(data);
                //     counter += 1;
                //     if (data.status == 'finished') {
                //       $('#msg').html('');
                //       $('#msg').append(data.caption);
                //       this._narration.setSpeech(data.caption);
                //       clearInterval(refresh_id);
                //       counter = 0;
                //     }
                //     if (counter === 100) {
                //       clearInterval(refresh_id);
                //     }
                //     counter = 0;
                //   });
                // }, 5000);
                $('#msg').html('');
                $('#msg').append(data + '<br/>');
                this._narration.setSpeech(data);
                $('#msg').css('font-weight','bold');
                $('#loading').css('display','none');
              }
            });
          },
          error(response) {
            $('#msg').text(response.message); // display error response
            $('#loading').css('display','none');
          }
        });
      });

    });
  }
   on() {
    document.getElementById('overlay').style.display = 'block';
  }

  off() {
    document.getElementById('overlay').style.display = 'none';
  }
}
