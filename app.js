let currentMain = "linux";


function switchTab(tabName,btn){

currentMain = tabName;

document
.querySelectorAll(".main-tab")
.forEach(tab=>{
tab.classList.remove("active");
});

btn.classList.add("active");
document
.getElementById("search")
.value = "";

buildSubTabs();

}

function buildSubTabs(){

const subTabs =
document.getElementById("subTabs");

subTabs.innerHTML = "";

const categories =
Object.keys(commands[currentMain]);

categories.forEach((cat,index)=>{

const btn =
document.createElement("button");

btn.className = "tab";

btn.innerText = cat;

btn.onclick = ()=>{

    document
    .querySelectorAll("#subTabs .tab")
    .forEach(t=>{
    t.classList.remove("active");
    });
    
    btn.classList.add("active");
    
    showCommands(cat);
    
    };

subTabs.appendChild(btn);

if(index===0){

    btn.classList.add("active");
    
    showCommands(cat);
    
    }

});

}

function showCommands(category){

    const container =
    document.getElementById(
    "commandContainer"
    );
    
    container.innerHTML = "";
    
    commands[currentMain][category]
    .forEach(item=>{
    
    container.innerHTML += `
    
    <div class="card glass">
    
    <h3>${item.title}</h3>
    
    <div class="command-row">
    
    <div class="code">
    ${item.command}
    </div>
    
    <button
    class="copy-btn"
    onclick="copyText(
    '${item.command}',
    this
    )"
    >
    Copy
    </button>
    
    <button
    class="details-btn"
    onclick="
    showDetails(
    '${item.title}',
    '${item.details}'
    )
    "
    >
    Details
    </button>
    
    </div>
    
    </div>
    
    `;
    
    });
    
    }


async function copyText(text,btn){

    await navigator.clipboard
    .writeText(text);
    
    const original =
    btn.innerText;
    
    btn.innerText =
    "Copied ✓";
    
    setTimeout(()=>{
    
    btn.innerText =
    original;
    
    },1500);

    
    
    }
    function showDetails(
        title,
        details
        ){
        
        document
        .getElementById("modalTitle")
        .innerText = title;
        
        document
        .getElementById("modalText")
        .innerText = details;
        
        document
        .getElementById("modal")
        .classList.remove("hidden");
        
        }

        function closeModal(){

            document
            .getElementById("modal")
            .classList.add("hidden");
            
            }

            window.onload = ()=>{

                buildSubTabs();
                
                };
                function filterCommands(){

                    const value =
                    document
                    .getElementById("search")
                    .value
                    .toLowerCase()
                    .trim();
                    
                    if(value === ""){
                    
                    buildSubTabs();
                    return;
                    
                    }
                    
                    const container =
                    document.getElementById(
                    "commandContainer"
                    );
                    
                    container.innerHTML = "";
                    
                    const categories =
                    commands[currentMain];
                    
                    for(const category in categories){
                    
                    categories[category].forEach(item=>{
                    
                    const text = (
                    item.title +
                    " " +
                    item.command +
                    " " +
                    item.details
                    ).toLowerCase();
                    
                    if(text.includes(value)){
                    
                    container.innerHTML += `
                    
                    <div class="card glass">
                    
                    <h3>
                    ${item.title}
                    <span style="opacity:.6;font-size:.8em">
                    (${category})
                    </span>
                    </h3>
                    
                    <div class="command-row">
                    
                    <div class="code">
                    ${item.command}
                    </div>
                    
                    <button
                    class="copy-btn"
                    onclick="copyText(
                    '${item.command}',
                    this
                    )"
                    >
                    Copy
                    </button>
                    
                    <button
                    class="details-btn"
                    onclick="
                    showDetails(
                    '${item.title}',
                    '${item.details}'
                    )
                    "
                    >
                    Details
                    </button>
                    
                    </div>
                    
                    </div>
                    
                    `;
                    
                    }
                    
                    });
                    
                    }
                    
                    }