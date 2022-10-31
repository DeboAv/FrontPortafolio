import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImagen($event: any, name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/` + name)
    uploadBytes(imgRef, file)
    .then(response =>{this.getImages()})
    .catch(err => console.error(err))
  }

  getImages(){
    const imageRef = ref(this.storage, 'imagen')
    list(imageRef)
    .then(async response =>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url)
      } 
    })
    .catch(err => console.error(err))
  }
}
