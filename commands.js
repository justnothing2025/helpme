const commands = {

linux: {

ssh: [


{
title: "SSH Login",
command: "ssh user@192.168.1.10",
details: "Connect to remote server."
},



{
title: "SSH Service",
command: "systemctl status ssh",
details: "Show SSH service status."
}

],

network: [

{
title: "IP Address",
command: "ip a",
details: "Show all interfaces."
},

{
title: "Listening Ports",
command: "ss -tlnp",
details: "Show open ports."
}

],

cloudflare: [

{
title: "Tunnel Logs",
command: "journalctl -u cloudflared -f",
details: "Show live Cloudflare tunnel logs."
}

]

},

windows: {

network: [

{
title: "IP Config",
command: "ipconfig /all",
details: "Display network configuration."
}

],

powershell: [

{
title: "Running Services",
command: "Get-Service",
details: "Show installed services."
}

]

}

};
