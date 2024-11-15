<h1 align="center">HSM</h1>

### <p align="center">Harmful Substances Monitor</p>


## 🌦️ About HMS

HMS monitors harmful gases distributed in the air in real-time. The information about harmful gases is received from sensors connected to a remote server, with updates every second. The connection method between the remote server and local clients is via HTTPS, and the remote server stores sensor information such as toluene, benzene, and air quality information in a JSON file. The client uses the AXIOS() function to retrieve data from the server.

## 🌦️ HMS Feature


<img width="1440" alt="screenshot" src="https://github.com/user-attachments/assets/8c8d2905-9c01-47cb-afb1-c6c4afcdf510">


1. Liquid Gauge displays the PPM value with colors and numbers, ranging from blue to red.
2. Quality Index represents the concentration of harmful substances in 12 levels.
3. PPM Values show the incoming PPM values as a time series.
4. Air Flow displays the Air Flow value.
5. Toluene shows the Toluene PPM value.
6. Benzene shows the Benzene PPM value.
7. Dust Particles display the Dust Particles value.
8. VOCs Search is not yet implemented.


## 🚀 Getting Started

1. Pre-installation configuration 
   - export SET NODE_OPTIONS=--openssl-legacy-provider
   - export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home

2. Installation
   - Clone this repository to your local machine.
   - Navigate to the project directory using your command-line tool.
   - Run `npm install` to install the required dependencies.

3. Running the App
   - After installation, run `npm run dev` to launch the app in your default web browser.
   - And then, open browser with http://localhost:5173 ....

Good luck ~
