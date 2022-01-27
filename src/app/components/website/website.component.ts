import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  imagesrc=[{
    "imagepath":"sm-image-1.jpg",
    "alt":"Image Not found",
    "text":"Image1"
  },
  {
    "imagepath":"sm-image-2.jpg",
    "alt":"Image Not found",
    "text":"Image2"
  },
  {
    "imagepath":"sm-image-3.jpg",
    "alt":"Image Not found",
    "text":"Image3"
  },
  {
    "imagepath":"sm-image-4.jpg",
    "alt":"Image Not found",
    "text":"Image4"
  },
  {
    "imagepath":"sm-image-5.jpg",
    "alt":"Image Not found",
    "text":"Image5"
  },
  {
    "imagepath":"sm-image-6.jpg",
    "alt":"Image Not found",
    "text":"Image6"
  },
  {
    "imagepath":"sm-image-7.jpg",
    "alt":"Image Not found",
    "text":"Image7"
  },
  {
    "imagepath":"sm-image-8.jpg",
    "alt":"Image Not found",
    "text":"Image8"
  },
  {
    "imagepath":"sm-image-9.jpg",
    "alt":"Image Not found",
    "text":"Image9"

  },
  {
    "imagepath":"sm-image-10.jpg",
    "alt":"Image Not found",
    "text":"Image10"
  },
]
onEdit()
{

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  console.log("Tap To Top Worked Successfully");
  
}

}
