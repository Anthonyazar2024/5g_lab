Install Node.js and npm

sudo apt update
sudo apt install nodejs npm
sudo apt install build-essential



Install Git on the New VM
sudo apt update
sudo apt install git

git clone https://github.com/Anthonyazar2024/5g_lab.git


cd 5g_lab

node -v
npm -v

sudo apt update
sudo apt install nodejs npm

npm install

npm start


Install PostgreSQL


sudo apt update
sudo apt install postgresql postgresql-contrib -y

sudo systemctl start postgresql
sudo systemctl enable postgresql


sudo nano /etc/postgresql/14/main/postgresql.conf

Modify listen_addresses: Find the listen_addresses line and ensure it is set to '*', which allows PostgreSQL to accept connections from any IP address:

listen_addresses = '*'


sudo nano /etc/postgresql/14/main/pg_hba.conf

Allow All Hosts to Connect: Add the following line at the end of the file to allow all users to connect from any IP address using password authentication:


host    all             all             0.0.0.0/0               md5

1. Switch to the PostgreSQL User
If you're trying to run commands like psql as the postgres user, first switch to the postgres user:


sudo -i -u postgres
This gives you a shell as the postgres user. You can now run psql and other PostgreSQL-related commands.

2. Access PostgreSQL Database
Now, you can access PostgreSQL without needing sudo:


psql
If you need to connect to a specific database as anthony (or any other user):


psql -U anthony -d laas_gui
You should be prompted for the password you set when creating the anthony user (LaaS_GUI_2024).




DB_HOST=10.192.2.108
DB_PORT=5432
DB_NAME=laas_gui
DB_USER=anthony
DB_PASSWORD=LaaS_GUI_2024




Steps to Update the secure_path:
Open the sudoers file for editing:


sudo visudo
Find the Defaults secure_path line: Locate this line:


Defaults        secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin"
Add the nvm path: Update the line to include /home/ubuntu/.nvm/versions/node/v18.20.5/bin. The result should look like this:


Defaults        secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin:/home/ubuntu/.nvm/versions/node/v18.20.5/bin"
Save and exit:

Press Ctrl+O, then Enter to save the file.
Press Ctrl+X to exit the editor.


Install PM2:


sudo npm install -g pm2

Verify installation:

pm2 --version

 cd 5g_lab/


pm2 start server.js --name 5g_lab_server
pm2 start "npm run dev" --name 5g_lab_app

pm2 list



