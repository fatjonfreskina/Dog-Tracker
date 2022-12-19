# Dog-Tracker

## Index

- [The group members](#the-group-members)
- [The description of the project and its goals](#the-description-of-the-project-and-its-goals)
- [The architecture hardware](#the-architecture-hardware)
- [The software architecture](#the-software-architecture)
- [The results according to the goals](#the-results-according-to-the-goals)
- [The test campaign (what, why, how)](#the-test-campaign-what-why-how)
- [The results of the campaign](#the-results-according-to-the-goals)
- [The proposed suggestions and optimization](#the-proposed-suggestions-and-optimization)

## The group members

- Fatjon Freskina
- Goillot Geoffrey
- Lesec--Rolland Titouan
- Lepers Mathilde

## The description of the project and its goals

The main objective of this project was to discover the IOT technologies and especially the long range with LORAWAN. To illustrate this we had to design and realize a project to implement IOT technologies.
For our project, we decided to create a Dog Tracker. Indeed, the latter is able to track health information of a dog especially his heartbeat and the environment temperature.
Once the gateway receives packets, we use the MQTT protocol to communicate with our application which is a website with all the information we want about the dog. 

## The architecture hardware

We used a heartbeat sensor to take our measures. When our sensor wants to send data over the internet, it broadcasts the data packet in all directions using LoRa technology. This packet will be received by our device with antennas capable of receiving LoRa packets, called LoRaWAN gateways. We chose loRaWAN because this technology enables us to transmit information over long distances and this is exactly what we want in our project.

![tit1](/images/Schermata%202022-12-19%20alle%2009.24.15.png)

## The software architecture

![homepage](/images/Homepage.png)

### Setup and Run

Requirements:

- Arduino IDE
- Node.js

Steps:

- Clone the repository with `git clone https://github.com/fatjonfreskina/Dog-Tracker.git`
- Navigate inside the repo and install the Node.js dependencies with `npm install express && npm install mqtt`
- To start the application run `npm run dev` : server will be listening on localhost:8383.
- Connect the arduino to your computer (make sure that everything is wired correctly in the board, check figure below)
![setup](/images/IMG_8037.JPG)
- Open the .ino file located inside Dog-Tracker/arduino/sketch_nov10a/
- Select the correct port in the Arduino IDE, Upload and Run the program.

The server will receive data approximately every 15~20 seconds.

## The results according to the goals

The goal were to track health information about the dog. The heartbeat sensor works properly, however due to lack of time we were able to send only fake temperature data instead of real one.

## The test campaign (what, why, how)

The mqtt library in javascript provides at each message exchanged the SNR, we wrote a python script to see how this changed over time.

Here the results:

![snr](/testing/SNR_plot.png)

We also tested the power consumption of the full prototype:

![power](/testing/Test-Iot-Ecam.png)

## The proposed suggestions and optimization

- Waterproof
- Reduce the cost
- Increase distance
- Create an alert if heartbeat too high
- Add temperature and gps sensors