# Dog-Tracker

## Index

- The group members
- The description of the project and its goals
- The architecture hardware
o List of equipment
o Assembly diagram
- The hardware and software architecture
o Installation and configuration
o Libraries used
- The results according to the goals
- The test campaign (what, why, how)
- The results of the campaign
- The proposed suggestions and optimization

## The group members

## The description of the project and its goals

## The architecture hardware

## The hardware and software architecture

### Setup and Run

Requirements: 

- Arduino IDE
- Node.js

Steps:

- Clone the repository with `git clone https://github.com/fatjonfreskina/Dog-Tracker.git`
- Navigate inside the repo and install the Node.js dependencies with `npm install express && npm install mqtt`
- To start the application run `npm run dev` : server will be listening on localhost:8383.
- Connect the arduino to your computer
- Open the .ino file located inside Dog-Tracker/arduino/sketch_nov10a/
- Select the correct port in the Arduino IDE, Upload and Run the program.

The server will receive data approximately every 15~20 seconds.

## The results according to the goals

The goal were to track health information about the dog. The heartbeat sensor works properly, however due to lack of time we were able to send only fake temperature data instead of real one. 

## The test campaign (what, why, how)

The mqtt library in javascript provides at each message exchanged the SNR, we wrote a python script to see how this changed over time.

Here the results:

![snr]()


