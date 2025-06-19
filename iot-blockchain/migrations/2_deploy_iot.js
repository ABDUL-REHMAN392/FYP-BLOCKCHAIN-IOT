const IoTDeviceManager = artifacts.require("IoTDeviceManager");

module.exports = function (deployer) {
  deployer.deploy(IoTDeviceManager);
};
