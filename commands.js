const commands = {

linux: {
    system: [

{
title: "Show items",
command: "ls -la",
details: "Show files & detils"
},



{
title: "Create a folder",
command: "mkdir <path/foldarename>",
details: "create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name.create a folder in this path and folder name."
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

cf: [

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