/**
 * 🆘 HelpMe Component. 🆘
 * This component is aimed to getting people through registration as soon as possible
 * @var state {number} shows which screen is being shown.
 *            0 : get location. 🗺
 *            1 : check if person is alone. 👪
 *            2 : how many people are with person.
 *            3 : fallback for location.
 * @var lat {number} gets the person latitude.
 * @var long {number} gets the person longitude.
 * @var people {number} gets number of people. If alone its set to 1.
 * @var manual_location {string} fallback for location.
 *
 * @method getLocation gets the user location from the browser.
 * @method failedCoordinates if getLocation fails sets state to 3.
 * @method isAlone sets people to 1, calls sendToBackend.
 * @method isNotAlone sets state to 2 and checks how many people need help.
 * @method sendToBackend send all info to backend and its sent to next page.
 */
import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'helpme',
  templateUrl: './helpme.component.html',
  styleUrls: ['./helpme.component.scss']
})
export class HelpMeComponent implements OnInit {
  public state:number = 0;
  private lat:number;
  private long:number;
  private people:number = 1;
  private manual_location:string = '';
  constructor() {}

  ngOnInit(): void {}

  getLocation() {
    if (navigator.geolocation){
      var that = this;
      navigator.geolocation.getCurrentPosition((position)=>{
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        that.lat = latitude;
        that.long = longitude;
        that.state = 1;
      }, ()=>{
        this.state=3;
      });
    } else {
      this.state=3;
    }
  }

  isAlone(){
    this.people = 1;
    this.sendToBackend();
  }

  isNotAlone(){
    this.state = 2;
  }

  changePeople(add) {
    if(add === true){
      this.people +=1;
    } else if(this.people>1){
      this.people -=1;
    }
  }

  sendToBackend() {
    alert('Not Implemented!')
    // TODO: Enviar al backend cuando este listo y redireccionar.
  }

  getManualLocation(){
    this.state = 1;
  }
  }
