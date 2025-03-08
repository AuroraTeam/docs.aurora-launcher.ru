# Running the Launcher Server as a service

To ensure stable operation of the Launcher Server, it must be run in the background.\
In service mode, you will not be able to send commands to the launcher server. When you finish setting up, it is advisable to start the launcher server in this mode.

## Starting via `PM2`

Install PM2 itself via npm manager:
```sh
npm install pm2 -g
```

Afterwards, we go to the folder with the Launcher Server and register the file:
```sh
pm2 start LauncherServer-linux --name launcher
```

We also enable autoload and save the list of applications:
```sh
pm2 startup
pm2 save
```

List of useful commands:

- `stop` - stop the application
- `restart` - restart the application
- `delete` - removes an application from the list
- `list` - list of applications and a brief summary of their status
- `monit` - starting the a pseudo-graphical interface that describes the state of applications in detail
- `logs` - view console application history

## Starting via `systemd`

Create a service configuration file and change the settings if necessary:
```sh
sudo nano /etc/systemd/system/launcher.service
```
Create a separate user to manage the Launcher Server:
```sh
adduser launchserver --no-create-home --gecos ""
```
For everything to work correctly, you will need to grant the user rights to the folder:
```sh
sudo chown launchserver:launchserver Path to the your Launcher Server
```

File contents:
```systemd [launcher.service]
[Unit]
Description=launcher Server

[Service]
# Specify the path where your Launcher Server is located
ExecStart=/home/LauncherServer-linux
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=launcher
User=launchserver

[Install]
WantedBy=multi-user.target
```

And then we start the service and put it into startup:
```sh
sudo systemctl enable launcher.service
sudo systemctl start launcher
```