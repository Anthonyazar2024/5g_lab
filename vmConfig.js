const vmConfig = {
    host: '10.194.1.94',
    port: 22,
    username: 'ubuntu',
    privateKeyPath: '/home/ubuntu/5g_lab/ssh/Laas-Key/privatesshkey.key',
    baseLocation: '/home/ubuntu',
    httpsPrivateKey: '/home/ubuntu/5g_lab/ssh/Laas-Key/key.pem',
    httpsPrivateCert: '/home/ubuntu/5g_lab/ssh/Laas-Key/cert.pem',
    httpsPort:8443,
    ssh_host:'10.194.1.94'
};

export default vmConfig;
