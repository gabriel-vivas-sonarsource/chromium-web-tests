'use strict';
function createDOMException(func, uuid) {
  return new DOMException(
      `Failed to execute '${func}' on 'BluetoothRemoteGATTService': ` +
      `Service with UUID ${uuid} is no longer valid. Remember to retrieve ` +
      `the service again after reconnecting.`,
      'InvalidStateError');
}

bluetooth_test(() => {
  return setBluetoothFakeAdapter('DisconnectingHealthThermometerAdapter')
    .then(() => requestDeviceWithTrustedClick({
      filters: [{services: ['health_thermometer']}],
      optionalServices: [request_disconnection_service_uuid]}))
    .then(device => device.gatt.connect())
    .then(gattServer => {
      let services;
      return gattServer
        .CALLS([
          getPrimaryService('health_thermometer')|
          getPrimaryServices()|
          getPrimaryServices('health_thermometer')[UUID]])
        .then(s => {
          // Convert to array if necessary.
          services = [].concat(s);
          return get_request_disconnection(gattServer);
        })
        .then(requestDisconnection => requestDisconnection())
        .then(() => gattServer.connect())
        .then(() => services);
    })
    .then(services => {
      let promises = Promise.resolve();
      for (let service of services) {
        if (service.uuid == request_disconnection_service_uuid) {
          continue;
        }
        promises = promises.then(() =>
          assert_promise_rejects_with_message(
            service.getCharacteristic('measurement_interval'),
            createDOMException('getCharacteristic', service.uuid)));
        promises = promises.then(() =>
          assert_promise_rejects_with_message(
            service.getCharacteristics(),
            createDOMException('getCharacteristics', service.uuid)));
        promises = promises.then(() =>
          assert_promise_rejects_with_message(
            service.getCharacteristics('measurement_interval'),
            createDOMException('getCharacteristics', service.uuid)));
      }
      return promises;
    });
}, 'Calls on services after device disconnects and we reconnect. ' +
   'Should reject with InvalidStateError.');
