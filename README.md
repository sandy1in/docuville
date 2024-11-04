# Docuville_Text_Extractor
This api extracts 3 main fields from given image 

- to start the server on port 3000, execute
```bash
git https://github.com/sandy1in/docuville.git
```
```bash
cd Docuville_txt_extractor
```
```bash
npm install
```
```bash
node app.js
```


- send a `POST` request to `localhost:3000/api/drivingLicense/upload`
- use POSTMAN client to upload the image through `form-data` in `body`
- upload only 1 image through variable named `image`
- use sample images taken from web provided in [`sampleImages`](./sampleImages) folder

images for the project
![output/out1](https://github.com/sandy1in/docuville/blob/main/output/out1.jpg)
![output/out2](https://github.com/sandy1in/docuville/blob/main/output/out2.jpg)
![coutput/out3](https://github.com/sandy1in/docuville/blob/main/output/out3.jpg)


