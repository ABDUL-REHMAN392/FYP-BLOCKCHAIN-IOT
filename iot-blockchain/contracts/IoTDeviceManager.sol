// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IoTDeviceManager {
    address public owner;

    enum DeviceStatus { OFF, ON }

    struct Device {
        bool isRegistered;
        string deviceName;
        DeviceStatus status;
        int256 temperature;
        int256 humidity;
        uint256 timestamp;
    }

    mapping(address => Device) public devices;

    event DeviceAdded(address device, string name);
    event DeviceRemoved(address device);
    event DeviceToggled(address device, DeviceStatus status);
    event DataUpdated(address device, int256 temperature, int256 humidity, uint256 timestamp);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    modifier onlyRegistered() {
        require(devices[msg.sender].isRegistered, "Device not registered");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addDevice(address deviceAddress, string memory name) public onlyOwner {
        devices[deviceAddress] = Device(true, name, DeviceStatus.OFF, 0, 0, 0);
        emit DeviceAdded(deviceAddress, name);
    }

    function removeDevice(address deviceAddress) public onlyOwner {
        require(devices[deviceAddress].isRegistered, "Device not registered");
        delete devices[deviceAddress];
        emit DeviceRemoved(deviceAddress);
    }

    function toggleDevice(address deviceAddress, bool turnOn) public onlyOwner {
        require(devices[deviceAddress].isRegistered, "Device not registered");
        devices[deviceAddress].status = turnOn ? DeviceStatus.ON : DeviceStatus.OFF;
        emit DeviceToggled(deviceAddress, devices[deviceAddress].status);
    }

    function updateData(int256 temperature, int256 humidity) public onlyRegistered {
        require(devices[msg.sender].status == DeviceStatus.ON, "Device is OFF");
        devices[msg.sender].temperature = temperature;
        devices[msg.sender].humidity = humidity;
        devices[msg.sender].timestamp = block.timestamp;
        emit DataUpdated(msg.sender, temperature, humidity, block.timestamp);
    }

    function getDevice(address deviceAddress) public view returns (
        bool isRegistered,
        string memory name,
        DeviceStatus status,
        int256 temperature,
        int256 humidity,
        uint256 timestamp
    ) {
        Device memory d = devices[deviceAddress];
        return (d.isRegistered, d.deviceName, d.status, d.temperature, d.humidity, d.timestamp);
    }
}
