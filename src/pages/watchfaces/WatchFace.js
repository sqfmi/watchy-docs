import React, { Component } from 'react';
import watchface from './watchface.module.css';

class WatchFace extends Component {
  render() {
    return(
      <div className={'col col--4 ' + watchface.frame}>
        <img src={this.props.screenshot} />
        <a className={'button button--outline button--info'} href={this.props.github} target="_blank">{this.props.name}</a>
        <TryButton name={this.props.name} author={this.props.author} />
      </div>
    )
  }
}

function TryButton(props){
  if(props.author == "SQFMI" || props.author == "dandelany"){
    return <button id={props.name} className={'button button--info'} onClick={BTConnect}>Try it! (beta)</button>;
  }else{
    return null;
  }
}

var watchyUUID = "cd77498e-1ac8-48b6-aba8-4161c7342fce";
var BLEOTAServiceUUID = "86b12865-4b70-4893-8ce6-9864fc00374d";
var versionCharacteristicUUID = '86b12867-4b70-4893-8ce6-9864fc00374d';
var fileCharacteristicUUID = "86b12866-4b70-4893-8ce6-9864fc00374d";


let watchyService = null;
let readyFlagCharacteristic = null;
let dataToSend = null;
let updateData = null;

var totalSize;
var remaining;
var amountToWrite;
var currentPosition;

var currentHardwareVersion = "N/A";
var firmwareVersion = "N/A";

const characteristicSize = 512;

function BTConnect(e){

    e.preventDefault();
    let watchfaceName = e.target.id;

    navigator.bluetooth.requestDevice({
      filters: [{
        services: [watchyUUID]
      }],
      optionalServices: [BLEOTAServiceUUID]
    })
    .then(device => {
      return device.gatt.connect()
    })
    .then(server => server.getPrimaryService(BLEOTAServiceUUID))
    .then(service => {
      watchyService = service;
    })
    .then(service => {
      return service;
    })
    .then(_ => {
      return CheckVersion(watchfaceName);
    })
    .catch(error => { console.log(error); });
}

function CheckVersion(watchfaceName){
  if(!watchyService)
  {
    return;
  }
  return watchyService.getCharacteristic(versionCharacteristicUUID)
  .then(characteristic => characteristic.readValue())
  .then(value => {
    currentHardwareVersion = 'v' + value.getUint8(0) + '.' + value.getUint8(1);
    firmwareVersion = 'v' + value.getUint8(2) + '.' + value.getUint8(3) + '.' + value.getUint8(4);
  })
  .then(function (data) {
    Update(watchfaceName);
  })
  .catch(error => { console.log(error); });
}

function Update(watchfaceName){
  let url = 'https://raw.githubusercontent.com/sqfmi/Watchy/master/examples/WatchFaces/'+watchfaceName+'/'+watchfaceName+'.bin';
  fetch(url)
  .then(function (response) {
    return response.arrayBuffer();
  })
  .then(function (data) {
    updateData = data;
    return SendFileOverBluetooth();
  })
  .catch(function (err) { console.warn('Something went wrong.', err); });
}


function SendFileOverBluetooth() {
  if(!watchyService)
  {
    console.log("No Watchy Service");
    return;
  }

  totalSize = updateData.byteLength;
  remaining = totalSize;
  amountToWrite = 0;
  currentPosition = 0;
  watchyService.getCharacteristic(fileCharacteristicUUID)
  .then(characteristic => {
    readyFlagCharacteristic = characteristic;
    return characteristic.startNotifications()
    .then(_ => {
      readyFlagCharacteristic.addEventListener('characteristicvaluechanged', SendBufferedData)
    });
  })
  .catch(error => { 
    console.log(error); 
  });
  SendBufferedData();
}

function SendBufferedData() {
  if (remaining > 0) {
    if (remaining >= characteristicSize) {
      amountToWrite = characteristicSize
    }
    else {
      amountToWrite = remaining;
    }
    dataToSend = updateData.slice(currentPosition, currentPosition + amountToWrite);
    currentPosition += amountToWrite;
    remaining -= amountToWrite;
    console.log("remaining: " + remaining);
    watchyService.getCharacteristic(fileCharacteristicUUID)
      .then(characteristic => RecursiveSend(characteristic, dataToSend))
      .then(_ => {
        return console.log((100 * (currentPosition/totalSize)).toPrecision(3) + '%');
      })
      .catch(error => { 
        console.log(error); 
      });
  }
}

function RecursiveSend(characteristic, data) {
  return characteristic.writeValue(data)
  .catch(error => {
    return RecursiveSend(characteristic, data);
  });
}

export default WatchFace; // Don’t forget to use export default!