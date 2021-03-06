import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'shivafdn-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  public slideIndex = 1;
  constructor(private renderer: Renderer2
    , private elRef: ElementRef) { }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2019-11-26
   * @param {*} n
   * @memberof GalleryComponent
   */
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2019-11-26
   * @param {*} n
   * @memberof GalleryComponent
   */
  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2019-11-26
   * @param {*} n
   * @memberof GalleryComponent
   */
  showSlides(n) {
    let i: number;
    const slides = this.elRef.nativeElement.querySelectorAll(".mySlides");
    const dots = this.elRef.nativeElement.querySelectorAll(".demo");
    const captionText = this.elRef.nativeElement.querySelectorAll(".caption");
    console.log('slides', slides);
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
    captionText.innerHTML = dots[this.slideIndex - 1].alt;
  }
}
