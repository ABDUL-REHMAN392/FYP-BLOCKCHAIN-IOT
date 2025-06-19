from web3 import Web3
import json
import random
import time
import requests

# === CONFIGURATION ===
GANACHE_URL = "http://127.0.0.1:7545"
CONTRACT_ADDRESS = "0xAf83e9699fb6a26B096281d3fd1299b79094D8b3"

# === LOAD ABI ===
with open("build/contracts/IoTDeviceManager.json") as f:
    contract_json = json.load(f)
    abi = contract_json["abi"]

# === LOAD DEVICE PRIVATE KEYS ===
with open("device_keys.json") as f:
    PRIVATE_KEYS = json.load(f)

# === CONNECT TO GANACHE ===
web3 = Web3(Web3.HTTPProvider(GANACHE_URL))
contract = web3.eth.contract(address=CONTRACT_ADDRESS, abi=abi)

# === INIT DEVICE NONCE TRACKER ===
device_nonces = {}

# === SEND TO NODE-RED ===
def send_to_node_red(device_address, temperature, humidity, timestamp):
    url = "http://localhost:1880/iot"
    payload = {
        "device": device_address,
        "temperature": temperature,
        "humidity": humidity,
        "timestamp": timestamp
    }
    try:
       res = requests.post(url, json=payload)
       print("🟢 Node-RED responded with:", res.status_code)

    except Exception as e:
        print(f"❌ Error sending to Node-RED: {e}")

# === GET ACTIVE DEVICES ===
def get_active_devices():
    active = []
    for addr in PRIVATE_KEYS.keys():
        try:
            device = contract.functions.getDevice(addr).call()
            is_registered = device[0]
            status = device[2]  # 1 = ON
            if is_registered and status == 1:
                active.append(addr)
        except:
            continue
    return active

# === SEND SENSOR DATA ===
def send_sensor_data(device_address):
    try:
        temperature = random.randint(20, 40)
        humidity = random.randint(30, 70)
        private_key = PRIVATE_KEYS[device_address]

        # Use and increment local nonce tracker
        if device_address not in device_nonces:
            device_nonces[device_address] = web3.eth.get_transaction_count(device_address)
        nonce = device_nonces[device_address]

        tx = contract.functions.updateData(temperature, humidity).build_transaction({
            'from': device_address,
            'nonce': nonce,
            'gas': 300000,
            'gasPrice': web3.to_wei('1', 'gwei')
        })

        signed_tx = web3.eth.account.sign_transaction(tx, private_key)
        tx_hash = web3.eth.send_raw_transaction(signed_tx.raw_transaction)
        web3.eth.wait_for_transaction_receipt(tx_hash)

        # Increment local nonce
        device_nonces[device_address] += 1

        timestamp = int(time.time())
        print(f"📡 Data sent from {device_address}: Temp={temperature}°C, Humidity={humidity}%")

        send_to_node_red(device_address, temperature, humidity, timestamp)

    except Exception as e:
        print(f"⚠️ Error sending data from {device_address}: {e}")

# === MAIN LOOP ===
if __name__ == "__main__":
    print("🚀 Starting IoT Device Auto Data Sender...")
    while True:
        active_devices = get_active_devices()
        if not active_devices:
            print("⏳ No active devices. Waiting...")
        for addr in active_devices:
            if addr in PRIVATE_KEYS:
                send_sensor_data(addr)
            else:
                print(f"⚠️ Skipping {addr} — private key not found.")
        time.sleep(10)
